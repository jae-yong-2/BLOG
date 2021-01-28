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
            <button className="button_link"><a href="https://github.com/jae-yong-2">GIT_HUB</a></button><br/>
            <button className="button_link"><a href="facebook.com/ljy8972">FACEBOOK</a></button><br/>
            <button className="button_link"><a href="https://www.instagram.com/jae_yong_lee_/">INSTAGRAM</a></button>
          </p>
        </div>
    );
  }
}

export default Link;
