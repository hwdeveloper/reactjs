import React from 'react'
class IconView extends React.Component {
//npm install --save-dev prop-types

    constructor(props) {
        super();
        this.state={
            name:props.name,
            age:props.age,
            setAge:props.setAge
        }
    }

    changeName(){
        let name="超级"+ this.state.name;
        this.setState({
            name:name
        })
    }

    changeAge(){
        this.setState(
            {
                age:this.state.age++
            }
        );
    }


    render() {

        return <div>
            <h1>姓名{this.state.name}</h1>
            <h1>年龄是：{this.state.age}岁</h1>
            <input type="button" value="更改年龄1" onClick={()=>{
                this.state.age++;
                this.state.setAge(this.state.age)}
            }/>
            <input type="button" value="更改年龄2" onClick={(this.changeAge).bind(this)}/>

        </div>;
    }

}
export default IconView;