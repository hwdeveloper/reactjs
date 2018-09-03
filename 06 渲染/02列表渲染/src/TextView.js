import React from 'react'
class TextView extends React.Component {
    constructor(props) {
        super();
        this.state={
            list:props.list
        }
    }

    List(){
        const listItems = this.state.list.map((item) =>{
                return <li key={item.id}>姓名是{item.name};年龄是{item.age}.</li>
        }
        );
        return listItems
    }

    render() {

        return <div>
            <ul> {this.List()}</ul>
        </div>;

    }
}

export default TextView;