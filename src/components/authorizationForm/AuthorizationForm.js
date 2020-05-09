import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../textInput/TextInput';
import { textValidationCreator, validatePasswordCreator } from '../../config/validates';
import { getValidateClassHelper } from '../../config/helpers';
import { withRouter } from 'react-router-dom';
import Alert from '../alert/Alert';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  password: ''
}

const AuthorizationForm = props => {
  const [serverErrors, setServerErrors] = useState({errors: [], hasErrors: false});
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        let errorsArray = await props.authorization(values);
        errorsArray && setServerErrors({errors: errorsArray, hasErrors: true});
      }}
    >
      {
        ({errors, touched}) => (
          <Form>
            {
              serverErrors.hasErrors && <Alert type="danger" errors={serverErrors.errors} />
            }
            <TextInput 
              name='name'
              validate={textValidationCreator(5, 15)}
              validateClass={getValidateClassHelper(errors.name, touched.name)}
            />
            <TextInput 
              name='password'
              validate={validatePasswordCreator(4, 8)}
              validateClass={getValidateClassHelper(errors.password, touched.password)}
              type="password"
            />
            <button type="submit">Отправить</button>
          </Form>
        )
      }
    </Formik>
  );
}

AuthorizationForm.propTypes = {
  authorization: PropTypes.func.isRequired
}

export default withRouter(AuthorizationForm);