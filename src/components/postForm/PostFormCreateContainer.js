import React, { Component } from 'react';
import PostForm from './PostForm';
import axios from 'axios';

class PostFormCreateContainer extends Component {

  async createPost(values) {

    let formData = new FormData();
    formData.append('title', values.title.trim());
    formData.append('description', values.description.trim());
    formData.append('body', values.body.trim());
    formData.append('image', values.image);

    try {
      let response = await axios.post('http://localhost:3001/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      return {status: response.status};
    } catch(error) {
      console.log(error);
      return {status: error.response.status, errors: error.response.data.errors}
    }
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
        sendPost={this.createPost}
        initialValues={initialValues}
      />
    );
  }
}

export default PostFormCreateContainer;