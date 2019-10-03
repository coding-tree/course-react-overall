import React from 'react';
import {withFuncionality} from '../hocs';

function PersonTwo({name, setName}) {
  return (
    <div>
      <h1 className="title">Person Two</h1>
      <div>
        <p>Your name is: {name}</p>
        <button onClick={() => setName('Jack')} className="button is-primary">
          Change your name
        </button>
      </div>
    </div>
  );
}

export default withFuncionality(PersonTwo);
