import { TextField } from "@mui/material";

function WgsformComponent({ xcoord, setXcoord, ycoord, setYcoord }) {
  function onXChange(value) {
    setXcoord(value);
  }

  function onYChange(value) {
    setYcoord(value);
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="X-coordinate - Latitude"
        variant="outlined"
        value={xcoord}
        onChange={(event) => onXChange(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Y-coordinate - Longitude"
        variant="outlined"
        value={ycoord}
        onChange={(event) => onYChange(event.target.value)}
      />
    </>
  );
}

export default WgsformComponent;
