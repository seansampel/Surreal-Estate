import React from 'React';

const PropertyCard = (props) => {
  const {
    _id,
    title,
    type,
    bathrooms,
    bedrooms,
    price,
    city,
    email,
  } = props;

  return (

    <div className="card">
      <img className="logo" src={logo} alt="logo" />
      <span className="title">{title}</span>
      <span className="type">{type}</span>
      <span className="city">{city}</span>
      <div className="bed-wrapper">
        <FaBed className="bed-icon" />
        <span className="bedrooms">{bedrooms}</span>
      </div>
      <div className="bath-wrapper">
        <FaBath className="bath-icon" />
        <span className="bathrooms">{bathrooms}</span>
      </div>
      <div className="pound-price">
        <FaPoundSign className="pound" />
        <span className="price">{price}</span>
      </div>
      <div className="mail-box">
        <GoMail className="mail" />
        <span className="email">{email}</span>
      </div>
      <div>
        <span className="save">{saveButton}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
