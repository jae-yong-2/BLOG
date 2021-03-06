import React, {Component} from 'react';
import '../App.css'
import { List } from './listOfContents';

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
        <a href="https://github.com/jae-yong-2/Algorithm">github</a>
            {List.map((i,idx)=>{return(
              <div>
                <li className="list">
                  {i.title}
                  <button className="button_box" id={i.title} onClick = {()=>{this.change(`algorithm${idx}`, i.title)}}>
                    보기
                  </button>
                </li>
                <div id={`algorithm${idx}`} className="post_list">{i.content}</div>
              </div>
            )})}
        </div>
      );
    }
}
export default App;
