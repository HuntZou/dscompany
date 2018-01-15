/**
 * Created by Jhinwins on 2018/1/15.
 */
import {Carousel, Button, Layout, Row, Col} from 'antd';
import React from 'react';

export default class Home2 extends React.Component {
    render() {

        var carouselItems = [
            {
                title: '为祖国的伟大复兴添砖加瓦',
                bgimg: 'http://www.wallcoo.com/nature/Apple_OS_X_Mountain_Lion_Wallpapers/wallpapers/1366x768/Earth%20and%20Moon.jpg',
                btns: [
                    {
                        title: '联系我们',
                        link: 'aboutme'
                    }
                ]
            },
            {
                title: '加快祖国建设步伐',
                bgimg: 'http://www.wallcoo.com/nature/Daily_Snap_Shot_12_Nature_Wallpapers/images/fall1.jpg',
                btns: [
                    {
                        title: '联系我们',
                        link: 'aboutme'
                    }
                ]
            }
        ];

        var mainService = [
            {
                pic: 'https://png.icons8.com/cotton/60/000000/brick-wall.png',
                title: '建材'
            },
            {
                pic: 'https://png.icons8.com/cotton/60/000000/delivery.png',
                title: '运输'
            },
            {
                pic: 'https://png.icons8.com/color/60/000000/key-exchange.png',
                title: '租赁'
            },
            {
                pic: 'https://png.icons8.com/nolan/60/000000/technical-support.png',
                title: '咨询'
            },
        ]

        return (
            <div>
                <Carousel autoplay>
                    {
                        carouselItems.map((item, index) => {
                            return (
                                <div key={index} style={{
                                    backgroundImage: 'url(' + item.bgimg + ')',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    textAlign: 'center',
                                }}>
                                    <Layout style={{height: '450px', background: '#00000000'}}>
                                        <Layout.Header style={{background: '#00000000'}}></Layout.Header>
                                        <Layout.Content>
                                            <div><h1 style={{color: 'white'}}>{item.title}</h1></div>
                                            <div>
                                                {
                                                    item.btns.map((btnItem, btnIndex) => {
                                                        return (
                                                            <Button type="primary"
                                                                    key={btnIndex}
                                                                    onClick={() => this.props.history.push(btnItem.link)}>{btnItem.title}
                                                            </Button>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Layout.Content>
                                    </Layout>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div>
                    <Row type="flex" justify="space-around" align="center">
                        {
                            mainService.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <div style={{textAlign: 'center'}}>
                                            <img src={item.pic}
                                                 alt="ICON"
                                                 style={{height: '50px', width: '50px'}}/>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }
}