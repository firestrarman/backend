import React, {Component} from 'react';

export default class ContentTop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="contentTopWrap">
                <div className="contentTop">
                    <span className="pageTitle"><span className="icon-screen"></span>CMS 網站內容管理</span>
                </div>
                <div className="breadLine">
                    <div className="bc">
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="index.html">CMS 網站內容管理</a></li>
                            <li className="current"><a href="#">CMS 資訊總覽</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
