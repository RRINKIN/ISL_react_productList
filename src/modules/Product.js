import React from "react";

class Product extends React.Component{
    render(){
        return(
            <div className="card" style={{width: '18rem', minWidth: '300px', margin: '0.5rem'}}>
                <img className="card-img-top" src={this.props.thumbnail} alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div class="card-footer bg-transparent border-success">
                    <p>{this.props.category}</p>
                </div>
            </div>
        )
    }
}

export default Product;
