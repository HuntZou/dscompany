/**
 * Created by Jhinwins on 2018/1/11.
 */
import React from 'react';
import {Layout, Carousel} from 'element-react';
import 'element-theme-default';
import {withRouter} from 'react-router-dom'
import './css/public.css'
import LoopView from './component/LoopView';

class Home extends React.Component {

    render() {

        var services = [
            {
                icon: 'https://png.icons8.com/cotton/60/000000/brick-wall.png',
                title: '建材'
            },
            {
                icon: 'https://png.icons8.com/cotton/60/000000/delivery.png',
                title: '运输'
            },
            {
                icon: 'https://png.icons8.com/color/60/000000/key-exchange.png',
                title: '租赁'
            },
            {
                icon: 'https://png.icons8.com/nolan/60/000000/technical-support.png',
                title: '咨询'
            },
        ];

        var loopViews = [
            {
                title: '加快祖国建设步伐',
                bgimg: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1207/16/c0/12347822_1342409157907.jpg',
                btns: [
                    {
                        btnTitle: '联系我们',
                        btnLink: ''
                    }
                ]
            },
            {
                title: '为中国的伟大复兴添砖加瓦',
                bgimg: 'http://www.wallcoo.com/nature/Apple_OS_X_Mountain_Lion_Wallpapers/wallpapers/1366x768/Earth%20and%20Moon.jpg',
                btns: [
                    {
                        btnTitle: '联系我们',
                        btnLink: ''
                    }
                ]
            }
        ];

        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="24">

                        <Carousel indicatorPosition="inside" height="360px">
                            {
                                loopViews.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <LoopView title={item.title} btns={item.btns} bgimg={item.bgimg}/>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Layout.Col>
                </Layout.Row>

                <Layout.Row>
                    <Layout.Col span="24">
                        <div className="textCenter">
                            <h1 style={{color: '#F9FAFC'}}>您是否需要</h1>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                <Layout.Row type="flex" justify="space-around">
                    {
                        services.map((item, index) => {
                            return (
                                <Layout.Col span="2" key={index}>
                                    <div style={{
                                        borderRadius: '100%',
                                        height: '120%',
                                        width: '120%',
                                        background: '#ffffff'
                                    }}>
                                        <div className="textCenter">
                                            <img src={item.icon} alt="icon"/>
                                        </div>

                                        <div className="textCenter">
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                </Layout.Col>
                            );
                        })
                    }
                </Layout.Row>
            </div>
        );
    }
}

export default withRouter(Home);