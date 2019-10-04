import React, {useState, useEffect} from 'react';

export const withLocalStorage = Component => {
  return props => {
    const [user, setUser] = useState('');

    useEffect(() => {
      const getUserFromLocalStorage = localStorage.getItem('userName');
      if (getUserFromLocalStorage) {
        setUser(getUserFromLocalStorage);
      }
    }, []);

    const onChange = ({currentTarget}) => {
      setUser(currentTarget.value);
    };

    const saveInLocalStorage = () => {
      localStorage.setItem('userName', user);
    };

    return <Component user={user} saveInLocalStorage={saveInLocalStorage} onChange={onChange} {...props}></Component>;
  };
};
