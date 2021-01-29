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
            {this.props.state.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <p className="body">
            <div>저의 깃허브 페이지와 여러 sns 사이트 링크입니다.</div><br/>
            <a href="https://github.com/jae-yong-2"><button className="button_link">GIT_HUB</button></a><br/>
            <a href="facebook.com/ljy8972"><button className="button_link">FACEBOOK</button></a><br/>
            <a href="https://www.instagram.com/jae_yong_lee_/"><button className="button_link">INSTAGRAM</button></a>
          </p>
        </div>
    );
  }
}

export default Link;
