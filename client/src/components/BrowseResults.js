import React, {Component} from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"
import Footer from "./Footer.js"



class BrowseResults extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getDepartments(this.props.department, this.props.gender)
      
    }
    componentDidUpdate(prevProps){
        if(prevProps.department !== this.props.department || prevProps.gender !== this.props.gender){
            this.props.getDepartments(this.props.department, this.props.gender)
        }
    }
    
    render(){
        console.log(this.props)
        
        
       
    const mappedResults = this.props.inventory.map(result => {
            
           return <ItemCard key={result._id} image={result.imgUrl} brand={result.brand} price={result.price} favorites={result.favorites} id={result._id} object={result} background={result.imgUrl}  />
    
    })
    return(
            <main>
                <div className="resultsList">
                    
                    {mappedResults}
                </div>
                <Footer></Footer>
            </main>    
        
    )
    }
}

export default withInventory(BrowseResults)