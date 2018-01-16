import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AboutMe from './AboutMe';
import Home from './Home';
import ServicePage from './component/ServicePage';
import ContactMe from './ContactMe';
import {Menu, Layout} from 'antd';
import 'antd/dist/antd.css';
import './css/home.css'
import {services} from './datas/cfgDatas'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter style={{height: '100%'}}>
                <Layout style={{height: '100%'}}>
                    <Layout.Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['index']}
                            style={{lineHeight: '64px'}}>
                            <Menu.Item key="index"><Link to='/index'>首页</Link></Menu.Item>
                            <Menu.SubMenu title="服务内容">
                                {
                                    services.map((item, index) => {
                                        return (
                                            <Menu.Item key={index}>
                                                <Link to={{pathname: item.pathname, state: item.items}}>
                                                    {item.type}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu.SubMenu>
                            <Menu.Item key="aboutme"><Link to='/aboutme'>关于我们</Link></Menu.Item>
                            <Menu.Item key="contactme"><Link to='/contactme'>联系我们</Link></Menu.Item>
                        </Menu>
                    </Layout.Header>
                    <Layout.Content>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/index" exact component={Home}/>
                            <Route path="/aboutme" component={AboutMe}/>
                            <Route path="/contactme" component={ContactMe}/>
                            {
                                services.map((item, index) => {
                                    return (
                                        <Route key={index} path={item.pathname} component={ServicePage}/>
                                    )
                                })
                            }
                        </Switch>
                    </Layout.Content>
                    <Layout.Footer style={{padding: '0'}}>
                        <div style={{fontSize: '12px', textAlign: 'center'}}>
                            <span>© 2018-01-16武汉笃胜运输有限公司 版权所有</span>
                            <a style={{marginLeft: '10px'}} href="http://www.miitbeian.gov.cn/">鄂ICP备17021929号</a>
                        </div>
                    </Layout.Footer>
                </Layout>
            </BrowserRouter>
        );
    }

}

export default App;
