import React from 'react';

export const withDecorator = Component => {
  return () => (
    <div>
      <div>Wrapper Header</div>
      <Component />
      <div>Wrapper Footer</div>
    </div>
  );
};
