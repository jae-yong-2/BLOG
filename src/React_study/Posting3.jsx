import React,{Component} from 'react'
import '../App.js'
import Img1 from './img/study1_1.PNG'
import Img2 from './img/study1_2.PNG'
import Img3 from './img/study1_3.PNG'

class Posting3 extends Component{
  render(){
    return(
      <div className="left">
      <h1>블로그 메뉴창 만들기</h1>
      <h4>
      가장 먼저 블로그를 구상하기 위해서 구조를 어떻게 할 것 인가를 생각해 보자.<br/><br/>
      먼저 가장 먼저 생각한 것은 페이지 이동없이 한 페이지 안에서 모든 것을 볼 수 있는 블로그였다.<br/><br/>
      이를 위해서는 리액트 라우터를 사용해야 한다. 하지만 최대한 리액트 자체만의 구현을 하기위해 사용하지않았다.<br/><br/>
      구조는 다음과 같이 구상했다.
      <img src={Img1} className="code"/><br/><br/>
      우선 index.js에서 app.js를 보여주고 app.js에서 모든 메뉴를 관리하는 구조로 구상이 되었다.<br/><br/>
      이제 app.js에서 관리해주는 각각의 메뉴 페이지는 각자 자신의 리스트를 갖고 리스트를 관리한다.<br/><br/>
      이를 수행하기 위해서는 기본적으로 리액트의 state를 이해해야 수행할 수 있다.<br/><br/>
      <h3>state란?</h3>
      state는 컴포넌트의 특성 상태를 화면에 동적으로 반영해주는 기능을 위한 객체이다. 컴포넌트가 독립적으로 갖는 상태인것인다.<br/><br/>
      사용 예시는 다음과 같다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      이렇게 사용된 state는 setState함수를 통해 변경을 할 수 있는데, 변화되는 즉각 반응하여 웹사이트에 보여진다.<br/><br/>
      이를 사용하여 메뉴를 클릭하면 클릭에 따라 각각에 맞는 state를 변화시켜 그 컴포넌트를 보여주는 작업을 하게 된다.<br/><br/>
      이렇게 메뉴창을 클릭할 때 마다 그에 맞는 컴포넌트를 보여주도록 하면 되는데 state에 이동할 메뉴의 리스트와 현재 메뉴상태를 나타내는 정보를 준다.<br/><br/>
      이후 map함수와 onClick을 통해서 메뉴를 바꿔주는 함수를 실행하고 클릭마다 상태를 변환해준다.<br/><br/>
      위의 이미지가 첫번째 버튼은 버튼을 클릭하기전이고, 두번째 버튼이 버튼을 클릭한 후이다.<br/><br/>
      구현된 메뉴창은 다음과 같고 map함수를 통해 상태에서 페이지 이름을 setState에 보내주어 클릭마다 상태를 변경해준다.<br/><br/>
      render아래 두줄은 다음 포스팅때 설명하겠다.<br/><br/>
      <img src={Img3} className="code"/><br/><br/>
      이렇게 구현된 페이지는 현재 보고있는 블로그의 메뉴처럼 작동하게 된다.<br/><br/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting3;
