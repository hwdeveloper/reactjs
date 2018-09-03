import React from 'react'
import ReactDOM from 'react-dom';
import IconView from "./IconView.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title:"你好"
        }

    }

    setTitle(title){
        this.setState({title:title})

        var title = document.getElementById('title');
        ReactDOM.findDOMNode(title).style.color = 'red';
        this.forceUpdate();
    }

    render() {
        return <div>
            <h4 id='title'>Random number: {Math.random()}</h4>
            <IconView title={this.state.title} setTitle={(this.setTitle).bind(this)}></IconView>
        </div>;
    }
}
export default App;