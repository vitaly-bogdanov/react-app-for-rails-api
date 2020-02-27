import React from 'react';

const PostCardImage = props => (
  <img src={props.src} className="card-img-top" alt={props.alt} ref={props.ref} />
);

export default PostCardImage;