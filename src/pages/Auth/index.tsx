import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Dimensions,
    ImageBackground,
    Image,
    TextInput,
    Keyboard,
    BackHandler,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import { useSavedUser } from '../../context/contextRouter';
import { useNavigation } from '@react-navigation/native';
import * as EmailValidator from 'email-validator';
import { ResetPassword } from './functions';
import { RectButton } from 'react-native-gesture-handler';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Auth: React.FC = () => {
    const { setUserSaved } = useSavedUser();
    const navigation = useNavigation();
    const [visibleEmail, setVisibleEmail] = useState<boolean>(true);
    const [visibleSubmit, setVisibleSubmit] = useState<boolean>(true);
    const [visiblePassword, setVisiblePassword] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const emailInputRef = useRef().current;
    const passwordInputRef = useRef().current;

    function handleBackButtonClick() {
        setVisibleEmail(true);
        setVisibleSubmit(true);
        setVisiblePassword(true);
        return true
    }


    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', handleBackButtonClick)
        return () => {

            Keyboard.removeListener('keyboardDidHide', handleBackButtonClick)
        };
    }, []);


    const LoginEmailAndPassword = async (email: string, password: string) => {
        await auth().signInWithEmailAndPassword(email, password).then(() => {
            setUserSaved(true);
            Toast.showWithGravity('LogIn', Toast.LONG, Toast.TOP);
            return store()

        }).catch(() => {
            const emailVerific = EmailValidator.validate(email.toLowerCase());
            if (!emailVerific) {
                return Toast.showWithGravity('Email inválido!', Toast.LONG, Toast.TOP);
            }
            if (((emailVerific) && (!password.length))) {
                return Toast.showWithGravity('Insira sua senha!', Toast.LONG, Toast.TOP);
            }
            return Toast.showWithGravity('Ocorreu um Erro!', Toast.LONG, Toast.TOP);
        })
    };

    async function store() {
        try {
            await AsyncStorage.setItem('@userSaved', 'true')
        } catch (e) {
            console.log('Erro ao cadastrar usuário!')
        }
    }

    function handleResetPassword() {
        const emailVerific = EmailValidator.validate(email.toLowerCase());
        if (emailVerific) {
            return ResetPassword(email)
        } else {
            return Toast.showWithGravity('Email inválido, Insira um email válido para continuar!', Toast.LONG, Toast.TOP);
        }
    }

    function handleSigIn() {
        const emailVerific = EmailValidator.validate(email.toLowerCase());
        if (emailVerific) {
            return LoginEmailAndPassword(email.toLowerCase(), password);
        } else {
            return Toast.showWithGravity('Email inválido!', Toast.LONG, Toast.TOP);
        }

    }



    return (
        <ImageBackground style={styles.container} imageStyle={[styles.containerHeaderSvg, { width: width, height: width / 1.47 }]} source={require('../../assets/retanguloheaderlogin.png')}>

            <Image resizeMode={'contain'} style={{ width: width / 2, height: height * 0.35 }} source={require('../../assets/logo.png')} />

            <View style={styles.containerForm}>
                {visibleEmail &&
                    <View style={[styles.inputView, { flexDirection: 'row' }]}>
                        <View style={styles.inputViewImage}>
                            <Image style={{ padding: 15 }} source={require('../../assets/logoemail.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            ref={emailInputRef}
                            onTouchStart={() => {
                                setVisiblePassword(false);
                                setVisibleSubmit(false);
                            }}
                            placeholder={'Email'}
                            keyboardType='email-address'
                            onChangeText={(e) => setEmail(e)}
                            value={email}
                        />
                    </View>
                }
                {visiblePassword &&
                    <View style={[styles.inputView, { flexDirection: 'row' }]}>
                        <View style={styles.inputViewImage}>
                            <Image style={{ padding: 15 }} source={require('../../assets/logopassword.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            ref={passwordInputRef}
                            placeholder={'Senha'}
                            secureTextEntry
                            onTouchStart={() => {
                                setVisibleEmail(false);
                                setVisibleSubmit(false);
                            }}
                            onChangeText={(e) => setPassword(e)}
                            value={password}
                        />
                    </View>
                }
                {visibleSubmit &&
                    <View style={styles.viewSubmitAndRecover}>
                        {Platform.OS == 'ios'
                            ?
                            <TouchableOpacity activeOpacity={0.9} style={[styles.submit]} onPress={handleSigIn}>
                                <Text style={styles.submitText}>LOGIN</Text>
                            </TouchableOpacity >
                            :
                            <RectButton activeOpacity={0.9} style={[styles.submit]} onPress={handleSigIn}>
                                <Text style={styles.submitText}>LOGIN</Text>
                            </RectButton>
                        }
                        <TouchableOpacity onPress={handleResetPassword}>
                            <Text style={styles.textRecoverPassword}>Esqueceu a senha?</Text>
                        </TouchableOpacity>

                    </View>
                }
                <View style={styles.gradeLineORView}>
                    <View style={styles.gradeLineOR} />
                    <Text style={styles.textRecoverPassword}>OU</Text>
                    <View style={styles.gradeLineOR} />
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('AuthCreate')}>
                    <Text style={styles.textRecoverPassword}>Não tem uma conta?</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>

    );
}
export default Auth;