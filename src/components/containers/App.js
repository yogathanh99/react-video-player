import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WbnPlayer from './WbnPlayer';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPlayer} />
      <Route path="/:activeVideo" component={WbnPlayer} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
