import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/** Functional Component 예제 */
const FunctionalComponent = (props) => {
    console.log('FunctionalComponent')
    return (
        <section>
            <h2>FunctionalComponent</h2>
            <div>
                <div>
                    <div>
                        <button type='button' onClick={props.increaseCounter}>Increment</button>
                        <button type='button' onClick={props.decreaseCounter}>Decrement</button>
                    </div>
                </div>
                <div>
                        {
                            `counter : ${props.counter}`
                        }
                    </div>
                    <div>
                        {
                            `renderCounter : ${props.renderCounter}`
                        }
                    </div>
            </div>
        </section>
    );
}

class WarpperFunctionalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            renderCounter: 0,
        }
    }

    increaseCounter = () => {
        console.log('increaseCounter() 실행')
        console.log('counter : ' + this.state.counter + ', renderCounter : ' + this.state.renderCounter)
        this.setState({
            counter: this.state.counter + 1,
        })
        console.log('increaseCounter() 실행완료')
        console.log('counter : ' + this.state.counter + ', renderCounter : ' + this.state.renderCounter)
    }

    decreaseCounter = () => {
        console.log('decreaseCounter() 실행')
        console.log('counter : ' + this.state.counter + ', renderCounter : ' + this.state.renderCounter)
        this.setState({
            counter: this.state.counter - 1,
        })
        console.log('decreaseCounter() 실행완료')
        console.log('counter : ' + this.state.counter + ', renderCounter : ' + this.state.renderCounter)
    }

    render() {
        console.log('WarpperFunctionalContainer.render()')
        return (
            <section>
                <FunctionalComponent
                    increaseCounter={this.increaseCounter}
                    decreaseCounter={this.decreaseCounter}
                    counter={this.state.counter}
                    renderCounter={this.state.renderCounter}
                />
            </section>
        );
    }
}

ReactDOM.render(<WarpperFunctionalContainer />, document.getElementById('app'));