import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../textInput/TextInput';
import { 
  textValidationCreator, 
  confirmValidatePasswordCreator,
  validatePasswordCreator
} from '../../config/validates';
import { getValidateClassHelper } from '../../config/helpers';
import { withRouter } from 'react-router-dom';
import { postsList } from '../../config/routes';
import Alert from '../alert/Alert';

const initialValues = {
  name: '',
  password: '',
  passwordConfirmation: ''
}

const RegistrationForm = props => {
  let [serverErrors, setServerErrors] = useState([]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        let response = await props.registration(values);
        if (response.status === 201) {
          actions.resetForm(initialValues);
          props.history.push(postsList.path);
        } else if (response.status === 403) {
          let errors = [];
          Object.keys(response.errors).map((value, key) => {
            errors = [
              ...errors,
              response.errors[value]
            ];
          });
          setServerErrors(errors);
        }
      }}
    >
      {
        ({errors, touched, values}) => (
          <Form>
            {
              serverErrors.length !== 0 && <Alert type="danger" errors={serverErrors} />
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

export default withRouter(RegistrationForm);