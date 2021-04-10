import React, {Component} from 'react';
import '../App.css'
import Img1 from './img/1_1.PNG'
import Img2 from './img/1_2.PNG'
import Img3 from './img/1_3.PNG'
import Img4 from './img/1_4.PNG'
import Img5 from './img/1_5.PNG'
import Img6 from './img/1_6.PNG'

class Posting1 extends Component{
  render(){
    return(
      <div className="left">
      <h1>Android 페이지 이동과 정보 넘기기</h1>
      <h4>
      우선 안드로이드는 화면으로 보여주는 xml파일과 직접 화면에서 작동을 하게하는 java 또는 코틀린 파일로 나뉜다.<br/><br/>
      이번에 해볼 것은 이렇게 보여주는 화면 2개와 직접 작동하는 코드 2개를 활용하여 메인화면에서 서브 화면으로 값을 넘겨주는 작업을 해볼 것이다.<br/><br/>
      우선 메인화면의 코드는 다음과 같다.<br/><br/>
      <img src={Img1} class="code"/><br/><br/>
      EditText태그는 화면에서 직접 정보를 입력받는 태그이며 id는 태그에 id를 부여하고 layout은 여러가지 위아래 옆 등 높낮이를 결정해준다. hint속성은 입력하기전에 태그에 어떤 데이터를 입력해주는지 힌트를 주는 태그이다.<br/><br/>
      Button태그는 버튼을 생성하는 태그이며 이 버튼을 이용해서 다른 페이지로 넘어감과 동시에 EditText태그에 있는 text를 동시에 넘겨줄 것이다.<br/><br/>
      이 코드에 대한 결과는 다음과 같다.<br/><br/>
      <img src={Img2} class="code"/><br/><br/>
      다음코드는 sub페이지의 코드이다.<br/><br/>
      <img src={Img3} class="code"/><br/><br/>
      구성은 메인과 비슷하며, EditText태그를 TextView태그로 바꾼 차이이다.<br/><br/>
      결과는 다음과 같다. 여기서 text가 이동하였습니다.라고 되어있지만, 나중에 메인에서 값을 받아오면 데이터가 변경되어 어플을 실행했을 때는 보이지 않는다.<br/><br/>
      <img src={Img4} class="code"/><br/><br/>
      여기서 xml에서 사용한 EditText와 Button을 활용하기 위해서 변수를 생성하고 id값을 이용해서 findViewById함수로 태그를 불러운다.<br/><br/>
      이제 버튼 태그를 활용하기 위해서 btn_text에 id로 xml파일의 태그를 불러오고 setOnClickListener함수로 클릭시에 활동을 설정한다.<br/><br/>
      onClick 함수를 안에 다시 생성한다. onClick함수는 btn_text를 클릭했을때 동작하는것을 설정해주는 함수이다. 그안에 Intent를 설정한다. Intent는 간단하게 Main파일에서 sub파일로 넘어가기위해서 연결해주는 역할을 한다고 생각하면 편하다.<br/><br/>
      그후에 et_id에서 text 정보를 가져오고 intent에 putExtra함수를 이용해 "str"이라는 아이디를 부여하고 방금 가져온 text정보를 sub에 보내준다.<br/><br/>
      그다음 intent를 실행해준다. startActivity는 지금까지 받은 정보를 가지고 액티비티 이동을하는 것이다.<br/><br/>
      이렇게 완성된 코드를 실행하면 입력받은 정보가 sub로 가는 것을 볼수있다.<br/><br/>
      </h4>
      </div>
    );
  }
}

export default Posting1;
