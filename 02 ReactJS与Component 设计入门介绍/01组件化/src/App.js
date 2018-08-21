import React from 'react'
class App extends React.Component {
    constructor() {
        super();
    }

    say(){
        console.error('这里错误了!');
    }
    render() {
        return <div>
            <h1>hello world!</h1>
            <button onClick={this.say()}>点击</button>
        </div>;
    }
}
export default App;