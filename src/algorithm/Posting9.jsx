import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/11047.PNG'
import Img2 from './img/1929.PNG'
class Posting9 extends Component{
  render(){
    return(
      <div className="left">
      <h1>동전 0<h3>(정답률 : 53.047%)</h3></h1>
      <h4>
      이번 문제는 N개의 동전의 가치가 오름 차순으로 주어지고, K원이 주어진다.<br/><br/>
      이때 최소 돈전 갯수를 구하는 알고리즘을 구하는 것이다. 코드는 다음과 같다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      알고리즘은 간단하다 vector에 값을 받아두고, 오름차순으로 값을 받기 때문에 뒤에서부터 값을 나눠서 카운트를 해준다.<br/><br/>
      몫이 0으로 나오면 인덱스를 낮추어 카운트를 다시 시작한다.<br/><br/>
      </h4>
      <h1>소수 구하기<h3>(정답률 : 27.295%)</h3></h1>
      <h4>
      이번 문제는 소수를 구하는 문제이다. 이 문제의 경우 모든 반복문을 통과하면서 모두 찾아주는 방식은 시간초과가 뜨도록 되어있다.<br/><br/>
      이를 해결하기 위해서 에라토스테네스의 체를 사용하였다. 개념은 <a href="https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4">여기</a>
      들어가보면 알 수 있다.<br/><br/>
      이에 맞춰서 2의 배수는 전부 체크를 해주고, 다음으로 넘어간다. 3의 배수를 소수로하고 모든 3의 배수를 체크한다.<br/><br/>
      이런 식으로 반복하다보면 범위 내의 소수를 빠른 시간에 구할 수 있다.<br/><br/>
      이상 포스팅 끝.<br/><br/>
      </h4>
      </div>
    );
  }
}

export default Posting9;
