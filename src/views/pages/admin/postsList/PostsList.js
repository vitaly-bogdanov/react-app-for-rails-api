import React, { Component } from 'react';
import Admin from '../../../layouts/admin/Admin';
import PostString from '../../../../components/postString/PostString';
import { postUpdator } from '../../../../config/routes';
import { getDinamicPathForOneParam } from '../../../../config/helpers';

class PostsList extends Component {

  render() {

    return (
      <Admin>
        <section>
          <div className="container">
            <h1>posts list</h1>
            <ul className="list-group">
              {
                this.props.posts.map(post => {
                  return (
                    <PostString 
                      key={post.id}
                      id={post.id}
                      title={post.title} 
                      to={getDinamicPathForOneParam(postUpdator.path, post.id)} 
                      image={post.thumb_image} 
                    />
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