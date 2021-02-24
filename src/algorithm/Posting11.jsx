import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1072.PNG'
import Img2 from './img/1072_1.PNG'
class Posting11 extends Component{
  render(){
    return(
      <div className="left">
      <h1>게임<h3>(정답률 : 21.094%)</h3></h1>
      <h4>
      이 문제는 이분탐색을 하는 문제이다. 문제는 간단한 예시로 50판중에 25판을 이겼다고 가정하자. 이때 승률이 1%가 오를려면 몇판을 최소 이겨야하는지 찾는 문제이다.<br/><br/>
      처음에는 단순히 모든 반복문을 돌면서 계산을 했고 당연하게 시간초과가 나왔다.<br/><br/>
      시간 초과가 계속해서 나와 시간을 줄이기 위해서 이분 탐색을 생각해냈다.<br/><br/>
      <h2>이분 탐색이란?</h2>
      이분 탐색이란 탐색 범위를 두부분으로 나눠서 찾는 방식이다. 이렇게 하면 전부 탐색하는 것보다 훨씬 짧은 시간으로 값을 찾을 수 있다.<br/><br/>
      다음은 이분 탐색을 하는 방법이다.<br/><br/>
      <div className="code">
      <img src={Img2} className="code"/><br/><br/>
      <a href="https://velog.io/@ming/%EC%9D%B4%EB%B6%84%ED%83%90%EC%83%89Binary-Search">사진출처</a><br/><br/>
      1. 찾고자 하는 데이터가 정렬되어 있어야한다.<br/><br/>
      2. begin값과 end값을 정의해준다.<br/><br/>
      3. begin과 end의 중간인 mid값을 잡아준다.<br/><br/>
      4. mid값과 구하고자하는 값을 비교한다.<br/><br/>
         &nbsp;&nbsp;&nbsp;(이때 비교하는 값은 조건으로 코드상으로 볼때 정답 값과 비교하는 것이 아닌 조건문으로 조건에 맞게 찾아가는것이다.)<br/><br/>
      5. mid보다 크면 begin = mid + 1을 해준다. 반대로 값이 낮으면 end = mid - 1을 해준다.<br/><br/>
      6. 이렇게 값을 찾을때까지 2~4를 반복해 준다.<br/><br/>
      </div><br/><br/>
      코드는 다음과 같다.<br/><br/>
      mid값을 end값을 수정하는 부분에 둔 이유는 퍼센트값이 넘어가는 지점에서 정답이 나오기 때문에 begin부분의 조건문에서가 아닌 end에서 넣어준다.<br/><br/>
      이렇게 O(n)시간이 걸리는 문제를 O(log n)으로 시간을 단축하여 풀었다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting11;
