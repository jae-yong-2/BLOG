import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class My_Study extends Component{
  changeMenu=(text)=>{
    this.props.Home_Page(text)
  }
  remove_post=(title)=>{
    this.props.remove_post(title.key)
  }
  render(){
      return (
        <div className="My_Study">
          <nav className="main_header">
            {this.props.state.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.changeMenu(site)}}>{site}</a>})}
          </nav>
          <p className="body">
          <div>웹페이지를 공부하는 메뉴입니다. 게시판을 만들 계획입니다.</div>
          {this.props.state.title.map((key,index)=>{return (
            <a className="list">{key}<button className="button_box" onClick={()=>{this.remove_post({key})}}>제거</button>
              <div dangerouslySetInnerHTML={ {__html: this.props.state.text[index]} }>
              </div>
            </a>
          )})}
          </p>
        </div>
    );
  }
}

export default My_Study;
