import React, {Component} from 'react'
import Footer from '../components/Footer.js'

import {Link, BrowserRouter} from 'react-router-dom'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            gender: "",
            department: "",
            clothingSize: "", 
            brand: "", 
            array: []  
        }
    }
    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name] : value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const user = {
            gender: this.state.gender,
            department: this.state.department,
            clothingSize: this.state.clothingSize,
            brand: this.state.brand,  
        }
        this.setState(prevState => ({
                gender: "",
                department : "",
                clothingSize : "", 
                brand : "",
                array: [...prevState.array, user]
        }))
    }
    render(){
        return(

             <main>
                    <div className = "home">
                       
                        <h2 className="clothe">Fashion Hub</h2>
                        <form onSubmit={this.handleSubmit} className="form">
                            <select className="select" name="gender" onChange={this.handleChange}> 
                                <option value="none"> - Select a Gender - </option>
                                <option value="men"> Male </option>
                                <option value="women"> Female </option>
                            </select>
                            <select className="select" name="department" onChange={this.handleChange}>
                                <option value="none"> - Select a Department - </option>
                                <option value="shirts"> Shirts</option>
                                <option value="pants"> Pants</option>
                                <option value="shoes"> Shoes</option>
                                <option value="accessories"> Accessories</option>
                                <option value="socksandunderwear"> Socks and Underwear</option>
                                <option value="outerwear"> Outerwear</option>
                            </select>
                            <select className="select" name="clothingSize" onChange={this.handleChange}>
                                <option value="none"> - Select a Size - </option>
                                <option value="x-small"> Extra Small </option>
                                <option value="small"> Small</option>
                                <option value="medium"> Medium</option>
                                <option value="large"> Large</option>
                                <option value="x-large"> Extra Large</option>
                            </select>     
                            <Link to={{pathname: `/results/`, state: {...this.state} }} className="link"> submit </Link>             
                        </form>
                    </div> 
                    <Footer></Footer>
            </main>   
        )
    
    }
}   


export default Home 



 
