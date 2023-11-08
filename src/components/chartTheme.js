import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";

export const useChartTheme = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return {
    text: {
      fontSize: 11,
      fill: colors.grey[100],
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: colors.grey[100],
        },
      },
      legend: {
        text: {
          fill: colors.grey[100],
        },
      },
      ticks: {
        line: {
          stroke: colors.grey[100],
          strokeWidth: 1,
        },
        text: {
          fill: colors.grey[100],
        },
      },
    },
    legends: {
      text: {
        fill: colors.grey[100],
      },
    },
    tooltip: {
      container: {
        color: colors.primary[500],
      },
    },
  };
};
