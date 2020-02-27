import React, { Component } from 'react';
import PostsList from './PostsList';
import { connect } from 'react-redux';

class PostsListContainer extends Component {
  
  render() {

    return (
      <PostsList posts={this.props.postsList} />
    );
  }
}

const mapStateToProps = state => ({
  postsList: state.posts.postsList
});

export default connect(mapStateToProps)(PostsListContainer);