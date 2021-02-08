import React,{Component} from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "Hello",
      value2: "Hello",
        };
  }

  render() {
    return (
      <div>
        <button
          className="square"
          onClick={() => this.setState({value1: 'X'})}
        >
          {this.state.value1}
        </button>
        <button
          className="square"
          onClick={() => this.setState({value2: 'X'})}
        >
          {this.state.value2}
        </button>
      </div>
    );
  }
}
export default App;
