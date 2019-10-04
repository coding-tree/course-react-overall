import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

export const withSyntax = Component => {
  return props => {
    return <Component okaidia={okaidia} SyntaxHighlighter={SyntaxHighlighter} {...props}></Component>;
  };
};
