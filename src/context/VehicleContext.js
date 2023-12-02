import React from "react";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

// Create a context with a default value of null
export const VehicleContext = createContext(null);

export const VehicleProvider = ({ children }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(
    { 
      vehicleID: "default", 
      vehicleName: "default",
    }
  );

  // Make an API call to get the vehicle names and IDs to populate the dropdown menu
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/vehicleData/vehicles")
      .then((response) => {
        const data = response.data;
        setVehicles(data);
        if (data.length > 0) {
          setSelectedVehicle(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <VehicleContext.Provider value={{ selectedVehicle, setSelectedVehicle, vehicles }}>
      {children}
    </VehicleContext.Provider>
  );
};