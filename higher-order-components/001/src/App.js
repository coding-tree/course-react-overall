import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './styles/main.scss';
import Header from './components/Header';
import FetchData from './fetch/FetchData';
import Functionality from './functionality/Functionality';
import Connect from './connect/Connect';
import Decorator from './decorator/Decorator';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact strict path="/fetching-data" component={FetchData} />
        <Route exact strict path="/decorator" component={Decorator} />
        <Route exact strict path="/share-functionality" component={Functionality} />
        <Route exact strict path="/connect-hocs" component={Connect} />
        <Redirect to="/fetching-data" />
      </Switch>
    </div>
  );
}

export default App;
