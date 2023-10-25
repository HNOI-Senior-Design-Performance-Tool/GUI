import React, { useState, useEffect, useContext } from 'react';
import CustomResponsiveLine from './CustomResponsiveLine';
import { LiveDataContext } from '../context/LiveData';


const LiveLineChart = ({ botAxisLabel, leftAxisLabel, data }) => {

  // create line from data
  // ex.
  // 
  // [{
  //   "id": "japan",
  //   "color": "hsl(101, 70%, 50%)",
  //   "data": [
  //     {
  //       "x": "plane",
  //       "y": 124
  //     },
  //     {
  //       "x": "helicopter",
  //       "y": 142
  //     },
  //     {
  //       "x": "boat",
  //       "y": 96
  //     },
  //     {
  //       "x": "train",
  //       "y": 257
  //     }]
  // }]
  const line = [{ "id": leftAxisLabel, "data": data }];

  return (
    <CustomResponsiveLine
      data={line}
      botAxisLabel= {botAxisLabel}
      leftAxisLabel= {leftAxisLabel}
    />
  );
};

export default LiveLineChart;
