import React from 'react';
import CustomResponsiveLine from './CustomResponsiveLine';

import { useChartTheme } from './chartTheme';


const LiveLineChart = ({ botAxisLabel, leftAxisLabel, data }) => {

  let chartTheme = useChartTheme();

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
