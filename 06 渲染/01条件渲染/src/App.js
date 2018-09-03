import React from 'react'
import TextView from "./TextView.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            textViewTitle:"textView",
            isShow:false
        }

    }
    render() {
        return <div>
            <TextView isShow={this.state.isShow} title={this.state.textViewTitle}/>
       </div>;
    }
}
export default App;