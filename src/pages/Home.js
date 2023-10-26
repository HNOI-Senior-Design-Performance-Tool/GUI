import {NavLink} from "react-router-dom";
import hydrogen from "../assets/hydrogen.png";
import gas from "../assets/gas.png";

const Home = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col">
              <div className="card jumbotron bg-primary">
                <div className="card-body text-center">
                  <p className="card-text">
                    <img style={{ height: "30vh" }} src={hydrogen} />

                    <div className="card m-3">
                      <div className="card-body">
                        <p>Hydrogen Level: 75 %</p>
                        <p>Co2 Reduction: 3923 grams</p>
                        <p>Current MPG: 14.6 MPG</p>
                      </div>
                    </div>
                  </p>
                  <NavLink
                    to="/home/withHydrogen"
                    className="btn btn-outline-light"
                  >
                    Your Vehicle With Hydrogen
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-danger h-100">
                <div className="card-body text-center">
                  <p className="card-text">
                    <img style={{ height: "30vh" }} src={gas} />

                    <div className="card m-3">
                      <div className="card-body">
                        <p>Diesel Particulate Reduction: 20 %</p>
                        <p>Fuel Savings: 0.385 gpm</p>
                        <p>Default MPG: 12 MPG</p>
                      </div>
                    </div>
                  </p>
                  <NavLink
                    to="/home/withoutHydrogen"
                    className="btn btn-outline-light"
                  >
                    Your Vehicle Without Hydrogen
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home
