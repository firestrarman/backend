import React, {Component} from 'react';
import {Select, Switch, Icon, Pagination} from 'antd';

export default class ContentTable extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="wrapper">
                <div className="btn-group">
                    <a className="buttonM bDefault" data-toggle="dropdown" href="#">
                        <span className="icos-pencil"></span>
                        <span>資料管理</span>
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#">
                                <span className="icos-add"></span>建立資料</a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <span className="icos-trash"></span>刪除資料</a>
                        </li>
                    </ul>
                </div>
                <div className="widget">
                    <div className="whead">
                        <span className="titleIcon">
                            <div className="checker" id="uniform-titleCheck">
                                <span><input type="checkbox" id="titleCheck" name="titleCheck"/></span>
                            </div>
                        </span>
                        <h6>新聞資訊列表</h6>
                    </div>
                    <div id="dyn" className="hiddenpars">
                        <a className="tOptions tipS act"><img src="/img/icons/options.png" alt=""/></a>
                        <div id="checkAll_wrapper" className="dataTables_wrapper" role="grid">
                            <div className="tablePars">
                                <div className="dataTables_filter" id="checkAll_filter">
                                    <label>Search:
                                        <input type="text" aria-controls="checkAll"/></label>
                                </div>
                                <div id="checkAll_length" className="dataTables_length">
                                    <label>
                                        <span className="showentries">Show entries:</span>
                                        <Select defaultValue="10" style={{
                                            width: 70
                                        }}>
                                            <Option value="10">10</Option>
                                            <Option value="25">25</Option>
                                            <Option value="50">50</Option>
                                            <Option value="100">100</Option>
                                        </Select>
                                    </label>
                                </div>
                            </div>
                            <table cellPadding="0" cellSpacing="0" width="100%" className="tDefault checkAll tMedia dTable dataTable" id="checkAll">
                                <thead>
                                    <tr role="row">
                                        <td className="tDefault checkAll tMedia sorting_asc" tabIndex="0" rowSpan="1" colSpan="1">
                                            <img src="/img/elements/other/tableArrows.png" alt=""/>
                                        </td>
                                        <td width="45" className="sortCol header sorting" tabIndex="0" rowSpan="1" colSpan="1">
                                            <div>排序<span></span>
                                            </div>
                                        </td>
                                        <td width="50" className="sorting" tabIndex="0" rowSpan="1" colSpan="1">縮圖</td>
                                        <td width="70" className="sortCol textL header sorting" tabIndex="0" rowSpan="1" colSpan="1">
                                            <div>類別<span></span>
                                            </div>
                                        </td>
                                        <td className="sortCol textL header sorting" tabIndex="0" rowSpan="1" colSpan="1">
                                            <div>新聞標題<span></span>
                                            </div>
                                        </td>
                                        <td width="86" className="sortCol header sorting" tabIndex="0" rowSpan="1" colSpan="1">
                                            <div>更新日期<span></span>
                                            </div>
                                        </td>
                                        <td width="60" className="sortCol header sorting" tabIndex="0" rowSpan="1" colSpan="1">
                                            <div>上架<span></span>
                                            </div>
                                        </td>
                                        <td width="30" className="sorting" tabIndex="0" rowSpan="1" colSpan="1">功能</td>
                                    </tr>
                                </thead>
                                <tbody role="alert" aria-live="polite">
                                    <tr className="odd">
                                        <td className="tDefault checkAll tMedia  sorting_1">
                                            <div className="checker" id="uniform-undefined">
                                                <span className=""><input type="checkbox" name="checkRow"/></span>
                                            </div>
                                        </td>
                                        <td className=" ">1</td>
                                        <td className=" ">
                                            <a href="/img/big.png" title="" className="lightbox"><img src="/img/face.png" alt=""/></a>
                                        </td>
                                        <td className="textL">公司訊息</td>
                                        <td className="textL">
                                            <a href="cms_news_detail.html" title="">LEDGOGHTM Lights the Crystal Light of Center Stadium of World University Games With</a>
                                            <span className="label label-warning">Hot</span>
                                        </td>
                                        <td className=" ">
                                            <a href="# Editer" className="tipS">2013-02-28</a>
                                        </td>
                                        <td>
                                            <Switch checkedChildren={< Icon type = "check" />} unCheckedChildren={< Icon type = "cross" />}/>
                                        </td>
                                        <td className="tableActs">
                                            <div className="btn-group">
                                                <a href="#" className="tablectrl_small bDefault tipS" title="Option" data-toggle="dropdown">
                                                    <span className="iconb" data-icon=""></span>
                                                </a>
                                                <ul className="dropdown-menu pull-right">
                                                    <li>
                                                        <a href="#" className="">
                                                            <span className="icos-create2"></span>編輯資料</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="">
                                                            <span className="icos-documents"></span>複製資料</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="">
                                                            <span className="icos-trash"></span>刪除資料</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="tableFooter">
                                <div className="dataTables_info" id="checkAll_info">Showing 1 to 15 of 15 entries</div>
                                <div className="dataTables_paginate paging_full_numbers" id="checkAll_paginate">
                                    <Pagination defaultCurrent={1} total={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
