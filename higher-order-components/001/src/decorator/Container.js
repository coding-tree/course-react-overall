import React from 'react';

import {withDecorator} from '../hocs';

const Container = () => {
  return <div className="box has-background-warning">Container</div>;
};

export default withDecorator(Container);
