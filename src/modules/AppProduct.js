import react from "react";
import ProductList from "./ProductList";
import FormProductFilter from "./FormProductFilter";

class AppProduct extends react.Component {

    constructor(props){
        super(props);
        this.state={
            products: [],
            produits_filtres: []
        }; 

    this.miseAJourFiltre = this.miseAJourFiltre.bind(this);
    }

    componentDidMount(){
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            this.setState({
                products: data.products,
                produits_filtres: data.products
            })
        })
        .catch(error => console.log(error))
        .finally ("job's done")
    }

    miseAJourFiltre(valeurFiltre){
        this.setState({
            produits_filtres: this.state.products.filter(products => products.title.toLowerCase().includes(valeurFiltre))
        })
    }
    
    render(){
        return (
            <div className="container" style={{display:'flex'}}>
                <FormProductFilter onFilterUpdate={this.miseAJourFiltre}/>
                <ProductList items={this.state.produits_filtres}/>
            </div>
        )
    }
}

export default AppProduct;