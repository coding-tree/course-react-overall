import React from 'react';
import styles from './home.module.scss';
import withData from '../hoc/withData';

function Home({data}) {
  return (
    <div className={styles.home}>
      <h1 className="title">Home works</h1>

      <div>
        <b>Lista zadań:</b>
        {data.tasks && data.tasks.map(el => <div key={el.id}>{el.title}</div>)}
      </div>
    </div>
  );
}
export default withData(Home);
