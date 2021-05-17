import StyledAccount from './Account.styles';
import { connect } from 'react-redux';
import firebase from 'firebase.js';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { redirect } from 'helpers';
import loaderActions from 'redux/loader/actions';
import UserTransaction from 'components/molecules/UserTransaction/UserTransaction';

const Account = ({ user: { userData }, setLoader }) => {
  const history = useHistory();
  if (!userData) redirect(null, '/', history);
  const [userTransactions, setUserTransactions] = useState([]);

  useEffect(() => {
    const downloadUserTransactions = async () => {
      setLoader(true);
      await firebase
        .firestore()
        .collection('transactions')
        .where('uid', '==', userData.uid)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          setUserTransactions(querySnapshot.docs.map((doc) => doc.data()));
        });
      setLoader(false);
    };

    downloadUserTransactions();
  }, [history, userData, setLoader]);

  return (
    <StyledAccount>
      {Object.keys(userData).map((item) => {
        return <p key={item}>{userData[item]}</p>;
      })}

      {userTransactions ? userTransactions.map((transaction) => <UserTransaction transaction={transaction} />) : 'Nie masz transakcji.'}
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
