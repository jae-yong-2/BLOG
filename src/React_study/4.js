import React,{Component} from 'react'
import '../App.css'
import Img1 from './img/study2_1.PNG'

class App extends Component{
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
      </h4>
      </div>
    );
  }
}

export default App;
