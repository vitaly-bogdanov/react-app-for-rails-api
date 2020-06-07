import React, { Component } from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPageNumber } from '../../../../config/helpers';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.perPage = 6;
  }
  getPostsListsHandler() {
    let pageNumber = getPageNumber(this.props);
    let countPages = Math.ceil(this.props.countPosts / this.perPage);
    if (pageNumber <= 0 || pageNumber > countPages) {
      if (countPages !== 0) {
        this.props.history.push('/404');
      }
      return [];
    }
    return this.props.postsList.slice(pageNumber*this.perPage - this.perPage, pageNumber*this.perPage);
  }

  render() {
    return (
      <Posts 
        loadedPosts={this.props.loadedPosts}
        getPostsLists={this.getPostsListsHandler.bind(this)}
        countPosts={this.props.countPosts}
        perPage={this.perPage}
      />
    );
  }
}

const mapStateToProps = state => ({
  postsList: state.posts.postsList,
  loadedPosts: state.posts.loaded,
  countPosts: state.posts.count
})

export default withRouter(connect(mapStateToProps)(PostsContainer));