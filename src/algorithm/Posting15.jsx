import React, {Component} from 'react'
import Img1 from './img/1541.PNG'

class Posting15 extends Component{
  render(){
    return(
      <div class="left">
      <h1>잃어버린 괄호</h1><h3>47.968%</h3>
      <h4>
      이번 알고리즘 문제는 문자열 파싱과 그리디 알고리즘 문제이다. 덧셈과 뺄셈으로 이루어진 문자열을 인식해서 수식을 인식하고 괄호를 넣었을 때, 가장 작은 숫자가 될 수 있게 하는 값을 찾는게 문제이다.<br/><br/>
      그리디 알고리즘이란 그 상황에서 제일 좋은 상황을 수행하는 알고리즘으로 쉽게 이해하자면 정말 욕심이 많은 알고리즘이다.<br/><br/>
      우선 코드를 보면 다음과 같다.<br/><br/>
      <img src={Img1} class="code"/><br/><br/>
      생각해낸 방법은 스택을 이용해서 문자열을 뒤에서부터 읽어낸다.<br/><br/>
      숫자의 경우 - 기호나 + 기호를 만날때까지 아스키코드 값으로 받으면서 10씩 곱해가면서 더해서 숫자를 완성한다.<br/><br/>
      그리고 +를 만나면 값을 계속 더해가고, -를 만나면 쌓인 값을 -로 만들어 값이 되는 값에 더한다.<br/><br/>
      <div class="code">
      1. dec=1, num=0, plus=0, sum=0<br/><br/>
      2. pop을 하고 num+=num한다.<br/><br/>
      3. dec*=10<br/><br/>
      4-1 +를 만나면 plus+=num 이후 num과 dec를 초기화한다.<br/><br/>
      4-2 -를 만나면 plus+=num 후 sum+= -plus를 한후 num과 dec를 초기화한다.<br/><br/>
      4-3 stack이 비면 sum+=plus+num;을 한다.<br/><br/>
      5. stack이 빌때까지 1~4를 반복한다.
      </div><br/>
      여기서 1~3은 숫자를 파싱해서 인식해오는 것이고, 4-1은 -를 만나기 전까지 모든 숫자를 더해 주며, 4-2는 -를 만나면 값을 빼서 +부분을 전부 -로 만들어준다.<br/><br/>
      4-2가 핵심인데 -뒤부터 다음 -부호가 나오기 전까지 괄호를 넣은것과 같은 효과를 준다. 마지막으로 4-3은 단순히 마무리 작업으로 지금까지 쌓아온 값을 마지막 값과 더해준다.<br/><br/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}
export default Posting15
