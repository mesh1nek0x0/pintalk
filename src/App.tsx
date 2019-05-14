import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App: React.FC<{}> = () => (
    <div className='Container'>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
);

export default App;
