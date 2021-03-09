import React, {Component} from 'react'
import Img1 from './img/3-1.PNG'
import Img2 from './img/3-2.PNG'
class Posting3 extends Component{
  render(){
    return(
      <div class="left">
      <h1>Decision Tree-2</h1>
      <h4>
      결정트리는 기본적으로 Full Tree를 바탕으로 한다. Full Tree는 모든 클래스의 inpurity가 0이 되도록 만든 트리이다.<br/><br/>
      다른 의미로 training error가 0인 상태로 만든다.<br/><br/>
      full tree로 만들면 training error가 0이 되기 때문에 학습이 잘됐다고 생각할 수 있지만 전혀 그렇지않다. overfitting 되었기 때문이다.<br/><br/>
      무조건 overfitting이 안좋다고 할 수는 없지만 세로운 데이터에 대해서 정확도가 일반적인 경우에 별로 좋게 나오지 않을 가능성이 크다.<br/><br/>
      그럼 이렇게 overfitting이 나지않게 하려면 어떻게 해야할까? 너무 split을 하지않으면 반대로 underfitting이 발생할 수 있다.<br/><br/>
      다음 표를 보자<br/><br/>
      <img src={Img1} className="code"/><br/><br/>
      training data의 정확도가 높아질수록 class분류가 많아지고, validation data의 정확도는 특정 수준이후로는 낮아지는 것을 볼 수있다.<br/><br/>
      validation data란 기존에 가지고 있는 데이터에서 학습이 잘 이뤄지는 지를 체크하기 위해서 training 데이터의 일부를 테스트 데이터로 두고 사용하는 개념이다.<br/><br/>
      그래프에서 보면 알지만, 중간에 가장 적절한 지점이 있는데 이 지점을 잘 찾아주는게 결정트리의 핵심이라고 볼 수 있다.<br/><br/>
      그럼 split은 Entropy와 Gini 방식을 이용해서 split하지만 이 방식은 split을 하는 기준이고, 실제로 분류는 기준을 어떻게 활용을 할까?<br/><br/>
      기본적으로 Greedy 방식으로 분류를 한다.<br/><br/> Greedy방식이란 현재 상황에서 가장 좋은 inpurity를 만들기 위해서 구간을 나누는 것이다.<br/><br/>
      이렇게 split할 경우 이전의 상황으로 돌아갈 수 없으며 아래와 같이 결과적으로는 더 안좋은 경우가 나타날 수 있다.<br/><br/>
      <img src={Img2} className="code"/><br/><br/>
      하지만 나중의 경우를 모두 예측하기란 매우 어려운 일이고 할수 있더라도 너무많은 연산이 필요하기 때문에 Greedy방식을 사용한다.
      split을 하는 방식은 Greedy 방식이라고 하면, 도중에 멈추는 방법은 어떤게 있을까? 여러가지 방법이 있겠지만 대표적으로는 hyperparameter를 조정하는 법으로
      <div className='code'>
      1. Max depth<br/><br/>
      2. Max leaf nodes<br/><br/>
      3. Max data for split
      </div>
      이 세가지가 기본적이고 이외에 Regularization을 하는 방법도 있다. 트리의 크기를 제한하는 방법이다.
      <div className='code'>
      &alpha;*size+&Sigma;i(N)
      </div>
      식이 최대한 낮은 수치를 가질 수 있게 한다.<br/><br/>
      &alpha;*size부분은 comlpexity부분으로 얼마나 가지가 많이 뻗어 갔는지를 보여주며 뒤에 &Sigma;i(N)부분은 training error부분이다.<br/><br/>
      가지가 많이 뻗어갈수록 training error는 감소할 것이고, 반대로 가지가 적게 뻗어갈수록 training error가 증가할 것이다.<br/><br/>
      이 두가지 수치를 적절하게 조합해 최대한 낮게 값을 유지해줘야한다.<br/><br/>
      마지막으로는 pruning이라는 방법이있다. 해석하면 가지치기로 너무 많은 클래스 분류가 일어나지 않게 도중에 가지치기처럼 Cost Funtion에 맞춰 끊어주는것이다.<br/><br/>
      이 Cost Function이 최소로 하는 구간에서 가지를 치는 것이다. 이런 pruning의 특징은 최소한의 inpurity를 갖게 되며, validation data가 필요없으며 동시에 그만큼 연산량이 증가한다.<br/><br/>
      Cost Funtion은 다음과 같다.
      <div class="code">Cost(T) = Err(T) + &alpha;*L(T) = Err(T) + &alpha;*(leaf_nodes(T))</div>
      여기서 &alpha;의 경우는 hyperparameter로 사용자가 직접 설정해주는 값이다. 알파의 값이 크게되면 나뉘는 클래스(leaf)의 비중이 높게나오고, 알파의 값이 작으면 나뉘는 클래스(leaf)의 비중이 낮아진다.<br/><br/>
      기본적인 pruning 알고리즘은 다음과 같다.
      <div class="code">
      1. Full Tree를 생성한다.<br/><br/>
      2. pruning을 한다.<br/><br/>
      2-1. sub-tree를 찾는다.<br/><br/>
      2-2. Full_tree와 Sub_tree의 Cost Function을 계산한다.<br/><br/>
      2-3. 만약 Cost(Full_tree)&gt;Cost(Sub_tree)면 Sub_tree를 선택한다.
      </div>
      이렇게 적절한 pruning이나 split을 통해서 가장 효율적인 트리를 찾아 주어야한다.<br/><br/>
      <h3>Decision Tree의 특징</h3>
      결정트리의 특징으로 가장 큰 세가지는 숫자가아닌 단어로된 변수, outliers, Missing Values모두 학습에 있어서 큰 개입이 없다는 것이다.<br/><br/>
      단어로된 일반 변수의 경우 오히려 더 강력한 설명력을 가지기 때문에 있으면 좋은 경우가 많다.<br/><br/>
      outliers(비정상적인 수치)와 Missing Values(누락된 데이터)의 경우 일반적인 결정트리는 Full Tree를 사용하지 않고 적당한 pruning과 split을 하기 때문에 애초에 거의 영향이 없는 경우가 많다.<br/><br/>
      마지막으로 결정트리는 Nonlinear Split를 보통 사용하지않고, 이것과 별개로 Regression으로도 사용을 한다.<br/><br/>
      결정트리는 Nonlinear Split을 하지않는 이유는 결정트리는 설명력이 강하다는 장점을 가지고있는데, Nonlinear split은 설명력을 잃기 때문에 사용하지않는다.<br/><br/>
      이상 포스팅 끝
      </h4>
      </div>
    );
  }
}

export default Posting3
