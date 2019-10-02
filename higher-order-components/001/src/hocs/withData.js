import React, {useState, useEffect} from 'react';

export const withData = url => Component => {
  return props => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => setData(data));
    }, []);

    return <Component data={data} {...props}></Component>;
  };
};
