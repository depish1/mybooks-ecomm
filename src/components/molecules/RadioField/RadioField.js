import StyledRadioField from './RadioField.styles';

import { Field } from 'formik';

const RadioField = ({ label, name, value }) => {
  const addText = name === 'delivery' ? `Czas dostawy: ${label.add} h` : `Czas księgowania wpłaty: ${label.add} h`;

  return (
    <StyledRadioField htmlFor={value}>
      <Field {...Field} type="radio" name={name} value={value} id={value} />
      <p>
        <span className="option">{label.option}</span>
        {addText}
      </p>
      <span className="price">{label.defaultPrice} zł</span>
    </StyledRadioField>
  );
};

export default RadioField;
