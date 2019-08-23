import React, {Component} from "react"
import AuthForm from "./AuthForm.js"
import { withUser } from "../../context/UserProvider.js"
import Toggle from "../../shared/toggler.js"
import Footer from "../../components/Footer.js"
import { faCentercode } from "@fortawesome/free-brands-svg-icons";


class Auth extends Component {
    constructor(props){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSignupSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password,
        }

        this.props.signup(creds)
    }


    handleLoginSubmit = async e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password
        }
        await this.props.login(creds)
        this.setState({
            username: '',
            password: ''
        })
    }
    
    
    render(){
        console.log(this.props)
      
        return(
            <Toggle render={({on, toggler}) =>
            <main>
                <div style={{opacity:".8", backgroundImage: `url(${"https://images.unsplash.com/photo-1489414590815-e84cbd8072f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"})`}} className="heroHeader">
                    <h2 className="loginHeaderText">Get in the loop </h2>
                    <h5 className="loginHeaderText">make an account today</h5>
                </div>
                    <section className="formSection">
                        <div className="authFormContainer">
                        
                            { on?

                                <>
                                    <AuthForm
                                        className="authForm"
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleSubmit={this.handleSignupSubmit}
                                        handleChange={this.handleChange}
                                        buttonText="sign up"/>

                                </>
                            :   
                                <>
                                    <AuthForm
                                        className="authForm"
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleSubmit={this.handleLoginSubmit}
                                        handleChange={this.handleChange}
                                        buttonText="Log In"/>
                                </>
                            }{ on?
                                <>
                                    <div className="accountQesNBtn">
                                        <p className="noAccount" style={{ fontWeight: "600", color: "aquamarine" }}>already have an account?</p>
                                        <button className="cardButton" onClick={toggler}>Click to sign in</button>
                                    </div>
                                </>
                            :
                                <>

                                    <div className="accountQesNBtn">
                                        <p className="noAccount" style={{fontSize: "2em" , fontWeight: "600", color: "aquamarine" }}>dont have an account??</p>
                                        <button className="cardButton" onClick={toggler}>Click to sign up</button>
                                    </div>

                                </>

                            }
                        </div>
                    </section>
                <Footer></Footer>
                </main>
            }/>
        )
    }
}

export default withUser(Auth)
