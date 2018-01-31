/*
* @Author: Administrator
* @Date:   2018-01-31 16:56:46
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-31 18:55:23
*/
import React, { Component } from 'react';
import logo from './logo.svg';

let i = 1;
let myStyle = {
    color: '#FF0000'
};
// 渲染 HTML 标签 (strings)，只需在 JSX 里使用小写字母的标签名。
/*var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));*/
// 渲染 React 组件，只需创建一个大写字母开头的本地变量。
/*var MyComponent = React.createClass({});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));*/

let arr = [
        <span>数组</span>,
        <span>自动展开所有成员</span>,
        66666,
      ];
let HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello World！</h1>;
  }
});
class Hello extends Component {
  render() {
    return (    	
      <div className="Hello">
        /*注释 */
	      	<h6 > JSX 中 不能用 if else,   --根标签--</h6>
			<span> 三元运算符{i == 1 ? 'True!' : 'False'} {/*注释*/}</span>
	      	<span>JavaScript 表达式 {1+2}</span>
	      	<span data-myattribute = "somevalue">自定义属性 data- 前缀</span>

	      	<h6 style={myStyle}>推荐 camelCase 语法来设置内联样式.自动添加 px </h6>	
	      	<h6 >数组--- {arr}  -----</h6>	

	      	<h5>React DOM 使用 className 和 htmlFor 来做对应的属性。</h5>
	      	<HelloMessage />

      </div>
    );
  }
}


export default Hello;
