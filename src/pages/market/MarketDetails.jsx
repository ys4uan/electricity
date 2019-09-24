import React, { Component } from 'react';
import { Tabs } from 'antd';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
const TabPane = Tabs.TabPane;

class MarketDetails extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        // console.log(this.props.location.state);
        return (
            <div >
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="推管员详情" key="1">
                        <One data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="账户信息" key="2">
                        <Two  data={this.props.location.state} />
                    </TabPane>
                    <TabPane tab="推广商家" key="3">
                        <Three data={this.props.location.state}  />
                    </TabPane>
                    <TabPane tab="资金日志" key="4">
                        <Four data={this.props.location.state} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default MarketDetails;