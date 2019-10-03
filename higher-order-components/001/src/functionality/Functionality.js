import React from 'react';
import PersonTwo from './PersonTwo';
import styles from './functionality.module.scss';
import PersonOne from './PersonOne';

export default function Functionality() {
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#3. Share your functionality</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>
      <div className="container">
        <section className={styles.container}>
          <PersonOne></PersonOne>
          <PersonTwo></PersonTwo>
        </section>
      </div>
    </div>
  );
}
