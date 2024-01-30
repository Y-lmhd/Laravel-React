import React from "react";
import axios from "axios"
import { Navigate } from 'react-router-dom';
class Photos extends React.Component{

    constructor(){
        super(); 

        this.state = {
            photos: [], 
            redirect: false
        }
    }

    componentDidMount(){
        if(sessionStorage.getItem('token')){

            axios.get('http://127.0.0.1:8000/api/photos')
            .then(res => {
                this.setState({ photos :  res.data } , () => {
                    console.log(this.state.photos);
                })

            })
            .catch(error => {
                console.log(error.response.status);
            })
        } else {
            this.setState({redirect: true})
        }
    
    }
    render(){
        if(this.state.redirect){
            return( <Navigate to="/login" replace /> );
        }
        return(
            <>
                <h1>Photos</h1>
                <hr/>
                <div>
                    { this.state.photos.map(photo =>  <h1>{photo.title}</h1>  )}
                </div>
            </>
        )
    }
}

export default Photos;

