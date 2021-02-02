import React, {Component} from 'react';
import '../App.css'
import Img from './img/4344.PNG'

class App extends Component{
  render(){
    return(
      <div className="left">
      <h1>평균은 넘겠지<h3>(정답률 : 37.470%)</h3></h1>
      <h4>
      백준 4344번 문제로 평균을 넘는 학생의 수를 구하는 것이다.<br/><br/>
      이 문제는 배열로 간단히 풀 수 있지만 C++에서 사용하는 vector기능을 이용하여 풀어 보았다.<br/><br/>
      코드는 다음과 같다.
      <br/><br/>
      <img src={Img} className='code'/>
      <br/><br/>
      vector는
      <div className="code">#include &lt;vector&gt;</div>
      <br/><br/>
      이렇게 불러와야 사용할 수 있고
      <div className="code">
      std::vector&lt;vector&gt; v(number);
      </div>
      <br/><br/>
      이렇게 선언했을 때, v는 변수명, number은 백터의 사이즈 int는 자료형에 해당한다.<br/><br/>
      가장 많이 쓰이는 함수 위주로 정리를 하자면<br/><br/>
      <div className="code">
      v.front();<br/><br/>
      v.back();<br/><br/>
      v.push_back(number);<br/><br/>
      v.pop_back();<br/><br/>
      v.begin();<br/><br/>
      v.end();<br/><br/>
      v.size();<br/><br/>
      </div><br/><br/>
      위주로 사용하고, 각각 벡터의 맨처음, 마지막 잠초, 마지막 원소뒤에 number삽입, 마지막 원소 제거,
      벡터 처음과 마지막 가르키기(iterater), 벡터의 사이즈반환이다.<br/><br/>
      <div className="code">std::accumulate(start,end,0);</div><br/><br/>
      의 경우에는 벡터의 평균을 구할 때, 총합을 구하기 위해서 사용하는 코드로
      <div className="code">#include&lt;numeric&gt;</div><br/><br/>
      에서 불러와 사용하며, 백터의 시작, 끝, 자료형으로 생각하여 사용하면 된다.
      이상 벡터에 대해 알아보았다.<br/><br/>이 문제의 경우 알고리즘적으로 어려운 것은 없으니 풀이는 생략한다.
      </h4>
      </div>
    );
  }
}

export default App;
