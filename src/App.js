import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'
import Make_Model from './Make_Model.js';
import Train from './Train.js';
import DataSet from './DataSet.js';
import Home_Page from './Home_Page.js';

class App extends Component{
  state={
    site: 'Home_Page',
    gotoSite: ['Home_Page','Make_Model','Train','DataSet'],
  };

  Home_Page = (text) =>{
    this.setState({
      site: text
    });
  }

  render(){

    if(this.state.site=='Home_Page'){
      return(
        <div className="App">
          <Home_Page Home_Page={this.Home_Page} message='Home_Page' gotoSite={this.state.gotoSite}/>
        </div>
      );
    }
    if(this.state.site=='Make_Model'){
      return (
        <div className="App">
          <Make_Model Home_Page={this.Home_Page} message='Make_Model' gotoSite={this.state.gotoSite}/>
        </div>
      );
    }
    if(this.state.site=='Train'){
      return(
        <div className="App">
          <Train Home_Page={this.Home_Page} message='Train' gotoSite={this.state.gotoSite}/>
        </div>
      );
    }
    if(this.state.site=='DataSet'){
      return(
        <div className="App">
          <DataSet Home_Page={this.Home_Page} message='DataSet' gotoSite={this.state.gotoSite}/>
        </div>
      );
    }
  }
}

export default App;
