import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import _ from 'lodash';

export default class SecNav extends Component {
    constructor(props) {
        super(props);

        const {user} = this.props;

        const showData = {};
        _.forEach(user.sub_category, (val) => {
            if (val.list.length) {
                showData[val.list] = false;
            }
        });

        this.state = {
            show: showData
        };
    }

    clickEvent = (key) => {
        const showData = this.state.show;
        showData[key] = !showData[key];

        this.setState({
            show: showData
        });
    }

    render() {
        const {user} = this.props;

        const data = [];
        _.forEach(user.sub_category, (item) => {
            if (!item.list.length) {
                data.push(<li className="activeli" key={item.id}>
                    <a href="cms.html" title="" className="this">
                        <span className={item.img}></span>{item.name}
                    </a>
                </li>);
            } else {
                const list = [];
                if (this.state.show[item.id]) {
                    _.forEach(item.list, (val, key) => {
                        list.push(
                            <li key={val.id}><a href="cms_news.html" title="">{val.name}</a></li>
                        )
                    });
                }
                data.push(<li key={item.id}>
                    <a href="javascript:void(0);" onClick={() => this.clickEvent(item.id)} title=""><span className={item.img}></span>{item.name}</a>
                    <QueueAnim component="ul"  className="demo-content" type={['right', 'left']} interval={0} duration={200}>
                        {list}
                    </QueueAnim>
                </li>);
            }
        });

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
                        {data}
                    </div>
                </div>
            </div>
        );
    }
}
//
