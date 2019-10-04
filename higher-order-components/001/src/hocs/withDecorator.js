import React from 'react';

export const withDecorator = Component => {
  return () => (
    <div className="container">
      <h3 className="title is-4">Container Component:</h3>
      <div className="box">Wrapper Header - Before</div>
      <Component />
      <div className="box">Wrapper Footer - After</div>
    </div>
  );
};
