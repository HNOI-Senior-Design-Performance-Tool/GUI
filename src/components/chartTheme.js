import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";

export const useChartTheme = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return {
    background: colors.primary[400],
    text: {
      fontSize: 11,
      fill: colors.grey[100],
      outlineWidth: 0,
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
      title: {
        text: {
          fill: colors.grey[100],
        },
      },
      text: {
        fill: colors.grey[100],
      },
      ticks: {
        line: {
          stroke: colors.grey[100],
        },
        text: {
          fill: colors.grey[100],
        },
      },
    },
    annotations: {
      text: {
        fill: colors.grey[100],
        outlineWidth: 0,
      },
      link: {
        stroke: colors.grey[100],
        outlineWidth: 0,
      },
      outline: {
        stroke: colors.grey[100],
        outlineWidth: 0,
      },
      symbol: {
        fill: colors.grey[100],
        outlineWidth: 0,
      },
    },
    tooltip: {
      container: {
        color: colors.primary[500],
      },
    },
  };
};
