import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
let data = {
  age: "",
  fare: "",
  family_members: "0",
  q: "0",
  s: "0",
  male: "0",
  2: "0",
  3: "0",
};
function App() {
  const [prediction, setPrediction] = useState(null);

  function handleChange(e, field) {
    console.log(e.target.value, field);
    data[`${field}`] = e.target.value;
  }
  async function handleSubmit() {
    console.log(data);
    const response = await fetch("/api/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let prediction_ = await response.text();
    setPrediction(prediction_);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TITANIC</p>
        <body>
          <div>
            <form className="form">
              Age:
              <input
                type="text"
                name="age"
                onChange={(e) => handleChange(e, "age")}
              />
              <br></br>
              Fare
              <input
                type="text"
                name="fare"
                onChange={(e) => handleChange(e, "fare")}
              />
              <br></br>
              family_members:
              <select
                className="select"
                name="family_members"
                id="family_members"
                onChange={(e) => handleChange(e, "family_members")}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="10">10</option>
              </select>
              <br></br>
              q:
              <select
                className="select"
                name="q"
                id="q"
                onChange={(e) => handleChange(e, "q")}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              <br></br>
              s:
              <select
                className="select"
                name="s"
                id="s"
                onChange={(e) => handleChange(e, "s")}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              <br></br>
              male:
              <select
                className="select"
                name="male"
                id="male"
                onChange={(e) => handleChange(e, "male")}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              <br></br>
              2:
              <select
                className="select"
                name="2"
                id="2"
                onChange={(e) => handleChange(e, "2")}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              <br></br>
              3:
              <select
                className="select"
                name="3"
                id="3"
                onChange={(e) => handleChange(e, "3")}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              <br></br>
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
            <br></br>
            <h4>{prediction}</h4>
          </div>
        </body>
      </header>
    </div>
  );
}
export default App;
