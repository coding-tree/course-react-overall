import React from 'react';
import Toggle from './Toggle';
import {withSyntax} from '../hocs';

function Connect({okaidia, SyntaxHighlighter}) {
  const codeToggle = `import React, {useState} from 'react';

export const withToggle = Component => {
  return () => {
    const [isVisible, toggleVisibility] = useState(false);
    return <Component isVisible={isVisible} toggleVisibility={toggleVisibility}></Component>;
  };
};`;
  const codeIndex = `export * from './withToggle'; 
export * from './withAuthorize';`;
  const codeAuthorize = `import React, {useState} from 'react';

export const withAuthorize = Component => {
  return props => {
    const [isAuth, toggleAuth] = useState(false);
    return <Component {...props} isAuth={isAuth} toggleAuth={toggleAuth}></Component>;
  };
};`;
  const codeToggleComponent = `import React from 'react';
import {withAuthorize} from '../hocs';
import cx from 'classnames';
import {withToggle} from '../hocs/withToggle';

function Toggle({isAuth, toggleAuth, isVisible, toggleVisibility}) {
  const loginClass = cx('button is-dark', {
    'is-warning': isAuth,
  });
  return (
    <div>
      <h1 className="title">Try to show your name without login</h1>
      <div>
        <p>Authorized: {isAuth.toString()}</p>
        <button
          className={loginClass}
          onClick={() => {
            toggleAuth(!isAuth);
            toggleVisibility(false);
          }}
        >
          {isAuth ? 'Wyloguj się' : 'Zaloguj się'}
        </button>
        <button disabled={!isAuth} className="button is-primary" onClick={() => toggleVisibility(!isVisible)}>
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

export default withToggle(withAuthorize(Toggle));`;
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#4. Connect two or more hocs</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>
      <section className="container">
        <Toggle></Toggle>
      </section>
      <div className="hero-body">
        <div className="container">
          <h4 className="title is-4">Kod źródłowy</h4>
          <div className="box">
            <h4 className="title is-5">
              #1. <code>./hocs/withToggle.js</code>
            </h4>

            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codeToggle}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #2. <code>./hocs/withAuthorize.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codeAuthorize}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #3. <code>./hocs/index.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codeIndex}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #4. <code>./connect/Toggle.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codeToggleComponent}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withSyntax(Connect);
