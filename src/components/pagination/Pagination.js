import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './pagination.module.scss';
import { Link } from 'react-router-dom';
import { posts } from '../../config/routes'
import { getPageNumber } from '../../config/helpers';

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
        [...Array(pagesCount).keys()].map(num => {
          return <Link key={num+1} className={[classes.paginationButton, classes.itemButton].join(' ')} to={`${posts.path}?page=${num+1}`}>{num+1}</Link>
        })
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