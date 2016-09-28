import React, {Component} from 'react';
import {Select, InputNumber, Switch, Icon, Input, DatePicker} from 'antd';
import {QuillComponent} from './src/index';
import './editor/style.css';

const Option = Select.Option;

export default class ContentDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div className="wrapper">
                <div className="widget">
                    <div className="whead">
                        <h6>新聞資訊編輯</h6>
                    </div>
                    <div className="formRow">
                        <div className="grid2">
                            <label>新聞標題<span className="req">*</span></label>
                        </div>
                        <div className="grid10">
                            <Input placeholder="基本使用"/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="grid2">
                            <label>類別設定<span className="req">*</span></label>
                        </div>
                        <div className="grid10">
                            <Select size="large" placeholder="Please select" style={{width: 200}}>
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="disabled">disabled</Option>
                                <Option value="yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="grid2">
                            <label>排序設定<span className="req">*</span></label>
                        </div>
                        <div className="grid10">
                            <InputNumber min={0} max={10000} defaultValue={0}/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="grid2">
                            <label>上架顯示設定<span className="req">*</span></label>
                        </div>
                        <div className="grid10">
                            <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross"/>} />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="grid2">
                            <label>上架日期設定<span className="req">*</span></label>
                        </div>
                        <div className="grid10">
                            <DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd"/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="grid2">
                            <label>內　　容</label>
                        </div>
                        <div className="grid10">
                            <QuillComponent/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
