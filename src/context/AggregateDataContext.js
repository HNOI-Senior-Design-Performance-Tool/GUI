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

	const getAggregateData = () => {
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
	}

	const updateAggregateData = () => {
		// Make API call to update aggregate data
		axios
			.post("http://localhost:8080/api/aggregateData/update")
			.then((response) => {
				getAggregateData();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getAggregateData();
	}, [selectedVehicle]);


	return (
		<AggregateDataContext.Provider value={{ summedData, averagedData, updateAggregateData }}>{children}</AggregateDataContext.Provider>
	);
};
