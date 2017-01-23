import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 組字 from './頁/組字/組字';
import './app.css';
import Debug from 'debug';

Debug.enable('tsoo:*');

const root = document.getElementById('app');

render(
<Router history={browserHistory}>
      <Route path='/' component={網站}>
          <IndexRoute component={組字}/>
          <Route path='*' component={組字}/>
      </Route>
  </Router>,
  root
);
