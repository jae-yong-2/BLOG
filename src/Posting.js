import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'
import React_study from './React_study'
class Posting extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }

  render(){
      return (
        <div className="Posting">
          <nav className="main_header">
            {this.props.state.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <p className="body"><React_study/></p>
        </div>
    );
  }
}

export default Posting;
