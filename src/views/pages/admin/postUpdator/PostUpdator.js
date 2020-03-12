import React, { Component } from 'react';
import PostFormUpdateContainer from '../../../../components/postForm/PostFormUpdateContainer';
import Admin from '../../../layouts/admin/Admin';

class PostUpdator extends Component {

  render() {
    return (
      <Admin>
        <section>
          <div className="container">
            <PostFormUpdateContainer />
          </div>
        </section>
      </Admin>
    );
  }
}

export default PostUpdator;