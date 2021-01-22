import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class DataSet extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }
  render(){
      return (
        <div className="DataSet">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <div>DataSet</div>
        </div>
    );
  }
}

export default DataSet;
