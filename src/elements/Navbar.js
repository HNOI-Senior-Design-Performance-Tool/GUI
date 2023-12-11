import logo from "../assets/HNO+GF+FINAL.png";
import { NavLink, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react"; // Added useEffect and useState

import axios from "axios";
import moment from "moment-timezone";

import { ColorModeContext } from "../theme";
import { CustomIconButton } from "../components/CustomIconButton";
import { useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { VehicleContext } from "../context/VehicleContext";

const Navbar = () => {
	let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	const clickNav = () => {
		window.scrollTo(0, 0);
	};

	const { selectedVehicle, setSelectedVehicle, vehicles } = useContext(VehicleContext);

	// Make an API call to get the latest fuel level data
	const [fuelLevel, setFuelLevel] = useState(0);
	const [fuelLevelTime, setFuelLevelTime] = useState(moment("2000-01-01T00:00:00.000Z"));

	const updateFuelLevel = () => {
		axios
			.get("https://hnoi-api.onrender.com/api/vehicleData/latestFuelLevel?vehicleID=" + selectedVehicle.vehicleID)
			.then((response) => {
				const data = response.data;
				setFuelLevel(data.fuelLevel);
				setFuelLevelTime(moment(data.time));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Poll the database for the latest fuel level data
	const POLLING_INTERVAL = 5000; // 5 second
	useEffect(() => {
		const pollingIntervalId = setInterval(updateFuelLevel, POLLING_INTERVAL);

		return () => clearInterval(pollingIntervalId); // Clean up the interval on unmount
	});

	// update the fuel level every time the selected vehicle changes
	useEffect(() => {
		if (selectedVehicle) {
			updateFuelLevel();	
		}
		// eslint-disable-next-line
	}, [selectedVehicle]);

	return (
		<>
			<header id="header" className="container-fluid p-0 sticky-top">
				<div className="d-flex flex-column flex-md-row align-items-center">
					<div className="col">
						<Link to="/Home">
							<img className="mt-1" src={logo} alt="HNO" width={"25%"} />
						</Link>
					</div>
					<div className="container">
						<div className="row">
							<div className="col">
								<Form.Select
									className="p-3"
									size="sm"
									value={selectedVehicle ? selectedVehicle.vehicleID : ""}
									onChange={(e) => {
										const selectedVehicleId = e.target.value;
										const selectedVehicle = vehicles.find(
											(vehicle) => vehicle.vehicleID === selectedVehicleId
										);
										setSelectedVehicle(selectedVehicle);
									}}
								>
									{vehicles.map((vehicle) => (
										<option key={vehicle.vehicleID} value={vehicle.vehicleID}>
											{ vehicle.vehicleID }
										</option>
									))}
								</Form.Select>
							</div>
							<div className="col">
								<ul className="nav nav-pills mt-2">
									<li className="nav-item">
										<NavLink
											id="about-btn"
											to="/home"
											onClick={clickNav}
											className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
										>
											Home
										</NavLink>
									</li>

									<li className="nav-item">
										<NavLink
											id="about-btn"
											to="/about"
											onClick={clickNav}
											className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
										>
											About
										</NavLink>
									</li>

									<li className="nav-item">
										<NavLink
											id="about-btn"
											to="/dashboard"
											onClick={clickNav}
											className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
										>
											Dashboard
										</NavLink>
									</li>
									<li>
										<CustomIconButton onClick={colorMode.toggleColorMode} sx={{ ml: 5 }}>
											{theme.palette.mode === "dark" ? (
												<DarkModeOutlinedIcon />
											) : (
												<LightModeOutlinedIcon />
											)}
										</CustomIconButton>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-black p-1">
					<div className="progress " style={{ height: "7vh", color: "black" }}>
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: `${fuelLevel}%` }} // Set the width to fuelLevel
							aria-valuenow={fuelLevel} // Set aria-valuenow to fuelLevel
							aria-valuemin="0"
							aria-valuemax="100"
						>
							{fuelLevel > 20 && ( // Only render the text inside the progress bar if fuelLevel is above 20%
								<>
									Hydrogen Level at {fuelLevel.toFixed(2)}% as of{" "}
									<span className="text-decoration-underline">
										{fuelLevelTime.tz(userTimezone).format("MM-DD-YYYY HH:mm:ss")}
									</span>
								</>
							)}
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginLeft: "1vw",
							}}
						>
							{fuelLevel <= 20 && ( // Only render the text inside the progress bar if fuelLevel is above 20%
								<>
									Hydrogen Level at {fuelLevel.toFixed(2)}% as of{" "}
									{fuelLevelTime.tz(userTimezone).format("MM-DD-YYYY HH:mm:ss")}
								</>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
