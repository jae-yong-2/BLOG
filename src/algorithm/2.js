import React, {Component} from 'react';
import '../App.css'
import Img1 from './img/11650.PNG'
import Img2 from './img/11650_1.PNG'
class App extends Component{
  render(){
    return(
      <div className="left">
      <h1>좌표 정렬하기</h1>
      <h4>백준 11650번 문제로 주어진 좌표를 정렬하는 문제이다. 이 문제는 여러 방법으로 풀 수 있지만<br/><br/>
      c++언어에서 제공해주는 vector와 pair기능 그리고 sort기능을 이용하면 아주 간단하게 풀 수 있다.<br/><br/>
      코드는 다음과 같다.<br/><br/>
      <img src={Img1}className="code"/><br/><br/>
      여기서 vector는 저번 포스팅에서 이미한 상태로 no.4344를 참고하면 된다. 이번 포스팅은 pair를 위주로 포스팅을 한다.<br/><br/>
      pair는 header 파일이 utility이며 서로다른 자료형을 묶어두는 구조체이다.<br/><br/>
      <div className="code">#include&lt;utility&gt;</div><br/><br/> 이렇게 호출하여 사용하며 선언은 아래와 같다.
      <div className="code">std::pair&lt;&lt;Class T&gt;,&lt;Class T&gt;&gt; name;</div>
      pair의 경우는 좀 특이하게 std::make_pair()라는 함수를 사용하여 값을 넣어주는데, 사용법은 아래와 같다.
      <div className="code">name=std::make_pair(v1,v2);</div><br/><br/>
      위의 알고리즘 문제에서는 벡터의 자료형을 pair 자체로 두어 좌표를 벡터의 하나의 저장공간에 넣는 것이다.<br/><br/>
      여기서 벡터는 sort함수를 통해서 문제에서 원하는대로 정렬이 가능하다.<br/><br/> 이때 난 저번 포스팅에서는 알지 못했던 sort의 기능을 하나 알았다.<br/><br/>
      그건 정렬하는 방법을 사용자가 직접 정해주는 방법이었는데, 함수를 새로 정의해서 sort의 세번째 parameter에 넣어주면 그 함수의 반환값에 <br/><br/>따라서 자동으로 정렬되는 기능이다.<br/><br/>
      </h4>
      <img src={Img2} className="code"/><br/><br/>
      이렇게 비교해주는 함수를 사용후에 다음과 같이 코드를 작성하면,
      <div className="code">std::sort(v.begin(),v.end(),cmp);</div>
      문제에서 원하는 값이 나오게 된다. 이상 포스팅 끝.
      </div>
    );
  }
}

export default App
