import React from "react";

class Login extends React.Component{

    constructor(){
        super(); 

        this.state = {

        }
    }

    onEmailChange = e => {
        console.log(e.target.value);

    }
    onPasswordChange = e => {
        console.log(e.target.value);

    }

    handleFormSubmit = e => {
        e.preventDefault();
        sessionStorage.setItem('token' , 'abcde');
    }

    render(){
        return(
            <>
                <h1>Login</h1>
                <form method="POST" onSubmit={ this.handleFormSubmit }>
                    <input type="email" name="email" placeholder="Adresse électronique" onChange={ this.onEmailChange } />
                    <input type="password" name="password" placeholder="Mot de passe" onChange={ this.onPasswordChange } />
                    <button type="submit">Connexion</button>
                </form>
            </>
        )
    }
}

export default Login;