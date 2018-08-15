import React from 'react'
import TextView from "./TextView.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title:"你好"
        }

    }

    change(){
       this.setState({ title:"我很好！"})
    }
    render() {
        return <div>
            <h1>{this.state.title}</h1>

            <TextView title={5}/>
            <button onClick={(this.change).bind(this)}>点击按钮</button>
        </div>;
    }
}
export default App;