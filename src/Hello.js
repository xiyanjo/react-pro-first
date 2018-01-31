/*
* @Author: Administrator
* @Date:   2018-01-31 16:56:46
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-31 17:07:19
*/
import React, { Component } from 'react';
import logo from './logo.svg';

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
      <p>hello  66666 {1+2}</p>
      <p data-myattribute = "somevalue">自定义属性 data- 前缀</p>

      </div>
    );
  }
}

export default Hello;
