import React from "react";
import Product from "./Product";

class ProductList extends React.Component{
    render(){
        return(
            <div class="card-group">
                {this.props.items.map(item => {
                    return(
                        <Product 
                            key={item.id}
                            {...item}
                        />
                    ) 
                })}
            </div>
        )
    }
}

export default ProductList;