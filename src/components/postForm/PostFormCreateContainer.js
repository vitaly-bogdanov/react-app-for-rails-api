import React, { Component } from 'react';
import PostForm from './PostForm';

import { apiCreatePost } from '../../config/Api';
import axios from 'axios';

import { connect } from 'react-redux';
import { addPostCreator } from '../../redux/actions/actionCreators';

class PostFormCreateContainer extends Component {

  async createPost(values) {
    let formData = new FormData();
    formData.append('title', values.title.trim());
    formData.append('description', values.description.trim());
    formData.append('body', values.body.trim());
    formData.append('image', values.image);
    return await apiCreatePost(formData, response => {
      this.props.addPostAction(response.data);
    });
  }

  render() {
    const initialValues = {
      title: '',
      description: '',
      body: '',
      image: ''
    };

    return (
      <PostForm 
        sendPost={this.createPost.bind(this)}
        initialValues={initialValues}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPostAction: post => dispatch(addPostCreator(post))
});

export default connect(null, mapDispatchToProps)(PostFormCreateContainer);