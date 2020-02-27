import React, { Component, Fragment, lazy, Suspense } from 'react';
import Client from '../../../layouts/client/Client';
import { connect } from 'react-redux'
import { posts } from '../../../../config/routes'; 
import LinkButton from '../../../../components/linkButton/LinkButton';
import classes from './post.module.scss';

class Post extends Component {
  
  render() {
    let post = this.props.post(this.props.match.params.id);

    const LargeImage = lazy(() => import('../../../../components/image/Image'));
    return (
      <Client>
        
        <section>
          <div className="container">
            {
              post ? (
                <Fragment>
                  <h1>{post.title}</h1>
                  <div className={classes.imageBox}>
                    <Suspense fallback={<p>Картинка загружается</p>}>
                      <LargeImage src={post.large_image} alt={post.title} />
                    </Suspense>
                  </div>
                  <p>{post.body}</p>
                  <LinkButton 
                    to={posts.path} 
                    exact={posts.exact} 
                    name="Назад"
                    type="primary"
                  />
                </Fragment>
              ) : <p>Загрузка...</p>
            }
            
          </div>
        </section>
      </Client>
    );
  }
}

const mapStateToProps = state => ({
  post: (id) => state.posts.postsList.find(post => post.id == id)
});

export default connect(mapStateToProps)(Post);