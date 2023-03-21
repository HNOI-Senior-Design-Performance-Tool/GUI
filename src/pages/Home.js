import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div
                className="card jumbotron vh-100 text-center m-0 bg-opacity-10 sharp-corners d-flex flex-column justify-content-center">
                <div style={{position: "absolute", top: "30vh", width: "100%"}}>
                    <h1 className="display-4">Home</h1>
                    <p className="lead">
                        <NavLink to="/for_hydrogen" className="btn btn-primary btn-lg m-1"
                                 role="button">For Hydrogen</NavLink>
                        <NavLink to="/against_conventional" className="btn btn-danger btn-lg m-1"
                                 role="button">Against Conventional</NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
