import React from 'react';
import Label from 'components/atoms/Label/Label';

const FormInput = ({ label, name, id, type = 'text', isRequired }) => {
  const isCheckbox = type === 'checkbox' ? true : false;
  return (
    <>
      <Label className={isCheckbox ? 'checkboxWrapper' : null} htmlFor={id}>
        <input name={name} id={id} type={type} />
        <span className={'label ' + (isRequired ? 'required ' : null) + (isCheckbox ? 'checkbox' : null)}>{label}</span>
      </Label>
    </>
  );
};

export default FormInput;
