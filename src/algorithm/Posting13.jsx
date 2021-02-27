import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1325.PNG'
import Img2 from './img/1325_1.PNG'
class Posting12 extends Component{
  render(){
    return(
      <div className="left">
      <h1>효율적인 해킹<h3>(정답률 : 20.637%)</h3></h1>
      <h4>
      이 문제는 컴퓨터가 단방향으로 연결이 되어있으며, 하나의 컴퓨터가 해킹될 경우 그 컴퓨터가 연결된 모든 컴퓨터가 해킹이 되게된다.<br/><br/>
      하나의 컴퓨터를 해킹했을 때,가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호는 몇 번인지 찾는것이다.<br/><br/>
      처음 문제를 보면 바로 떠오르는 것이 DFS이다. 각 컴퓨터를 노드로 놓고 각 노드마다 깊이를 찾아서 체크할 수 있기 때문이다.<br/><br/>
      이전 포스팅에서 DFS에 대한 개념을 설명해놨으며, 이 개념을 이용해서 문제를 풀었다.<br/><br/>
      DFS를 1번부터 N번째 컴퓨터까지 각각 값을 찾으면서 카운트를 하고, 카운트가 가장 클 경우 스택에 저장해 맨 마지막에 출력해주는 형식을 사용했다.<br/><br/>
      코드는 다음과 같다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      저장 공간을 최소화 하기위해서 중복되는 값이 있을 경우를 체크하는 것은 스택을 이용해서 해주었다.<br/><br/>
      DFS의 코드는 이전 포스팅과 같으며, 개념을 참고하고 싶으면 12번째 포스팅을 보기 바란다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      특별한 생각없이 단순 알고리즘을 이해하면 풀 수 있는 문제였다.<br/><br/>
      이상 포스팅 끝

      </h4>
      </div>
    );
  }
}

export default Posting12;
