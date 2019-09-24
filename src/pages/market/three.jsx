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
            agentId:this.props.data.state.id,
          }
        }
    }
    // 组件将要加载的时候
    componentWillMount(){
      console.log(this.state.form);
      this.props.dispatch({type:'market/fetchLoadThree',payload:this.state.form})
    }
    render() {
          const columns = [
            {
              title: '商家id',
              dataIndex: 'siteId',
              align:'center',
            },
            {
              title: '手机号',
              dataIndex: 'telephone',
              align:'center',
            },
            {
              title: 'QQ',
              dataIndex: 'qq',
              align:'center',
            },
            {
              title: '累计放单',
              dataIndex: 'historyOrderCount',
              align:'center',
            },
            {
              title: '已完成订单',
              dataIndex: 'finishedOrderCount',
              align:'center',
            },
            {
              title: '注册时间',
              dataIndex: 'registerTime',
              align:'center',
            },
          ];
          
        return (
            <div>
                <Table dataSource={this.props.market.threeData} columns={columns} />
            </div>
        );
    }
}

export default connect(state=>state)(Three) ;