import React, { Component, Fragment } from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Image from '../image/Image'; 
import { addPostCreator } from '../../redux/actions/actionCreators';

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
      
      return {status: response.status};
    } catch(error) {
      console.dir(error);
      return {status: error.response.status, errors: error.response.data.errors};
    }
  }

  render() {
    let initialValues = {title: '', description: '', body: '', image: ''}
    let post = this.props.post(this.props.match.params.id);
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
          <PostForm sendPost={this.updatePost} initialValues={initialValues} />
        </Fragment>
        
      ) : (
        <p>Загрузка...</p>
      )
  }
}

const mapStateToProps = state => ({
  post: (id) => state.posts.postsList.find(post => post.id == id)
});

const mapDispatchToProps = dispatch => ({
  
});

export default withRouter(connect(mapStateToProps)(PostFormUpdateContainer));