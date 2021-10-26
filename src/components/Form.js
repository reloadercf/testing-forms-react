import React, { useState } from 'react'

export default function Form( {handleLogin} ) {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }

    const handlePass =(e)=>{
        setPass(e.target.value)
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        handleLogin(email, pass)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder= "email" value={email} onChange={handleEmail} />
            <input type="password" placeholder= "password" value={pass} onChange={handlePass} />
            <button type="submit" >Iniciar Sesion</button>
        </form>
    )
}
