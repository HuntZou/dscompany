import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import AboutMe from './AboutMe';
import Home from './Home';
import {Menu} from 'element-react';
import 'element-theme-default';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>

                    <NavMenu/>

                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/aboutme" component={AboutMe}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

    jumpPage(index) {
        this.props.history.push(index);
    }

}

const NavMenu = withRouter(({history}) => {
    return (
        <Menu theme="dark" defaultActive="" className="el-menu-demo" mode="horizontal"
              onSelect={(index, indexPath) => jump(history, index)}>
            <Menu.Item index="">武汉笃胜运输有限公司</Menu.Item>
            <Menu.SubMenu index="services" title="服务范围">
                <Menu.Item index="wholesale">建材批发</Menu.Item>
                <Menu.Item index="lease">设备租赁</Menu.Item>
                <Menu.Item index="transport">货物运输</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="aboutme">关于我们</Menu.Item>
            <Menu.Item index="contact">联系我们</Menu.Item>
            <Menu.Item index="cooperation">商务合作</Menu.Item>
        </Menu>
    );
});

function jump(history, index) {
    history.push(index);
}

export default App;
