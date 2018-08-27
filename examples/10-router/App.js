import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Home, About, Posts } from './views';

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/home">go home</Link><br />
                <Link to="/about">go about</Link><br/>
                <Link to="/about/testParameter">go about Parameter</Link>
                <li><Link to="/posts">Posts</Link></li>

                <Route path="/home" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));