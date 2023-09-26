import React from "react";
import LiveLineChart from "../elements/LiveLineChart";


const Dashboard = () => {
  


  return (
    <div style={{height: 400}}>
      <LiveLineChart botAxisLabel='Time' leftAxisLabel='Particulate Matter' />
    </div>
  );
};

export default Dashboard;
