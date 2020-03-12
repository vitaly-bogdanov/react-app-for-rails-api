import React, { Component } from 'react';
import PostForm from './PostForm';
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

    try {
      let response = await axios.post('http://localhost:3001/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      this.props.addPostAction(response.data);
      return {status: response.status};
    } catch(error) {
      return {status: error.response.status, errors: error.response.data.errors};
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