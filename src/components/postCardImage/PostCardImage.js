import React from 'react';
import PropTypes from 'prop-types';

const PostCardImage = props => (
  <img src={props.src} className="card-img-top" alt={props.alt} />
);

PostCardImage.propTypes = {
  src: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired
}

export default PostCardImage;