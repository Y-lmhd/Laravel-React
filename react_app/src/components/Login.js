import React from "react";

class Login extends React.Component{

    constructor(){
        super(); 

        this.state = {

        }
    }

    email = e => {
        console.log(e.target.value);
    }


    render(){
        return(
            <>
                <h1>Login</h1>
                <form method="POST">
                    <input type="email" name="email" placeholder="Adresse électronique" onChange={ this.email}/>
                    <input type="password" name="password" placeholder="Mot de passe" />
                    <button type="submit">Connexion</button>
                </form>
            </>
        )
    }
}

export default Login;