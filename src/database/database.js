import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

async function UserData() {
    const res = await firestore().collection('users').doc(auth().currentUser.uid).get();
    const { name, email, telefone } = res.data();
    return { name, email,telefone };
}

export default UserData;