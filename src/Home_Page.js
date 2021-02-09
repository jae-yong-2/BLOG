import React, {Component} from 'react';
import './App.css'
import './bootstrap/css/bootstrap.css'

class Home_Page extends Component{
  add_post=(title,text)=>{
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
            <br/>저는 충남대학교 컴퓨터공학과 이재용입니다.
            <br/>이 블로그는 리액트와 깃허브를 공부하기 위해 만들었고 리액트만으로 만들어졌습니다.
            <br/>동시에 어떤 공부를 했는지 모여주는 블로그입니다.
            <br/>공부했던 내용은 posting항목에서 확인 가능합니다.
            <br/>아래는 리액트 공부내용을 시각적으로 보여주며 My_Study와 함께 웹공부를 할 것 입니다.
            <br/>
            <input className='title_box' id='제목' placeholder="제목"/><br/>
            <div className='content_box' contentEditable="true" id='content' placeholder="content"></div>
              <button className='button_box' onClick={()=>{{
                this.add_post(document.getElementById('제목').value, document.getElementById('content').innerHTML);
              }}}>등록</button>
          </p>
        </div>
    );
  }
}

export default Home_Page;
