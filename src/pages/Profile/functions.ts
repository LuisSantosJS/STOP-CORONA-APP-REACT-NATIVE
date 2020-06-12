import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

async function updateName(name: string) {
    const res = await firestore().collection('users').doc(auth().currentUser?.uid).update({
        name
    });
    return { res };
}

export default updateName;