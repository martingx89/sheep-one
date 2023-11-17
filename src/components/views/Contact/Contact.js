import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { ContactWrapper } from '../../common/ContactWrapper/ContactWrapper';
import { FormContainer } from '../../common/FormContainer/FormContainer';
import { ListContainer } from '../../common/ListContainer/ListContainer';
import AppButton from '../../common/Button/AppButton';
import emailjs from 'emailjs-com';
import { EMAIL_API_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from '../../../constants/pageSetup';

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Pole Imię jest wymagane').max(15, 'Must be 15 characters or less'),
    email: Yup.string().email('Nieprawidłowy adres email').required('Pole Email jest wymagane'),
    message: Yup.string().required('Pole Wiadomość jest wymagane'),
  });

  const handleSubmit = (values, actions) => {
    emailjs.init(EMAIL_API_KEY);

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
        to_name: 'martingx89',
        from_name: values.name,
        message: values.message,
        reply_to: values.email,
      })
      .then(
        function (response) {
          console.log('Email sent successfully:', response);
          actions.resetForm();
          alert('Email sent successfully');
        },
        function (error) {
          console.log('Email send failed:', error);
        }
      );
  };

  return (
    <ContactWrapper component={"section"}>
      <FormContainer id='contact'>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <Form>
            <div>
              <Field as={TextField} id='name' name='name' label='Imię' variant='outlined' fullWidth />
              <ErrorMessage name='name' component='div' />
            </div>

            <div>
              <Field as={TextField} type='email' id='email' name='email' label='Email' variant='outlined' fullWidth />
              <ErrorMessage name='email' component='div' />
            </div>

            <div>
              <Field
                as={TextField}
                id='message'
                name='message'
                label='Wiadomość'
                variant='outlined'
                fullWidth
                multiline
                rows={4}
              />
              <ErrorMessage name='message' component='div' />
            </div>
            <AppButton type='submit'>Wyślij</AppButton>
          </Form>
        </Formik>
      </FormContainer>
      <ListContainer>
        <ul>
          <li>Adres</li>
          <li>Numer</li>
        </ul>
      </ListContainer>
    </ContactWrapper>
  );
};

export default Contact;
