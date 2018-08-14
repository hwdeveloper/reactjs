import React from 'react'
class App extends React.Component {
    constructor() {
        super();

    }
    render() {
        let index=0;
        return <div>
            <button>按钮{1+1}</button>
            <h1 className="title">{index == 1 ? 'True!' : 'False'}</h1>
            <input type="button" value="按钮" disabled/>
            <input type="button" value="按钮" disabled={false} />
        </div>;
    }
}
export default App;