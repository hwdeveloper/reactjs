import React from 'react'
class IconView extends React.Component {
//npm install --save-dev prop-types

    constructor(props) {
        super();
        this.setTitle=props.setTitle;
    }

    componentWillMount() {
        console.log('渲染前调用!')
    }
    componentDidMount() {
        console.log('第一次渲染后调用!')
    }
    componentWillReceiveProps(newProps) {
        console.log('组件接收到一个新的 prop (更新后)时被调用!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('组件接收到新的props或者state但还没有render时被调用!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('组件完成更新后立即调用!')
    }
    componentWillUnmount() {
        console.log('组件从 DOM 中移除的时候立刻被调用!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }

}
export default IconView;