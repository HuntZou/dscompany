/**
 * Created by Jhinwins on 2018/1/15.
 */
import React from 'react'
import {Table, Row, Col} from 'antd'

export default class ContactMe extends React.Component {
    render() {

        var contactInfos = [{
            key: '1',
            type: '电话',
            mun: '13545108591',
            person: '邹笃胜'
        }, {
            key: '2',
            type: '电话',
            mun: '17671727613',
            person: '邹恒'
        },
            {
                key: '3',
                type: 'QQ',
                mun: '709434129',
                person: '邹恒'
            }];

        var columns = [{
            title: '联系方式',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '号码',
            dataIndex: 'mun',
            key: 'mun',
        }, {
            title: '联系人',
            dataIndex: 'person',
            key: 'person',
        }];

        return (
            <div style={{paddingTop: '50px'}}>
                <Row type="flex" justify="center">
                    <Col span="16">
                        <Table pagination={false} columns={columns} dataSource={contactInfos}/>
                    </Col>
                </Row>
            </div>
        )
    }
}