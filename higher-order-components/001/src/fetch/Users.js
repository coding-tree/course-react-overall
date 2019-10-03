import React from 'react';
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
