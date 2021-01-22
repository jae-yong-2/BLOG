import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Home_Page extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }

  render(){

      return (
        <form onSubmit={this.send} className="Home_Page">
          <nav className="main_header">
            {this.props.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <div>test</div>
        </form>
    );
  }
}

export default Home_Page;
