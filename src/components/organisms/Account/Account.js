import StyledAccount from './Account.styles';
import { connect } from 'react-redux';
import firebase from 'firebase.js';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { redirect } from 'helpers';
import loaderActions from 'redux/loader/actions';
import UserTransaction from 'components/molecules/UserTransaction/UserTransaction';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';

const Account = ({ user: { userData }, setLoader }) => {
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
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
