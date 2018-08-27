import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/** PureComponent 예제 */
class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    increaseCounter = () => {
        console.log('increaseCounter() 실행 : ' + this.state.counter)
        this.setState({
            counter: this.state.counter + 1,
        })
        console.log('increaseCounter() 실행완료 : ' + this.state.counter)
    }

    decreaseCounter = () => {
        console.log('decreaseCounter() 실행 : ' + this.state.counter)
        this.setState({
            counter: this.state.counter - 1,
        })
        console.log('decreaseCounter() 실행완료 : ' + this.state.counter)
    }

    render() {
        console.log('render()')
        return (
            <section>
                <h2>PureComponent</h2>
                <div>
                    <div>
                        <div>
                            <button type='button' onClick={this.increaseCounter}>Increment</button>
                            <button type='button' onClick={this.decreaseCounter}>Decrement</button>
                        </div>
                    </div>
                    <div>
                        {
                            `counter : ${this.state.counter}`
                        }
                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(<PureComponent />, document.getElementById('app'));

