import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';

export default class SecNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        };
    }

    clickEvent = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const list = this.state.show ? [
            <li key="1"><a href="cms_news.html" title="">新聞資訊管理</a></li>,
            <li key="2"><a href="cms_newscategory.html" title="">新聞類別管理</a></li>,
            <li key="3"><a href="cms_newsalbum.html" title="">相片簿管理</a></li>,
            <li key="4"><a href="cms_newsmedia.html" title="" className="noBorderB">媒體管理</a></li>
        ] : null;

        return (
            <div className="secNav">
                <div className="secWrapper">
                    <div className="secTop">
                        <div className="balance">
                            <div className="balInfo"><span>NicGroup Customer</span>尼克科技企業網站</div>
                        </div>
                    </div>
                    <ul className="fulldd">
                        <li className="has">
                            <a title=""><span className="fs1 iconb"></span>繁體中文 Taiwan
                                <span><img src="/img/elements/control/hasddArrow.png" alt=""/></span>
                            </a>
                            <ul>
                                <li><a href="#" title=""><span className="icos-play2"></span>繁體中文 Taiwan</a></li>
                                <li><a href="#" title=""><span className="icos-play2"></span>簡體中文 China</a></li>
                                <li><a href="#" title=""><span className="icos-play2"></span>英文 English</a></li>
                                <li className="noBorderB"><a href="#" title=""><span className="icos-play2"></span>法文 French</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="divider"><span></span></div>
                    <div className="subNav">
                        <li className="activeli">
                            <a href="cms.html" title="" className="this">
                                <span className="icos-star"></span>CMS 資訊總覽
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" onClick={this.clickEvent} title=""><span className="icos-map"></span>新聞與活動管理</a>
                            <QueueAnim component="ul"  className="demo-content" type={['right', 'left']} interval={0} duration={200}>
                                {list}
                            </QueueAnim>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}
