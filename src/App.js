import { useState, useEffect } from "react";
import "./App.css";
import { InputLabel, FormControl, Select, MenuItem, Grid } from "@mui/material";

function App() {
  const [data, setData] = useState("This is your data");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    //<div className="App">
    //<p>{!data ? "Loading..." : data}</p>
    <Grid container>
      <FormControl style={{ width: "20%" }}>
        <InputLabel>Wheel Size</InputLabel>
        <Select
          //value={age}
          label="Age"
          //onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    //</div>
  );
}

export default App;
