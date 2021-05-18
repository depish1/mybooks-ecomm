import StyledRadioField from './RadioField.styles';
import PropTypes from 'prop-types';

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

RadioField.propTypes = {
  label: PropTypes.shape({ option: PropTypes.string.isRequired, defaultPrice: PropTypes.string.isRequired, add: PropTypes.string.isRequired })
    .isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioField;
