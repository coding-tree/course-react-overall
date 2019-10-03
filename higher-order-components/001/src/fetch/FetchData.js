import React from 'react';
import Tasks from './Tasks';
import Users from './Users';
import styles from './fetchData.module.scss';
import cx from 'classnames';

function FetchData() {
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#1. Fetching Data from server</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>
      <section>
        <div className={cx([styles.header, 'container'])}>
          <Tasks />
          <Users />
        </div>
      </section>
    </div>
  );
}
export default FetchData;
