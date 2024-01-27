import { collection, doc, getDoc, setDoc, addDoc } from 'firebase/firestore';
import { firestore } from './firebaseService';

const collectionName = 'makaiapp_clients';

export const createUserInCollection = async (uid, newUser) => {
  try {
    // Create user doc on makaiapp_clients collecion
    const newUserRef = doc(firestore, collectionName, newUser.email);
    await setDoc(newUserRef, newUser);

    // Create inner account collection inside created user doc
    const accountCollectionRef = collection(newUserRef, 'account');

    // Create the makaiapp doc on account collection
    const customAccountDocRef = doc(accountCollectionRef, 'makaiapp')
    await setDoc(customAccountDocRef, {
      _makaiaService: 'makaiapp',
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

    const subCollectionName = `${collectionName}/${email}/account`
    const accountRef = doc(firestore, subCollectionName, 'makaiapp') 
    const account = await getDoc(accountRef)

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
