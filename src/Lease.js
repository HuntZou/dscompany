/**
 * 设备租赁
 * Created by Jhinwins on 2018/1/15.
 */

import React from 'react';
import {Layout, Menu, List, Row, Col} from 'antd';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export default class Lease extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Layout.Sider style={{background: '#00000000'}}>
                        <Menu defaultSelectedKeys={['truck']}>
                            <Menu.Item key="truck"><Link to="/lease">运载车辆</Link></Menu.Item>
                            <Menu.Item key="mechanics"><Link to="/lease/mechanics">机械</Link></Menu.Item>
                            <Menu.Item key="other"><Link to="/lease/other">其他</Link></Menu.Item>
                        </Menu>
                    </Layout.Sider>

                    <Layout.Content>
                        <Switch>
                            <Route exact path="/lease" component={Truck}/>
                            <Route exact path="/lease/mechanics" component={Mechanics}/>
                            <Route exact path="/lease/other" component={Other}/>
                        </Switch>
                    </Layout.Content>
                </Layout>
            </BrowserRouter>
        )
    }
}

class Truck extends React.Component {
    render() {
        return (
            <div>
                <List
                    dataSource={
                        [
                            {
                                name: 'product1',
                                desc: 'this is a product',
                                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516621285&di=e5a3a7aa983a399e77ea8732c5695012&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D1707431d9b8fa0ec6bca6c4e4efe339b%2F09fa513d269759ee48bae1e5b8fb43166d22df32.jpg'
                            },
                            {
                                name: 'product1',
                                desc: 'this is a product',
                                pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516621285&di=e5a3a7aa983a399e77ea8732c5695012&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D1707431d9b8fa0ec6bca6c4e4efe339b%2F09fa513d269759ee48bae1e5b8fb43166d22df32.jpg'
                            }
                        ]
                    }
                    renderItem={item => (
                        <List.Item>
                            <div style={{width: '100%'}}>
                                <Row type="flex" justify="center">
                                    <Col span="12">
                                        <div>{item.name}</div>
                                        <div>{item.desc}</div>
                                    </Col>
                                    <Col span="8">
                                        <img src={item.pic} alt="productpic"
                                             style={{maxHeight: '200px', maxWidth: '200px'}}/>
                                    </Col>
                                </Row>
                            </div>
                        </List.Item>
                    )}/>
            </div>
        )
    }
}
class Mechanics extends React.Component {
    render() {
        return (
            <h3>
                遇到爱你的人，学会感恩。遇到你爱的人，学会付出；遇到你恨的人，学会原谅。遇到恨你的人，学会道歉；遇到欣赏你的人，学会笑纳。遇到你欣赏的人，学会赞美；遇到嫉妒你的人，学会低调。遇到你嫉妒的人，学会宽容；遇到不懂你的人，学会沟通。遇到你不懂的人，学会好奇。
            </h3>
        )
    }
}
class Other extends React.Component {
    render() {
        return (
            <h3>
                遇到爱你的人，学会感恩。遇到你爱的人，学会付出；遇到你恨的人，学会原谅。遇到恨你的人，学会道歉；遇到欣赏你的人，学会笑纳。遇到你欣赏的人，学会赞美；遇到嫉妒你的人，学会低调。遇到你嫉妒的人，学会宽容；遇到不懂你的人，学会沟通。遇到你不懂的人，学会好奇。
            </h3>
        )
    }
}