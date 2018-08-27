
props
=================================================================

- 부모 컴포넌트가 자식컴포넌트에게 주는 값으로 자식 컴포넌트에서는 props를 받아오기만 하고 직접 수정할 수는 없습니다.
- 주로 사용할 데이터 중 변동되지 않는 데이터를 다룰 때 사용합니다.
- `render()` 메소드의 내부에 `{ this.props.propsName }` 형식을 넣고,   
    컴포넌트를 사용할 때 `< >` 괄호 안에 `propsName="value"`를 넣어 값을 설정합니다.
- props의 기본값을 설정할 때는 컴포넌트 클래스 하단에 `defaultProps`를 삽입합니다.  
    ```javascript
    import React, { Component } from 'react';

    class MyName extends Component { // 클래스형 컴포넌트에서 사용
        static defaultProps = {
            name: '기본이름'
        }
        render() {
            return (
                <div>
                    안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
                </div>
            );
        }
    }

    export default MyName;
    ```

    ```javascript
    import React, { Component } from 'react';

    class MyName extends Component { // 함수형 컴포넌트에서 사용
        render() {
            return (
                <div>
                    안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
                </div>
            );
        }
    }

    MyName.defaultProps = {
    name: '기본이름'
    };

    export default MyName;
    ```


### PropsTypes  
- 컴포넌트에서 원하는 props의 Type과 전달된 Type이 일치하지 않을 때 콘솔에서 오류 메시지가 나타게 하고 싶을 때 사용합니다.
- 이를 통하여 필수 props를 지정할 수 있으며 props를 지정하지 않으면 콘솔에 오류 메시지가 나타나게 됩니다.
- React v15.5부터는 PropsTypes는 deprecated되고 prop-types라는 패키지로 이동되어, 따로 설치해야 해야 합니다.  
    https://reactjs.org/docs/typechecking-with-proptypes.html
    ```
    $ npm install --save prop-types  or  $ yarn add prop-types
    ```
- 사용되는 컴포넌트 마다 import 해주어야 합니다.
    ```
    import PropTypes from 'prop-types';
    ```


### Props
- Props 코드작성

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=tZLQ-cNCf70&index=8&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)