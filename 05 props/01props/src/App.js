import React from 'react'
import TextView from "./TextView.js"
import IconView from "./IconView.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            textViewTitle:"textView",
            age:5
        }

    }

    setAge(age){
        this.setState({age:age})
    }


    render() {
        return <div>
            <h4 id='title'>Random number: {Math.random()}</h4>
            <h1>父组件的年龄：{this.state.age}</h1>
            11
            <TextView age={this.state.age} title={this.state.textViewTitle}/>
            22
            <IconView name="king" age={this.state.age} setAge={(this.setAge).bind(this)}></IconView>
        </div>;
    }
}
export default App;