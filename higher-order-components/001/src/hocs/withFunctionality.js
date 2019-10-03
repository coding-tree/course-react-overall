import React, {useState} from 'react';

export const withFuncionality = Component => {
  return () => {
    const [name, setName] = useState('Radosław');

    return <Component name={name} setName={setName}></Component>;
  };
};
