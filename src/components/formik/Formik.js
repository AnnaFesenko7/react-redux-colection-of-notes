import React from 'react';
import './Formik.css';
import TextError from './TextError';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phonNumber: ['', ''],
  unitedPhNumbers: [''],
};
const onSubmit = values => {
  console.log('submit', values);
};
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

function FormikFunction() {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage
            name="name"
            component={TextError}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage
            name="email"
            component={TextError}
          />
        </div>
        <div className="form-control">
          <label htmlFor="channel">channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
          />
          <ErrorMessage name="channel">
            {errorMsg => (
              <div className="error">
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="address">address</label>
          <Field name="address">
            {props => {
              const { form, meta, field } = props;
              return (
                <div>
                  <input
                    id="address"
                    type="text"
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <div className="error">
                      {meta.error}
                    </div>
                  )}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">
            facebook
          </label>
          <Field
            type="text"
            id="facebook"
            name="social.facebook"
          />
          <ErrorMessage
            name="facebook"
            component={TextError}
          />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <Field
            type="text"
            id="twitter"
            name="social.twitter"
          />
          <ErrorMessage
            name="twitter"
            component={TextError}
          />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">
            primaryPh
          </label>
          <Field
            type="phon"
            id="primaryPh"
            name="phonNumber[0]"
          />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">
            secondaryPh
          </label>
          <Field
            type="phon"
            id="secondaryPh"
            name="phonNumber[1]"
          />
        </div>

        <div className="form-control">
          <label htmlFor="unitedPhNumbers">
            List of phon numbers
          </label>
          <FieldArray name="unitedPhNumbers">
            {arrayProps => {
              console.log(arrayProps);
              const { push, remove, form } =
                arrayProps;
              const { values } = form;
              const { unitedPhNumbers } = values;
              return (
                <div>
                  {unitedPhNumbers.map(
                    (unitedPhNumber, index) => (
                      <div
                        className="wrapper"
                        key={index}
                      >
                        <Field
                          name={`unitedPhNumbers.${index}`}
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            -
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            push(' ');
                          }}
                        >
                          +
                        </button>
                      </div>
                    )
                  )}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikFunction;
