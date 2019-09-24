import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;
class Six extends Component {
    constructor(props) {
        super(props);
        this.state={
            form:{
                businessId:this.props.data.state.id,
            }
        }
    }
    // 组件将要加载的时候
    componentWillMount(){
        // console.log(this.props.data.state.id);
        //console.log(this.state.form);
        this.props.dispatch({type:'businessManege/fetchLoadSix',payload:this.state.form})
    }
    render() {
        const columns = [
            {
              title: '所属平台',
              dataIndex: 'orderId',
              align:'center',
            },
            {
              title: '店铺名称',
              dataIndex: 'taskId',
              align:'center',
            },
            
            {
                title: '旺旺ID',
                dataIndex: 'commodityName',
                align:'center',
            },
            {
              title: '店铺网址',
              dataIndex: 'beginTime',
              align:'center',
            },
            
            {
              title: '绑定时间',
              dataIndex: 'finishedBeginTime',
              align:'center',
            },
            {
              title: '店铺审核状态',
              dataIndex: 'cancelBeginTime',
              align:'center',
            },
            
        ];
        return (
            <div>
                <Table dataSource={this.props.businessManege.sixData} columns={columns} />
            </div>
        );
    }
}

export default connect(state=>state)(Six);