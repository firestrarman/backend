import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from 'js/components/header';
import MainNav from 'js/components/mainNav';
import SecNav from 'js/components/secNav';
import ContentTop from 'js/components/contentTop';
import ContentTable from 'js/components/contentTable';

export class Main extends Component {
    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch(getUser());
    }
    render() {
        const {user} = this.props;
        return (
            <div className="main-wrap">
                <Header />
                <div id="sidebar" className="with">
                    <MainNav />
                    <SecNav />
                </div>
                <div id="content">
                    <ContentTop/>
                    <ContentTable/>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    user: PropTypes.array.isRequired
};

export const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Main);
