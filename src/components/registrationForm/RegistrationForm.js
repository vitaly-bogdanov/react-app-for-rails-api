import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../textInput/TextInput';
import { textValidationCreator, confirmValidatePasswordCreator, validatePasswordCreator } from '../../config/validates';
import { getValidateClassHelper } from '../../config/helpers';
import { withRouter } from 'react-router-dom';
import { postsList } from '../../config/routes';
import Alert from '../alert/Alert';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  password: '',
  passwordConfirmation: ''
}

const RegistrationForm = props => {
  let [serverErrors, setServerErrors] = useState({errors: [], hasErrors: false});
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        let errorsArray = await props.registration(values);
        setServerErrors && setServerErrors({errors: errorsArray, hasErrors: true});
      }}
    >
      {
        ({errors, touched, values}) => (
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
            <TextInput 
              name='passwordConfirmation'
              validate={confirmValidatePasswordCreator(values.password, touched.password)}
              validateClass={getValidateClassHelper(errors.passwordConfirmation, touched.passwordConfirmation)}

              type="password"
            />
            <button type="submit">Отправить</button>
          </Form>
        )
      }
    </Formik>
  );
}

RegistrationForm.propTypes = {
  registration: PropTypes.func.isRequired
}

export default withRouter(RegistrationForm);