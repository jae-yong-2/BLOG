import React,{Component} from 'react'
import Img1 from './img/react_start2.PNG'
import Img2 from './img/react_start3.PNG'
class Posting2 extends Component{
  render(){
    return(
      <div className="left">
      <h1>리액트의 기본</h1>
      <h4>이번 포스팅에서는 리액트의 기본적인 이해를 하기 위한 포스팅이다.<br/><br/>
      리액트는 html과 js를 같이 사용할 수 있는 jsx를 사용하게 된다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      이와 같이 index.js에서 App이라는 컴포넌트를 불러와 랜더링하게 되는데, 이때 App의 코드는 아래와 같다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      여기서 return 부분에서 js와 html을 사용하게 되면 그에 맞게 렌더링을 하고 이를 index.js에서 다시 렌더링을 통해 웹페이지를 보여준다.<br/><br/>
      리턴되는 컴포넌트는 하나여야하기 때문에 div태그와 같은 것으로 한번에 다 감싼후 그 안에서 코드를 짜는 것이 바람직한 것 같다.<br/><br/>
      중괄호는 js코드나 문자열과 변수의 합과 같이 다양하게 사용할 수 있어 나중에 state나 props를 활용할때 유용하게 사용된다.<br/><br/>
      이제부터 현재 보고있는 이 블로그를 개발하면서 공부하게된 내용들을 포스팅해 나갈 계획이다.<br/><br/> 이상 포스팅 끝<br/><br/>
      </h4>
      </div>
    );
  }
}

export default Posting2;
