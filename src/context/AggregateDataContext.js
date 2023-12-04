import React from "react";
import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

import { VehicleContext } from "./VehicleContext";

// Create a context with a default value of null
export const AggregateDataContext = createContext(null);

export const AggregateDataProvider = ({ children }) => {
	const { selectedVehicle } = useContext(VehicleContext);

	const [summedData, setSummedData] = useState({
		CO: -1,
		NOx: -1,
		particulateMatter: -1,
		mpg: -1,
	});

	const [averagedData, setAveragedData] = useState({
		CO: -1,
		NOx: -1,
		particulateMatter: -1,
		mpg: -1,
	});

	useEffect(() => {
		if (selectedVehicle) {
			// poll database for summed and averaged data
			axios
				.get("http://localhost:8080/api/aggregateData/sumData?vehicleID=" + selectedVehicle.vehicleID)
				.then((response) => {
					setSummedData(response.data);
				})
				.catch((error) => {
					console.log(error);
				});

			axios
				.get("http://localhost:8080/api/aggregateData/avgData?vehicleID=" + selectedVehicle.vehicleID)
				.then((response) => {
					setAveragedData(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [selectedVehicle]);


	return (
		<AggregateDataContext.Provider value={{ summedData, averagedData }}>{children}</AggregateDataContext.Provider>
	);
};
