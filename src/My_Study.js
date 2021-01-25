import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class My_Study extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }
  render(){
      return (
        <div className="My_Study">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <div>My_Study</div>
        </div>
    );
  }
}

export default My_Study;
