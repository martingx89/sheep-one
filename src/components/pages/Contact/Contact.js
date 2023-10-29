import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import styles from './Contact.module.scss';
import AppButton from '../../common/Button/AppButton';

const Contact = () => {
  const handleSubmit = (values) => {
    // Obsłuż dane z formularza
    console.log(values);
  };

  // Zdefiniuj schemat walidacji z użyciem Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Pole Imię jest wymagane').max(15, 'Must be 15 characters or less'),
    email: Yup.string().email('Nieprawidłowy adres email').required('Pole Email jest wymagane'),
    message: Yup.string().required('Pole Wiadomość jest wymagane'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema} // Przypisz schemat walidacji
    >
      <Form>
        <div className={styles['field-wrapper']}>
          <Field as={TextField} id='name' name='name' label='Imię' variant='outlined' fullWidth />
          <ErrorMessage name='name' component='div' className={styles.error} />
        </div>

        <div className={styles['field-wrapper']}>
          <Field as={TextField} type='email' id='email' name='email' label='Email' variant='outlined' fullWidth />
          <ErrorMessage name='email' component='div' className={styles.error} />
        </div>

        <div className={styles['field-wrapper']}>
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
          <ErrorMessage name='message' component='div' className={styles.error} />
        </div>
        <AppButton>Wyślij</AppButton>
      </Form>
    </Formik>
  );
};

export default Contact;
