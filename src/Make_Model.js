import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Make_Model extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }
  render(){
      return (
        <div className="Make_Model">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <div>Make_Model</div>
        </div>
    );
  }
}

export default Make_Model;
