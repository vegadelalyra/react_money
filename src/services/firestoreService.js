import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from './firebaseService';

const collectionName = 'makaiapp_clients';
const appName = 'makaiapp';

export const createUserInCollection = async (uid, newUser) => {
  try {
    // Create user doc on makaiapp_clients collecion
    const newUserRef = doc(firestore, collectionName, newUser.email);
    await setDoc(newUserRef, newUser);

    // Create inner account collection inside created user doc
    const accountCollectionRef = collection(newUserRef, 'account');

    // Create the makaiapp doc on account collection
    const customAccountDocRef = doc(accountCollectionRef, appName);
    await setDoc(customAccountDocRef, {
      _makaiaService: appName,
      balance: 0,
      transactions: [],
      contacts: [],
    });

    return {
      id: uid,
      ...newUser,
    };
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const getUserFromCollection = async email => {
  try {
    const userRef = doc(firestore, collectionName, email);
    const user = await getDoc(userRef);

    const subCollectionName = `${collectionName}/${email}/account`;
    const accountRef = doc(firestore, subCollectionName, appName);
    const account = await getDoc(accountRef);

    if (user.exists())
      return {
        account: account.data(),
        ...user.data(),
      };

    return null;
  } catch (error) {
    console.warn('USER DOES NOT EXIST. REGISTERING.', error);
    return false;
  }
};

export const loginFromFireStore = async userData => {
  try {
    let existentUser = await getUserFromCollection(userData.email);
    if (existentUser) return existentUser;

    const newUser = {
      name: userData.displayName,
      photoUrl: userData.photoURL,
      email: userData.email,
      uid: userData.uid,
    };
    return await createUserInCollection(userData.uid, newUser);
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const updateAccountInSubCollection = async (identifier, accountData) => {
  try {
    const userRef = doc(firestore, collectionName, identifier);
    const accountCollectionRef = collection(userRef, 'account');

    // Checks account subcollecction docs
    const querySnapshot = await getDocs(accountCollectionRef);
    if (querySnapshot.empty) {
      // If account does not exist, create a new one
      const customAccountDocRef = doc(accountCollectionRef, appName);
      await setDoc(customAccountDocRef, accountData);
    } else {
      // If account exists, find and update the correct document
      const accountDocs = querySnapshot.docs;

      const targetDoc = accountDocs.find(
        doc => doc.data()._makaiaService === appName
      );

      if (targetDoc) {
        await updateDoc(targetDoc.ref, accountData);
      } else {
        // If the document is not found, you may decide to create a new one or handle it accordingly
        console.warn('Target document not found. Creating a new one.');
        await addDoc(accountCollectionRef, accountData);
      }
    }

    return true;
  } catch (error) {
    console.error('cause: firestoreService. error:', error);
    return false;
  }
};

export const getAccountFromSubCollection = async identifier => {
  try {
    const userRef = doc(firestore, collectionName, identifier);
    const userDoc = await getDoc(userRef);

    const subCollectionName = `${collectionName}/${identifier}/account`;
    const accountRef = doc(firestore, subCollectionName, appName);
    const account = await getDoc(accountRef);

    if (userDoc.exists())
      return {
        account: account.data(),
        accountRef,
      };

    return null;
  } catch (error) {
    console.error('Error fetching user from collection:', error);
    throw new Error('Error fetching user data');
  }
};

export const saveTransactionInAccountSubCollection = async (
  transaction,
  identifier
) => {
  const { account, accountRef } = await getAccountFromSubCollection(identifier);
  account.transactions.push(transaction);
  await updateDoc(accountRef, account);
};
