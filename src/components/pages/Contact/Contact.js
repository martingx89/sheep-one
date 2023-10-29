import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Container } from '@mui/material';
import * as Yup from 'yup';
import styles from './Contact.module.scss';
import styled from '@emotion/styled';
import AppButton from '../../common/Button/AppButton';
import { colorLight } from '../../../constants/colors';

const ContactWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  background-color: ${colorLight};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 2;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ListContainer = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Pole Imię jest wymagane').max(15, 'Must be 15 characters or less'),
    email: Yup.string().email('Nieprawidłowy adres email').required('Pole Email jest wymagane'),
    message: Yup.string().required('Pole Wiadomość jest wymagane'),
  });

  const handleSubmit = (values) => {
    // Handle form data
    console.log(values);
  };

  return (
    <ContactWrapper>
      <FormContainer>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
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
