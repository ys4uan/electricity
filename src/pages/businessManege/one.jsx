import React, { Component } from 'react';
import { Tabs , Descriptions} from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;

class One extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.data.state.id,
        };
    }
    // 组件将要加载的时候
 	componentWillMount(){
        // console.log(this.state.id);
        this.props.dispatch({type:'businessManege/fetchLoadOne',payload:this.state})
    }
    render() {
        return (
            <div>
                <Descriptions title="【基本信息】">
                    <Descriptions.Item label="商家ID">{this.props.businessManege.oneData.id}</Descriptions.Item>
                    <Descriptions.Item label="名称">{this.props.businessManege.oneData.username}</Descriptions.Item>
                    <Descriptions.Item label="来源">{this.props.businessManege.oneData.id}</Descriptions.Item>
                    <Descriptions.Item label="注册时间">{this.props.businessManege.oneData.registerTime}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{this.props.businessManege.oneData.telephone}</Descriptions.Item>
                    <Descriptions.Item label="QQ号">{this.props.businessManege.oneData.qq}</Descriptions.Item>
                    <Descriptions.Item label="备注">{this.props.businessManege.oneData.comment}</Descriptions.Item>
                    <Descriptions.Item label="状态">{this.props.businessManege.oneData.status}</Descriptions.Item>
                    <Descriptions.Item label="用户等级">{this.props.businessManege.oneData.rank}</Descriptions.Item>
                </Descriptions>
                <Descriptions title="【账户信息】">
                    <Descriptions.Item label="本金余额">{this.props.businessManege.oneData.id}</Descriptions.Item>
                    <Descriptions.Item label="佣金余额">{this.props.businessManege.oneData.id}</Descriptions.Item>
                    <Descriptions.Item label="累计充值">{this.props.businessManege.oneData.id}</Descriptions.Item>
                    
                </Descriptions>
            </div>
        );
    }
}

export default connect(state=>state)(One);