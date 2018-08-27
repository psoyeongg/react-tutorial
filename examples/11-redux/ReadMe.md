## Redux  
- 작업환경 설정
  - redux와 react-redux 설치  
  ```shell
  $ npm install --save redux
  $ npm install --save react-redux
  ```
  react-redux는 redux를 컴포넌트 상에서 더 간편하게 사용할 수 있게 해주는 라이브러리로  
  컴포넌트에서 store를 props로 받아오거나, subscribe를 직접할 필요가 없습니다.  
    
Redux는 JavaScript 어플리케이션에서 `data-state`와 `UI-state`를 관리해주는 도구입니다. 이는 상태적 데이터 관리가  
시간이 흐름에 따라 복잡해질수도 있는 `싱글 페이지 어플리케이션(Single Page Application)` 에서 매우 유용하게 사용됩니다.  
그리고 Redux는 React 외에도, jQuery 혹은 Angular를 사용하는 어플리케이션에서도 사용될 수 있습니다.
  
기존에는 부모에서 자식의 자식의 자식까지 상태가 흘렀었으며 부모 컴포넌트가 중간자 역할을 하고 있었습니다.  
하지만 리덕스를 사용하면 스토어를 사용하여 상태를 컴포넌트 구조의 바깥에 두고, 스토어를 중간자로 두고 상태를 업데이트 하거나, 새로운 상태를 전달받습니다.  

- **리덕스를 쓰면 상태관리를 컴포넌트 바깥에서 합니다.**  
    리덕스를 사용하면 상태값을 컴포넌트에 종속시키지 않고 상태를 컴포넌트의 바깥에서 관리 할 수 있게 됩니다.  
    예를 들어서 B에서 일어나는 변화가 G에 반영된다고 가정을 해봅시다.  
  
  - **스토어 설정**  
    - 리덕스를 프로젝트에 적용하게 되면 이렇게 스토어가 생기게 되는데 스토어 안에는 프로젝트의 상태에 관한 데이터들이 담겨 있습니다.  
      
      <img src="../../libs/img/redux01.png" height="300"/>  
      
      
  - **컴포넌트의 스토어 구독**  
    - G 컴포넌트는 스토어에 구독을 하고 그 과정에서 특정 함수가 스토어에 전달 됩니다.
    - 그리고 나중에 스토어의 상태값에 변동이 생기면 전달 받았던 함수를 호출해줍니다.  
      
      <img src="../../libs/img/redux02.png" height="300"/>  
      
      
  - **스토어에 상태 변경하라고 알려주기**  
    - B 컴포넌트에 어떤 이벤트가 발생하여 상태 변화를 할 일이 생기게 되면 `dispath`라는 함수를 통하여 액션을 스토어에 던져줍니다.
    - 액션은 상태에 변화를 일으킬 때 참조할 수 있는 객체로 액션 객체는 필수적으로 `type`이라는 값을 가지고 있어야 합니다.
    - 예를 들어 `{ type: 'INCREMENT' }` 라는 객체를 전달 받게 된다면, 리덕스 스토어는 상태에 값을 더해야 한다는 액션을 참조하게 됩니다.  
    추가적으로 상태값에 2를 더해야 한다면, `{ type: 'INCREMENT', diff: 2 }` 와 같은 액션 객체를 만들어 나중에 이 diff 값을 참고해서  
    기존 값에 2를 더하게 됩니다.
    - type를 제외한 값은 선택적(optional) 인 값입니다.  
      
      <img src="../../libs/img/redux03.png" height="300"/>  
      
      
  - **리듀서를 통하여 상태 변화시키기**  
    - 액션 객체를 받으면 전달받은 액션의 타입에 따라 어떻게 상태를 업데이트 해야 할지 정의해주어야 하는데 이러한 업데이트 로직을 정의하는 함수를 리듀서라고 부릅니다. 
    - 예를 들어 type이 INCREMENT 라는 액션이 들어오면 숫자를 더해주고, DECREMENT라는 액션이 들어오면 숫자를 감소 시키는 작업을 여기서 합니다.
    - 리듀서 함수는 `state(현재상태)`와 `action(액션객체)` 파라미터를 받고 이를 참조하여 새로운 상태 객체를 만들고 이를 반환합니다.  
      
      <img src="../../libs/img/redux04.png" height="300"/>  
      
       
  - **상태 변화가 생기면, 구독하고 있던 컴포넌트에게 알림**  
    - 상태에 변화가 생기면 이전에 컴포넌트가 스토어에 구독할 때 전달해줬던 함수 listner가 호출됩니다.
    - 이를 통하여 컴포넌트는 새로운 상태를 받게되고, 이에 따라 컴포넌트는 리렌더링 하게 됩니다.  
      
      <img src="../../libs/img/redux05.png" height="300"/>  
      

따라서, 리덕스를 사용하면 여러 컴포넌트를 거쳐서 받아올 필요 없이 아무리 깊숙한 컴포넌트에 있다 하더라도  
직속 부모에게서 받아오는 것처럼 원하는 상태값을 골라서 props를 편리하게 받아올 수 있습니다.  
  
  - **Redux의 3가지 규칙**  
    
    - 하나의 애플리케이션 안에는 하나의 스토어
        - 하나의 애플리케이션에선 단 한개의 스토어를 만들어서 사용합니다. 사실, 권장되지는 않습니다.  
        - 특정 업데이트가 빈번하게 일어나거나, 애플리케이션의 특정 부분을 완전히 분리시키게 될 때 여러개의 스토어를 만들 수도 있습니다.  
        - 여러개의 스토어를 만들게 되면 개발 도구를 활용하지 못하게 됩니다.  
          
    - 상태는 읽기전용
        - 리액트에서 state를 업데이트 해야 할 때, setState를 사용하고, 배열을 업데이트 해야 할 때는 배열 자체에 push를 직접하지 않고,  
          concat 같은 함수를 사용하고 기존의 배열은 수정하지 않고 새로운 배열을 만들어서 교체하는 방식으로 업데이트 합니다.  
        - 엄청 깊은 구조로 되어있는 객체를 업데이트 할 때도 마찬가지로, 기존의 객체는 건들이지 않고 `object.assign`을 사용하거나  
          spared 연산자(`...`)를 사용하여 업데이트 합니다. 
        - 리덕스에서도 마찬가지로 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트 해주는 방식으로 해주면, 나중에 개발자 도구를  
          통해서 뒤로 되돌릴 수도 앞으로 돌릴 수도 있습니다.  
        - 리덕스에서 불변성을 유지해야하는 이유는 내부적으로 데이터가 변경되는 것을 감지하기 위하여 `shallow equalit` 검사를 하기 때문입니다.  
          이를 통하여 객체의 변화를 감지할 때 객체의 깊숙한 안쪽까지 비교하는 것이 아니라 겉핥기 식으로 비교를 하여 좋은 성능을 유지 할 수 있습니다.  
            
    - 변화를 일으키는 함수, 리듀서는 순수한 함수  
        - 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받습니다. 
        - 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환합니다.
        - 똑같은 파라미터로 호출된 리듀서 함수는 **언제나** 똑같은 결과값을 반환해야만 합니다.  
          실행할 때마다 다른 결과값이 나타나는 경우(new Date() 함수 사용 등...) :  순수하지 않은 작업이므로, 리듀서 함수의 바깥에서 처리  
          