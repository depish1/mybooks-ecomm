import StyledAccount from './Account.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase.js';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { redirect } from 'helpers';
import loaderActions from 'redux/loader/actions';
import UserTransaction from 'components/molecules/UserTransaction/UserTransaction';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';

const Account = ({ userData, setLoader }) => {
  const history = useHistory();
  const [userTransactions, setUserTransactions] = useState([]);

  useEffect(() => {
    if (!userData) {
      redirect(null, '/', history);
    } else {
      const downloadUserTransactions = async () => {
        setLoader(true);
        await firebase
          .firestore()
          .collection('transactions')
          .where('uid', '==', userData.uid)
          .get()
          .then((querySnapshot) => {
            setUserTransactions(
              querySnapshot.docs.map((doc) => {
                return { ...doc.data(), trans_id: doc.id };
              })
            );
          });
        setLoader(false);
      };
      downloadUserTransactions();
    }
  }, [history, userData, setLoader]);

  return (
    <StyledAccount>
      <HeadlinePrimary text="Historia transakcji" />
      {userTransactions
        ? userTransactions.map((transaction) => <UserTransaction key={transaction.trans_id} transaction={transaction} />)
        : 'Nie masz transakcji.'}
    </StyledAccount>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData,
});
const mapDispatchToProps = (dispatch) => ({
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
});

Account.propTypes = {
  setLoader: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
