import { TextField, Typography } from "@mui/material";

function wgsresultComponent({ xcoordinate, ycoordinate }) {
  return (
    <>
      <Typography variant="h4">Result in WGS84</Typography>
      <TextField
        id="outlined-basic"
        label="X-coordinate - Latitude"
        variant="outlined"
        value={xcoordinate}
        disabled
      />
      <TextField
        id="outlined-basic"
        label="Y-coordinate - Longitude"
        variant="outlined"
        value={ycoordinate}
        disabled
      />
    </>
  );
}

export default wgsresultComponent;
