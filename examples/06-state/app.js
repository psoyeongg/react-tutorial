import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import State from './components/State';

class Main extends Component {

	state = {
		name: '버튼',
		index: 0,
		disabled: false
	};

	onChangeIndex = () => {
		let index = this.state.index;
		if (index < 10) {
			this.setState({index: ++index});
		} else {
			this.setState({index: 0});
		}
	}

	onChangeButtonLabel = () => {
		if(this.state.name === '버튼') {
			this.setState({name: 'Submit'});
		}else {
			this.setState({name: '버튼'});
		}
	}

	onChangeDisabled = () => {
		let disabled = !this.state.disabled;
		this.setState({disabled: disabled});
	}

    render() {
        return (
            <div>         	
            	<h2>State</h2><br/>
            	<State />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));