import React from 'react'
import ReactDOM from 'react-dom';
import IconView from "./IconView.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            url:"http://localhost:8088/us_box"//us_box  top250
        }

    }

    render() {
        return <div>
            <IconView url = {this.state.url}></IconView>
        </div>;
    }
}
export default App;