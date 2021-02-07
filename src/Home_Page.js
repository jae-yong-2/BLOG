import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Home_Page extends Component{
  add_post=(title,text)=>{                    //중복인지를 확인해주고 app의 백엔드에 넣어줌
    if(this.props.state.title.indexOf(title)>=0){
      alert("중복된 제목이 있습니다.")
    }else {
      this.props.add_post(title,text)
    }
  }
  render(){

      return (
        <div className="Home_Page">
          <p className="body">
            저를 소개합니다.
            <br/>저는 충남대학교 컴퓨터공학과 이재용입니다.
            <br/>이 블로그는 제가 어떤 공부를 했는지 모여주는 블로그입니다.
            <br/>공부했던 내용은 posting항목에서 확인 가능합니다.
            <br/>아래는 게시판 등록으로 활용할 것으로 My_Study와 함께 웹공부를 할 것 입니다.
            <br/>
            <input className='title_box' id='title' placeholder="title"/><br/>
            <div className='content_box' contentEditable="true" id='content' placeholder="content"></div>
              <button className='button_box' onClick={()=>{{
                this.add_post(document.getElementById('title').value, document.getElementById('content').innerHTML);
              }}}>등록</button>
          </p>
        </div>
    );
  }
}

export default Home_Page;
