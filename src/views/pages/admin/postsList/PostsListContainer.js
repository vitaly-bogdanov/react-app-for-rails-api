import React, { Component } from 'react';
import PostsList from './PostsList';
import { connect } from 'react-redux';
import { deletePostCreator } from '../../../../redux/actions/actionCreators';
import { apiDeletePost } from '../../../../config/Api';

class PostsListContainer extends Component {

  deletePost(id) {
    apiDeletePost(id, response => {
      console.log(id);
      console.log(response);
      this.deletePostAction(id);
    });
  }
  
  render() {
    return (
      <PostsList 
        posts={this.props.postsList}
        deletePost={this.deletePost.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => ({
  postsList: state.posts.postsList
});
const mapDispatchToProps = dispatch => ({
  deletePostAction: id => dispatch(deletePostCreator(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);