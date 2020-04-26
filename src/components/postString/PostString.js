import React from 'react';
import LinkButton from '../linkButton/LinkButton';
import Image from '../image/Image';
import classes from './postString.module.scss';

const PostString = props => (
  <li className={`list-group-item ${classes.postString}`}>
    <div>
      <Image 
        src={props.image} 
        alt={props.title} 
      />
    </div>
    <h5>
      {props.title}
    </h5>
    <div>
      <LinkButton
        name="Редактировать" 
        to={props.to}
        type={'info'} 
      />
    </div>
    <div>
      <p 
        className={classes.delete}
        onClick={() => props.deletePost(props.id)}
      >&times;</p>
    </div>
  </li>
);

export default PostString;