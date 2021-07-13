import React, { useState } from 'react';
import '../styles/AddProperty.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: '',
      type: '',
    },
  };

  // eslint-disable-next-line
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="Add-Property">
      <div className="title">
        <form onSubmit={handleAddProperty} htmlFor="title">
          <label htmlFor="title">
            City
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
          <br />
          <label htmlFor="Type">
            Property description
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
            <br />
            <label htmlFor="Value">
              Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detatched</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End-of-Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
            <button type="submit">Add</button>
            <br />
            <label htmlFor="Bedrooms">
              Bedrooms
              <select
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </label>
          </label>
          <button type="submit">Add</button>
          <br />
          <label htmlFor="Bathrooms">
            Bathrooms
            <select
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2+">2+</option>
            </select>
          </label>
          <button type="submit">Add</button>
          <br />
          <label htmlFor="Price">
            Price
            <input
              id="email"
              name="email"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
          <button type="submit">Add</button>
          <br />
          <label htmlFor="Email">
            Email
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
