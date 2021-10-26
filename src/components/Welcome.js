import React, {Fragment} from 'react'

const Welcome = ({handleLogin}) => {
    return (
        <Fragment>
            <button onClick= {handleLogin} >Cerrar Sesion</button>
            <h1>
                Bienvenida
            </h1>
        </Fragment>
        
    )
}
export default  Welcome;