import React from "react";
import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

import { VehicleContext } from "./VehicleContext";

// Create a context with a default value of null
export const AggregateDataContext = createContext(null);

export const AggregateDataProvider = ({ children }) => {
	const { selectedVehicle } = useContext(VehicleContext);

	const [summedDataWithHydrogenFuel, setSummedDataWithHydrogenFuel] = useState({
		CO: -1,
		NOx: -1,
		particulateMatter: -1,
		mpg: -1,
	});

	const [averagedDataWithHydrogenFuel, setAveragedDataWithHydrogenFuel] = useState({
		CO: -1,
		NOx: -1,
		particulateMatter: -1,
		mpg: -1,
	});

	const [summedDataWithoutHydrogenFuel, setSummedDataWithoutHydrogenFuel] = useState({
		CO: -1,
		NOx: -1,
		particulateMatter: -1,
		mpg: -1,
	});

	const [averagedDataWithoutHydrogenFuel, setAveragedDataWithoutHydrogenFuel] = useState({
		CO: -1,
		NOx: -1,
		particulateMatter: -1,
		mpg: -1,
	});

	const getAggregateData = () => {
		if (selectedVehicle) {
			// poll database for summed and averaged data
			axios
				.get("https://hnoi-api.onrender.com/api/aggregateData/sumData?vehicleID=" + selectedVehicle.vehicleID + "&hydrogenFuel=true")
				.then((response) => {
					setSummedDataWithHydrogenFuel(response.data);
				})
				.catch((error) => {
					console.log(error);
				});

			axios
				.get("https://hnoi-api.onrender.com/api/aggregateData/avgData?vehicleID=" + selectedVehicle.vehicleID + "&hydrogenFuel=true")
				.then((response) => {
					setAveragedDataWithHydrogenFuel(response.data);
				})
				.catch((error) => {
					console.log(error);
				});

			axios
				.get("https://hnoi-api.onrender.com/api/aggregateData/sumData?vehicleID=" + selectedVehicle.vehicleID + "&hydrogenFuel=false")
				.then((response) => {
					setSummedDataWithoutHydrogenFuel(response.data);
				})
				.catch((error) => {
					console.log(error);
				});

			axios
				.get("https://hnoi-api.onrender.com/api/aggregateData/avgData?vehicleID=" + selectedVehicle.vehicleID + "&hydrogenFuel=false")
				.then((response) => {
					setAveragedDataWithoutHydrogenFuel(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
			
		}
	}

	const updateAggregateData = () => {
		// Make API call to update aggregate data
		axios
			.post("https://hnoi-api.onrender.com/api/aggregateData/update")
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
		<AggregateDataContext.Provider
			value={{ summedDataWithHydrogenFuel, averagedDataWithHydrogenFuel, summedDataWithoutHydrogenFuel, averagedDataWithoutHydrogenFuel, updateAggregateData }}
		>
			{children}
		</AggregateDataContext.Provider>
	);
};
