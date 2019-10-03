import React from 'react';
import {withAuthorize} from '../hocs';
import cx from 'classnames';
import {withToggle} from '../hocs/withToggle';

function Toggle({isAuth, toggleAuth, isVisible, setVisibility}) {
  const loginClass = cx('button is-dark', {
    'is-warning': isAuth,
  });
  return (
    <div>
      <h1 className="title">Try to show your name without login</h1>
      <div>
        <p>Authorized: {isAuth.toString()}</p>
        <button className={loginClass} onClick={() => toggleAuth(!isAuth)}>
          {isAuth ? 'Wyloguj się' : 'Zaloguj się'}
        </button>
        <button disabled={!isAuth} className="button is-primary" onClick={() => setVisibility(true)}>
          Show your name
        </button>
        {isAuth ? (
          isVisible && <h2 className="title has-text-primary">Your name is Ernesto</h2>
        ) : (
          <div>You must login to see your name</div>
        )}
      </div>
    </div>
  );
}

export default withToggle(withAuthorize(Toggle));
