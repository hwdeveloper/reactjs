import React from 'react'
class TextView extends React.Component {
    constructor(props) {
        super();
        this.state={
            isShow:props.isShow
        }
    }
    showH1(){
        if(this.state.isShow)
            return <h1> 显示数据</h1>
        else
            return <h1> 不显示数据</h1>
    }
    render() {
        return <div>
            {this.showH1()}
            <h1> {this.props.title}</h1>
        </div>;

    }
}

export default TextView;