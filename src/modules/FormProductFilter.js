import React from "react";

class FormProductFilter extends React.Component{

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        let valeurDuFiltre = e.target.value;
        this.props.onFilterUpdate(valeurDuFiltre);
    }

    render(){
        return(
            <div>
                <h2>Recherche de produits</h2>
                <form>  
                    <p>
                        <label className="form-label" htmlFor="titre"></label>
                        <input type="text" className="form-control" name="titre" id="titre" placeholder="Que cherchez-vous?" onChange={this.handleChange}></input>
                    </p>
                </form>
            </div>
        )
    }
}

export default FormProductFilter;