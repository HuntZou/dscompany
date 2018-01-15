/**
 * 设备租赁
 * Created by Jhinwins on 2018/1/15.
 */

import React from 'react';
import {Layout, Menu, Row, Col, Timeline} from 'antd';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export default class AboutMe extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Layout.Sider style={{background: '#00000000'}}>
                        <Menu defaultSelectedKeys={['companydesc']}>
                            <Menu.Item key="companydesc"><Link to="/aboutme">公司简介</Link></Menu.Item>
                            <Menu.Item key="growup"><Link to="/aboutme/growup">发展历程</Link></Menu.Item>
                        </Menu>
                    </Layout.Sider>

                    <Layout.Content>
                        <Switch>
                            <Route exact={true} path="/aboutme" component={Companydesc}/>
                            <Route exact={true} path="/aboutme/growup" component={Growup}/>
                        </Switch>
                    </Layout.Content>
                </Layout>
            </BrowserRouter>
        )
    }
}

class Companydesc extends React.Component {
    render() {
        return (
            <Row type='flex' justify='center'>
                <Col span="16">
                    <p style={{marginTop: '50px'}}>
                        <span style={{color: 'red', fontWeight: 'bold'}}>武汉笃胜运输有限公司</span>是一家集建筑材料购买、建筑材料批发、设备租赁、产品咨询等多功能为一体的综合有限公司，我们秉承着用户至上的宗旨，认真服务每一个用户，我们相信，公司要想做大做强必须以客户为中心，以用户口碑为垫脚石，一步一个脚印，定能在建筑行业大展宏图。
                    </p>
                </Col>
            </Row>
        )
    }
}
class Growup extends React.Component {
    render() {
        return (
            <Row type='flex' justify='center'>
                <Col span='8'>
                    <Timeline style={{marginTop: '50px'}}>
                        <Timeline.Item color="green">公司注册 2017-12-22</Timeline.Item>
                        <Timeline.Item color="green">公司主页第一版完成 2018-01-13</Timeline.Item>
                        <Timeline.Item color="red">
                            <p>公司主页全面改版 2018-01-14</p>
                            <p>新版公司主页基本完成 2018-01-15</p>
                            <p>新版公司主页正式发布 2018-01-15</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>公司蓬勃发展中 2018-01-15</p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        )
    }
}