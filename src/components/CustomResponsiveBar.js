import { ResponsiveBar } from "@nivo/bar";

import { useChartTheme } from "./chartTheme";

// parent container needs a defined height
const CustomResponsiveBar = ({ barData, botAxisLabel, leftAxisLabel, onClick }) => {
    
    let chartTheme = useChartTheme();


    return (
      <ResponsiveBar
        data={barData}
        onClick={onClick}
        theme={chartTheme}
        keys={["CO2", "NOx", "PM"]}
        indexBy={botAxisLabel}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.35}
        innerPadding={3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "NOx",
            },
            id: "dots",
          },
          {
            match: {
              id: "PM",
            },
            id: "lines",
          },
        ]}
        borderRadius={3}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", "2"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: botAxisLabel,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: leftAxisLabel,
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart"
        barAriaLabel={(e) =>
          e.id +
          ": " +
          e.formattedValue +
          " for " +
          botAxisLabel +
          ": " +
          e.indexValue
        }
      />
    );
};

export default CustomResponsiveBar;