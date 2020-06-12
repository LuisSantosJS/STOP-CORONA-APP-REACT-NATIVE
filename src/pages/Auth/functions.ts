import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

export const ResetPassword = async (email: string) => {
    await auth().sendPasswordResetEmail(email).then(() => {
        return Toast.showWithGravity('Verifique seu email.', Toast.LONG, Toast.TOP);
    }).catch(() => {
        return Toast.showWithGravity('Ocorreu um Erro!', Toast.LONG, Toast.TOP);
    })
};