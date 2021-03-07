import React,{Component} from 'react'
import Img1 from './img/study4_1.PNG'
import Img2 from './img/study4_2.PNG'
import Img3 from './img/study5_1.PNG'

class Posting6 extends Component{
  render(){
    return(
      <div className="left">
      <h1>Posting 페이지 만들기</h1>
      <h4>
      이번에는 Posting페이지를 만들어본다. posting 페이지는 이전에 홈페이지와 My_Study페이지를 만들때 사용했던 코드들을 활용하여 쉽게 만들었다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      이렇게 각 항목에 대한 버튼들을 생성하고 버튼을 누르면 컴포넌트를 보여준다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      알고리즘 항목은 다음과같은 파일 구조를 갖고있다. index.jsx에서 컴포넌트를 export하고 그 값을 받아서 posting페이지에서 보여준다.<br/><br/>
      알고리즘 폴더의 index.jsx는 다음과 같은 코드를 가지고 있다.<br/><br/>
      이렇게 다시한번 컴포넌트들을 항목으로 만들어 보기/닫기 버튼을 이용해 포스팅한 것들을 보여준다.<br/><br/>
      <img src={Img3} className="code"/><br/><br/>
      posting페이지는 이렇게 새로운 내용없이 기존에 공부했던 내용으로 만들 수 있었다.<br/><br/>
      다음 포스팅때는 메뉴가 여러개로 늘어났을 경우, 코드 관리를 위한 모듈화를 포스팅할 것이다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      </h4>
      </div>
    );
  }

}

export default Posting6;
