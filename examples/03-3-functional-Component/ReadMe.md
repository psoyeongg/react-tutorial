## React Component  
컴포넌트는 개념적으로 `props`를 input으로 하고 UI가 어떻게 보여야하는지 정의하는 React Element를 output으로 하는 함수입니다.  
따라서 합성을 이용하여 "UI를 재사용 할 수 있고 독립적인 단위로 쪼개어 생각" 할 수 있습니다.

#### 클래스 기반 컴포넌트

1. React.Component  
    - 03-1-React.Component 폴더의 [ReadMe.md](../03-1-React.Component/ReadMe.md) 참고

2. React.PureComponent
    - 03-2-pureComponent 폴더의 [ReadMe.md](../03-2-pureComponent/ReadMe.md) 참고


#### 함수 기반 컴포넌트

1. functional Component
    - 상태와 라이프사이클 필요없이 하나의 함수로 props를 이용한 DOM만 그려주는 Component
    - 함수형 컴포넌트는 클래스 기반의 컴포넌트와 달리, state, 라이프사이클메소드(componentDidMount, shouldComponentUpdate 등등...)와  
        ref 콜백을 사용할 수 없다는데 있습니다.  
    - 클래스 컴포넌트(state, lifecycle, ref)가 필요한 상황이 아니라면 항상 컴포넌트는 함수형으로 만드는 것을 권장합니다.  
    - 리액트 유틸리티(higher order components) 라이브러리인 `recompose` 등을 사용하는 것입니다.  함수형 컴포넌트를 그대로 유지하면서  
        PureComponent의 효과를 누리거나 그보다 더 나은 퍼포먼스 상에 이점(`onlyUpdateForKeys, onlyUpdateForPropTypes`)을 가질 수 있는  
        함수들이 있기 때문에 이런 라이브러리를 적극 활용하면 함수형 컴포넌트를 그대로 유지하면서 리렌더링을 최소화할 수 있습니다. 
        > `pure HOC(Higher Order Component)`의 경우 React.PureComponent와 로직상 같고, `onlyUpdateForKeys, onlyUpdateForPropTypes HOC` 는  
            특정 props 값이 변경되었을 때만 리렌더링을 하도록 하기 때문에 pure, React.PureComponent보다 퍼포먼스 상에 우의를 가져갈 수 있습니다.


