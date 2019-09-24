import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import {connect} from 'dva';
const TabPane = Tabs.TabPane;
class Eight extends Component {
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
              title: '变动时间',
              dataIndex: '',
              align:'center',
            },
            {
              title: '变动账户',
              dataIndex: '',
              align:'center',
            },
            
            {
                title: '变动金额',
                dataIndex: '',
                align:'center',
            },
            {
              title: '账户余额',
              dataIndex: '',
              align:'center',
            },
            
            {
              title: '任务ID',
              dataIndex: '',
              align:'center',
            },
            {
              title: '订单ID',
              dataIndex: '',
              align:'center',
            },
            {
                title: '备注',
                dataIndex: '',
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

export default connect(state=>state)(Eight) ;