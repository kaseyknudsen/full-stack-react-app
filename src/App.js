import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("This is your data");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
