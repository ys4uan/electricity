import React from 'react';
import styles from './businessManege.less'
import router from 'umi/router'
import {connect} from 'dva'
import { Input,Select,Button,Table,Icon ,DatePicker} from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
class BusinessManege extends React.Component {
 	constructor(props){
 		super(props)
 		this.state={
			form:{
				page:0,
				pageSize:6,
				siteId:2,
			}
 		}
 	}
 	//跳转
   	toDetails=(record)=>{
    	router.push('/BusinessDetails',{state:record});
   	}
 	
 	// 搜索
 	search=()=>{
 		this.props.dispatch({type:'businessManege/fetchLoadBusinessManege',payload:this.state.form})
 	}
 	// 改变商家ID的时候
 	changeShangjia=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				id:event.target.value
			}
		})
	 }
	 // 改变手机号的时候
 	changeTelephone=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				telephone:event.target.value
			}
		})
 	}
 	// 改变推广员ID的时候
 	changeTui=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				siteId:event.target.value
			}
		})
	 }
	 
 	// 组件将要加载的时候
 	componentWillMount(){
 		this.props.dispatch({type:'businessManege/fetchLoadBusinessManege',payload:this.state.form})
 	}
 	
	//页面改变的时候 
	changePage=(page, pageSize)=>{
		// console.log(page);
		this.props.dispatch({type:'businessManege/fetchLoadBusinessManege',payload:{page:page-1,pageSize:6}})
		this.setState({
			form:{
				...this.state.form,
				page:page-1
			}
		})
	}
	
  	render(){
		const columns = [
			{
				title: '商家ID',
				dataIndex: 'id',
				align:'center',
				render: (text,record) => <a onClick={this.toDetails.bind(this,record)}>{text}</a>,
			},
			{
				title: '手机号',
				align:'center',
				dataIndex: 'telephone',
			},
			{
				title: 'QQ',
				align:'center',
				dataIndex: 'qq',
			},
			{
				title: '本金余额',
				align:'center',
				dataIndex: 'wxid',
			},
			{
				title: '佣金余额',
				align:'center',
				dataIndex: 'totalDeposits',
			},
			{
				title: '累计充值',
				align:'center',
				dataIndex: 'accountCapital',
			},
			{
				title: '邀请ID',
				align:'center',
				dataIndex: 'allWithdrawCount',
			},
			{
				title: '注册时间',
				align:'center',
				dataIndex: 'bankCardPhoto',
			},
			{
				title: '用户等级',
				align:'center',
				dataIndex: 'rank',
			},
			{
				title: '状态',
				align:'center',
				// dataIndex: 'enabled',
				render:(text,record)=>{
					// console.log(record);
					if(record.status === 'true'){
						return (
							<div>正常</div>)
					}else if(record.status === 'false'){
						return(
							<div>禁用</div>)
					}
				}
			},
			{
				title: '备注',
				align:'center',
				dataIndex: 'comment',
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
		<div className={styles.content}>
			<div className={styles.content_title}>推广员管理</div>
			<div className={styles.content_search}>
				<RangePicker  size="small" style={{margin : 10}} />
				<Input placeholder="商家ID" size="small" onChange={this.changeShangjia} />
				<Input placeholder="手机号" size="small" onChange={this.changeTelephone} />
				<Input placeholder="推管员ID" size="small" onChange={this.changeTui} />
				<Select placeholder="用户等级" style={{ width: 120 }} size="small"  allowClear  >
					<Option value="新手上路">新手上路</Option>
					<Option value="普通用户">普通用户</Option>
					<Option value="高级用户">高级用户</Option>
				</Select>
				<Select placeholder="状态" style={{ width: 120 , margin: 10 }} size="small" allowClear  >
					<Option value="正常">正常</Option>
					<Option value="停用">停用</Option>
				</Select>
				<Select placeholder="排序规则" style={{ width: 150}} size="small"  allowClear  >
					<Option value="时间升序">时间升序</Option>
					<Option value="时间降序">时间降序</Option>
					<Option value="本金余额升序">本金余额升序</Option>
					<Option value="本金余额降序">本金余额降序</Option>
					<Option value="累计充值升序">累计充值升序</Option>
					<Option value="累计充值降序">累计充值降序</Option>
				</Select>
				<Button type="primary" size="small" >搜索</Button>
			</div>
			<div className={styles.content_content}>
				<Table size="small"
				rowKey="id" pagination={
					{
					total:this.props.businessManege.total,
					pageSize:6,
					onChange:this.changePage
				}
				} columns={columns} dataSource={this.props.businessManege.businessManegeData} bordered />
			</div>
			
		</div>
		)
	}
}

export default connect(state=>state)(BusinessManege);