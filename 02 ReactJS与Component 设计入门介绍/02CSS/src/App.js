import React from 'react'
class App extends React.Component {
    constructor() {
        super();

    }

    h1style(){
        let divStyle = {
            color: 'red'
        };
        return divStyle;
    }
    render() {
        return <div>
            <h1 style={this.h1style()}>hello world!</h1>
        </div>;
    }
}
export default App;