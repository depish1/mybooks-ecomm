import StyledAccount from './Account.styles';
import { connect } from 'react-redux';

const Account = ({ user }) => {
  const userData = user.userData;
  console.log(Object.keys(userData));
  return (
    <StyledAccount>
      {Object.keys(userData).map((item) => {
        return <p key={item}>{userData[item]}</p>;
      })}
    </StyledAccount>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Account);
