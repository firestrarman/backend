import React, {Component} from 'react';
import _ from 'lodash';

export default class MainNav extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {user} = this.props;

        return (
            <div className="mainNav">
                <div className="user">
                    <a title="Administrator" className="leftUserDrop">
                        <img src={user.photo} alt=""/>
                    </a>
                    <span>{user.username}</span>
                </div>
                <ul className="nav">
                    {
                        _.map(user.main_category, item =>
                            <li key={item.id}>
                                <a href="cms.html" title={item.name} className="active">
                                    <img src={item.img} alt=""/>
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

// <li>
//     <a href="seo.html" title="SEO 關鍵字最佳化設定">
//         <img src="/img/icons/mainnav/seo.png" alt=""/>
//         <span>SEO</span>
//     </a>
// </li>
// <li>
//     <a href="fms.html" title="FMS 線上檔案管理系統">
//         <img src="/img/icons/mainnav/fms.png" alt=""/>
//         <span>FMS</span>
//     </a>
// </li>
// <li>
//     <a href="ams.html" title="AMS 管理者權限設定">
//         <img src="/img/icons/mainnav/ams.png" alt=""/>
//         <span>AMS</span>
//     </a>
// </li>
