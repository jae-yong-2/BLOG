import React, {Component} from 'react'
import Img5 from './img/1_5.PNG'
import Img6 from './img/1_6.PNG'
import Img7 from './img/1_7.PNG'
import Img8 from './img/1_8.PNG'
import Img9 from './img/1_9.PNG'
import Img10 from './img/1_10.PNG'
import Img11 from './img/1_11.PNG'
class Posting2 extends Component{
  render(){
    return(
      <div className="left">
      <h1>kNN-실습</h1>
      <h4>
      실습을 통해서 kNN을 사용해보자.
      우선 사용된 패키지는 다음과 같다.<br/><br/>
      <img src={Img5}className="code"/><br/><br/>
      iris는 불꽃 데이터로 sklearn에서 기본적으로 제공해주는 데이터이다. 아래처럼 호출후에 split함수를 이용해 랜덤으로 train과 test를 분류해 준다.<br/><br/>
      <img src={Img6}className="code"/><br/><br/>
      아래는 k를 1~99까지 변경해가면서 kNN모델을 생성하고, 그 모델에 학습을 시켜 train과 test set에 대한 R^2를 score이라는 pd객체에 저장을 한다.<br/><br/>
      <img src={Img7}className="code"/><br/><br/>
      이렇게 나온 k에 따른 R^2는 아래와 같은 그래프를 보이는데, 파란색이 train 빨간색이 test에 대한 결과이다.<br/><br/>
      <img src={Img8}className="code"/><br/><br/>
      파란색과 빨간색 모두 처음에는 높게 나오다가 나중에 k가 커질수록 낮게 나오는 데, 이것은 생각해보면 당연한 결과이다.<br/><br/>
      파란색의 경우는 맨처음 1일때 1에 가까운 R^2를 보여주는데, 이건 학습된 데이터를 그대로 사용했기 때문에 당연한 결과이고 갈수록 R^2가 낮아지는 것을 볼 수 있다.<br/><br/>
      k가 1에 가까울 수록 overfitting으로 볼 수 있고, k가 커질수록 underfitting으로 볼 수 있다.<br/><br/>
      빨간색의 경우 처음에는 1일때 좀 낮다가 9~12사이 쯤에 높은 R^2를 볼 수 있는데, 이 상황에서 train보다 R^이 높기 때문에 underfitting되었을 가능성이 크다.<br/><br/>
      그럼 k는 몇일때 좋은 모델이라고 생각할 수 있을까? 개인적인 생각으로는 train과 test에 대한 R^2가 가장 비슷한 3~5일때 좋은 모델이라고 생각이 된다.<br/><br/>
      그럼 실제로 예측 정확도는 어떻게 되었을까?<br/><br/>
      <img src={Img9}className="code"/><br/><br/>
      위처럼 나온다. 위 그래프에서는 k가 1~5일때가 상당히 높은 정확도를 보이고, 그 뒤는 R^2를 고려했을 때 높더라도 그렇게 잘 학습됐다고 판단은 되지않는다.<br/><br/>
      그럼 R^2과 예측 정확도를 고려해 볼때, 실제로 사용을 해야한다면 k를 3~4정도로 두고 사용할 것을 추천할 것 같다.<br/><br/>
      아래는 정규화를 했을때이다. 확실히 많이 개선된 모습을 보이니 참고하자. 각각 R^2와 예측정확도이다.<br/><br/>
      <img src={Img10}className="code"/><br/><br/>
      <img src={Img11}className="code"/><br/><br/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting2
