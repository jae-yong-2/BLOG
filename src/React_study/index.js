import React, {Component} from 'react';
import '../App.css'
import List from './1.js'

class App extends Component{
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
      return(
        <div>
            <li className="list">리액트 시작<button className="button_box" id="button1" onClick = {()=>{this.change("React_study1","button1")}}>보기</button></li>
            <div id="React_study1" className="post_list"><List/></div>
        </div>
      );
    }
}
export default App;