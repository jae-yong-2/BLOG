import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'
import React_study from './React_study'
import Algorithm from './algorithm'
class Posting extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }
  change=(id,bid)=>{
    if(document.getElementById(id).style.display =="block"){
      document.getElementById(id).style.display ="none";
    }
    else{
      document.getElementById(id).style.display ="block";
    }
  }
  render(){
      return (
        <div className="Posting">
          <nav className="main_header">
            {this.props.state.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>

          <button className="post_body" id="react_button" onClick = {()=>{this.change("study1","react_button")}}>리액트 공부</button>
          <div id="study1" className="post_menu"><React_study/></div>

          <button className="post_body" id="django_button" onClick = {()=>{this.change("study2","django_button")}}>장고 공부</button>
          <div id="study2" className="post_menu">nothing</div>

          <button className="post_body" id="test" onClick = {()=>{this.change("study3","test")}}>알고리즘 공부</button>
          <div id="study3" className="post_menu"><Algorithm/></div>

          <button className="post_body" id="test" onClick = {()=>{this.change("study4","test")}}>빈 공간</button>
          <div id="study4" className="post_menu">nothing</div>

        </div>

    );
  }
}

export default Posting;
