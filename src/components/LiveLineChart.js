import React, { useState, useEffect, useContext } from 'react';
import CustomResponsiveLine from './CustomResponsiveLine';

import { tokens } from "../theme";
import { useTheme } from '@mui/material/styles';


const LiveLineChart = ({ botAxisLabel, leftAxisLabel, data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartTheme = 
  {
    //"background": colors.primary[500],
    "text": {
      "fontSize": 11,
      "fill": colors.grey[100],
      "outlineWidth": 0,
      "outlineColor": "transparent"
    },
    "axis": {
      "domain": {
        "line": {
          "stroke": colors.grey[100],
        },
      },
      "legend": {
        "text": {
          "fill": colors.grey[100],
        },
      },
      "ticks": {
        "line": {
          "stroke": colors.grey[100],
          "strokeWidth": 1,
        },
        "text": {
          "fill": colors.grey[100],
        },
      },
    },
    "legends": {
      "text": {
        "fill": colors.grey[100],
      },
    },
    "tooltip": {
      "container": {
        "color": colors.primary[500],
      },
    },
  };

  useEffect(() => {
    console.log(chartTheme);
  }, [chartTheme]);

  const line = [{ "id": leftAxisLabel, "data": data }];

  return (
    <CustomResponsiveLine
      data={line}
      chartTheme={chartTheme}
      botAxisLabel= {botAxisLabel}
      leftAxisLabel= {leftAxisLabel}
    />
  );
};

export default LiveLineChart;
