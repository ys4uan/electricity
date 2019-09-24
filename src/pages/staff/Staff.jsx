import React from 'react';
import styles from './staff.less';
import {connect} from 'dva';
import {Input,Select,Button ,Table, Tag , Icon } from 'antd';
import router from 'umi/router';
const { Option } = Select
class Staff extends React.Component {
 constructor(props){
 		super(props)
 		this.state={
      form:{
        page:0,
        pageSize:6,
      }
 		}
   }
   //改变输入框的时候
   changeStaffId = (e)=>{
    this.setState({
      form:{
        ...this.state.form,
        id:e.target.value
      }
    })
   }
   changeUsername=(e)=>{
    this.setState({
      form:{
        ...this.state.form,
        username:e.target.value
      }
    })
   }
   changeTelephone = (e)=>{
    this.setState({
      form:{
        ...this.state.form,
        telephone:e.target.value
      }
    })
   }
   //搜索
   search = ()=>{
    this.props.dispatch({type:'staff/fetchLoadStaff',payload:this.state.form})

   }
   //组件将要加载的时候
   componentWillMount(){
    //  console.log(this.state.form);
     this.props.dispatch({type:'staff/fetchLoadStaff',payload:this.state.form})
   }
   //改变下拉框
   handleChange=(value)=> {
    this.setState({
      form:{
        ...this.state.form,
        enabled:value
      }
    })
   }
   // 改变状态的时候
 	changeStatus=(record)=>{
		if(record.enabled == true){
 		this.props.dispatch({type:'staff/fetchChangeStatus',payload:{page:this.state.form,forms:{id:record.id,enabled:false}}})
			
		}else if(record.enabled == false){
 		this.props.dispatch({type:'staff/fetchChangeStatus',payload:{page:this.state.form,forms:{id:record.id,enabled:true}}})

		}
  }
   // 跳转到用户日志页面
 	toLogs=(record)=>{
		router.push('/logDetails');
 	}
  //页面改变的时候
   changePage = (page,pageSize) =>{
    this.props.dispatch({type:'staff/fetchLoadStaff',payload:{page:page-1,pageSize:pageSize}})
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
        title: '员工ID',
        align:'center',
        dataIndex: 'id',
       
        render: text => <a>{text}</a>,
      },
      {
        title: '所属分站',
        align:'center',
        dataIndex: 'siteId',
       
      },
      {
        title: '用户名',
        align:'center',
        dataIndex: 'username',
      
      },
      {
        title: '真实姓名',
        align:'center',
        dataIndex: 'realname',
      
      },
      {
        title: '手机号',
        align:'center',
        dataIndex: 'telephone',
      
      },
      {
        title: 'QQ号',
        align:'center',
        dataIndex: 'qq',
      
      },
      {
        title: '上次登录时间',
        align:'center',
        dataIndex: 'lastLogTime',
      
      },{
        title: '上次登录IP',
        align:'center',
        dataIndex: 'lastLoginIp',
      
      },{
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
        title: '操作',
        aliegn:'center',
        // dataIndex: 'tags',
        render: (text,record) => {
          if(record.enabled === true){
            return (
              <div>
                <Icon type="stop" title="禁用" style={{color:"red",marginRight:"5px"}} onClick={this.changeStatus.bind(this,record)} />
	    			    <Icon type="file-text" title="查看日志" onClick={this.toLogs.bind(this,record)} />
              </div>
            );
          }else if(record.enabled == false){
            return (
            <div>
              <Icon type="check-circle" title="启用" style={{color:"green",marginRight:"5px"}} onClick={this.changeStatus.bind(this,record)}  />
              <Icon type="file-text" title="查看日志" onClick={this.toLogs.bind(this,record)} />
            </div>
            )
          }
        },
      },
     
    ];
    return (
      <div className={styles.content}>
        <div className={styles.content_title}>员工管理</div>
        <div className={styles.content_search}>
          <Input placeholder="员工ID" onChange={this.changeStaffId} />
          <Input placeholder="用户名" onChange={this.changeUsername} />
          <Input placeholder="手机号" onChange={this.changeTelephone}  />
          <Select placeholder="状态" style={{ width: 150 }} onChange={this.handleChange}>
            <Option value="0">禁用</Option>
            <Option value="1">正常</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>

        <div className={styles.content}>
          <Table size="small" rowKey="id" pagination={{
            total:this.props.staff.total,
            pageSize:6,
            onChange:this.changePage
          }} columns={columns} dataSource={this.props.staff.staffData} bordered />
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(Staff);