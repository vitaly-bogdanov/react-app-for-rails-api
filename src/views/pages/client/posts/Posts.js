import React from 'react';
import Client from '../../../layouts/client/Client';
import { posts } from '../../../../config/routes';
import classes from './posts.module.scss';
import PostCard from '../../../../components/postCard/PostCard';
import Preloader from '../../../../components/preloader/Preloader';
import Pagination from '../../../../components/pagination/Pagination';
import PropTypes from 'prop-types';

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
                  this.props.getPostsLists().map((post, key) => (
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
            {
              (this.props.loadedPosts & this.props.countPosts !== 0) ? (
                <Pagination 
                  tottalCountPosts={this.props.countPosts}
                  pageCountPosts={this.props.perPage}
                />
              ) : null
            }
          </div>
        </section>
      </Client>   
    );
  }
}

export default Posts;