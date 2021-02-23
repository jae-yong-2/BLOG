import React, {Component} from 'react'
import '../App.css'
import Img1 from "./img/11729.PNG"
import Img2 from "./img/11729_1.PNG"
import Img3 from "./img/11729_2.PNG"
import Img4 from "./img/11729_3.PNG"
class Posting8 extends Component{
  render(){
    return(
      <div className="left">
      <h1>하노이탑 이동 순서<h3>(정답률 : 48.601%)</h3></h1>
      <h4>
      이번 문제는 재귀를 활용한 하노이탑 이동순서를 맞추는 문제이다.<br/><br/>
      <h3>재귀함수란?</h3>
      재귀함수란 자기 자신을 호출하는 함수의 형태로 그 중 대표적인 예제로 하노이탑이 사용되곤 한다.<br/><br/>
      재귀로 문제를 풀때는 '큰 문제롤 작은 문제로 나눠서 푼다'는 개념을 갖고 풀게 된다.<br/><br/>
      코드는 다음과 같다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      우선 vector를 통해 재귀함수를 들어가서 이동할 때 마다 이동순서를 저장하게 된다.<br/><br/>
      함수에는 탑의 층수(num), 현재위치(from), 통로(by), 최종위치(to) 총 네가지 매개변수를 갖는다.<br/><br/>
      탈출 조건으로는 num이 1이되었을 때, 마지막으로 이동한 후에 함수를 종료 시킨다.<br/><br/>
      탈출 상황이 아닐 때 생각이 여기서 핵심인데, 만약 탑이 5층이 있다고 가정을 하자.<br/><br/>
      그럼 가장 큰원반이 중앙으로 가야한다. 그럴려면 남은 4개의 원반이 오른쪽으로 가야할 것이다.<br/><br/>
      그럼다시 4개의 원반이 오른쪽으로 가려면 어떻게 해야할까?<br/><br/>
      답은 다시 3개의 원반이 중앙에가 있고 4개의 원반중 가장큰 원반이 오른쪽에 있어야 할 것이다.<br/><br/>
      이것을 계속 반복하다보면 결국 탑이 몇층인 것 과는 상관없이 옮길 수 있다.<br/><br/>
      위의 함수를 보면 첫번째 (n-1,from, by, to)는 n-1개를 가장 오른쪽에 옮기는 코드<br/><br/>
      <img src={Img2} className='code'/><br/><br/>
      두번때 출력문은 마지막 제일큰 원반을 다른 기둥에 옮기는 코드<br/><br/>
      <img src={Img3} className='code'/><br/><br/>
      이후 마지막 (n-1,by,to,from)은 다른 곳으로 옮겼던 n-1개의 원반을 가장큰 원반에 들어가있던 기둥으로 옮겨주는 코드이다.<br/><br/>
      <img src={Img4} className='code'/><br/><br/>
      이와 같은 형태가 된다.<br/><br/>
      재귀는 이렇게 복잡한 문제를 큰 틀로 봐서 간단하게 풀수있어 아주 강력한 무기가 된다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      <a href="https://www.youtube.com/watch?v=aPYE0anPZqI">사진 출처</a>
      </h4>
      </div>
    );
  }
}

export default Posting8;
