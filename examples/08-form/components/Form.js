import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    team: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      team: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="소속"
          value={this.state.team}
          onChange={this.handleChange}
          name="team"
        />
        <button type="submit">등록</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        이름 : {this.state.name}
        <br/>
        소속 : {this.state.team}
      </form>
    );
  }
}

export default Form;