import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'
import My_Study from './My_Study.js';
import Train from './Train.js';
import Link from './Link.js';
import Home_Page from './Home_Page.js';

class App extends Component{
  state={
    site: 'Home_Page',
    gotoSite: ['Home_Page','My_Study','Train','Link'],
  };

  Home_Page = (text) =>{
    this.setState({
      site: text
    });
  }

  render(){

    const htmlTitle = document.querySelector("title"); // <title> 태그 찾기
    htmlTitle.innerText = this.state.site;
    if(this.state.site=='Home_Page'){
      return(
        <div className="App">
          <Home_Page Home_Page={this.Home_Page} message='Home_Page' gotoSite={this.state.gotoSite}/>
        </div>
      );
    }
    if(this.state.site=='My_Study'){
      return (
        <div className="App">
          <My_Study Home_Page={this.Home_Page} message='My_Study' gotoSite={this.state.gotoSite}/>
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
    if(this.state.site=='Link'){
      return(
        <div className="App">
          <Link Home_Page={this.Home_Page} message='Link' gotoSite={this.state.gotoSite}/>
        </div>
      );
    }
  }
}

export default App;
