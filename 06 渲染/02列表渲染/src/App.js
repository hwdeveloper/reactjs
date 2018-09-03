import React from 'react'
import TextView from "./TextView.js"
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            list:[{id:0,name:'小刚',age:18},{id:1,name:'小莉',age:18}]

        }
    }
    render(){
        return <div>
            <TextView list={this.state.list}/>
       </div>;
    }
}
export default App;