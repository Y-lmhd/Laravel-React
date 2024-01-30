import React from "react";

class WelcomeOld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            brand : "Ford", 
            name: "Mustang",
            color: "Red", 
            year: parseInt(this.props.year)
        }
    }

    componentDidMount(){
        this.setState({ color : "black" })
    }

    changeColor = () => {
        this.setState({ color : "blue" })
        this.setState({ year : this.state.year+1 })
        console.log(this.state.color)
    }

    render() {
        return (
            <>
                <div>Hello World</div>
                <h1>State & props usage :</h1>
                <p>
                    <strong>{this.props.brand} : </strong>
                    It is a {this.state.color} {this.state.name} from {this.state.year} 
                </p>
                <button type="button" onClick={ this.changeColor }>Change color</button>
            </>
        )

    }
}

export default WelcomeOld;