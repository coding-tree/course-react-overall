import React from 'react';
import {withLocalStorage} from '../hocs/withLocalStorage';

function LocalStorage({user, onChange, saveInLocalStorage}) {
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#5. HOC z użyciem LocalStorage</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
        <div className="container">
          <div className="box">
            <h4 className="title is-4">Twoje imię z localStorage to: {user}</h4>
          </div>

          <input
            className="input"
            name="name"
            id="name"
            onChange={onChange}
            type="text"
            placeholder="Wpisz swoje imię"
          />
          <button onClick={saveInLocalStorage} className="button">
            Zapisz w local Storage
          </button>
        </div>
      </div>
    </div>
  );
}

export default withLocalStorage(LocalStorage);
