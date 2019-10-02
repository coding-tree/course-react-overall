import React from 'react';
import 'bulma';
import Tasks from './001/Tasks';
import Users from './001/Users';

import styles from './app.module.scss';

function App() {
  return (
    <div className="App">
      <h1 className="title">Higher Order Components Examples</h1>
      <header className={styles.container}>
        <Tasks />
        <Users />
      </header>
    </div>
  );
}

export default App;
