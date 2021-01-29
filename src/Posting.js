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
      document.getElementById(bid).innerText="보기";
    }
    else{
      document.getElementById(id).style.display ="block";
      document.getElementById(bid).innerText="닫기";
    }
  }
  render(){
      return (
        <div className="Posting">
          <nav className="main_header">
            {this.props.state.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>

          <div className="post_body">
            리액트 공부
            <button className="button_box" id="react_button" onClick = {()=>{this.change("study1","react_button")}}>보기</button>
            <div id="study1" className="post_menu"><React_study/></div>
          </div>

          <div className="post_body">
            장고 공부
            <button className="button_box" id="django_button" onClick = {()=>{this.change("study2","django_button")}}>보기</button>
            <div id="study2" className="post_menu">nothing</div>
          </div>

          <div className="post_body">
            알고리즘 공부
            <button className="button_box" id="test" onClick = {()=>{this.change("study3","test")}}>보기</button>
            <div id="study3" className="post_menu"><Algorithm/></div>
          </div>

        </div>

    );
  }
}

export default Posting;
