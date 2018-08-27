import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';

class Main extends Component {

    state = {
        information: [
          {
            name: '안형로',
            team: '연구1팀'
          }
        ]
      }

  handleCreate = (data) => {
    console.log(data);
    const { information } = this.state;
    this.setState({
        information: information.concat({ ...data })
    })
  }
  
  render() {
    const { information } = this.state;
    return (
      <div>
        <Form
          onCreate={this.handleCreate}/>
          {JSON.stringify(information)}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));