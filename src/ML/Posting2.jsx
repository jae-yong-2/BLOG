import React, {Component} from 'react'
import Img1 from './img/2-1.PNG'
import Img2 from './img/2-2.PNG'
class Posting2 extends Component{
  render(){
    return(
      <div className="left">
      <h1>Decision Tree-1</h1>
      <h4>
      Decision Tree란 해석하면 '결정 트리'로 트리구조처럼 뻗어가면서 데이터를 분류해주는 트리이이다.<br/><br/>
      IF-THEN 방식을 기본으로하며, 명확한 기준이 존재하기 때문에 설명력이 매우 높은 머신러닝 알고리즘이다.<br/><br/>
      기본적으로 트리구조를 따르기때문에 재귀성이 강하며, n차원 그래프로 나타낼 경우 축에 직교하여 클래스를 구분하게된다.<br/><br/>
      이전의 kNN과는 다르게 oulier와 missing value에 큰 영향을 받지않는다는 장점이있다.<br/><br/>
      다음은 결정트리의 예시이다.<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      그림을 보면 알겠지만, 내부노드는 모두 input값을 분류해주는 input값이고, 리프노드는 각각의 class로 분류된 output값이다.<br/><br/>
      만약 위 그림이 학습된 모델이라고 가정을 한다면 아래와 같은 데이터가 주어진다면 어디로 분류가 될까?<br/><br/>
      <div className="code">
      1. Number of family members = 4<br/><br/>
      2. Salay = 10000<br/><br/>
      3. is married? = yes
      </div><br/><br/>
      정답은 3BHK이고 아래처럼 알고리즘이 형성된다.
      <img src={Img2} className="code"/><br/><br/>
      명확한 기준을 가지고 구분하기 위해서는 차원축에 직교일 수 밖에 없다.<br/><br/>
      차원축에 직교하게 데이터를 분류하기 위해서는 데이터를 분할할 구간을 찾아 split을 해야하며, split을 하는 기준은 split을 했을 때, impurity가 낮아지는 구간을 찾는것이다.<br/><br/>
      impurity는 말 그대로 불순도를 말하여, 나누고자 하는 클래스에 적합하지 않은 다른 데이터가 얼마나 있으냐를 따져주는 수치이다.<br/><br/>
      이 수치는 대표적으로 Entropy방식과 Gini방식이 있으며 수식으로는 아래와 같다.<br/><br/>
      <div className='code'>
      Entropy = -&Sigma;( P(w1) log(P(w2)) )<br/><br/>
      Gini = 1-&Sigma;( P(wn)^2 )
      </div>
      각각 Wn은 각각의 클래스 별 차지하는 비율을 나타내며, P(w1)=1/4, P(w2)=3/4일 경우
      <div className="code">
      Entropy = -1/4log(1/4)-3/4*log(3/4)<br/><br/>
      Gini = 1-(1/4)^2-(3/4)^2
      </div><br/><br/>
      이렇게 계산이된다. P(Wn)은 최댓값이 1/2이기 때문에 엔트로피는 1을 기니는 0.5를 넘길 수가 없다.<br/><br/>
      inpurity는 위와 같이 계산을 하면 충분히 구할 수 있고, split을 했을 때, 부모보다 자식들의 inpurity합이 더 크면 split을 할 수 있는 것이다.<br/><br/>
      위 두가지 방식을 사용했을 때, 어느쪽이 더 좋다고 할 수 없으며 동시에 같은 비율로 split되더라도 다른 결과를 가져올 수 있다.<br/><br/>
      split에서 자식노드가 나뉘었을때 나뉘는 갯수가 서로 다를 수 있는데, 이때 발생하는 문제는 가중치를 이용해서 해결할 수 있다.<br/><br/>
      기본적인 DT에 대한 설명은 이정도로 마치고 다음 포스팅에 더 자세하게 다뤄보겠다.<br/><br/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting2
