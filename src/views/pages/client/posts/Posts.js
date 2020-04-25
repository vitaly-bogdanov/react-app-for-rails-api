import React from 'react';
import Client from '../../../layouts/client/Client';
import { posts } from '../../../../config/routes';
import classes from './posts.module.scss';
import PostCard from '../../../../components/postCard/PostCard';
import { connect } from 'react-redux';

class Posts extends React.Component {

  render() {
    return (
      <Client>
        <section>
          <div className="container">
            <h1>{posts.name}</h1>
            <div className={classes.postsList}>
              {
                this.props.postsList.map((post, key) => (
                  <PostCard
                    key={key}
                    title={post.title}
                    description={post.description}
                    imageLink={post.middle_image}
                    postId={post.id}
                  />
                ))
              }
            </div>
          </div>
        </section>
      </Client>   
    );
  }
}

const mapStateToProps = state => ({
  postsList: state.posts.postsList
});

export default connect(mapStateToProps)(Posts);