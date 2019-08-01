import React from "react"
import {withInventory} from "../context/InventoryProvider.js"
import {Link} from "react-router-dom"
import Footer from "./Footer.js"
import ItemCard from './ItemCard.js'
import Results from "./Results.js";

class Men extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        
        this.props.getAllMenInventory(this.props.item)
    }
    render(){
    return(
    <div className = "men">
        <div className="heroHeader">
            <h2>Men's Fashion</h2>
            <h5>All the most popular retro kicks, outerware, and more</h5>
        </div>
        <div className="linkContainer">
        <Link to={{pathname: `/results/`}} className="asLink"> Shop All  </Link> 
        <Link to={{pathname: `/results/`}} className="asLink"> Men's Accessories </Link> 
        <Link to={{pathname: `/results/`}} className="asLink"> Men's Socks & Underwear </Link> 
        <Link to={{pathname: `/results/`}} className="asLink"> Men's Shirts </Link> 
        <Link to={{pathname: `/results/`}} className="asLink"> Men's Shoes </Link> 
        <Link to={{pathname: `/results/`}} className="asLink"> Men's Pants </Link>
        <Link to={{pathname: `/results/`}} className="asLink"> Men's Outerwear </Link>  
        </div>
        <Footer></Footer>
       
    </div>
    )
    }
}

export default withInventory(Men)