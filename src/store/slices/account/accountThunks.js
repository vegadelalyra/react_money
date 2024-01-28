import {
  updateAccountInSubCollection,
} from '../../../services/firestoreService';
import { SET_BALANCE, SET_TRANSACTIONS, SET_CONTACTS } from './accountSlice';

export const updateAccountData = accountData => async (dispatch, getState) => {
  try {
    const { user } = getState();
    const { email } = user.user;

    const updateFirestorePromise = updateAccountInSubCollection(
      email,
      accountData
    );

    // Dispatch actions to update Redux store
    const dispatchPromises = [];

    if (accountData.balance !== undefined) {
      dispatchPromises.push(dispatch(SET_BALANCE(accountData.balance)));
    }

    if (accountData.transactions !== undefined) {
      dispatchPromises.push(
        dispatch(SET_TRANSACTIONS(accountData.transactions))
      );
    }

    if (accountData.contacts !== undefined) {
      dispatchPromises.push(dispatch(SET_CONTACTS(accountData.contacts)));
    }

    // Wait for both Firestore update and Redux store updates
    await Promise.all([updateFirestorePromise, ...dispatchPromises]);
  } catch (error) {
    console.error('cause: updateAccountData. error:', error);
  }
};