import React, {Component} from 'react'
import '../App.css'
import Img1 from "./img/18258_1.PNG"
class Posting7 extends Component{
  render(){
    return(
      <div className="left">
      <h1>큐 2<h3>(정답률 : 30.82%)</h3></h1>
      <h4>
      이번 문제는 라이브러리 큐를 사용하는 문제이다. 제한 시간이 1초이기 때문에 구현으로 답을 맞추기에는 시간초과가 뜨기 때문이다.<br/><br/>
      문제에서 사용하는 명령어는 "push", "pop", "size", "empty", "empty", "front", "back"이렇게 6가지로 구현이 된다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      여기서 문자를 전부 비교해서 하는것은 속도를 느리게 하기때문에 문자열을 입력받으면 특정문자열의 문자를 비교하여 이런 식으로 명령어를 실행한다.<br/><br/>
      이 문제에 사용된 queue의 명령어는 다음과 같다.<br/><br/>
      <div className="code">
      queue.front();<br/><br/>
      queue.back();<br/><br/>
      queue.pop();<br/><br/>
      queue.size();<br/><br/>
      queue.empty();<br/><br/>
      </div>
      front()와 back()은 각각 큐의 맨 앞부분과 맨 뒷부분의 값을 참조하는 함수이고 pop()은 맨 앞의 값을 없애주는 함수이다.<br/><br/>
      size()는 큐의 사이즈를 나타내고 empty()는 큐가 비어있으면 true, 차있으면 false를 반환한다.<br/><br/>
      이를 적절히 활용하여 문제를 풀 수 있다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      </h4>
      </div>
    );
  }
}

export default Posting7;
