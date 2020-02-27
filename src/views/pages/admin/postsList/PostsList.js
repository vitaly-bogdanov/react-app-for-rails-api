import React, { Component } from 'react';
import Admin from '../../../layouts/admin/Admin';
import PostString from '../../../../components/postString/PostString';

class PostsList extends Component {

  render() {

    return (
      <Admin>
        <section>
          <div className="container">
            <h1>posts list</h1>
            <ul className="list-group">
              {
                this.props.posts.map((post, key) => {
                  
                  return (
                    <PostString key={key} id={post.id} title={post.title} to={post.path} image={post.thumb_image} />
                  );
                })
              }
              
            </ul>
          </div>
        </section>
      </Admin>
    );
  }
}

export default PostsList;