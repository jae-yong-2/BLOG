import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'
import My_Study from './My_Study';
import Posting from './Posting';
import Link from './Link';
import Home_Page from './Home_Page';

class App extends Component{
  state={
    site: 'Home_Page',
    gotoSite: ['Home_Page','Posting','My_Study','Link'],
    title:["App.js데이터입니다."],
    text:["props를 이용하여 값을 보냅니다."],
    img:[],
  };
  add_post = (title,text)=>{                      //상태를 변경함 백엔드 연동시 거기에 정보를 넣어야함
    this.setState(
      {
        title: this.state.title.concat(title),
        text: this.state.text.concat(text)
      }
    );
  }
  remove_post=(key)=>{                        //등록정보를 지울수있음
    var index=this.state.title.indexOf(key)
    this.setState({
      title:this.state.title.slice(0,index).concat(this.state.title.slice(index+1, this.state.title.length)),
      text:this.state.text.slice(0,index).concat(this.state.text.slice(index+1, this.state.text.length)),
    });
  }
  Home_Page = (text) =>{
    this.setState({
      site: text
    });
  }
  menu=this.state.gotoSite.map((site,key)=>{return <a className="button_css col-md-3" onClick={()=>{this.Home_Page(site)}}>{site}</a>})

  render(){
    const htmlTitle = document.querySelector("title"); // <title> 태그 찾기
    htmlTitle.innerText = this.state.site;


    if(this.state.site=='Home_Page'){
      return(
        <div className="App">
          <nav className="main_header">
          {this.menu}
          </nav>
          <Home_Page add_post={this.add_post} state={this.state}/>
        </div>
      );
    }
    if(this.state.site=='Posting'){
      return(
        <div className="App">
          <nav className="main_header">
          {this.menu}
          </nav>
          <Posting/>
        </div>
      );
    }
    if(this.state.site=='My_Study'){
      return (
        <div className="App">
          <nav className="main_header">
          {this.menu}
          </nav>
          <My_Study remove_post={this.remove_post} state={this.state}/>
        </div>
      );
    }
    if(this.state.site=='Link'){
      return(
        <div className="App">
          <nav className="main_header">
          {this.menu}
          </nav>
          <Link/>
        </div>
      );
    }

  }
}

export default App;
