import StyledRadioGroup from './RadioGroup.styles';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import { ErrorMessage } from 'formik';

const RadioGroup = ({ label, children, name }) => {
  return (
    <StyledRadioGroup>
      <HeadlinePrimary isError text={label} />
      {children}
      <ErrorMessage name={name} component="span" className="error" />
    </StyledRadioGroup>
  );
};

export default RadioGroup;
