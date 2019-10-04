import React from 'react';
import PersonTwo from './PersonTwo';
import styles from './functionality.module.scss';
import PersonOne from './PersonOne';
import {withSyntax} from '../hocs';

function Functionality({okaidia, SyntaxHighlighter}) {
  const codeFunctionality = `import React, {useState} from 'react';

export const withFuncionality = Component => {
  return () => {
    const [name, setName] = useState('Radosław');

    return <Component name={name} setName={setName}></Component>;
  };
};`;
  const codePersonOne = `import React from 'react';
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

export default withFuncionality(PersonOne);`;
  const codePersonTwo = `import React from 'react';
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

export default withFuncionality(PersonTwo);`;
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#3. Share your functionality</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>
      <div className="container">
        <section className={styles.container}>
          <PersonOne></PersonOne>
          <PersonTwo className={styles.personTwo}></PersonTwo>
        </section>
      </div>
      <div className="hero-body">
        <div className="container">
          <h4 className="title is-4">Kod źródłowy</h4>
          <div className="box">
            <h4 className="title is-5">
              #1. <code>./hocs/withFunctionality.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codeFunctionality}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #2. <code>./hocs/index.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              export * from './withFunctionality';
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #3. <code>./functionality/PersonOne.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codePersonOne}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #4. <code>./functionality/PersonTwo.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codePersonTwo}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withSyntax(Functionality);
