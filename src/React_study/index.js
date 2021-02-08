import React, {Component} from 'react';
import '../App.css'
import List1 from './1.js'
import List2 from './2.js'
import List3 from './3.js'
import List4 from './4.js'

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
            <li className="list">리액트 시작<button className="button_box" id="React_button1" onClick = {()=>{this.change("React_study1","React_button1")}}>보기</button></li>
            <div id="React_study1" className="post_list"><List1/></div>

            <li className="list">리액트의 기본<button className="button_box" id="React_button2" onClick = {()=>{this.change("React_study2","React_button2")}}>보기</button></li>
            <div id="React_study2" className="post_list"><List2/></div>

            <li className="list">블로그 만들기 1<button className="button_box" id="React_button3" onClick = {()=>{this.change("React_study3","React_button3")}}>보기</button></li>
            <div id="React_study3" className="post_list"><List3/></div>

            <li className="list">블로그 만들기 2<button className="button_box" id="React_button4" onClick = {()=>{this.change("React_study4","React_button4")}}>보기</button></li>
            <div id="React_study4" className="post_list"><List4/></div>
        </div>
      );
    }
}
export default App;
