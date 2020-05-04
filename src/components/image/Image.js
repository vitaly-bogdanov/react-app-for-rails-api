import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
  <img src={props.src} alt={props.alt}/>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image;