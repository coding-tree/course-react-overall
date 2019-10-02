import React from 'react';
import 'bulma';
import Home from './components/Home';
import Users from './components/Users';
import styles from './app.module.scss';

const tasks = 'http://www.mocky.io/v2/5d94b4672f000058008ff914';
const users = 'http://www.mocky.io/v2/5d9488522f000067008ff7b7';

function App() {
  return (
    <div className="App">
      <h1 className="title">Hello World</h1>
      <header className={styles.container}>
        <Home url={tasks}></Home>
        <Users url={users}></Users>
      </header>
    </div>
  );
}

export default App;
