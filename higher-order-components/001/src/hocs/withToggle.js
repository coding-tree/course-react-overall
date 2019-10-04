import React, {useState} from 'react';

export const withToggle = Component => {
  return () => {
    const [isVisible, toggleVisibility] = useState(false);
    return <Component isVisible={isVisible} toggleVisibility={toggleVisibility}></Component>;
  };
};
