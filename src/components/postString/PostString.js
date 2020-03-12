import React from 'react';
import LinkButton from '../linkButton/LinkButton';
import Image from '../image/Image';
import classes from './postString.module.scss';
import { connect } from 'react-redux';
import { deletePostThunk } from '../../redux/middlewares';

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
        exact={false} 
        type={'info'} 
      />
    </div>
    <div>
      <p 
        className={classes.delete}
        onClick={() => props.deletePostAction(props.id)}
      >&times;</p>
    </div>
  </li>
);

const mapDispatchToProps = dispatch => ({
  deletePostAction: (id) => dispatch(deletePostThunk(id))
});

export default connect(null, mapDispatchToProps)(PostString);