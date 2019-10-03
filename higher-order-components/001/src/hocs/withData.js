import React, {useState, useEffect} from 'react';

export const withData = url => Component => {
  return () => {
    const [data, setData] = useState([]);
    const abortController = new AbortController();

    useEffect(() => {
      fetch(url, {signal: abortController.signal})
        .then(resp => resp.json())
        .then(data => setData(data))
        .catch(err => {
          if (err.name === 'AbortError') return;
          throw new Error(err);
        });

      return () => {
        return abortController.abort();
      };
    }, []);

    return <Component data={data}></Component>;
  };
};
