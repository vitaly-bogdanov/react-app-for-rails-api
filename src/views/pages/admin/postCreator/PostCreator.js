import React, { Component } from 'react';
import Admin from '../../../layouts/admin/Admin';
import PostFormCreateContainer from '../../../../components/postForm/PostFormCreateContainer';

class PostCreator extends Component {
  render() {
    return(
      <section>
        <div className="container">
          <PostFormCreateContainer />
        </div>
      </section>
    );
  }
}

export default PostCreator;