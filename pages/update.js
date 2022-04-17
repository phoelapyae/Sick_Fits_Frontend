import React from 'react';
import UpdateProduct from '../components/UpdateProduct';

function update({ query }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}

export default update;
