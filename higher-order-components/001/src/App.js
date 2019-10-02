import React from 'react';
import 'bulma';
import Tasks from './fetch/Tasks';
import Users from './fetch/Users';
import ContainerWithDecorator from './decorator/Container';
import styles from './app.module.scss';

function App() {
  return (
    <div className="App">
      <h1 className="title">Higher Order Components Examples</h1>
      <header className={styles.container}>
        <Tasks />
        <Users />
      </header>

      <header className={styles.container}>
        <ContainerWithDecorator />
      </header>
    </div>
  );
}

export default App;
