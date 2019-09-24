import React from 'react';
import styles from './shopManage.less'
import {connect} from 'dva'
import { Input,Select,Button,Table,Icon ,DatePicker} from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      form:{
        page:0,
        pageSize:6,
      }

    }
  }
  // 组件将要加载的时候
 	componentWillMount(){
 		this.props.dispatch({type:'store/fetchLoadStore',payload:this.state.form})
  }
   //页面改变的时候 
	changePage=(page, pageSize)=>{
		// console.log(page);
		this.props.dispatch({type:'store/fetchLoadStore',payload:{page:page-1,pageSize:6}})
		this.setState({
			form:{
				...this.state.form,
				page:page-1
			}
		})
  }
  // 搜索
  search=()=>{
    this.props.dispatch({type:'store/fetchLoadStore',payload:this.state.form})
  }
  render(){
    const columns = [
			{
				title: '店铺ID',
				dataIndex: 'id',
				align:'center',
				// render: (text,record) => <a onClick={this.toDetails.bind(this,record)}>{text}</a>,
			},
			{
				title: '商家ID',
				align:'center',
				dataIndex: 'businesId',
			},
			{
				title: '商家手机号',
				align:'center',
				dataIndex: 'telephone',
			},
			{
				title: '店铺名称',
				align:'center',
				dataIndex: 'name',
			},
			{
				title: '店铺旺旺ID',
				align:'center',
				dataIndex: 'wwid',
			},
			{
				title: '所属平台',
				align:'center',
				dataIndex: 'platform',
			},
			{
				title: '接单间隔时间',
				align:'center',
				dataIndex: 'intervalTime',
			},
			{
				title: '注册时间',
				align:'center',
				dataIndex: 'bindTime',
			},
			{
				title: '店铺状态',
				align:'center',
				dataIndex: 'status',
			},
			{
				title: '操作',
				align:'center',
				dataIndex: '',
				// render:(text,record)=>{
				// 	if(record.enabled == true){
				// 		return (
				// 		<div>
				// 	<Icon type="pay-circle-o" style={{color:'red'}} />
				// 		</div>
				// 		)
				// 	}
				// }
			},
		];
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.content_title}>店铺管理</div>
          <div className={styles.content_search}>
            <RangePicker   style={{margin : 10}} />
            <Select placeholder="所属平台" style={{ width: 120 }}   allowClear >
              <Option value="天猫">天猫</Option>
            </Select>
            <Input placeholder="商家ID"  />
            <Select placeholder="店铺状态" style={{ width: 120 , margin: 10 }}  allowClear >
              <Option value="待审核">待审核</Option>
              <Option value="审核通过">审核通过</Option>
              <Option value="审核未通过">审核未通过</Option>
            </Select>
            <Button type="primary">搜索</Button>
          </div>
          <div className={styles.content_content}>
            <Table size="small"
            rowKey="id" pagination={
              {
              total:this.props.store.total,
              pageSize:6,
              onChange:this.changePage
            }
            } columns={columns} dataSource={this.props.store.storeData} bordered />
          </div>
          
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(Shop);

