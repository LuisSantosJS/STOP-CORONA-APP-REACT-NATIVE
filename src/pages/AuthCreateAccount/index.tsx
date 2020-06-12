import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    StatusBar,
    TextInput,
    Dimensions,
    Text,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useSavedUser } from '../../context/contextRouter';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import { RectButton } from 'react-native-gesture-handler';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-simple-toast';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AuthCreate: React.FC = () => {
    const [name, setName] = useState<string>('');
    const { setUserSaved } = useSavedUser();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    function handleSubmit() {
        const emailVerific = EmailValidator.validate(email.toLowerCase());
        if (emailVerific) {
            if (password !== confirmPassword) {
                setPassword('');
                setConfirmPassword('');
                return Toast.showWithGravity('Senhas diferentes!', Toast.LONG, Toast.TOP);
            }
            if (!name.length) {
                return Toast.showWithGravity('Insira seu Nome!', Toast.LONG, Toast.TOP);
            }
            return createAccount();
        }
        return Toast.showWithGravity('Insira um email válido e Preencha os campos a seguir!', Toast.LONG, Toast.TOP);
    }
    

    function createAccount() {
        auth().createUserWithEmailAndPassword(email.toLowerCase(), password).then(() => {
            return createDataUser();
        }).catch(() => {
            return Toast.showWithGravity('Ocorreu um erro, talvez este email já esteja sendo usado!', Toast.LONG, Toast.TOP);
        })
    }

    function createDataUser() {
        const ID = firebase.auth().currentUser?.uid;
        const DATA = {
            name,
            email,
            id: ID,
            createTimestamp: Number(firestore.Timestamp.now().toMillis())
        };
        firestore().collection('users').doc(ID).set(DATA).then(() => {
            setUserSaved(true)
            return saveUserDate();
        }).catch((e) => {
            console.log(e)
            return Toast.showWithGravity('Ocorreu um erro!', Toast.LONG, Toast.TOP);
        })
    }

    async function saveUserDate() {
        try {
            await AsyncStorage.setItem('@userSaved', 'true');
        } catch (e) {
            console.log('Erro ao cadastrar usuário!');
        }

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#454ADE'} />
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.containerForm}>
                <View style={[styles.gradeLine, { top: 20 }]} />
                <View style={[styles.inputView, { flexDirection: 'row', top: 15 }]}>
                    <View style={styles.inputViewImage}>
                        <Image style={{ padding: 15 }} source={require('../../assets/person-24px.png')} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Nome'}
                        onChangeText={(e) => setName(e)}
                        value={name}
                    />
                </View>

                <View style={[styles.inputView, { flexDirection: 'row', top: 15 }]}>
                    <View style={styles.inputViewImage}>
                        <Image style={{ padding: 15 }} source={require('../../assets/logoemail.png')} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        keyboardType='email-address'
                        onChangeText={(e) => setEmail(e)}
                        value={email}
                    />
                </View>
                <View style={[styles.inputView, { flexDirection: 'row', top: 15 }]}>
                    <View style={styles.inputViewImage}>
                        <Image style={{ padding: 15 }} source={require('../../assets/logopassword.png')} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Senha'}
                        secureTextEntry
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                    />
                </View>

                <View style={[styles.inputView, { flexDirection: 'row', top: 15 }]}>
                    <View style={styles.inputViewImage}>
                        <Image style={{ padding: 15 }} source={require('../../assets/logopassword.png')} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirmar Senha'}
                        secureTextEntry
                        onChangeText={(e) => setConfirmPassword(e)}
                        value={confirmPassword}
                    />
                </View>
                <View style={[styles.gradeLine, { top: 20 }]} />
                <View style={styles.viewSubmit}>
                    <RectButton style={[styles.submit]} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Criar Conta</Text>
                    </RectButton>
                </View>
                {Platform.OS == 'ios' &&
                    <View style={{ height: 20, width: width }} />
                }
            </View>

        </View>
    );
}
export default AuthCreate;