import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import TextInput from '../textInput/TextInput';
import FileInput from '../fileInput/FileInput';
import { textValidationCreator } from '../../config/validates';
import { getValidateClassHelper } from '../../config/helpers'
import Alert from '../alert/Alert';
import { withRouter } from 'react-router-dom';
import { postsList } from '../../config/routes';
import PropTypes from 'prop-types';

const PostForm = props => {
  let [serverImageError, setServerImageError] = useState([]);

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={async (values, actions) => {
        let response = await props.sendPost(values);
        if (response.status === 201 || response.status === 200) {
          actions.resetForm(props.initialValues);
          if (serverImageError.length) {
            setServerImageError([]);
          }
          props.history.push(postsList.path);
        } else if (response.status === 403) {
          if (response.errors.image) {
            setServerImageError(response.errors.image);
          }
        }
      }}
    >
      {
        ({errors, touched, values}) => (
          <Form encType="multipart/form-data">

            {
              serverImageError.length !== 0 ? <Alert type="danger" errors={serverImageError} /> : null
            }
            <TextInput
              name='title'
              validate={textValidationCreator(5, 15)}
              validateClass={getValidateClassHelper(errors.title, touched.title)}
            />
            <TextInput
              name='description'
              validate={textValidationCreator(5, 100)}
              validateClass={getValidateClassHelper(errors.description, touched.description)}
            />
            <TextInput
              name='body'
              validate={textValidationCreator(5, 150)}
              validateClass={getValidateClassHelper(errors.body, touched.body)}
            />
            <FileInput 
              name="image"
              values={values}
            />
            <button type="submit">Отправить</button>
          </Form>
        )
      }
    </Formik>
  );
}

PostForm.propTypes = {
  sendPost: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
}

export default withRouter(PostForm);