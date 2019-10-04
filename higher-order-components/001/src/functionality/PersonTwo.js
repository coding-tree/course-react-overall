import React from 'react';
import {withFuncionality} from '../hocs';
import styles from './personTwo.module.scss';
import cx from 'classnames';

function PersonTwo({name, setName}) {
  return (
    <div className={cx(['box', styles.personTwo])}>
      <h1 className="title">Person Two</h1>
      <div>
        <p>Your name is: {name}</p>
        <button onClick={() => setName('Jack')} className="button is-primary">
          Change your name
        </button>
      </div>
    </div>
  );
}

export default withFuncionality(PersonTwo);
