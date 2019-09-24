import React from 'react';
import styles from './Market.less'
import router from 'umi/router'
import {connect} from 'dva'
import { Input,Select,Button,Table,Icon } from 'antd';
const { Option } = Select;
class Market extends React.Component {
 	constructor(props){
 		super(props);
		this.state={
			form:{
				page:0,
				pageSize:6
			}
		};
 	}
 	//跳转
   	toDetails=(record)=>{
    	router.push('/MarketDetails',{state:record});
   	}
 	
 	// 搜索
 	search=()=>{
 		this.props.dispatch({type:'market/fetchLoadMarket',payload:this.state.form})
 	}
 	// 改变推广员ID的时候
 	changeId=(event)=>{
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
				id:event.target.value
			}
		})
 	}
 	// 改变用户名的时候
 	changeUsername=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				id:event.target.value
			}
		})
	 }
	 // 改变QQ的时候
 	changeQQ=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				id:event.target.value
			}
		})
	 }
	 // 改变微信的时候
 	changeWx=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				id:event.target.value
			}
		})
 	}
 	// 组件将要加载的时候
 	componentWillMount(){
 		this.props.dispatch({type:'market/fetchLoadMarket',payload:this.state.form})
 	}
 	
	//页面改变的时候 
	changePage=(page, pageSize)=>{
		// console.log(page);
		this.props.dispatch({type:'market/fetchLoadMarket',payload:{page:page-1,pageSize:6}})
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
			title: '推管员ID',
			dataIndex: 'id',
			align:'center',
			render: (text,record) => <a onClick={this.toDetails.bind(this,record)}>{text}</a>,
		},
		{
			title: '用户名',
			align:'center',
			dataIndex: 'username',
		},
		{
			title: '手机号',
			align:'center',
			dataIndex: 'telephone',
		},
		{
			title: '微信',
			align:'center',
			dataIndex: 'wxid',
		},
		{
			title: '推广商家数',
			align:'center',
			dataIndex: 'totalDeposits',
		},
		{
			title: '账户余额',
			align:'center',
			dataIndex: 'accountCapital',
		},
		{
			title: '累计分成金额',
			align:'center',
			dataIndex: 'allWithdrawCount',
		},
		{
			title: '订单分成比例',
			align:'center',
			dataIndex: 'bankCardPhoto',
		},
		{
			title: '上次登录时间',
			align:'center',
			dataIndex: 'lastLoginTime',
		},
		{
			title: '状态',
			align:'center',
			// dataIndex: 'enabled',
			render:(text,record)=>{
				if(record.enabled == true){
					return (
						<div>正常</div>)
				}else if(record.enabled == false){
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
			render:(text,record)=>{
				if(record.enabled == true){
					return (
					<div>
				<Icon type="pay-circle-o" style={{color:'red'}} />
					</div>
					)
				}
			}
		},
		];
		return (
		<div className={styles.content}>
			<div className={styles.content_title}>推广员管理</div>
			<div className={styles.content_search}>
				<Input placeholder="推广员ID" onChange={this.changeId} />
				<Input placeholder="手机号" onChange={this.changeTelephone} />
				<Input placeholder="用户名" onChange={this.changeUsername} />
				<Input placeholder="QQ" onChange={this.changeQQ} />
				<Input placeholder="微信" onChange={this.changeWx} />
				<Button type="primary" onClick={this.search}>搜索</Button>
			</div>
			<div className={styles.content_content}>
				<Table size="small"
				rowKey="id" pagination={
					{
					total:this.props.market.total,
					pageSize:6,
					onChange:this.changePage
				}
				} columns={columns} dataSource={this.props.market.marketData} bordered />
			</div>
			
		</div>
		)
	}
}

export default connect(state=>state)(Market);