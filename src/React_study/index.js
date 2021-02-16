import React, {Component} from 'react';
import '../App.css'
import List1 from './Posting1'
import List2 from './Posting2'
import List3 from './Posting3'
import List4 from './Posting4'
import List5 from './Posting5'
import List6 from './Posting6'

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

            <li className="list">블로그 만들기 3<button className="button_box" id="React_button5" onClick = {()=>{this.change("React_study5","React_button5")}}>보기</button></li>
            <div id="React_study5" className="post_list"><List5/></div>

            <li className="list">블로그 만들기 4<button className="button_box" id="React_button6" onClick = {()=>{this.change("React_study6","React_button6")}}>보기</button></li>
            <div id="React_study6" className="post_list"><List6/></div>
        </div>
      );
    }
}
export default App;
