import React,{Component} from 'react'
import '../App.css'
import Img1 from './img/1018_1.PNG'
import Img2 from './img/1018_2.PNG'
class Posting3 extends Component{


  render(){
    return(
      <div className="left">
        <h1>체스판 다시 칠하기<h3>(정답률 : 46.526%)</h3></h1>
        <h4>
        이번 문제는 단순 알고리즘 문제이다. 입력받은 체스판에서 8*8모양으로 추출한 후 체스판의 규격에 맞게<br/><br/>
        색칠을 다시 해주고, 이렇게 색칠된 횟수를 계산하여 가장 적게 색칠할 수 있는 횟수를 찾는게 풀이이다.<br/><br/>
        처음 문제를 보고, python을 활용하여 문제를 풀면 쉽게 풀릴 것으로 생각이 되었다.<br/><br/>
        하지만 C++을 이용하여 문제를 풀어보았다.<br/><br/>
        가장 먼저 떠오른 아이디어는 이미지처리에서 사용하는 필터의 개념이었다. 입력받은 값을 이미지의 값으로<br/><br/>
        생각을 하고 필터가 돌면서 색칠해야하는 경우(처음이 검은색, 처음이 흰색)중 작은 값을 선택하고, 이전의<br/><br/>
        최소값과 비교해 값을 가져가는 방식으로 해보았다.<br/><br/>
        먼저 흰색, 검은색 보드를 선언해 주었다.<br/><br/>
        <img src={Img1} className="code"/><br/><br/>
        이렇게 필터(보드)를 만들어 주고 각 이미지를 돌면서 비교를 한다.<br/><br/>
        아래는 핵심 알고리즘이다.<br/><br/>
        <img src={Img2} className="code"/><br/><br/>
        두가지 필터를 돌면서 최소값을 찾아주고, 이전의 최소값과 비교하여 최종값을 반환한다.<br/><br/>
        문제 차제는 난이도가 어렵지않지많, 시간을 줄이기를 신경쓴다면 어렵게 풀수 있을것 같다.<br/><br/>
        또 문제를 처음에 잘못읽어 어렵게 풀었는데, 다음부터는 문제를 잘 읽어야겠다. 이상 포스팅 끝<br/><br/>

        </h4>
      </div>
    );
  }
}

export default Posting3
