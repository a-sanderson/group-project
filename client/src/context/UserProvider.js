import React, { Component } from "react"
import axios from "axios"

const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: "",
            cart: [],
            favorites: [],
            AuthErrMsg: ""

        }
    }
    addToCart = (item,id) => {
        userAxios.put(`/api/cart/${id}`, {cart:[...this.state.cart, item]})
        .then(res => {
            const user = res.data
            this.setState({cart: user.cart})
            
        })
        .catch(err => console.log(err))
    }
    getUserCart = (item, id) => {
        userAxios.get(`/api/cart/${id}`)
        .then(res => {
            const {cart} = res.data
            console.log(cart)
            this.setState({cart})
        } )
        .catch(err => console.log(err))
    }

    deleteFromCart = (item) => {
        userAxios.put(`/api/cart/`, {cart: item})
        .then(res => {
            this.setState({cart: res.data.cart})
        })
        .catch(err => console.log(err))
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({ user, token, cart: user.cart, favorites: user.favorites})
        })
        .catch(err => console.log(err))
    }

    login = credentials => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            console.log(user)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({ user, token})
            
        })
        .catch(err => console.log(err))
    }

    handleAuthErr = errMsg => {
        this.setState({AuthErrMsg: errMsg})
    }


    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({token: "", user: {}})
    }
    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    addToCart: this.addToCart,
                    getUserCart: this.getUserCart,
                    deleteFromCart: this.deleteFromCart
                    
                }}>
                    {this.props.children}
                </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...value} {...props}/> }
    </UserContext.Consumer>
)