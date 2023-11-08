import { ResponsiveBullet } from "@nivo/bullet";

import { useChartTheme } from "./chartTheme";

// parent container needs a defined height
const CustomResponsiveBullet = ({ bulletData }) => {

    let chartTheme = useChartTheme();

    return (
      <ResponsiveBullet
        data={bulletData}
        theme={chartTheme}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={50}
        titleAlign="start"
        titleOffsetX={-40}
        titleOffsetY={-50}
        titleRotation={90}
        measureBorderWidth={5}
        measureSize={0.2}
        markerSize={0.8}
        rangeColors="red_yellow_green"
        measureColors="dark2"
        markerColors="set1"
      />
    );
};

export default CustomResponsiveBullet;