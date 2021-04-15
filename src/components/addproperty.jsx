import React, { useState } from 'react';
import '../styles/AddProperty.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
    },
  };

  // eslint-disable-next-line
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="Add-Property">
      <form onSubmit={handleAddProperty}>
        <button type="submit">Add</button>
      </form>
      <div><p>Hello</p></div>
    </div>
  );
};

export default AddProperty;
