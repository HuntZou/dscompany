/**
 * Created by Jhinwins on 2018/1/16.
 */
import React from 'react';
import {List, Row, Col} from 'antd';
export default class Truck extends React.Component {
    render() {
        return (
            <div>
                <List
                    dataSource={this.props.location.state}
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