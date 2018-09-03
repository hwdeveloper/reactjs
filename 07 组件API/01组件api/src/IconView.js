import React from 'react'
class IconView extends React.Component {
//npm install --save-dev prop-types

    constructor(props) {
        super();
        this.setTitle=props.setTitle;
    }

    onClick(){
        this.setTitle("改变后的标题");
    }


    render() {

        return <div>
            <h1>IconView{this.props.title}</h1>
            <input type="button" value="更改标题" onClick={(this.onClick).bind(this)}/>
        </div>;
    }

}
export default IconView;