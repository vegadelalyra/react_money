import { updateAccountInCollection } from '../../../services/firestoreService';
import { SET_BALANCE, SET_TRANSACTIONS, SET_CONTACTS } from './accountSlice';

export const updateAccountData = accountData => async (dispatch, getState) => {
  try {
    const { user } = getState();
    const { email } = user.user;
    
    // Update the account in Firestore
    await updateAccountInCollection(email, accountData);

    // Dispatch actions to update Redux store
    if (accountData.balance !== undefined) {
      dispatch(SET_BALANCE(accountData.balance));
    }

    if (accountData.transactions !== undefined) {
      dispatch(SET_TRANSACTIONS(accountData.transactions));
    }

    if (accountData.contacts !== undefined) {
      dispatch(SET_CONTACTS(accountData.contacts));
    }
  } catch (error) {
    console.error('cause: updateAccountData. error:', error);
  }
};
