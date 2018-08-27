
props
=================================================================

- 컴포넌트에서 유동적인 데이터를 다룰 때 사용하며 컴포넌트 내부에서 선언하고 내부에서 값 변경이 가능합니다.
- React.js 어플리케이션을 만들땐, state를 사용하는 컴포넌트의 갯수를 최소하는 노력을 해야합니다.  
    예를들어, 10개의 컴포넌트에서 유동적인 데이터를 사용하게 될 때 각 데이터에 state를 사용하게 아니라 props를 사용하고  
    10개의 컴포넌트를 포함시키는 container 컴포넌트를 사용하는 것이 효율적입니다. 
- 컴포넌트의 state를 정의할 때는 `class fields` 문법을 사용해서 정의합니다.
    ```javascript
    import React, { Component } from 'react';

    class Counter extends Component { // class fields 사용x
        constructor(props) { 
            // Component를 상속했으며, constructor를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 됩니다.
            // 그래서 리액트 컴포넌트가 지니고 있던 생성자를 super를 통하여 미리 실행하고, 그 다음에 작업(state 설정)을 해줍니다.
            super(props);
            this.state = {
                number: 0
            }
        }

        ...
    }
    ```
    class fields를 사용하는 것은 편의를 위함입니다.


### setState
- 컴포넌트는 `setState()`라는 API가 존재합니다. 이름 그대로 `state`를 변경할 때 사용하는 API 입니다.
- `setState()`가 호출되면 컴포넌트가 리랜더링 되도록 설계되어 있으며 이는 객체로 전달되는 값만 업데이트 해줍니다.
- `setState()` 호출 즉시 `state`가 변경되는 것이 아니라 **비동기로 동작** 합니다. 
- 상태가 변경된 직후에 필요한 작업이 있다면 `setState(nextState, callback)`의 `callback`을 사용해야 합니다.

- setState에 객체 대신 함수를 전달하기  
    setState 를 사용하여 값을 업데이트하게 될 때, 기존의 값을 참고하여 값을 업데이트하게 될 때, 조금 더 나은 문법으로 할 수 있습니다.
    ```javascript
    this.setState({ // 기존코드
        number: this.state.number + 1
    });

    this.setState( // 굳이 또 this.state를 조회해야 함
        (state) => ({
            number: state.number
        })
    );
    ```

    변경된 코드 ↓ : setState에 updater 함수를 만들어서 전달 
    ```javascript
    const { number } = this.state;
    this.setState(
        ({ number }) => ({ // 비구조화 할당
            number: number + 1
        })
    );
    ```

### State
- State 코드작성

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=mYEZh6TV10M&index=9&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)