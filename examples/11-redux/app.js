// Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// counter
import Counter from './counter/components/Counter';
import counter from './counter/reducers';

// 스토어 생성
const store = createStore(counter);

function render() {
    ReactDOM.render(<Counter value={store.getState()}
                            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                            onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
                    document.getElementById('app'));
}

render();
store.subscribe(render);


// todomvc
import { Provider } from 'react-redux';
import App from './todomvc/containers/App';
import configureStore from './todomvc/store/configureStore';

const todomvcStore = configureStore();

/*
    Provider는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트 입니다.
    이 컴포넌트를 불러온 다음에, 연동할 컴포넌트를 감싸준 다음 Provider 컴포넌트의 props로 store 값을 설정해주면 됩니다.
*/
ReactDOM.render(
    <Provider store={todomvcStore}>
        <App />
    </Provider>,
    document.getElementById('todoapp')
);