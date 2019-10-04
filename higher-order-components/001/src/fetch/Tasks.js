import React from 'react';
import styles from './tasks.module.scss';
import {withData} from '../hocs';
import cx from 'classnames';

function Tasks({data}) {
  return (
    <div className="box">
      <h1 className={cx(['title', styles.header])}>Tasks Component</h1>
      <h2 className="title is-size-5">
        This data comes from <code>withData</code> HOC
      </h2>
      <div>
        <b>Tasks list:</b>
        {data.tasks ? data.tasks.map(el => <div key={el.id}>{el.title}</div>) : <div>Retreiving data from db...</div>}
      </div>
    </div>
  );
}
export default withData('http://www.mocky.io/v2/5d94b4672f000058008ff914?mocky-delay=2000ms')(Tasks);
