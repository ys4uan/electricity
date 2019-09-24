import React, { Component } from 'react';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
import Five from './five';
import Six from './six';
import Seven from './seven';
import Eight from './eight';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class BusinessDetails extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        // console.log(this.props.location.state);
        return (
            <div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="商家详情" key="1">
                        <One data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="待接订单" key="2">
                        <Two  data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="进行中订单" key="3">
                        <Three data={this.props.location.state}  />
                    </TabPane>
                    <TabPane tab="已完成订单" key="4">
                        <Four data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="已撤销订单" key="5">
                        <Five data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="绑定店铺" key="6">
                        <Six data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="充值记录" key="7">
                        <Seven data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="资金日志" key="8">
                        <Eight data={this.props.location.state} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default BusinessDetails;






    