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
            {List.map((i,idx)=>{return(
              <div>
                <li className="list">
                  {i.title}
                  <button className="button_box" id={i.title} onClick = {()=>{this.change(idx, i.title)}}>
                    보기
                  </button>
                </li>
                <div id={idx} className="post_list">{i.content}</div>
              </div>
            )})}
        </div>
      );
    }
}
export default App;
