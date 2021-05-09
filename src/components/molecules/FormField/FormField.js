import React from 'react';
import StyledFormField from './FormField.styles';
import { ErrorMessage, useField } from 'formik';

const FormField = ({ label, isRequired, isWrong, id, name, type }) => {
  const [field, meta] = useField({ id, name, type });

  const isCheckbox = type === 'checkbox' ? true : false;
  return (
    <StyledFormField className={isCheckbox ? 'checkboxWrapper ' : ''} htmlFor={id}>
      <ErrorMessage name={name} component="span" className="error" />
      <input {...field} name={name} id={id} type={type} className={meta.touched && meta.error ? 'invalid' : undefined} />
      <span className={'label ' + (isRequired ? 'required ' : null) + (isCheckbox ? 'checkbox' : null)}>{label}</span>
    </StyledFormField>
  );
};

export default FormField;
