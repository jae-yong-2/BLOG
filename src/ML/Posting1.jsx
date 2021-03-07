import React, {Component} from 'react';
import '../App.css'
import Img1 from './img/1_1.PNG'
import Img2 from './img/1_2.PNG'
import Img3 from './img/1_3.PNG'
import Img4 from './img/1_4.PNG'
import Img5 from './img/1_5.PNG'
import Img6 from './img/1_6.PNG'
import Img7 from './img/1_7.PNG'
import Img8 from './img/1_8.PNG'
import Img9 from './img/1_9.PNG'
import Img10 from './img/1_10.PNG'
import Img11 from './img/1_11.PNG'
class Posting1 extends Component{
    render(){
      return(
        <div className="left">
        <h1>kNN</h1>
        <h4>
        kNN은 k-Nearest Neighbors Classifier의 약자로 특정 데이터가 새로 주어졌을 때, 이전의 집계 되어있는 데이터들의 수치적인 거리를 이용해 새로 들어온 데이터가 어느 클래스인지 구별해주는 방법이다.<br/><br/>
        <img src={Img1}className="code"/><br/><br/>
        이와 같은 상태로 빨간색 점과 파란색 점이 이전에 있던 데이터라고 생각을 하자.<br/><br/>
        그럼 여기서 새로 들어온 검은색 점은 어떻게 분류가 될까???<br/><br/>
        정답은 k(주변을 검색하는 점의 갯수)에 따라 다르게 나올 수 있다. 아래는 k가 3일 경우이다.<br/><br/>
        <img src={Img2}className="code"/><br/><br/>
        k에서 가장 가까운 점 3개를 보자. 빨간색 1개 파란색 2개라는 결과를 볼 수 있다. 그럼 새로들어온 점은 어디로 갈까?<br/><br/>
        답은 간단하다 바로 파란점으로 분류가 될 것이다!<br/><br/>
        그런데 k가 만약 3이 아닌 7이라면??<br/><br/>
        <img src={Img3}className="code"/><br/><br/>
        그림을 보면 빨간색 4개 파란색 3개가 되어있다는 것을 볼 수 있다.<br/><br/>
        그럼 이 검은색 점은 빨간색으로 분류가 될 것이다! 단수히 k를 조절하는 거에서도 차이를 보이게 된다.<br/><br/>
        이 처럼 kNN은 주변의 값을 이용해서 자신이 어디로 갈 것인지를 분류하는 기법이다.<br/><br/>
        이렇게 단순하고 매우 좋아보이는 기법에도 단점은 존재한다.<br/><br/>
        가장 간단하게 생각할 수 있는것이 만약 들어오는 데이터가 거리(수치)가 아닌 문자와 같은 것들이라면??<br/><br/>
        해답은 '원핫인코딩'이라는 기법이다. 이 기법은 kNN 기법이 아닌 데이터를 전처리하는 방법이다. 각 테이터를 categorical한 방법으로 나누는 것이다.<br/><br/>
        여기서 주의할 점은 예를 들어 '학생', '선생', '부모'라는 항목이 들어오면 각각을 1,2,3으로 나누는 것이 아닌 아래와 같이 처리를 해야한다.
        <div className="code">학생  0/0/1<br/>선생 0/1/0<br/>부모 1/0/0</div><br/><br/>
        그 이외의 다른 문제점은 간단한 예제로 축구를 생각을 해보자. 어떤 선수가 뛰는 거리와 평소의 골 횟수를 이용해 이번 시즌 좋은 성적을 받을지를 예측하고 싶다.<br/><br/>
        그런데 생각해보자 뛰는게 한경기에 1000m라고 가정을 하고 골 넣는 횟수가 0.5회라고 데이터가 들어왔다.<br/><br/>
        이 선수 뿐만 아닌 다른 선수들도 1~2000m를 뛰고 0.2~1.2정도의 데이터를 가지고 들어온다. 과연 이런 데이터에서 골을 넣는 횟수가 kNN에서 큰 영향을 미칠까 아니면 뛴 거리가 더 많은 영향을 미칠까?<br/><br/>
        실제로는 골넣는 횟수가 더 중요하지만 뛴 횟 거리가 더 크고 오히려 골 횟수는 거의 중요하지 않는 수준으로 데이터를 분석하게 된다.<br/><br/>
        이런 경우를 방지하기 위한 해결법은 normalization을 사용하는 방법이다. 간단하게 말하면 모든 항목에 대한 평균을 0 표준편차를 1로 정규화를 시켜 모든 항목의 중요도를 같게 만드는 것과 같다.<br/><br/>
        <img src={Img4}className="code"/><br/><br/>
        <a href="http://hleecaster.com/ml-normalization-concept/">사진출처</a><br/><br/>
        위 그림은 정규화하기 전과 정규화를 한 후의 사진이다.
        정규화 말고도 각 거리마다 가중치를 줘서 계산해 주는 방법도 있다. 이 방법은 k=5일 경우 파란색이 2개 빨간색이 3개로 빨간색이 되어야하는 경우라고 보자.<br/><br/>
        근데 만약 파란색의 경우 거리가 1이고 빨간색의 경우 거리가 100이면 과연 빨간색이라고 분류할 수 있을까? 이를 방지 하기위해 가중치를 주어 계산하는 방법도 있다.<br/><br/>
        <h3>R^2</h3>
        R^2란
        <div className="code">(타깃-예측)^2의 합<br/>ㅡㅡㅡㅡㅡㅡㅡㅡㅡ<br/>(타깃-평균)^2의 합</div><br/><br/>이며 이는 모델이 얼마나 잘 학습되었느냐를 확인해주는 지표이다. 이 값이 1에 까울 수록 더 좋은 모델이라고 볼 수있다.
        하지만 무조건 1에 가깝다고 좋은 것은 아니다. 만약 train의 R^2이 test보다 낮으면 잘 학습이 되지 못했다고 볼 수 있다.<br/><br/> 이제 실제 실습을 통해서 kNN을 사용해보자.
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
        이상 포스팅 끝<br/><br/>
        </h4>
        </div>
      );
    }
}
export default Posting1;
