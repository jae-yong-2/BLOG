import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class My_Study extends Component{
  remove_post=(title)=>{
    this.props.remove_post(title.key)
  }
  change=(id)=>{
    if(document.getElementById(id).style.display =="block"){
      document.getElementById(id).style.display ="none";
    }
    else{
      document.getElementById(id).style.display ="block";
    }
  }

  render(){
      return (
        <div className="My_Study">
          <p className="body">
          <div>웹페이지를 공부하는 메뉴입니다. 게시판을 만들 계획입니다.</div>
          {this.props.state.title.map((key,index)=>{return (
            <div className="list">{key}
              <button className="button_box" onClick = {()=>{this.change(index)}}>보기</button>
              <button className="button_box" onClick={()=>{this.remove_post({key})}}>제거</button>
              <div id={index} style={{display:"none"}}dangerouslySetInnerHTML={ {__html: this.props.state.text[index]} }>
              </div>
            </div>
          )})}
          </p>
        </div>
    );
  }
}

export default My_Study;
