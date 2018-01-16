/**
 * 设备租赁
 * Created by Jhinwins on 2018/1/15.
 */

import React from 'react';
import {Layout, Menu} from 'antd';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ProductItem from './ProductItem'

export default class ServicePage extends React.Component {
    render() {

        const data = this.props.location.state;

        return (
            <BrowserRouter>
                <Layout>
                    <Layout.Sider style={{background: '#00000000'}}>
                        <Menu defaultSelectedKeys={['defaultNav']}>
                            <Menu.Item key="defaultNav"><Link to="/services">分类</Link></Menu.Item>
                            {
                                data.map((item, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            <Link to={{
                                                pathname: item.pathname,
                                                state: item.items
                                            }}>{item.type}</Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Layout.Sider>

                    <Layout.Content>
                        <Switch>
                            <Route key="defaultNav" exact path="/services" component={DefaultNav}/>
                            {
                                data.map((item, index) => {
                                    return (
                                        <Route key={index} exact path={item.pathname} component={ProductItem}/>
                                    )
                                })
                            }
                        </Switch>
                    </Layout.Content>
                </Layout>
            </BrowserRouter>
        )
    }
}

class DefaultNav extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', marginTop: '20%'}}>
                <h1 style={{color: '#8492A6'}}>请选择左侧的分类</h1>
            </div>
        )
    }
}