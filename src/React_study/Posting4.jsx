import React,{Component} from 'react'
import '../App.css'
import Img1 from './img/study2_1.PNG'
import Img2 from './img/study2_2.PNG'
import Img3 from './img/study2_3.PNG'
import Img4 from './img/study2_4.PNG'
import Img5 from './img/study2_5.PNG'

class Posting4 extends Component{
  render(){
    return(
      <div className="left">
      <h1>Home_Page만들기</h1>
      <h3>map함수와 페이지 제목바꾸기</h3>
      <h4>
      Home_Page만들기에 앞서서 Home_Page와 별개로 저번 포스팅의 map함수와 htmlTitle.innerText에 대해 설명하겠다.<br/><br/>
      map함수의 경우 state에 list값이 많을 경우에 중복된 코드 방지에 사용하기에 적합하다.<br/><br/>
      사용법은 다음과 같다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      이렇게 this.state.value의 값을 map함수를 통해 호출하는 것이다. 갯수가 적을 때는 문제가없지만, list가 셀수없이 늘어나면 아주 효율적인 코드이다.<br/><br/>
      e가 value에 있는 리스트의 값을 하나씩 돌면서 모든 값을 호출해 주는것을 볼 수 있다.<br/><br/>
      다음은 htmlTitle.innerText코드이다. 이는 메뉴창 이동마다 홈페이지 타이틀을 변경해주는 코드이고 사용법은 다음과 같다.<br/><br/>
      <div className="code">
      const htmlTitle = document.querySelector("title");<br/><br/>
      htmlTitle.innerText = this.state.site;</div><br/><br/>
      htmlTitle이라는 변수에 title아이디 값을 가진 쿼리 엘리먼트를 가져와 저장한다.<br/><br/>
      그리고 htmlTitle.innerText를 이용해서 상태가 변할때마다 값을 변경해준다.<br/><br/>
      다음은 홈페이지를 만드는 코드이다.<br/><br/>
      <img src={Img3} className="code"/><br/><br/>
      먼저 블로그의 기본적인 설명으로 시작하여, 홈페이지에는 리액트에 여러가지 공부에서 활용할 것이며 My_Study와 연동하여 쓸 것으로 처음에는 props를 이해하기 위해
      값을 props로 My_Study에 보내서 값을 확인 할 수 있게 하였다.<br/><br/>
      <img src={Img4} className="code"/><br/><br/>
      getElementById함수로 title과 text부분의 값들을 가져와 주고, 이를 add_post함수를 통해 보내주게 되는것 이다. add_post의 경우 props를 통해 App.js에서 보내준 함수이다.<br/><br/>
      <img src={Img5} className="code"/><br/><br/>
      App.js에서 데이터를 관리하며 이 데이터는 Home_Page에서 직접관리할 수 없다.<br/><br/>
      이 데이터를 수정하기 위한 방법은 App.js에서 만든 add_post를 Home_Page에 보내서 관리를 해줘야한다.<br/><br/>
      Home_Page에서 만든 함수는 App.js에서 받은 데이터를 직접 수정할 수 없기 때문에 App.js에서 데이터를 관리하는 함수를 받아 간접적으로 수정하는 방식이다.<br/><br/>
      add_post함수는 App.js에 있는 state 값에 concat함수를 통해 리스트를 입력받는대로 늘려준다.<br/><br/>
      이렇게 App.js에 추가된 데이터는 다시 props로 My_Study에 값을 보내준다.<br/><br/>
      Home_Page.js에서 App.js로 App.js에서 My_Study.js로 입력한 값을 보내주게 된다.<br/><br/>
      <div className="code">&lt;Home_Page add_post=&#123;this.add_post&#125;state=&#123;this.state&#125;/&gt;</div>
      이런 코드로 this.add_post를 My_Study컴포넌트에 메세지로 보내준다.<br/><br/>
      다음 포스팅은 이렇게 보낸 데이터를 받아 My_Study에서 보여주고 관리하는 방법을 포스팅한다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      </h4>
      </div>
    );
  }
}

export default Posting4;
