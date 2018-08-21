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
            11
            <TextView age={this.state.age} title={this.state.textViewTitle}/>
            22
            <IconView name="king" age={this.state.age} setAge={this.setAge}></IconView>
        </div>;
    }
}
export default App;