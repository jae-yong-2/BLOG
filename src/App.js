import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'
import My_Study from './My_Study.js';
import Posting from './Posting.js';
import Link from './Link.js';
import Home_Page from './Home_Page.js';

class App extends Component{
  state={
    site: 'Home_Page',
    gotoSite: ['Home_Page','Posting','My_Study','Link'],
    title:[],
    text:[],
    img:[],
  };
  add_post = (title,text)=>{                      //상태를 변경함 백엔드 연동시 거기에 정보를 넣어야함
    this.setState(
      {
        title: this.state.title.concat(title),
        text: this.state.text.concat(text)
      }
    );
    console.log(text);
  }
  remove_post=(key)=>{                        //등록정보를 지울수있음
    var index=this.state.title.indexOf(key)
    this.setState({
      title:this.state.title.slice(0,index).concat(this.state.title.slice(index+1, this.state.title.length)),
      text:this.state.text.slice(0,index).concat(this.state.text.slice(index+1, this.state.text.length)),
    });
  }
  Home_Page = (text) =>{
  console.log(this.state.text)
    this.setState({
      site: text
    });
  }
  render(){
    const htmlTitle = document.querySelector("title"); // <title> 태그 찾기
    htmlTitle.innerText = this.state.site;
    if(this.state.site=='Home_Page'){
      return(
        <div className="App">
          <Home_Page Home_Page={this.Home_Page} add_post={this.add_post} message='Home_Page' state={this.state}/>
        </div>
      );
    }
    if(this.state.site=='My_Study'){
      return (
        <div className="App">
          <My_Study Home_Page={this.Home_Page} remove_post={this.remove_post} message='My_Study' state={this.state}/>
        </div>
      );
    }
    if(this.state.site=='Posting'){
      return(
        <div className="App">
          <Posting Home_Page={this.Home_Page} message='Posting' state={this.state}/>
        </div>
      );
    }
    if(this.state.site=='Link'){
      return(
        <div id='Link'className="App">
          <Link Home_Page={this.Home_Page} message='Link' state={this.state}/>
        </div>
      );
    }

  }
}

export default App;
