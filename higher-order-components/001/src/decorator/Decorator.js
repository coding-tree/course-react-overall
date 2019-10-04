import React from 'react';
import Container from './Container';
import {withSyntax} from '../hocs/withSyntax';

function Decorator({okaidia, SyntaxHighlighter}) {
  const codeHoc = `import React from 'react';

  export const withDecorator = Component => {
    return () => (
      <div className="container">
        <h3 className="title is-4">Container Component:</h3>
        <div className="box">Wrapper Header - Before</div>
        <Component />
        <div className="box">Wrapper Footer - After</div>
      </div>
    );
  };
  `;
  const codeContainer = `import React from 'react';
    
    import {withDecorator} from '../hocs';
    
    const Container = () => {
      return <div className="box has-background-warning">Container</div>;
    };
    
    export default withDecorator(Container);`;
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#2. Use as a Decorator</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>

      <Container></Container>

      <div className="hero-body">
        <div className="container">
          <h3 className="title is-4">Kod źródłowy:</h3>
          <div className="box">
            <h4 className="title is-5">
              #1. <code>withDecorator.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
              {codeHoc}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #2. <code>./hocs/index.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="javascript" style={okaidia}>
              export * from './withDecorator';
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <h4 className="title is-5">
              #3. <code>./decorator/Container.js</code>
            </h4>
            <SyntaxHighlighter className="title is-6" showLineNumbers language="javascript" style={okaidia}>
              {codeContainer}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withSyntax(Decorator);
