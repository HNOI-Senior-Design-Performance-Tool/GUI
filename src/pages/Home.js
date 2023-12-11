import {NavLink} from "react-router-dom";
import hydrogen from "../assets/hydrogen.png";
import gas from "../assets/gas.png";

import { useContext } from "react";
import { AggregateDataContext } from "../context/AggregateDataContext";

const Home = () => {

  const { averagedDataWithHydrogenFuel, averagedDataWithoutHydrogenFuel } = useContext(AggregateDataContext);

  return (
		<>
			<div className="container-fluid">
				<div className="row my-3">
					<div className="col">
						<div className="card jumbotron bg-primary">
							<div className="card-body text-center">
								<p className="card-text">
									<img style={{ height: "30vh" }} src={hydrogen} alt={"Hydrogen Fuel"} />

									<div className="card m-3">
										<div className="card-body">
											<p>
												Average MPG:{" "}
												{averagedDataWithHydrogenFuel.mpg
													? Number(averagedDataWithHydrogenFuel.mpg.toFixed(2))
													: "N/A"}
											</p>
											<p>
												Average CO Emissions:{" "}
												{averagedDataWithHydrogenFuel.CO
													? Number(averagedDataWithHydrogenFuel.CO.toFixed(2))
													: "N/A"}
											</p>
											<p>
												Average NOx Emissions:{" "}
												{averagedDataWithHydrogenFuel.NOx
													? Number(averagedDataWithHydrogenFuel.NOx.toFixed(2))
													: "N/A"}
											</p>
											<p>
												Average Particulate Matter Emissions:{" "}
												{averagedDataWithHydrogenFuel.particulateMatter
													? Number(averagedDataWithHydrogenFuel.particulateMatter.toFixed(2))
													: "N/A"}
											</p>
										</div>
									</div>
								</p>
								<NavLink to="/home/withHydrogen" className="btn btn-outline-light">
									Your Vehicle With Hydrogen
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card bg-danger h-100">
							<div className="card-body text-center">
								<p className="card-text">
									<img style={{ height: "30vh" }} src={gas} alt={"Fossil Fuel"} />

									<div className="card m-3">
										<div className="card-body">
											<p>
												Average MPG:{" "}
												{averagedDataWithoutHydrogenFuel.mpg
													? Number(averagedDataWithoutHydrogenFuel.mpg.toFixed(2))
													: "N/A"}
											</p>
											<p>
												Average CO Emissions:{" "}
												{averagedDataWithoutHydrogenFuel.CO
													? Number(averagedDataWithoutHydrogenFuel.CO.toFixed(2))
													: "N/A"}
											</p>
											<p>
												Average NOx Emissions:{" "}
												{averagedDataWithoutHydrogenFuel.NOx
													? Number(averagedDataWithoutHydrogenFuel.NOx.toFixed(2))
													: "N/A"}
											</p>
											<p>
												Average Particulate Matter Emissions:{" "}
												{averagedDataWithoutHydrogenFuel.particulateMatter
													? Number(
															averagedDataWithoutHydrogenFuel.particulateMatter.toFixed(2)
													  )
													: "N/A"}
											</p>
										</div>
									</div>
								</p>
								<NavLink to="/home/withoutHydrogen" className="btn btn-outline-light">
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
