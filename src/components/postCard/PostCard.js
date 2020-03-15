import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import classes from './postCard.module.scss';
import { post } from '../../config/routes';
import { getDinamicPathForOneParam } from '../../config/helpers';
import LinkButton from '../linkButton/LinkButton';

const PostCardImage = lazy(() => import('../postCardImage/PostCardImage'));

const PostCard = props => (
  <div className="card">
    <div className={classes.imageBox}>
      <InView triggerOnce={true}>
        {
          ({ inView, ref, entry }) => {
            return (
              <div ref={ref}>
                <Suspense fallback={<p>...</p>}>
                  <PostCardImage src={props.imageLink} alt={props.title}  />
                </Suspense>
              </div>
            )
          }
        }
      </InView>
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      
      <Link className="btn btn-primary" to={getDinamicPathForOneParam(post.path, props.postId)}>Читать</Link>
    </div>
  </div>
);

export default PostCard;