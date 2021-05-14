import StyledRadioField from './RadioField.styles';

import { Field, useField } from 'formik';

const RadioField = ({ label, name, value }) => {
  const addText = name === 'delivery' ? `Czas dostawy: ${label.add} h` : `Czas księgowania wpłaty: ${label.add} h`;

  const [field, meta] = useField({ id: value, name, type: 'radio' });

  return (
    <StyledRadioField htmlFor={value}>
      <Field {...Field} type="radio" name={name} value={value} id={value} />
      {/* <input name={name} id={id} type="radio" /> */}
      <p>
        <span className="option">{label.option}</span>
        {addText}
      </p>
      <span className="price">{label.defaultPrice} zł</span>
    </StyledRadioField>
  );
};

export default RadioField;
