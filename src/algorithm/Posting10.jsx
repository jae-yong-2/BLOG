import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1225.PNG'
import Img2 from './img/1225_1.PNG'
class Posting10 extends Component{
  render(){
    return(
      <div className="left">
      <h1>이상한 곱셈<h3>(정답률 : 37.947%)</h3></h1>
      <h4>
      이 문제는 A,B가 주어지면 A의 자리수하나를 B의 모든 자리수와 곱한값을 더하고 모든 A자리수에 대해서 반복을 해준다.<br/><br/>
      알고리즘 자체는 단순하지만, A와 B의 자리수가 10000자리수로 int형의 범위를 넘어간다는 문제점이 발생하게된다.<br/><br/>
      이를 해결하기위해 코드를 다음과 같이 짰다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      값을 문자열 형태로 받는 것이다.<br/><br/>이렇게 받게되면, 자리수와 상관없이 값을 계산할 수 있으며 주의할 점으로는 char형으로 나타나는 문자는
       아스키코드값으로 받기때문에 계산하기전에 -48을 해주는 것을 잊지말자.
       <br/><br/> 그리고 문자를 계산하다보면 int값을 넘어가게 되는데, 배열을 생성해주고
       처음에는 인덱스 0번째에 값을 넣다가 10억을 넘어가게되면 인덱스 1번째에 넣어준다. 출력은 이 두 값을 이어서 출력해주면 해결이된다.<br/><br/>
       <h3>아스키코드란?</h3>
       아스키코드란 미국정보교환표준부호를 말하며 영문 알파벳을 사용하는 대표적인 문자 인코딩이다.<br/><br/>
       <h2>아스키코드 표</h2>
       <img src={Img2} className="code"/><br/><br/>
        위는 아스키코드 표로 문자와 대응되는 표기법들이다.<br/><br/>
        이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting10;
