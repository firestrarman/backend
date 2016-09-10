import React, {Component} from 'react';

export default class MainNav extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="mainNav">
                <div className="user">
                    <a title="Administrator" className="leftUserDrop">
                        <img src="/img/user.png" alt=""/>
                    </a>
                    <span>Nic</span>
                </div>
                <ul className="nav">
                    <li>
                        <a href="cms.html" title="CMS 網站內容管理" className="active">
                            <img src="/img/icons/mainnav/cms.png" alt=""/>
                            <span>CMS</span>
                        </a>
                    </li>
                    <li>
                        <a href="seo.html" title="SEO 關鍵字最佳化設定">
                            <img src="/img/icons/mainnav/seo.png" alt=""/>
                            <span>SEO</span>
                        </a>
                    </li>
                    <li>
                        <a href="fms.html" title="FMS 線上檔案管理系統">
                            <img src="/img/icons/mainnav/fms.png" alt=""/>
                            <span>FMS</span>
                        </a>
                    </li>
                    <li>
                        <a href="ams.html" title="AMS 管理者權限設定">
                            <img src="/img/icons/mainnav/ams.png" alt=""/>
                            <span>AMS</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
