import React from 'react';
import Tasks from './Tasks';
import Users from './Users';
import styles from './fetchData.module.scss';
import cx from 'classnames';
import {withSyntax} from '../hocs';

function FetchData({okaidia, SyntaxHighlighter}) {
  const codeHoc = `import React, {useState, useEffect} from 'react';

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
};`;
  const codeTasks = `import React from 'react';
import styles from './tasks.module.scss';
import {withData} from '../hocs';
import cx from 'classnames';

function Tasks({data}) {
  return (
    <div>
      <h1 className={cx(['title', styles.header])}>Tasks Component</h1>
      <h2 className="title is-size-5">
        This data comes from <code>withData</code> HOC
      </h2>
      <div>
        <b>Tasks list:</b>
        {data.tasks ? data.tasks.map(el => <div key={el.id}>{el.title}</div>) : <div>Retreiving data from db...</div>}
      </div>
    </div>
  );
}
export default withData('http://www.mocky.io/v2/5d94b4672f000058008ff914?mocky-delay=2000ms')(Tasks);
`;
  const codeUsers = `import React from 'react';
import {withData} from '../hocs';

function Users({data}) {
  return (
    <div>
      <h1 className="title">Users Component</h1>
      <h2 className="title is-size-5">
        This data comes from <code>withData</code> HOC
      </h2>
      <div>
        <b>Users from database:</b>
        {data.users ? data.users.map(el => <div key={el.id}>{el.name}</div>) : <div>Retreiving data from db...</div>}
      </div>
    </div>
  );
}

export default withData('http://www.mocky.io/v2/5d95e8203300003a002f8d8b?mocky-delay=2000ms')(Users);
`;
  return (
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">#1. Fetching Data from server</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam repudiandae earum facere accusamus
            autem rerum, suscipit ab veniam, modi laudantium quidem blanditiis ipsa sint quos sapiente? Labore,
            similique numquam?
          </h2>
        </div>
      </div>
      <section>
        <div className={cx([styles.header, 'container'])}>
          <Tasks />
          <Users />
        </div>
      </section>

      <section>
        <div className="hero-body">
          <div className="container">
            <h4 className="title is-4">Kod źródłowy</h4>
            <div className="box">
              <h4 className="title is-5">
                #1. <code>./hocs/withData.js</code>
              </h4>
              <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
                {codeHoc}
              </SyntaxHighlighter>
            </div>
            <div className="box">
              <h4 className="title is-5">
                #2. <code>./hocs/index.js</code>
              </h4>
              <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
                export * from './withData';
              </SyntaxHighlighter>
            </div>
            <div className="box">
              <h4 className="title is-5">
                #3. <code>./fetch/Tasks.js</code>
              </h4>
              <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
                {codeTasks}
              </SyntaxHighlighter>
            </div>
            <div className="box">
              <h4 className="title is-5">
                #4. <code>./fetch/Users.js</code>
              </h4>
              <SyntaxHighlighter className="title is-6" showLineNumbers language="jsx" style={okaidia}>
                {codeUsers}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default withSyntax(FetchData);
