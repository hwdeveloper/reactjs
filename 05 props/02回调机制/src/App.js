import React from 'react'
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
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <IconView title={this.state.title} setTitle={(this.setTitle).bind(this)}></IconView>
        </div>;
    }
}
export default App;