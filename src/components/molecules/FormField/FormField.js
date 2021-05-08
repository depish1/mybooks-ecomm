import React from 'react';
import StyledFormField from './FormField.styles';

const FormField = ({ label, name, id, type = 'text', isRequired, onChangeHandler }) => {
  const isCheckbox = type === 'checkbox' ? true : false;
  return (
    <StyledFormField className={isCheckbox ? 'checkboxWrapper' : null} htmlFor={id}>
      <input name={name} id={id} type={type} onChange={onChangeHandler} />
      <span className={'label ' + (isRequired ? 'required ' : null) + (isCheckbox ? 'checkbox' : null)}>{label}</span>
    </StyledFormField>
  );
};

export default FormField;
