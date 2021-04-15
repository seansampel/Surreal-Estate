import React, { useState } from 'react';
import '../styles/AddProperty.css'

const AddProperty = () => {
    const initialState = {
      fields: {
      title: '',
    },
  };

const [fields, setFields] = useState(initialState.fields);

  
  
  return  (
    <div className="Add-Property">
      <form>
      <button type="submit">Add</button>
      </form>
      <div><p>Hello</p></div>
    </div>
  )
  }


export default AddProperty;