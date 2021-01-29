import React, {Component} from 'react';
import '../App.css'
import Img1 from './img/react_start.PNG'
import Img2 from './img/react_start1.PNG'
import Img3 from './img/react_start2.PNG'
import Img4 from './img/react_start3.PNG'
import Img5 from './img/react_start4.PNG'
import Img6 from './img/react_start5.PNG'

class App extends Component{
    render(){
      return(
        <div className="left">
        <h1>리액트 사용법</h1>
        <h4><br/>
        <div className="code">npm install -g create-react-app<br/><br/>
        create-react-app my-app</div>(my-app은 원하는 이름으로)<br/><br/>
        위의 두 명령어를 실행하면 리액트 파일이 생성된다. 파일을 생성하면 다음과 구조가 같다.<br/><br/>
        <img src={Img1}/>
        <br/><br/>
        리액트가 잘 작동하는지 확인하기 위해 리액트 폴더에서<br/>
        <div className="code">npm run start</div> 명령어를 실행해본다.<br/><br/>
        <img src={Img2}/><br/><br/>
        이와 같이 나오면 제대로 설치가 완료된것이다.<br/><br/>
        이후 src에 들어가서 app.js와 index.js를 제외한 나머지 파일을 지워준다.<br/><br/>
        index.js의 파일의 경우는 다음과 같이 만들어 주고<br/><br/>
        <img src={Img3}/><br/><br/>
        app.js의 파일의 경우는 다음과 같이 만들어 준다.<br/><br/>
        <img src={Img6}/><br/><br/>
        <img src={Img5}/><br/><br/>
        이제 개발을 시작하면 된다. (배경색은 원래는 흰색으로 글자만 나옵니다.)<br/><br/>
        </h4>
        </div>
      );
    }
}
export default App;
