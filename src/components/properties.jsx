import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
import PropertyCard from './propertyCard';
import Alert from './alert';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: '', isSuccess: true });

  useEffect(() => {
    axios
      .get('https://localhost:3000/api/v1/PropertyListing')
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({
          message: 'Server error. Please try again later',
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div>
      Properties Page
    </div>
  );
};

export default Properties;
