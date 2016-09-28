import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from 'js/components/header';
import LoginWrapper from 'js/components/loginWrapper';
import { getUser } from '../redux/modules/user';

export class Login extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }

    componentDidMount() {

    }

    render() {
        const {user} = this.props;
        return (
            <div className="main-wrap">
                <Header user={user} />
                <LoginWrapper
                    loginEvent={this.loginEvent}
                    user={user}/>
            </div>
        );
    }

    loginEvent = (data) => {
        const { dispatch } = this.props;
        dispatch(getUser(data));
    }
}

export const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Login);
