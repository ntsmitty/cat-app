import React, { Component } from "react";
import "./App.css";

const API_KEY = "4569480f-b88e-4125-a1dd-1404ce45929e";
const CAT_URI = "https://api.thecatapi.com/v1/images/search/?limit=10";

export class App extends Component {
  componentDidMount() {
    fetch(CAT_URI, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      }
    })
      .then(res => res.json())
      .then(json => console.log(JSON.stringify(json)))
      .catch(err => console.log(err));
  }
  render() {
    return <div />;
  }
}

export default App;
