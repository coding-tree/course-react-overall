import React from 'react';
import styles from './tasks.module.scss';
import {withData} from '../hocs';

function Tasks({data}) {
  return (
    <div className={styles.home}>
      <h1 className="title">Tasks Component</h1>
      <div>
        <b>Tasks list:</b>
        {data.tasks && data.tasks.map(el => <div key={el.id}>{el.title}</div>)}
      </div>
    </div>
  );
}
export default withData('http://www.mocky.io/v2/5d94b4672f000058008ff914')(Tasks);
