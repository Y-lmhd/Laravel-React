import React from "react";
import axios from "axios"

class Photos extends React.Component{

    constructor(){
        super(); 

        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/photos')
        .then(res => {
            this.setState({ photos :  res.data } , () => {
                console.log(this.state.photos);
            })

        })
        .catch(error => {
            console.log(error.response.status);
        })
    }

    render(){
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

