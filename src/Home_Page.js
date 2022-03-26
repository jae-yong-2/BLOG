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
            <br/>충남대학교 컴퓨터공학과에 재학중인 이재용입니다.
            <br/>현재 개발자의 꿈을 가졌으며, 그것을 이루기 위해 조금씩 발전하는 모습을 이 블로그를 통해 담을 예정입니다.
            <br/>
            <br/>방슐랭가이드라는 스타트업 개발팀에서 프론트 팀장을 맡고 있으며 아래 링크에서 실제 제가 참여한 앱을 보실 수 있습니다.
            <a href="https://apps.apple.com/ng/app/%EB%B0%A9%EC%8A%90%EB%9E%AD%EA%B0%80%EC%9D%B4%EB%93%9C/id1594068890">
                <button className="button_link">App_Store</button></a><br/>
            <a href="https://play.google.com/store/search?q=%EB%B0%A9%EC%8A%90%EB%9E%AD%EA%B0%80%EC%9D%B4%EB%93%9C&c=apps">
                <button className="button_link">Play_Store</button></a><br/>
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
