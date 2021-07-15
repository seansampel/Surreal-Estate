import React, { useState } from 'react';
import '../styles/AddProperty.css';
import Axios from 'axios';
// import Alert from '../../components/Alert';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: '',
      type: '',
    },
  };

  // eslint-disable-next-line-State hook is applied

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();

    // Axios request - includes localhost address and fields as the main object that is being added to DB

    Axios
      .post('http://localhost:3000/api/v1/PropertyListing', fields)
      .then((res) => {
        console.log(res);
      });
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
          <br />
          <label htmlFor="Price">
            Price
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
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
