import StyledHeadlinePrimary from './HeadlinePrimary.styles';
import PropTypes from 'prop-types';

const HeadlinePrimary = ({ text }) => {
  return <StyledHeadlinePrimary>{text}</StyledHeadlinePrimary>;
};

HeadlinePrimary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadlinePrimary;
