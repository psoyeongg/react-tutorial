## React Component  
컴포넌트는 개념적으로 `props`를 input으로 하고 UI가 어떻게 보여야하는지 정의하는 React Element를 output으로 하는 함수입니다.  
따라서 합성을 이용하여 "UI를 재사용 할 수 있고 독립적인 단위로 쪼개어 생각" 할 수 있습니다.

#### 클래스 기반 컴포넌트

1. React.Component  
    - 03-1-React.Component 폴더의 [ReadMe.md](../03-1-React.Component/ReadMe.md) 참고

2. React.PureComponent
    - 기본적인 Component와 비슷하나, `shouldComponentUpdate()` 메소드가 shallow comparison 로직으로 구현되어 있는 Component 입니다.  
    - shallow comparison 이란, `props`와 `state`의 이전 값과 바뀔 값을 비교할 때, 얕은 비교를 수행하게 되는데, 원시형 값에 있어서는  
        같은 값을 가지는지 확인합니다. 또한 오브젝트와 배열과 같은 복잡한 자바스크립트 값에 있어서는 참조하고 있는 객체가 같은지 확인합니다.
    - React.PureComponent를 확장해서 컴포넌트를 만들면, `shouldComponentUpdate`메소드를 선언하지 않았다고 하더라도, PureComponent 내부에서  
        props와 state를 shalow level 안에서 비교 하여, 변경된 값이 있을 시에만 리렌더링 하도록 되어 있습니다. 
    - 즉 얕은 비교를 통해 `props`와 `state`가 바뀌면 재렌더링 하는 로직(shallow comparison)이 구현되어 있습니다.
    - 구현된 shallow comparison의 한계로는, 중첩된 오브젝트같은 경우 파악할 수 없기 때문에 PureComponent 사용시 유의하여 사용해야 합니다.  
    - 재랜더링이 많은 경우 계속된 비교 연산을 통해 랜더링이 느려질 수 있으므로 유의해야 합니다. 이럴 때 `forceUpdate()` 메소드르 선언하는 것이 더 편리할 수 있습니다. 


#### 함수 기반 컴포넌트

1. functional Component
    - 03-3-functional-Component 폴더의 [ReadMe.md](../03-3-functional-Component/ReadMe.md) 참고