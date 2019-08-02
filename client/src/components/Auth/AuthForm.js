import React from 'react'

const AuthForm = props => {
    const {username, password, handleChange, handleSubmit, buttonText} = props
    console.log(props)
    return(
    
        <form  className={props.className} onSubmit={handleSubmit}>
            <input
             type = 'text'
             name = 'username'
             value = {username}
             onChange = {handleChange}
             placeholder = 'Username' />
        <input 
            type = 'text'
            name = 'password'
            value = {password}
            onChange = {handleChange}
            placeholder = 'Password' />
            <button className="cardButton" style={{fontWeight: "600"}}>{buttonText}</button>
        </form>
    )
}

export default AuthForm