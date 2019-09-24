import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;
class Seven extends Component {
    constructor(props) {
        super(props);
        this.state={
          form:{
            page:0,
            pageSize:10,
            businesId:this.props.data.state.id,
          }
        }
    }
    // 组件将要加载的时候
    componentWillMount(){
        //console.log(this.state.form);
        this.props.dispatch({type:'businessManege/fetchLoadSeven',payload:this.state.form})
    }
    render() {
          const columns = [
            {
              title: '充值ID',
              dataIndex: 'businesId',
              align:'center',
            },
            {
              title: '充值金额',
              dataIndex: 'money',
              align:'center',
            },
            
            {
                title: '收款银行',
                dataIndex: 'bank',
                align:'center',
            },
            {
              title: '充值时间',
              dataIndex: 'commitTime',
              align:'center',
            },
            
            {
              title: '审核时间',
              dataIndex: 'checkTime',
              align:'center',
            },
            {
              title: '备注',
              dataIndex: 'reason',
              align:'center',
            },
          ];
          
        return (
            <div>
                <Table dataSource={this.props.businessManege.sevenData} columns={columns} />
            </div>
        );
    }
}

export default connect(state=>state)(Seven) ;