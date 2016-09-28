import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Header from 'js/components/header';
import MainNav from 'js/components/mainNav';
import SecNav from 'js/components/secNav';
import ContentTop from 'js/components/contentTop';
import ContentDetail from 'js/components/ContentDetail';

export class Main extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }

    state = {
        height: '100%'
    }

    componentDidMount() {
        this.setState({ height: `${ReactDOM.findDOMNode(this.refs['main-wrap']).clientHeight}px` });
    }

    render() {
        const {user} = this.props;
        return (
            <div className="main-wrap" ref="main-wrap">
                <Header />
                <div id="sidebar" style={{height: this.state.height}}>
                    <MainNav />
                    <SecNav />
                </div>
                <div id="content">
                    <ContentTop/>
                    <ContentDetail/>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Main);
