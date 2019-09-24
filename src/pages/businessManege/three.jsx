import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;

class Three extends Component {
    constructor(props) {
        super(props);
        this.state={
          form:{
            page:0,
            pageSize:10,
            businessId:this.props.data.state.id,
          }
        }
    }
    // 组件将要加载的时候
    componentWillMount(){
    //   console.log(this.state.form);
      this.props.dispatch({type:'businessManege/fetchLoadTwo',payload:this.state.form})
    }
    render() {
          const columns = [
            {
              title: '订单ID',
              dataIndex: 'orderId',
              align:'center',
            },
            {
              title: '任务ID',
              dataIndex: 'taskId',
              align:'center',
            },
            {
              title: '任务类型',
              dataIndex: 'taskTypeId',
              align:'center',
            },
            {
              title: '接单时间',
              dataIndex: 'beginTime',
              align:'center',
            },
            {
              title: '商家押金',
              dataIndex: 'finishedBeginTime',
              align:'center',
            },
            {
              title: '买手付款',
              dataIndex: 'finishedEndTime',
              align:'center',
            },
            {
              title: '商家返款',
              dataIndex: '',
              align:'center',
            },
            {
              title: '电商订单号',
              dataIndex: 'taobaoOrderId',
              align:'center',
            },
          ];
          
        return (
            <div>
                <Table dataSource={this.props.businessManege.twoData} columns={columns} />
            </div>
        );
    }
}

export default connect(state=>state)(Three) ;