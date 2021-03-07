import React, {Component} from 'react'
import '../App.css'
import Img1 from './img/1991_1.PNG'
import Img2 from './img/1991_2.PNG'
import Img3 from './img/1991_3.PNG'
import Img4 from './img/1991_4.PNG'
import Img5 from './img/1991_5.PNG'
class Posting12 extends Component{
  render(){
    return(
      <div className="left">
      <h1>트리 순회<h3>(정답률 : 63.457%)</h3></h1>
      <h4>
      이번 문제는 자료구조인 트리를 구현하는 문제이다.<br/><br/>
      각 트리의 자식이 왼쪽 오른쪽이 주어지고, 전위, 중위, 후위 순회를 돌면서 탐색한 순서를 출력하는 문제이다.<br/><br/>
      <h3>트리 구조란?</h3>
      트리 구조의 기본 구성은 다음과 같다.
      <div className="code">
      루트(root) 노드 : 부모가 없는 노드, 트리는 루트 노드가 하나이다.<br/><br/>
      리프(leaf) 노드 : 자식이 없는 노드, '단말 노드'또는 '잎 노드'라고 부른다.<br/><br/>
      내부(internal) 노드 : 리프 노드가 아닌 노드이다.<br/><br/>
      </div>
      가장 기본 구성은 위 세가지이며, 이렇게 뻗어 나가는 노드는 마치 나무가 뻗아가는 모양과 닮아있다.<br/><br/>
      <img src={Img1} class="code"/><br/><br/>
      이런 형태가 가장 일반적으로 자식노드의 경우 여러개가 될 수 있지만, 2개를 사용하는 이진트리가 가장 많이 쓰인다.<br/><br/>
      그림처럼 연결리스트를 이용하여 완벽하게 저런 구조를 사용할 수는 있지만, 배열을 이용해서도 충분히 구현을 할 수가 있다.<br/><br/>
      이번 문제는 배열로 구현을 해보았다.<br/><br/>
      각각 전위, 중위, 후위 순회를 재귀적으로 코드를 작성하였다.<div/><div/>
      <h3>순회란?</h3>
      기본적으로 이진트리에서 순회를 하는 순서가 전위 중위 후위 순회로 나뉘는데, 먼저 전위 순회란 노드를 방문하고 왼쪽 서브 트리를 방문, 오른쪽 서브 트리를 방문하는 순이다.<div/><div/>
      보기쉽게하면<div/><div/>
      <h2>전위 순회</h2>
      <div className="code">
      1. 노드를 방문한다.<div/><div/>
      2. 왼쪽 서브트리를 방문한다.<div/><div/>
      3. 오른쪽 서브트리를 방문한다.<div/><div/>
      </div>
      <div/><div/>
      이런 구조가 되며, 중위, 후위의 경우 순서만 다르고 큰 차이는 없다.<div/><div/>
      <h2>중위 순회</h2>
      <div className="code">
      1. 왼쪽 서브트리를 방문한다.<div/><div/>
      2. 노드를 방문한다.<div/><div/>
      3. 오른쪽 서브트리를 방문한다.<div/><div/>
      </div>
      <h2>후위 순회</h2>
      <div className="code">
      1. 왼쪽 서브트리를 방문한다.<div/><div/>
      2. 오른쪽 서브트리를 방문한다.<div/><div/>
      3. 노드를 방문한다.<div/><div/>
      </div>
      위의 세가지 순회를 잘보면 재귀적으로 순회를 한다는 것을 알수있으며, 아래와 같이 코드가 나올수 있다.<div/><div/>
      <div class='code' style={{display:"flex"}}>
      <img src={Img2} class="code"/>
      <img src={Img3} class="code"/>
      </div>
      <div class='code' style={{display:"flex"}}>
      <img src={Img4} class="code"/>
      <img src={Img5} class="code"/>
      </div>
      일단 트리배열의 경우 아스키코드로 값을 받아서 저장공간을 최소화하기 위해서 생성과 입력, 참조에서 -65 를 해주었다.<div/><div/>
      이차원 배열에서 row부분을 부모노드로, col부분을 자식노드로 생각하여 코드를 작성하였다.<div/><div/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting12;
