import React, {useState} from 'react';

export const withToggle = Component => {
  return () => {
    const [isVisible, setVisibility] = useState(false);
    return <Component isVisible={isVisible} setVisibility={setVisibility}></Component>;
  };
};
