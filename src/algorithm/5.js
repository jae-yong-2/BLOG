import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1051.PNG'

class App extends Component{
  render(){
    return(
      <div className="left">
      <h1>숫자 정사각형<h3>(정답률 : 37.492%)</h3></h1>
      <h4>
      이번 문제는 주어진 직사각형(N*M)안에 입력받은 정수가 모든 칸을 차지하고 있다.<br/><br/>
      이 직사각형 안에서는 정사각형이 존재하는데, 이 정사각형의 꼭짓점에 숫자 4개가 모두 같은 정사각형 중에 가장 큰 정사각형의 크기를 구하면된다.<br/><br/>
      예를 들어 다음과 같이 입력이 되었을 때, 9라는 값이 출력되어야 한다.<br/><br/>
      <div className='code'>3 5<br/>42101<br/>22100<br/>22101</div>
      이때 생각한 알고리즘은 이미지프로세싱에서 사용하는 필터의 개념을 생각 하였다.<br/><br/>
      핵심 알고리즘의 코드는 다음과 같다.
      <img src={Img1} className="code"/><br/><br/>
      N과 M 중 작은 숫자를 정사각형의 최대 크기로 잡고, 직사각형안을 순회한다.<br/><br/>
      순회 후 조건에 맞는 정사각형이 없을 경우 변의 길이를 1씩 감소시키면서 처음부터 반복한다.<br/><br/>
      이렇게 찾게되면 변의 길이를 제곱하여 반환을 하면, 원하는 값이 나온다.<br/><br/>
      이번 문제는 어렵지는 않지만, 정사각형이 직사각형 안을 돌아 다닐때, 인덱스를 주의해야한다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      </h4>
      </div>
    );
  }
}

export default App;
