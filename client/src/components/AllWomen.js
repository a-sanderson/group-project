import React from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from './ItemCard.js'
import Footer from "./Footer.js"

class AllWomen extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        
        this.props.getAllWomenInventory(this.props.item)
    }
    render(){
    return(
        <main>
                <div className="resultsList">
                    
                    {this.props.inventory.map(item => <ItemCard key={item._id} favorites={item.favorites} brand={item.brand} image={item.imgUrl} price={item.price} object={item}/> )}
                    
                </div>
                <Footer></Footer>
            </main> 
        
        
    
    )
    }
}

export default withInventory(AllWomen)