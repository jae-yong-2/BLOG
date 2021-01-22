import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Train extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }

  render(){
      return (
        <div className="Train">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <div>Train</div>
        </div>
    );
  }
}

export default Train;
