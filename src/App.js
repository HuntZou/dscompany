import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import AboutMe from './AboutMe';
import Home from './Home2';
import Transport from './Transport';
import Lease from './Lease';
import ContactMe from './ContactMe';
import Wholesale from './Wholesale';
import {Menu, Layout} from 'antd';
import 'antd/dist/antd.css';
import './css/home.css'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter style={{height: '100%'}}>
                <Layout style={{height: '100%'}}>
                    <Layout.Header>
                        <NavMenu/>
                    </Layout.Header>
                    <Layout.Content style={{height: '80%'}}>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/index" exact component={Home}/>
                            <Route path="/aboutme" component={AboutMe}/>
                            <Route path="/wholesale" component={Wholesale}/>
                            <Route path="/transport" component={Transport}/>
                            <Route path="/lease" component={Lease}/>
                            <Route path="/contactme" component={ContactMe}/>
                        </Switch>
                    </Layout.Content>
                </Layout>
            </BrowserRouter>
        );
    }

    jumpPage(index) {
        this.props.history.push(index);
    }

}

const NavMenu = withRouter(({history}) => {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['index']}
            style={{lineHeight: '64px'}}
            onSelect={(item, key, selectedKeys) => jump(history, item.key)}>
            <Menu.Item key="index">首页</Menu.Item>
            <Menu.SubMenu title="服务内容">
                <Menu.Item key="wholesale">建材购买</Menu.Item>
                <Menu.Item key="transport">货物运输</Menu.Item>
                <Menu.Item key="lease">设备租赁</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="aboutme">关于我们</Menu.Item>
            <Menu.Item key="contactme">联系我们</Menu.Item>
        </Menu>
    )
});

function jump(history, key) {
    history.push(key);
}

export default App;
