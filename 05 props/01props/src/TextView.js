import React from 'react'
class TextView extends React.Component {
    constructor(props) {
        super();
        this.state={
            age:props.age
        }
    }

    render() {
        return <div>
            <h1>TextView {this.state.age}</h1>
            <h1> {this.props.title}</h1>
        </div>;

    }
}

export default TextView;