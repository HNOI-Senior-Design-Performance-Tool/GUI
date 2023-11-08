import { ResponsiveBullet } from "@nivo/bullet";

import { useChartTheme } from "./chartTheme";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CustomResponsiveBullet = ({ data }) => {

    let chartTheme = useChartTheme();

    return (
        <ResponsiveBullet
            data={data}
            theme={chartTheme}
            margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
            spacing={50}
            titleAlign="start"
            titleOffsetX={-70}
            measureBorderWidth={5}
            measureSize={0.2}
            markerSize={1.5}
            rangeColors="red_yellow_green"
            measureColors="dark2"
            markerColors="set1"
        />
    );
};

export default CustomResponsiveBullet;