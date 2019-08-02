import React, {Component} from "react"
import { withInventory } from "../context/InventoryProvider.js"
import { withUser } from "../context/UserProvider.js"
import Toggle from "../shared/toggler.js"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.geItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class CartCard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    handleDelete = () => {
        this.props.deleteFromCart(this.props.item)
    }
    

    render(){
        console.log(this.props)
        return(
            <Toggle render={({ toggler, modal}) =>
                <>
                    <Modal isOpen={modal} toggle={toggler}>
                        <ModalHeader toggle={toggler}>cool stuff</ModalHeader>
                        <ModalBody>
                            <section><div style={this.props.imgDivStyle}></div><div>{this.props.description}</div></section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.props.handleClick}>Add To Cart</Button>{' '}
                            <Button color="secondary" onClick={this.props.handleClick}>Favorite</Button>
                        </ModalFooter>
                    </Modal>
                    <div className="itemCard">
                        <div className="imageContainer">
                            <img className="imageFit" alt="itemPic" src={this.props.image}></img>
                        </div>
                        <p>${this.props.price}</p>
                        <p>{this.props.brand}</p><span style={{display: "none"}}>{this.props.id}</span>
                        <p>favorited by {this.props.favorites} others</p>
                        <div>
                            <button className="cardButton" onClick={this.handleDelete}>delete</button>
                            <button className="cardButton" onClick={toggler}>check it out</button>
                        </div>
                    
                    </div>
                </>
            }/>


            )
        }
    }

export default withUser(withInventory(CartCard))