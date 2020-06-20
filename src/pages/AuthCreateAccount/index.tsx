import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    StatusBar,
    TextInput,
    Dimensions,
    Text,
    Keyboard,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useSavedUser } from '../../context/contextRouter';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { RectButton } from 'react-native-gesture-handler';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-simple-toast';
import KeyboardH from '../../functions/Keyboard';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AuthCreate: React.FC = () => {
    const [name, setName] = useState<string>('');
    const { setUserSaved } = useSavedUser();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [idadeRender, setIdadeRender] = useState<boolean>(false);
    const [idade, setIdade] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [visibleEmail, setVisibleEmail] = useState<boolean>(true);
    const [visibleName, setVisibleName] = useState<boolean>(true);
    const [visiblePassword, setVisiblePassword] = useState<boolean>(true);
    const [visibleconfirmPassword, setVisibleConfirmPassword] = useState<boolean>(true);
    const [visibleSubmit, setVisibleSubmit] = useState<boolean>(true);
    const keyboardHeigth = KeyboardH();
    useEffect(() => {
        console.log('keyboard ', keyboardHeigth);
    }, [keyboardHeigth])


    function handleBackButtonClick() {
        setVisibleEmail(true);
        setVisibleName(true);
        setVisiblePassword(true);
        setVisibleConfirmPassword(true);
        setVisibleSubmit(true);
        return true
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', handleBackButtonClick);
        return () => {
            Keyboard.removeListener('keyboardDidHide', handleBackButtonClick);
        };
    }, []);


    function handleSubmit() {
        if (idadeRender) {
            if (idade.length !== 0) {
                return createAccount();
            }
            Toast.showWithGravity('Insira sua idade !', Toast.LONG, Toast.TOP);
        }
        const emailVerific = EmailValidator.validate(email.toLowerCase());
        if (emailVerific) {
            if (password.length == 0) {
                return Toast.showWithGravity('Insira sua senha!', Toast.LONG, Toast.TOP);
            }
            if (!telephone.length) {
                return Toast.showWithGravity('Insira seu telefone!', Toast.LONG, Toast.TOP);
            }
            if (!name.length) {
                return Toast.showWithGravity('Insira seu Nome!', Toast.LONG, Toast.TOP);
            }
            return setIdadeRender(true);
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
            telefone: telephone,
            id: ID,
            createTimestamp: Number(firestore.Timestamp.now().toMillis())
        };
        firestore().collection('users').doc(ID).set(DATA).then(() => {
            setUserSaved(true)
            return saveUserDate();
            return setIdadeRender(true)
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

    if (idadeRender) {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#454ADE'} />
                <View style={[styles.header]}>
                    <Image style={{ height: width * 0.6, width: width * 0.6 }} resizeMode={'contain'} source={require('../../assets/logo.png')} />
                </View>
                <View style={styles.containerForm}>
                    <View style={[styles.inputView, { flexDirection: 'row' }, keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}>
                        <TextInput
                            style={styles.input}
                            placeholder={'IDADE:'}
                            keyboardType={'numeric'}
                            onChangeText={(e) => setIdade(e)}
                            value={idade}
                        />
                    </View>


                    <View style={styles.viewSubmit}>
                        <RectButton style={[styles.submit]} onPress={handleSubmit}>
                            <Text style={styles.submitText}>Criar Conta</Text>
                        </RectButton>
                    </View>
                </View>
            </View>

        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#454ADE'} />
            <View style={[styles.header]}>
                <Image style={{ height: width * 0.6, width: width * 0.6 }} resizeMode={'contain'} source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.containerForm}>
                {visibleName &&
                    <View style={[styles.inputView, { flexDirection: 'row' }, keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}>
                        <View style={[styles.inputViewImage]}>
                            <Image style={{ padding: 15 }} source={require('../../assets/person-24px.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Nome'}
                            onTouchStart={() => {
                                setVisibleConfirmPassword(false);
                                setVisibleEmail(false);
                                setVisiblePassword(false);
                                setVisibleSubmit(false);
                            }}
                            onChangeText={(e) => setName(e)}
                            value={name}
                        />
                    </View>
                }
                {visibleconfirmPassword &&
                    <View style={[styles.inputView, { flexDirection: 'row' }, keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}>
                        <View style={styles.inputViewImage}>
                            <Image style={{ padding: 15, height: 18, width: 18 }} resizeMode={'cover'} source={require('../../assets/telephone.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder={'telefone celular'}
                            keyboardType={'numeric'}
                            onTouchStart={() => {
                                setVisiblePassword(false);
                                setVisibleName(false);
                                setVisibleEmail(false);
                                setVisibleSubmit(false);
                            }}
                            onChangeText={(e) => setTelephone(e)}
                            value={telephone}
                        />
                    </View>
                }
                {visibleEmail &&
                    <View style={[styles.inputView, { flexDirection: 'row' }, keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}>
                        <View style={styles.inputViewImage}>
                            <Image style={{ padding: 15 }} source={require('../../assets/logoemail.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Email'}
                            onTouchStart={() => {
                                setVisibleConfirmPassword(false);
                                setVisibleName(false);
                                setVisiblePassword(false);
                                setVisibleSubmit(false);
                            }}
                            keyboardType='email-address'
                            onChangeText={(e) => setEmail(e)}
                            value={email}
                        />
                    </View>
                }
                {visiblePassword &&
                    <View style={[styles.inputView, { flexDirection: 'row' }, keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}>
                        <View style={styles.inputViewImage}>
                            <Image style={{ padding: 15 }} source={require('../../assets/logopassword.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Senha'}
                            secureTextEntry
                            onTouchStart={() => {
                                setVisibleConfirmPassword(false);
                                setVisibleName(false);
                                setVisibleEmail(false);
                                setVisibleSubmit(false);
                            }}
                            onChangeText={(e) => setPassword(e)}
                            value={password}
                        />
                    </View>
                }
                {visibleSubmit &&
                    <View style={styles.viewSubmit}>
                        <RectButton style={[styles.submit]} onPress={handleSubmit}>
                            <Text style={styles.submitText}>Continuar</Text>
                        </RectButton>
                    </View>
                }
            </View>

        </View>
    );
}
export default AuthCreate;