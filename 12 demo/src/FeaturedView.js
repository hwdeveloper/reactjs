import React from 'react'
import ReactDOM from 'react-dom';
class FeaturedView extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            list:props.list
        }


    }

    getPrice(price){
        let prices=[];
        let length =price.length;
        for(let i=0;i<length;i++){
            prices.push(<span>{price[i]}</span>)
        }
        return prices;
    }

    List(){
        if(this.state==null)
            return null;

        const listItems = this.state.list.map((item) =>{

                return  <div className="col-md-3 md-col">
                    <div className="col-md">
                        <a href="single.html"><img  src={item.url} alt="" /></a>
                        <div className="top-content">
                            <h5><a href="single.html">{item.name}</a></h5>
                            <div className="white">
                                <a href="single.html" className="hvr-shutter-in-vertical hvr-shutter-in-vertical2 ">ADD TO CART</a>
                                <p className="dollar"><span className="in-dollar">$</span>{this.getPrice(item.price)}</p>
                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </div>
                </div>
            }
        );
        return listItems
    }

    render() {
        return (
            <div className='content-top-in'>
                {this.List()}
            </div>
        );
    }

}



export default FeaturedView;