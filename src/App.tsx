import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import User from './components/User';

const App: React.FC<{}> = () => (
    <div className='Container'>
      <Switch>
        <Route exact path='/404' component={NotFound} />
        <Route exact path='/users' component={User} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
);

export default App;
