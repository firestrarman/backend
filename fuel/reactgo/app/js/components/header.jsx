import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="header">
                <div className="wrapper">
                    <a href="#" className="logo">
                        <img src="/img/logo.png" alt="" />
                    </a>
                    <div className="topNav">
                        <ul className="userNav">
                            <li><a href="#" className="logout"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
