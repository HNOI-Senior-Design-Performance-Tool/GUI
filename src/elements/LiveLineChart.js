import React, { useState, useEffect } from 'react';
import CustomResponsiveLine from './CustomResponsiveLine';

// For testing purposes
const generateRandomDataPoint = () => ({
  x: new Date().toISOString(), // Use a timestamp as x value (time series)
  y: Math.random() * 100, // Generate a random y value
});

const LiveLineChart = ({ botAxisLabel, leftAxisLabel }) => {
  const [data, setData] = useState([{ id: "line1", data: [] }]);

  // Function to add a new random data point to the chart data
  const addRandomDataPoint = () => {

    setData((prevData) => {
      const newData = prevData.map((lineData) => ({
        ...lineData,
        data: [...lineData.data, generateRandomDataPoint()],
      }));

      // Trim data to a maximum length (e.g., to keep the chart from getting too long)
      const maxDataLength = 50;
      if (newData[0].data.length > maxDataLength) {
        newData.forEach((lineData) => {
          lineData.data.shift();
        });
      }

      return newData;
    });
  };

  // Simulate adding a random data point every second
  useEffect(() => {
    const intervalId = setInterval(addRandomDataPoint, 1000); // Add data point every second

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <CustomResponsiveLine
      data={data}
      botAxisLabel= {botAxisLabel}
      leftAxisLabel= {leftAxisLabel}
    />
  );
};

export default LiveLineChart;
