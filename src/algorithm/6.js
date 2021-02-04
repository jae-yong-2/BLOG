import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1037.PNG'

class App extends Component{
  render(){
    return(
      <div className="left">
      <h1>약수<h3>(정답률 : 49.574%)</h3></h1>
      <h4>이번 문제는 양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다.<br/><br/>
      어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.라는 문제이다. 생각해보면 매우 간단한 문제이다.<br/><br/>
      약수의 개수가 짝수개 나오면 중간의 2개를 곱한 값이 N이 될것이고, 홀수일 경우 중간의 값을 제곱하면 N이 될것이다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      코드는 위와 같다.<br/><br/>
      이 문제는 조금만 생각하면 금방 풀 수 있는 문제 코드만 봐도 금방 이해할 수 있다.<br/><br/>
      이상 포스팅 끝

      </h4>
      </div>
    );
  }
}

export default App;
