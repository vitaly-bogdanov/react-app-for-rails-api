import React, { Component, Fragment } from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Image from '../image/Image'; 
import { updatePostCreator } from '../../redux/actions/actionCreators';

class PostFormUpdateContainer extends Component {

  async updatePost(values) {
    let formData = new FormData();
    formData.append('title', values.title.trim());
    formData.append('description', values.description.trim());
    formData.append('body', values.body.trim());
    formData.append('image', values.image);
    try {
      let response = await axios.post(`http://localhost:3001/update/${values.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      this.props.updatePost(response.data);
      return {status: response.status};
    } catch(error) {
      if (error.response.status === 422) {
        return {status: error.response.status, errors: error.response.data.errors};
      } else {
        console.error(error);
      }
    }
  }

  render() {
    let initialValues = {title: '', description: '', body: '', image: ''}
    let post = this.props.post(parseInt(this.props.match.params.id));
    if (post) {
      initialValues = {
        id: post.id,
        title: post.title,
        description: post.description,
        body: post.body,
        image: 0
      }
    }
    return post ? (
        <Fragment>
          <Image src={post.large_image} alt={initialValues.title} />
          <PostForm sendPost={this.updatePost.bind(this)} initialValues={initialValues} />
        </Fragment>
        
      ) : (
        <p>Загрузка...</p>
      )
  }
}

const mapStateToProps = state => ({
  post: (id) => state.posts.postsList.find(post => post.id === id)
});

const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch(updatePostCreator(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFormUpdateContainer));