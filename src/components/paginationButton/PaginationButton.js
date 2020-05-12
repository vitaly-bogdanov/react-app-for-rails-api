import React from 'react';
import { Link } from 'react-router-dom';
import classes from './paginationButton.module.scss';
import { posts } from '../../config/routes';

const PaginationButton = props => {
  let btnClss = [classes.itemButton, classes.paginationButton];
  if (props.pageNumber === props.numBtn) {
    btnClss.push(classes.active);
  }
  return <Link className={btnClss.join(' ')} to={`${posts.path}?page=${props.numBtn}`}>{props.numBtn}</Link>
}

export default PaginationButton;