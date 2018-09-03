import React from 'react'
import ReactDOM from 'react-dom';
class IconView extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.serverRequest =$.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            // data: comment,
            success: function(data){
                console.log(data);
                this.setState({data: data});

                var title = document.getElementById('title');
                ReactDOM.findDOMNode(title).innerHTML = data.title;


            }.bind(this),
            error: function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });

    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                <h3 id='title'></h3>
            </div>
        );
    }

}
export default IconView;