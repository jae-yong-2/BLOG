import React,{Component} from 'react'
import '../App.css'
import Img1 from './img/1010.PNG'

class Posting4 extends Component{
  render(){
    return(
      <div className="left">
      <h1>다리 놓기<h3>(정답률 : 48.517%)</h3></h1>
      <h4>
      이번 문제는 다리놓기 문제로 양쪽에 목적지를 갖고, 다리가 겹치지 않게 놓을 때의 경우의 수를 구하는 문제이다.<br/><br/>
      문제를 읽었을 때는 어려워 보이지만 조금만 생각해보면 순열공식을 이용한다면 금방 풀 수 있는 문제이다.<br/><br/>
      문제 조건이 0 &lt; N &lt;=M &lt; 30 이므로 조합공식인 mPn을 이용한다.<br/><br/>
      이를 간단하게 풀면 M!/(M-N)!N! 로 볼 수 있다.<br/><br/>
      아래는 알고리즘이다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      단순히 M!, (M-N)!, N!를 각각 따로 계산하면 오버플로가 발생하기 때문에 반복문을 돌 때 값을 나누는 작업을 동시에 해줘야한다.<br/><br/>
      반복문을 돌면서 1부터 M을 곱하는 동시에 1부터 N과 1부터 M-N을 나눠 주는 작업을 반복문 한번을 돌면서 실행한다.<br/><br/>
      문제가 요구하는게 빠른 계산이기 때문에 재귀함수와 같이 시간이 오래 걸리는 알고리즘은 가급적 피해주었다. 이상 포스팅 끝 <br/><br/>
      </h4>
      </div>
    );
  }
}

export default Posting4;
