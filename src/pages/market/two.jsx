import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;

class Two extends Component {
    constructor(props) {
        super(props);
        this.state={
          form:{
            page:0,
            pageSize:10,
            agentId:this.props.data.state.id,
            siteId:this.props.data.state.siteId,
          }
        }
    }
    // 组件将要加载的时候
    componentWillMount(){
      // console.log(this.state.form);
      this.props.dispatch({type:'market/fetchLoadTwo',payload:this.state.form})
    }
    render() {
          const columns = [
            {
              title: '订单分成比例',
              dataIndex: 'siteId',
              align:'center',
            },
            {
              title: '账户余额',
              dataIndex: 'telephone',
              align:'center',
            },
            {
              title: '推广商家数',
              dataIndex: 'qq',
              align:'center',
            },
            {
              title: '累计分成金额',
              dataIndex: 'historyOrderCount',
              align:'center',
            },
          ];
          
        return (
            <div>
                <Table dataSource={this.props.market.twoData} columns={columns} />
            </div>
        );
    }
}

export default connect(state=>state)(Two) ;