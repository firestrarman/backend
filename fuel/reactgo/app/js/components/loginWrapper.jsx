import React, { Component } from 'react';
import { Form, Button, Checkbox, Input } from 'antd';
import cookie from 'react-cookie';
import { hashHistory } from 'react-router';

const createForm = Form.create;
const FormItem = Form.Item;

export class LoginWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true,
            loading: false
        };
    }

    componentDidMount() {
        const {user} = this.props;
        return true;
    }

    toggleCheckBox = () => {
        this.setState({ checked: !this.state.checked });
    }

    login = () => {
        this.setState({ loading: true });

        const {loginEvent} = this.props;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                this.setState({ loading: false });
                return;
            }

            // Remember me
            if (this.state.checked) {
                cookie.save('account', values.account, { path: '/' });
            }

            loginEvent(values)
        });
    }

    loginSuccess() {
        setTimeout(() => {
            this.setState({ loading: false });
            hashHistory.push('/main');
        }, 500);
    }

    render() {
        const { user } = this.props;
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

        if (Object.keys(user).length && this.state.loading) {
            this.loginSuccess();
        }
        const emailProps = getFieldProps('account', {
            initialValue: cookie.load('account'),
            validate: [{
                rules: [
                    { required: true, message: '請輸入帳號' },
                ],
                trigger: 'onBlur',
          }, {
                rules: [
                    { type: 'email', message: '請輸入正確的Email格式' },
                ],
                trigger: ['onBlur', 'onChange']
          }]
        });
        const passwordProps = getFieldProps('password', {
            validate: [{
                rules: [
                    { required: true, whitespace: true, message: '請填寫密碼' }
                ],
                trigger: ['onBlur', 'onChange']
            }]
        });

        return (
            <Form horizontal>
                <div className="loginWrapper">
                    <div className="loginPic">
                        <img src="/img/userLogin.png" alt=""/>
                        <span>Eugene Kopyov</span>
                    </div>
                    <FormItem hasFeedback id="testd">
                      <Input
                          {...emailProps}
                          className="loginEmail"
                          type="email"
                          placeholder="Confirm your email" />
                    </FormItem>
                    <FormItem hasFeedback>
                      <Input
                          {...passwordProps}
                          className="loginPassword"
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
                    </FormItem>

                    <div className="logControl">
                        <div className="memory">
                            <Checkbox
                                defaultChecked={this.state.checked}
                                checked={this.state.checked}
                                onClick={this.toggleCheckBox}>
                                Remember me
                            </Checkbox>
                        </div>
                        <Button
                            type="primary"
                            className="pull-right"
                            loading={this.state.loading}
                            onClick={this.login}>
                            Click me!
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default createForm()(LoginWrapper);
