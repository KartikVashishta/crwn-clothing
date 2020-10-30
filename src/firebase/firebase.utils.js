import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyAHpGvab0ZvRXuRHLxmSmGzWYctjZEM5hU',
	authDomain        : 'crwn-db-baedc.firebaseapp.com',
	databaseURL       : 'https://crwn-db-baedc.firebaseio.com',
	projectId         : 'crwn-db-baedc',
	storageBucket     : 'crwn-db-baedc.appspot.com',
	messagingSenderId : '769370666894',
	appId             : '1:769370666894:web:af5cf31548a66c952c56df',
	measurementId     : 'G-K7LT8EGFDR',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
