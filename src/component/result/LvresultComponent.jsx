import { TextField, Typography } from "@mui/material";

function LvresultComponent({ easting, northing }) {
  return (
    <>
      <Typography variant="h4">Result in LV95</Typography>
      <TextField
        id="outlined-basic"
        label="east-coordinate"
        variant="outlined"
        value={easting}
        disabled
      />
      <TextField
        id="outlined-basic"
        label="north-coordinate"
        variant="outlined"
        value={northing}
        disabled
      />
    </>
  );
}

export default LvresultComponent;
