import React from 'react';
import Client from '../../../layouts/client/Client';
import { posts } from '../../../../config/routes';
import classes from './posts.module.scss';
import PostCard from '../../../../components/postCard/PostCard';
import { connect } from 'react-redux';
import Preloader from '../../../../components/preloader/Preloader';

class Posts extends React.Component {
  render() {
    return (
      <Client>
        <section>
          <div className="container">
            <h1>{posts.name}</h1>
            <div className={classes.postsList}>
              {
                this.props.loadedPosts ? (
                  this.props.postsList.map((post, key) => (
                    <PostCard
                      key={key}
                      title={post.title}
                      description={post.description}
                      imageLink={post.middle_image}
                      postId={post.id}
                    />
                  )) 
                ) : <Preloader />
              }
            </div>
          </div>
        </section>
      </Client>   
    );
  }
}

const mapStateToProps = state => ({
  postsList: state.posts.postsList,
  loadedPosts: state.posts.loaded
});

export default connect(mapStateToProps)(Posts);