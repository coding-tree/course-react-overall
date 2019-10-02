import React, {useState, useEffect} from 'react';

export default function withData(Component) {
  return props => {
    const [data, setData] = useState([]);
    if (props.url) {
      useEffect(() => {
        fetch(props.url)
          .then(resp => resp.json())
          .then(data => setData(data));
      }, []);
    }

    return <Component data={data} {...props}></Component>;
  };
}
