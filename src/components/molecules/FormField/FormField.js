import React from 'react';
import StyledFormField from './FormField.styles';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

const FormField = ({ label, isRequired, name, type, isRow }) => {
  const id = name;
  const [field, meta] = useField({ id, name, type });

  const isCheckbox = type === 'checkbox' ? true : false;
  return (
    <StyledFormField type={type} className={`${isCheckbox ? 'checkboxWrapper ' : ''}${isRow ? 'isRow' : ''}`} htmlFor={id}>
      <ErrorMessage name={name} component="span" className="error" />
      <input {...field} name={name} id={name} type={type} className={meta.touched && meta.error ? 'invalid' : undefined} />
      <span className={`label  ${isRequired ? 'required ' : null} ${isCheckbox ? 'checkbox' : null}`}>{label}</span>
    </StyledFormField>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  isRow: PropTypes.bool,
};

export default FormField;
