import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../textInput/TextInput';
import { textValidationCreator, confirmValidatePasswordCreator } from '../../config/validates';
import { getValidateClassHelper } from '../../config/helpers';

const initialValues = {
  name: '',
  password: '',
  confirmPassword: ''
}

const RegistrationForm = props => {
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {
        ({errors, touched, values}) => (
          <Form>
            <TextInput 
              name='name'
              validate={textValidationCreator(5, 15)}
              validateClass={getValidateClassHelper(errors.name, touched.name)}
            />
            <TextInput 
              name='password'
              validate={textValidationCreator(4, 8)}
              validateClass={getValidateClassHelper(errors.password, touched.password)}

              type="password"
            />
            <TextInput 
              name='confirmPassword'
              validate={confirmValidatePasswordCreator(values.password, touched.password)}
              validateClass={getValidateClassHelper(errors.confirmPassword, touched.confirmPassword)}

              type="password"
            />
          </Form>
        )
      }
    </Formik>
  );
}

export default RegistrationForm;