import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1260.png'
import Img2 from './img/1260_1.png'
import Img3 from './img/1260_2.png'
import Img4 from './img/1260_3.png'
import Img5 from './img/1260_4.png'
class Posting12 extends Component{
  render(){
    return(
      <div className="left">
      <h1>DFS와 BFS<h3>(정답률 : 33.430%)</h3></h1>
      <h4>
      이번 문제는 DFS와 BFS를 구현하는 문제이다.<br/><br/>
      주어진 값에 숫자가 작은 순서로 탐색을 하면되는 조건으로 문제를 풀면된다.<br/><br/>
      코드만 보면 DFS와 BFS는 다음과 같다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/><br/><br/>
      <h3>DFS란?</h3>
      DFS는 Depth First Search의 약자로 해석하면 깊이우선탐색이라고 볼 수 있다.<br/><br/>
      그래프가 주어지면 가장 깊은곳으로 들어가 탐색을 하고, 그다음 깊은곳, 그다음 깊은곳 ... 이렇게 반복하여 찾는것이다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      첫번째 시작 지점을 루트노드로 지정하고 시작노드에서 가장 멀리 떨어진 구간의 노드를 리프노드로하면 트리구조로 쉽게 이해할 수 있다.<br/><br/>
      위 그림과 같이 깊은곳부터 탐색을 하게된다.<br/><br/>
      이렇게 탐색된 그래프는 stack구조를 이용해서 순회를 하게 된다.<br/><br/>
      순회를 하면 stack에 들어가는 순서 자체는 1-5-2-4-3-6로 들어가게된다.<br/><br/>
      하지만 stack을 pop할때 순회로 인정되기때문에 1-2-3-4-5-6순으로 순회하게 되는 것이다.<br/><br/>
      이를 스택구조로 보게 된다면 다음과 같다.<br/><br/>
      <img src={Img3} className="code"/><br/><br/>
      <h3>BFS란?</h3>
      BFS는 Breadth-first search의 약자로 DFS와는 약간의 차이가 있는데, 해석하면 넓이우선탐색이다.<br/><br/>
      <img src={Img4} className="code"/><br/><br/>
      트리 구조로 놓았을 때, 넓이 부분을 순차적으로 탐색하면서 깊이를 내려가는 탐색방법이다.<br/><br/>
      DFS에서 Stack을 사용한다면 BFS에서는 Queue를 사용하는데, 재밌는점은 알고리즘은 완전 같지만 단지 큐를 사용한다는 점이다.<br/><br/>
      큐는 선입선출이기떄문에 큐에 들어가는 순서와 pop의 순서가 1-5-2-4-6-3으로 같다.<br/><br/>
      그림으로 보면 다음과 같다.<br/><br/>
      <img src={Img5} className="code"/><br/><br/>
      DFS와 BFS에서 스택과 큐에 값이 남았음에도 순회로 인정되지 않는 이유는 이미 이전에 방문한적이 있기 때문이다.<br/><br/>
      이점은 코드를 짤때도 유의해서 꼭 visit부분을 체크해줘야한다.<br/><br/>
      이상 포스팅 끝

      </h4>
      </div>
    );
  }
}

export default Posting12;
