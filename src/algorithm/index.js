import React, {Component} from 'react';
import '../App.css'
import List1 from './1.js'
import List2 from './2.js'
import List3 from './3.js'
import List4 from './4.js'
import List5 from './5.js'
import List6 from './6.js'

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

            <li className="list">백준 no.4344<button className="button_box" id="Algorithm_button1" onClick = {()=>{this.change("beackjoon1","Algorithm_button1")}}>보기</button></li>
            <div id="beackjoon1" className="post_list"><List1/></div>

            <li className="list">백준 no.11650<button className="button_box" id="Algorithm_button2" onClick = {()=>{this.change("beackjoon2","Algorithm_button2")}}>보기</button></li>
            <div id="beackjoon2" className="post_list"><List2/></div>

            <li className="list">백준 no.1018<button className="button_box" id="Algorithm_button3" onClick = {()=>{this.change("beackjoon3","Algorithm_button3")}}>보기</button></li>
            <div id="beackjoon3" className="post_list"><List3/></div>

            <li className="list">백준 no.1010<button className="button_box" id="Algorithm_button4" onClick = {()=>{this.change("beackjoon4","Algorithm_button4")}}>보기</button></li>
            <div id="beackjoon4" className="post_list"><List4/></div>

            <li className="list">백준 no.1051<button className="button_box" id="Algorithm_button5" onClick = {()=>{this.change("beackjoon5","Algorithm_button5")}}>보기</button></li>
            <div id="beackjoon5" className="post_list"><List5/></div>

            <li className="list">백준 no.1037<button className="button_box" id="Algorithm_button6" onClick = {()=>{this.change("beackjoon6","Algorithm_button6")}}>보기</button></li>
            <div id="beackjoon6" className="post_list"><List6/></div>

        </div>
      );
    }
}
export default App;
