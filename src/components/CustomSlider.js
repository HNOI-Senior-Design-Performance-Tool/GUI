import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";

export const CustomSlider = styled(Slider)({
  color: "#52af77",
  "& .MuiSlider-thumb": {
    backgroundColor: "#fff",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#52af77",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#bfbfbf",
  },
});
