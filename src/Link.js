import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Link extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }
  render(){
      return (
        <div className="Link">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <div>Link</div>
        </div>
    );
  }
}

export default Link;
