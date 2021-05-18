import StyledRadioGroup from './RadioGroup.styles';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const RadioGroup = ({ label, children, name }) => {
  return (
    <StyledRadioGroup>
      <HeadlinePrimary isError text={label} />
      {children}
      <ErrorMessage name={name} component="span" className="error" />
    </StyledRadioGroup>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default RadioGroup;
