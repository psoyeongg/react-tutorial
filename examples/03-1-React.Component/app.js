import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/** React.Component 예제 */
class BasicContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            renderCounter: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate() 실행')
        if (this.state.renderCounter !== nextState.renderCounter) {
            console.log('this.state.renderCounter : ' + this.state.renderCounter + ', nextState.renderCounter : ' + nextState.renderCounter)
            console.log('shouldComponentUpdate()-true')
            return true;
        }
        if (this.state.counter !== nextState.counter) {
            console.log('this.state.counter : ' + this.state.counter + ', nextState.counter : ' + nextState.counter)
            console.log('shouldComponentUpdate()-false')
            return false;
        }
        return true;
    }

    increaseCounter = () => {
        console.log('increaseCounter() 실행 : ' + this.state.counter)
        this.setState({
            counter: this.state.counter + 1
        })
        console.log('increaseCounter() 실행완료 : ' + this.state.counter)
    }

    decreaseCounter = () => {
        console.log('decreaseCounter() 실행 : ' + this.state.counter)
        this.setState({
            counter: this.state.counter - 1
        })
        console.log('decreaseCounter() 실행완료 : ' + this.state.counter)
    }

    rerenderIncreaseCounter = () => {
        console.log('rerenderIncreaseCounter() 실행 : ' + this.state.renderCounter)
        this.setState({
            renderCounter: this.state.renderCounter + 1
        })
        console.log('rerenderIncreaseCounter() 실행완료 : ' + this.state.renderCounter)
    }

    rerenderDecreaseCounter = () => {
        console.log('rerenderDecreaseCounter() 실행 : ' + this.state.renderCounter)
        this.setState({
            renderCounter: this.state.renderCounter - 1
        })
        console.log('rerenderDecreaseCounter() 실행완료 : ' + this.state.renderCounter)
    }

    render() {
        console.log('render()')
        return (
            <section>
                <h2>BasicComponent</h2>
                <div>
                    <div>
                        <div>
                            <button type='button' onClick={this.increaseCounter}>Increment</button>
                            <button type='button' onClick={this.decreaseCounter}>Decrement</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <button type='button' onClick={this.rerenderIncreaseCounter}>Re-Render Increment</button>
                            <button type='button' onClick={this.rerenderDecreaseCounter}>Re-Render Decrement</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            `counter : ${this.state.counter}`
                        }
                    </div>
                    <div>
                        {
                            `renderCounter : ${this.state.renderCounter}`
                        }
                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(<BasicContainer />, document.getElementById('app'));
