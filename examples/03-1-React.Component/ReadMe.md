## React Component  
컴포넌트는 개념적으로 `props`를 input으로 하고 UI가 어떻게 보여야하는지 정의하는 React Element를 output으로 하는 함수입니다.  
따라서 합성을 이용하여 "UI를 재사용 할 수 있고 독립적인 단위로 쪼개어 생각" 할 수 있습니다.

#### 클래스 기반 컴포넌트

1. React.Component  
    - 상태와 라이프사이클을 가지고 있는 기본적인 Component 입니다.  
    - React.Component를 확장(extends)해서 Component를 만들 때, `shouldComponentUpdate()` 메소드를 별도로 선언하지 않았다면  
        Component는 `shouldComponentUpdate()`를 항상 true를 리턴하여 props, state값이 변경되면 항상 리렌더링(re-render)됩니다.  
    - app.js에 작성된 예제는 `shouldComponentUpdate()`를 직접 작성하여 `this.props`와 `nextProps`를 비교하고 `this.state`와 `nextState를 비교하여       true/fasle를 반환홥니다.  
        true를 반환하면 재랜더링이 되고, false를 반환하면 상태가 변경되도 하위 구성 요소가 다시 렌더링 되지 않습니다.  
    - `shouldComponentUpdate()`에서 shallow comparison 검사를 수행하거나 JSON.stringify()를 사용하지 않는 것이 좋습니다.  
        이 방법은 매우 비효율적이며 좋은 성능을 내는데 문제가 됩니다.

2. React.PureComponent
    - 03-2-pureComponent 폴더의 [ReadMe.md](../03-2-pureComponent/ReadMe.md) 참고
    

#### 함수 기반 컴포넌트

1. functional Component
    - 03-3-functional-Component 폴더의 [ReadMe.md](../03-3-functional-Component/ReadMe.md) 참고