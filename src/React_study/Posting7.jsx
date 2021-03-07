import React, {Component} from 'react';
import '../App.css'
import Img1 from './img/study6_1.PNG'
import Img2 from './img/study6_2.PNG'
import Img3 from './img/study6_3.PNG'
import Img4 from './img/study6_4.PNG'
import Img5 from './img/study6_5.PNG'
import Img6 from './img/study6_6.PNG'

class Posting1 extends Component{
    render(){
      return(
        <div className="left">
        <h1>묘듈화해보기</h1>
        <h4>
        이번 포스팅에서는 메뉴창이 여러개 늘어났을 때 코드가 쓸대없이 많이 늘어나는 것을 방지하기 위해서 모듈화를 해볼것이다.<br/><br/>
        우선 이 블로그 기본구조가 모든 창은 컴포넌트로 각각의 jsx파일을 갖고있기 때문에 모든 jsx파일을 불러올때 한번에 묶어서 불러올수 있도록 다음과 같이 listOfContents.jsx파일을 생성해 준다.<br/><br/>
        <img src={Img1} className="code"/><br/><br/>
        이렇게 생성한 파일안에 모든 포스팅.jsx파일을 import후에 List로 묶어서 export해준다. 코드는 다음과 같다.<br/><br/>
        <img src={Img2} className="code"/><br/><br/>
        이제 listOfContents파일을 import하게되면 List부분이 모두 호출하게 된다. List는 모든 포스팅을 컴포넌트 형식으로 갖고있다.<br/><br/>
        이를 활용하면 아래처럼 필요없는 코드를 수정할 수 있다. 두 코드는 같은 코드이다.
        <div style={{display:"flex"}}><br/><br/>
        <img src={Img3} className="code"/>
        <div className="code">import &#123; List &#125; from './listOfContents'</div>
        </div>
        다음은 List를 호출한 후 활용하면 끝이나게 된다.<br/><br/>
        활용법은 간단하다. 그냥 List가 listOfContents에서 불러온 List그대로 생각하여 map함수를 사용하면 코드를 줄일 수 있다.<br/><br/>
        아래는 수정 전 코드와 수정 후 코드이며, 둘다 똑같이 작동을 한다.<br/><br/>
        <img src={Img5} className="code"/><br/><br/>
        <img src={Img6} className="code"/><br/><br/>
        여기서 주의할 점은 id값을 잘 줘야한다는 것이다.<br/><br/>
        처음에 map함수에서 부여해주는 index값을 그대로 사용했다가 알고리즘에서 사용한 id값이 겹친다는 것을 알았다. 코드상에서는 id가 떨저여있어 문제가 없다고 생각하여 사용했지만
        실제로는 같은 페이지에서 작동을 하기때문에 id값의 충돌이 일어난 것이다. 다음에는 이런 실수가 없도록 하자.<br/><br/>
        이제 listOfContents에서 import만 해주면 생성한 페이지를 바로 렌더링할 수 있다.<br/><br/>
        다음 포스팅은 리액트앱을 깃허브에 배포하는 방법을 포스팅 하겠다.<br/><br/>
        이상 포스팅 끝<br/><br/>

        </h4>
        </div>
      );
    }
}
export default Posting1;
