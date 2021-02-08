import React,{Component} from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["Hello","Hi"],
        };
  }
  render() {
    return (
      <div>
      {this.state.value.map((e,key)=>{return <button>{e}</button>})}
      </div>
    );
  }
}
export default App;
