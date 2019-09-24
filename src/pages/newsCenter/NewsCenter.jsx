import React from 'react';
import styles from './newsCenter.less';
import {Input,Select,Button ,Table, Divider, Tag ,Icon,Modal} from 'antd';
import  dateParse  from '@/filter/index';
import {connect} from 'dva';
import NewsForm from './newsForm';
const { Option } = Select;
class NewsCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      form:{
        page:0,
        pageSize:6,
        visible: false,
        siteId:2,
      },
      
    })
  }
  componentWillMount(){
    //  console.log(this.state.form);
     this.props.dispatch({type:'newsCenter/fetchNews',payload:this.state.form})
  }
  //分页
  changePage=(page,pageSize)=>{
    this.props.dispatch({type:"newsCenter/fetchNews",payload:{page:page-1,pageSize:pageSize}});
    this.setState({
      form:{
        ...this.state.form,
        page:page,
        pageSize:pageSize,
      }
    })
  }
  //通过标题查找
  changeStaffId =(e)=>{
    this.setState({
      form:{
        ...this.state.form,
        title : e.target.value,
      }
    })
  }
  //通过状态查找
  changeStatus=(value)=>{
    this.setState({
      form:{
        ...this.state.form,
        status:value,
      }
    })
  }
  //通过通知人群查找
  changeReceiver=(value)=>{
    this.setState({
      form:{
        ...this.state.form,
        receiver:value,
      }
    })
  }

  //删除信息
  toDelete=(record)=>{
    // console.log(record);
    this.props.dispatch({type:'newsCenter/fetchDeleterNews',payload:{page:this.state.form,forms:{id:record.id}}})
  }
  //查找
  search=()=>{
    this.props.dispatch({type:'newsCenter/fetchNews',payload:this.state.form})
  }
  //修改信息
  toEdit=(record)=>{
    var two = record.receiver.split(',')
    record.receiver = two
    console.log(two)
     this.setState({
       visible: true,
       putForm:record
     });
  }
  
  //显示模态框
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  getForm = (form)=>{
    this.newsForm = form;
  }
  //新增
  handleOk = e => {
    // console.log(this.newsForm);
    e.preventDefault();
    this.newsForm.validateFields((err, values) => {
      if (!err) {
        var one = values.receiver.toString();
		    values.receiver = one;
		    values.siteId= 2;
        console.log('Received values of form: ', values);
        this.props.dispatch({type:'newsCenter/fetchAddNews',payload:{forms:values,page:this.state.form}  })
      }
    });
    this.setState({
      visible: false,
    });
  };
  //取消
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render(){
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        align:'center',
        render: text => <a>{text}</a>,
      },
      {
        title: '状态',
        align:'center',
        dataIndex: 'status',
      },
      {
        title: ' 通知人群',
        align:'center',
        dataIndex: 'receiver',
      },
      {
        title: ' 创建时间',
        align:'center',
        dataIndex: 'createTime',
        render:(text,record)=>{
          return (
            <div>{dateParse(text)}</div>
          );
        } 
      },
      {
        title: ' 发布时间',
        align:'center',
        dataIndex: 'publishTime',
        render:(text,record)=>{
          return (
            <div>{dateParse(text)}</div>
          );
        }
      },
      {
        title: '操作',
        align:'center',
        render:(text,record)=>{
          if(record.status === '未发布'){
            return (
              <div>
                <Icon type="edit" title="编辑" onClick={this.toEdit.bind(this,record)} />
                <Icon type="check-circle" title="发布" />
                <Icon type="delete" title="删除"  onClick={this.toDelete.bind(this,record)} />
              </div>
            );
          }else{
            return (
              <div>
                <Icon type="edit" title="编辑" onClick={this.toEdit.bind(this,record)} />
                <Icon type="close-circle" title="取消发布" />
                <Icon type="delete" titel="删除" onClick={this.toDelete.bind(this,record)} />
              </div>
            );
          }
        }
      },
    ];

    return (
      <div className={styles.content}>
        <div className={styles.content_title}>消息管理</div>
        <div className={styles.content_add}>
          <Button type="primary" onClick={this.showModal} >新增</Button>
        </div>
        <div className={styles.content_search}>
          <Input placeholder="标题公告" onChange={this.changeStaffId} />
          <Select placeholder="状态" style={{ width: 150 }} onChange={this.changeStatus}>
            <Option value="未发布">未发布</Option>
            <Option value="已发布">已发布</Option>
          </Select>
          <Select placeholder="通知人群" style={{ width: 150 }} onChange={this.changeReceiver}>
            <Option value="推广员">推广员</Option>
            <Option value="商家">商家</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
      	</div>
        <div className={styles.content_content}>
            <Table size="small"
            rowKey="id" pagination={
              {
              total:this.props.newsCenter.total,
              pageSize:6,
              onChange:this.changePage
            }
          } columns={columns} dataSource={this.props.newsCenter.newsData} bordered />
      	</div>
        <div>
          
          <Modal
            title="新增消息"
            visible={this.state.visible} 
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <NewsForm ref={this.getForm}/> 
          </Modal>
        </div>

      </div>
    )
  }
}

export default connect(state=>state)(NewsCenter);