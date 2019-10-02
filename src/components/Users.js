import React from 'react';
import withData from '../hoc/withData';
import styles from './users.module.scss';

function Users({data}) {
  return (
    <div className={styles.container}>
      <h1 className="title">Users Komponent</h1>

      <div>
        <b>Users from database:</b>
        {data.users && data.users.map(el => <div key={el.id}>{el.name}</div>)}
      </div>
    </div>
  );
}

export default withData(Users);
