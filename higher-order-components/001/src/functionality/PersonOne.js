import React from 'react';
import {withFuncionality} from '../hocs';

function PersonOne({name, setName}) {
  return (
    <div>
      <h1 className="title">Person One</h1>
      <div>
        <p>Your name is: {name}</p>
        <button onClick={() => setName('John')} className="button is-primary">
          Change your name
        </button>
      </div>
    </div>
  );
}

export default withFuncionality(PersonOne);
