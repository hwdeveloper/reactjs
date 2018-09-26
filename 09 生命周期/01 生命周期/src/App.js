import React from 'react'
import ReactDOM from 'react-dom';
import IconView from "./IconView.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            time:0
        }
        this.setNewNumber = this.setNewNumber.bind(this);

    }
    setNewNumber() {
        this.setState({time: this.state.time + 1})
    }

    render() {
        return <div>
            <button onClick = {this.setNewNumber}>增加数据</button>
            <IconView myNumber = {this.state.time}></IconView>
        </div>;
    }
}
export default App;