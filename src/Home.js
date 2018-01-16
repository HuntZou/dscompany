/**
 * Created by Jhinwins on 2018/1/15.
 */
import {Carousel, Button, Layout, Row, Col} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {carouselItems, mainService} from './datas/cfgDatas'

export default class Home extends React.Component {
    render() {
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
                                            <Link to={{pathname: item.link}}>
                                                <img src={item.pic}
                                                     alt="ICON"
                                                     style={{height: '50px', width: '50px'}}/>
                                                <h4>{item.title}</h4>
                                            </Link>
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