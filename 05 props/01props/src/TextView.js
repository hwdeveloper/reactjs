import React from 'react'
class TextView extends React.Component {
    constructor(props) {
        super();
        this.state={
            myAge:props.age
        }
    }

    render() {
        return <div>
            <h1>TextView的myAge年龄 {this.state.myAge}</h1>
            <h1>TextView的标题 {this.props.title}</h1>
        </div>;

    }
}

export default TextView;