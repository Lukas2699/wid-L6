import { TextField } from "@mui/material";

function LvformComponent({ east, setEast, north, setNorth }) {
  function onEastChange(value) {
    setEast(value);
  }

  function onNorthChange(value) {
    setNorth(value);
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="east-coordinate"
        variant="outlined"
        value={east}
        onChange={(event) => onEastChange(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="north-coordinate"
        variant="outlined"
        onChange={(event) => onNorthChange(event.target.value)}
      />
    </>
  );
}

export default LvformComponent;
