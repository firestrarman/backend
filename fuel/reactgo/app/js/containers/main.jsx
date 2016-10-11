import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from 'js/components/header';
import MainNav from 'js/components/mainNav';
import SecNav from 'js/components/secNav';
import ContentTop from 'js/components/contentTop';
import ContentTable from 'js/components/contentTable';
import { getUser } from '../redux/modules/preview';

export class Main extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        preview: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);


    }

    previewEvent = (data) => {
        const {dispatch} = this.props;
        dispatch(gePreview(data));
    }

    render() {
        const {user, preview} = this.props;
        console.log(preview);
        return (
            <div className="main-wrap">
                <Header />
                <div id="sidebar" className="with">
                    <MainNav user={user}/>
                    <SecNav user={user} previewEvent={this.previewEvent} />
                </div>
                <div id="content">
                    <ContentTop/>
                    <ContentTable/>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        user: state.user,
        preview: state.preview
    };
};

export default connect(mapStateToProps)(Main);
