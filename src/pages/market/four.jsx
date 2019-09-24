import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import { connect} from 'dva';
const TabPane = Tabs.TabPane;

class Four extends Component {
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
      // console.log(this.state.form);
      this.props.dispatch({type:'market/fetchLoadThree',payload:this.state.form})
    }
    render() {
          const columns = [
            {
              title: '时间',
              dataIndex: 'lastLoginTime',
              align:'center',
            },
            {
              title: '类型',
              dataIndex: 'province',
              align:'center',
            },
            {
              title: '订单ID',
              dataIndex: 'siteId',
              align:'center',
            },
            {
              title: '分成金额',
              dataIndex: 'price',
              align:'center',
            },
            {
              title: '账户余额',
              dataIndex: 'accountCapital',
              align:'center',
            },
            {
              title: '备注',
              dataIndex: 'comment',
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

export default connect(state=>state)(Four) ;