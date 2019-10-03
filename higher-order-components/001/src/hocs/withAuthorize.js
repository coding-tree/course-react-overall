import React, {useState} from 'react';

export const withAuthorize = Component => {
  return props => {
    const [isAuth, toggleAuth] = useState(false);
    return <Component {...props} isAuth={isAuth} toggleAuth={toggleAuth}></Component>;
  };
};
