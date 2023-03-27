import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford", model: "Mustang", color: "red", year: 1964 };
  }
  changeColor = () => {
    let colors = this.props.colors;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: randomColor });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change</button>
      </div>
    );
  }
}

export default Car;
