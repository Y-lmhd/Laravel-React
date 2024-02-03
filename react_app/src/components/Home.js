import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluide">
                    <div className="jumbotron">
                        <h1 className="display-4">Page d'Accueil</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                            <p>It uses utility Class for typography and spacing to space content out within the larger container.</p>
                            
                    </div>
                </div>
            </>
        )
    }
}
export default Home