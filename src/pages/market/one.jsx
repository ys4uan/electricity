import React, { Component } from 'react';
import { Tabs , Descriptions} from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;

class One extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.data.state.id
        };
    }
    // 组件将要加载的时候
 	componentWillMount(){
        // console.log(this.state.id);
        this.props.dispatch({type:'market/fetchLoadOne',payload:this.state})
    }
    render() {
        // console.log(this.props.data.state);
        return (
            <div>
                <Descriptions title="【基本信息】">
                    <Descriptions.Item label="推广员ID">{this.props.market.oneData.id}</Descriptions.Item>
                    <Descriptions.Item label="QQ">{this.props.market.oneData.qq}</Descriptions.Item>
                    <Descriptions.Item label="微信号">{this.props.market.oneData.wxid}</Descriptions.Item>
                    <Descriptions.Item label="用户名">{this.props.market.oneData.username}</Descriptions.Item>
                    <Descriptions.Item label="上次登录时间">{this.props.market.oneData.lastLoginTime}</Descriptions.Item>
                    <Descriptions.Item label="备注">{this.props.market.oneData.comment}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{this.props.market.oneData.telepthone}</Descriptions.Item>
                    <Descriptions.Item label="注册时间">{this.props.market.oneData.registerTime}</Descriptions.Item>
                    <Descriptions.Item label="状态"></Descriptions.Item>
                </Descriptions>

            </div>
        );
    }
}

export default connect(state=>state)(One) ;