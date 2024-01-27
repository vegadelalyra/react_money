import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from './firebaseService';

const collectionName = 'makaiapp_clients';

export const createUserInCollection = async (uid, newUser) => {
  try {
    const newUserRef = doc(firestore, collectionName, uid);
    await setDoc(newUserRef, newUser);
    return {
      id: uid,
      ...newUser,
    };
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const getUserFromCollection = async uid => {
  try {
    const userRef = doc(firestore, collectionName, uid);
    const user = await getDoc(userRef);

    if (user.exists())
      return {
        id: user.id,
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
    let existentUser = await getUserFromCollection(userData.uid);
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
