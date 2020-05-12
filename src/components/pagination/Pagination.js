import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './pagination.module.scss';
import { posts } from '../../config/routes'
import { getPageNumber } from '../../config/helpers';
import PaginationButton from '../paginationButton/PaginationButton';

const Pagination = props => {
  const pagesCount = Math.ceil((props.tottalCountPosts / props.pageCountPosts));
  const pageNumber = getPageNumber(props);

  const pageSwitch = (num) => {
    props.history.push(`${posts.path}?page=${num}`);
  }

  return (
    <div className={classes.Paginator}>
      {
        (pageNumber !== 1) && (<div 
          className={[classes.paginationButton, classes.ruleButton].join(' ')}
          onClick={() => pageSwitch(pageNumber - 1)}
        >&larr;</div>)
      }
      {
        [...Array(pagesCount).keys()].map(num => <PaginationButton key={num} numBtn={num + 1} pageNumber={pageNumber}/>)
      }
      { 
        (pageNumber !== pagesCount) && (<div 
          className={[classes.paginationButton, classes.ruleButton].join(' ')}
          onClick={() => pageSwitch(pageNumber + 1)}
        >&rarr;</div>)
      }
    </div>
  );
}

export default withRouter(Pagination);