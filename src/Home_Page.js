import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Home_Page extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }

  render(){

      return (
        <div className="My_Study">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <body class=".background_css">test</body>
        </div>
    );
  }
}

export default Home_Page;
