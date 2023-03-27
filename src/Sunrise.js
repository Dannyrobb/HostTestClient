import React from "react";
class Sunrise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Israel",
      city: "Tel Aviv",
    };
  }
  componentDidMount() {
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
      .then((res) => res.json())
      .then((res) => this.setState({ hourSunrise: res.results.sunrise }))
      .catch(function (error) {
        console.log(`We got the error ${error}`);
      });
  }
  render() {
    return (
      <div>
        <h1>
          Sunrise in {this.state.country},{this.state.city}
        </h1>
        <p>{this.state.hourSunrise}</p>
      </div>
    );
  }
}

export default Sunrise;
