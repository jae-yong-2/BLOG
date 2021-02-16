import React,{Component} from 'react'
import Img1 from './img/study3_1.PNG'
import Img2 from './img/study5_2.PNG'
import Img3 from './img/study3_2.PNG'

class Posting6 extends Component{
  render(){
    return(
      <div className="left">
      <h1>블로그 만들기3</h1>
      <h3>My_Study 페이지 만들기</h3>
      <h4>
      이번에는 저번 시간에 이어서 My_Study페이지를 생성해본다. 이전에 props로 My_Study에 state를 전달했었다.<br/><br/>
      이 데이터를 활용해보기 위해 게시판처럼 만들었고 return 하는 코드는 다음과 같다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      <div className="code">&lt;Parent data=&#123;this.state&#125;/&gt;</div>
      만약 부모 컴포넌트에서 위와 같이 값을 전달했을 경우<br/><br/>
      <div className="code">this.props.data</div>
      이런 식으로 데이터 사용이 가능하다.<br/><br/>
      이렇게 전달 받은 state와 map함수를 통해서 title배열을 돌면서 전달 받은 값을 보여준다.<br/><br/>
      key값은 제목을 this.state.state.text[index]로 내용을 보여준다. style은 display:"none"을 하여 보기 버튼을 누를때만 보이게 설정을 해둔다.<br/><br/>
      보기와 제거 함수는 아래와 같다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      보기 함수의 경우 클릭마다 내용을 보여주고 가려주고를 하게 한다. 이는 id를 index나 key을 주어 그에 해당하는 div나 button이 반응하게 했다.<br/><br/>
      remove함수의 경우 App.js에서 상태를 갖고있기 때문에 이벤트를 가져와서 사용한다. 코드는 다음과 같다.<br/><br/>
      <img src={Img3} className="code"/><br/><br/>
      여기서는 데이터를 지울때 slice와 concat함수를 사용해 봤다.<br/><br/>
      slice함수는 매개변수 2개를 사용하는데, 첫번째 인덱스에서 두번째 인덱스까지의 데이터를 가져오는 것이다.<br/><br/>
      예를 들어 slice(0,10)일경우 배열 인덱스 0에서 9까지의 값을 가져온다.<br/><br/>
      concat함수의 경우 뒤에 값을 붙혀주는 함수이다.<br/><br/>
      이 두가지를 합쳐 slice(0,index)와 slice(index+1,array.length)를 concat으로 합쳐주면 index의 위치에 있는 값이 지워지게 되는것이다.<br/><br/>
      indexOf 함수는 그 배열에 같은 값을 가진 위치의 인덱스를 반환한다.<br/><br/>
      이렇게 My_Study페이지를 구현하였고, 이후에 추가적인 내용은 컴포넌트를 생성하여 import하는 식으로 진행할 계획이다.<br/><br/>
      다음 포스팅은 Posting페이지를 만드는 과정을 설명해 본다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      </h4>
      </div>
    );
  }

}

export default Posting6;
