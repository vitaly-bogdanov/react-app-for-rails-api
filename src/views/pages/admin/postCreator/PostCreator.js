import React, { Component } from 'react';
import Admin from '../../../layouts/admin/Admin';
import PostFormCreateContainer from '../../../../components/postForm/PostFormCreateContainer';

class PostCreator extends Component {

  render() {

    return(
      <Admin>
        <section>
          <div className="container">
            <PostFormCreateContainer />
          </div>
        </section>
      </Admin>
    );
  }
}

export default PostCreator;