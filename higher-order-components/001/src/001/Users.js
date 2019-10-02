import React from 'react';
import {withData} from '../hocs';
import styles from './users.module.scss';

function Users({data}) {
  return (
    <div className={styles.container}>
      <h1 className="title">Users Component</h1>

      <div>
        <b>Users from database:</b>
        {data.users && data.users.map(el => <div key={el.id}>{el.name}</div>)}
      </div>
    </div>
  );
}

export default withData('http://www.mocky.io/v2/5d9488522f000067008ff7b7')(Users);
