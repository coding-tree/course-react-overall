import React from 'react';

export const withDecorator = Component => {
  return () => (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#2. Use as a Decorator</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>
      <div className="container">
        <div>Wrapper Header - Before</div>
        <Component />
        <div>Wrapper Footer - After</div>
      </div>
    </div>
  );
};
