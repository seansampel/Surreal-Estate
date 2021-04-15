import React, { useState } from 'react';
import '../styles/AddProperty.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
    },
  };

  // eslint-disable-next-line
  const [fields, setFields] = useState(initialState.fields);

  // const handleAddProperty = (event) => {
  //   event.preventDefault();
  //   console.log(fields);
  // };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="Add-Property">
      <form htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
