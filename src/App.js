import React, { Component } from "react";
import "./App.css";

const API_KEY = "4569480f-b88e-4125-a1dd-1404ce45929e";
const CAT_URI = "https://api.thecatapi.com/v1/images/search/?limit=10";

export class App extends Component {
  state = {
    imageData: []
  };

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
      .then(json => {
        const catImages = json;
        this.setState({ imageData: catImages });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { imageData } = this.state;
    const imageUrl = imageData.map(item => item.url);

    return (
      <div>
        {imageUrl.map(item => {
          return <img alt="" src={item} />;
        })}
      </div>
    );
  }
}

export default App;
