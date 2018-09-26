import React from 'react'
import ReactDOM from 'react-dom';
class SliderView extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.serverRequest =$.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'get',
            // data: comment,
            success: function(data){
                this.setState({list: data});

            }.bind(this),
            error: function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    List(){
        if(this.state==null)
            return null;
        const listItems = this.state.list.map((item) =>{
                return  <li><img src={item.url} alt=""/></li>
            }
        );
        return listItems
    }

    render() {
        return (
            <div className='slider'>
                <ul className='rslides' id='slider1'> {this.List()}</ul>
            </div>
        );
    }

}
export default SliderView;