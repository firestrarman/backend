import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from 'js/components/header';
import LoginWrapper from 'js/components/loginWrapper';

export class Login extends Component {
    static propTypes = {
        user: PropTypes.array.isRequired
    }
    componentDidMount() {
        const { dispatch } = this.props;
    }
    render() {
        const {dispatch, user} = this.props;
        return (
            <div className="main-wrap">
                <Header user={user} />
                <LoginWrapper dispatch={dispatch}/>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Login);
