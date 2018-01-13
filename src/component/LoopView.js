/**
 * Created by Jhinwins on 2018/1/13.
 */

import React from 'react';
import {Button} from 'element-react';
import 'element-theme-default';
import {withRouter} from 'react-router-dom';

class LoopView extends React.Component {
    render() {
        return (
            <div className="textCenter"
                 style={{
                     backgroundImage: 'url(' + this.props.bgimg + ')',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     height: '100%',
                     paddingTop: '100px'
                 }}>
                {
                    this.props.btns.map((item, index) => (
                        <Button key={index} type="info" size="large">{item.btnTitle}</Button>
                    ))
                }
                <h3 style={{color: '#ffffff'}}>{this.props.title}</h3>
            </div>
        );
    }
}

export default withRouter(LoopView);