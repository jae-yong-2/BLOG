import React, {Component} from 'react'
import Img1 from './img/4-1.PNG'
import Img2 from './img/4-2.PNG'
import Img3 from './img/4-3.PNG'
import Img4 from './img/4-4.PNG'
import Img5 from './img/4-5.PNG'
import Img6 from './img/4-6.PNG'
import Img7 from './img/4-7.PNG'
import Img8 from './img/4-8.PNG'
import Img9 from './img/4-9.PNG'
import Img10 from './img/4-10.PNG'
import Img11 from './img/4-11.PNG'
import Img12 from './img/4-12.PNG'

class Posting3 extends Component{
  render(){
    return(
      <div class="left">
      <h1>Decision Tree-실습</h1>
      <h4>
      사용된 패키지는 다음과 같다.<br/><br/>
      <img src={Img1} class="code"/><br/><br/>
      우선 가장 먼저 해볼 분석은 아무것도 하지 않은 상태로 기본 DecisionTreeClassifier를 사용하는 것이다.<br/><br/>
      <img src={Img2} class="code"/><br/><br/>
      위 처럼 train data에 대해서 정확도가 100%인 것을 보니 문제없이 overfitting을 한것을 알 수 있고, test data에 대해서는 99%의 정확도를 보인다.<br/><br/>
      학습된 데이터를 시각화하면 다음과 같고 리프노드 즉, class의 분류 갯수는 207개 인것을 알 수 있다.<br/><br/>
      <img src={Img3} class="code"/><br/><br/>
      다음으로 해볼 것은 feature_importance이다. feature_importance란?<br/><br/>
      주어진 데이터는 한가지의 정보만 가지고 있는게 아니다. 여러가지 속성을 가지고 있고, 그중 중요한것과 중요하지 않은것이 나뉠 것이다.<br/><br/>
      DecisionTreeClassifier에서는 이것을 비율로 정리해주는 퍼센트가 있고 그 함수는 feature_importances_이다. 이번에 해볼 것은 이 feature_importances_를 이용해 몇개의 속성만 가지고 해볼 것이다.<br/><br/>
      <img src={Img4} class="code"/><br/><br/>
      이렇게 코드를 짜서 가장 중요한 3번째 순서까지 데이터를 다시 뽑아서 학습을 시켜봤다.<br/><br/>
      학습시킨 트리를 시각화하면 아래와 같고, 정확도는 96%가 나왔다.<br/><br/>
      아무런 조건없이 모든 속성을 사용한것 보다는 정확도가 조금 낫게 나왔지만, 적은 속성을 사용하고도 괜찮은 성능을 가질 수 있다는 것을 확인 할 수 있었다.<br/><br/>
      처음에는 이렇게 하면 연산량에서도 낮게 나올 것이라고 생각을 했는데 그렇지는 못했다. 아래 그림을 보면 알겠지만, 훨씬더 많은 리프노드가 있는 것을 알 수 있고 실제로 1326개를 생성했다.<br/><br/>
      <img src={Img5} class="code"/><br/><br/>
      전처리없이 사용한 데이터는 시각화하기 까다로웠지만, feature_importance를 통해 3차원으로 만든 데이터는 시각화를 하기 편리하다는 장점도 생겼다. 그렇게 시각화한 데이터는 아래처럼 나온다.<br/><br/>
      <img src={Img6} class="code"/><br/><br/>
      데이터는 유방암 발병과 관련된 데이터이며, 실제로 DT의 경우 그렇게 성능이 좋은 편은 아니지만, 여기서는 좋게나온 이유를 데이터를 보면 알 수 있다.<br/><br/>
      기본적으로 데이터가 한눈에 봐도 분류하기 좋게 나와있으며, 이것은 중요도가 가장높은 3가지를 추출한 것이고, 다른 추가적인 데이터가 주어지면 더 정확해 질수 밖에 없다.<br/><br/>
      다음으로는 트리의 여러가지 조건을 부여하여 분석해 보겠다.<br/><br/>
      <h3>ccp_alpha</h3>
      처음에는 ccp알파를 이용해서 해보았다.<br/><br/>
      <img src={Img7} class="code"/><br/><br/>
      cost_complexity_pruning_path를 이용하면 inpurity와 ccp_alpha를 구할 수 있다. 여기서 ccp_alpha는 pruning하는 과정에서 cost함수의 &alpha;를 의미한다.<br/><br/>
      비교는 class에 weight를 주어 비교를 해보았다. 가지를 뻗어가는 과정에서는 비중을 주어 비교해보고, pruning과정에서는 ccp_alpha의 변화를 주어 비교해 보았다.<br/><br/>
      <img src={Img8} class="code"/><br/><br/>
      ccp_alpha의 경우 사용자가 직접 설정을 해주면서 찾아봐야하는데, 그래프를 볼때 0.0002740688정도가 가장 적합했다.<br/><br/>
      그리고 class에 weight 부여했을 때 거의 모든 경우에서 정확도가 높게 나왔다.<br/><br/>
      <h3>max_leaf_nodes</h3>
      이번에는 리프노드에 제한을 주어서 비교를 해보았다. 코드는 아래와 같다.<br/><br/>
      <img src={Img9} class="code"/><br/><br/>
      코드를 보면 알겠지만, DT의 리프노드를 구한뒤에 제한을 10개부터 기본 DT의 리프노드 갯수까지 10개씩 늘려가면서 비교를하게된다.<br/><br/>
      추가로 weight를 비교해본다.<br/><br/>
      <img src={Img10} class="code"/><br/><br/>
      리프노드의 경우는 갯수가 어느정도 올라가면 큰 차이를 보이지 못한다. weight는 초반에는 차이가 있지만 나중에가면 거의 차이가 없는것을 볼 수 있다.<br/><br/>
      class_weight를 설정한게 더 정확도가 낮게나오다가 리프노드가 많아지면 점차 비슷해지거나 더 높게 나오는 것을 알 수있다.<br/><br/>
      <h3>max_depth</h3>
      이번에는 깊이를 비교하면서 해보았다.<br/><br/>
      <img src={Img12} class="code"/><br/><br/>

      <img src={Img11} class="code"/><br/><br/>
      깊이가 깊어질수록 정확도는 올라가며 적정수준이 되면 큰 변화가 없는 것을 확인할 수 있었고, 동시에 weight도 초반에만 영향을 주고 거의 영향이 없는것을 볼 수 있었다.<br/><br/>
      이상 포스팅 끝<br/><br/>
      <a href="https://github.com/jae-yong-2/ML_STUDY/blob/main/DT.ipynb">github</a>
      </h4>
      </div>
    );
  }
}

export default Posting3
