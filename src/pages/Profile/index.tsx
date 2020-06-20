import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    Dimensions,
    View,
    Image,
    Text,
    Linking,
    TouchableOpacity,
    TextInput,
    BackHandler,
    Keyboard

} from 'react-native';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import KeyboardH from '../../functions/Keyboard';
import updateName from './functions';
import { useNameUser, useEmailUser } from '../../context/contextRouter';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Profile: React.FC = () => {
    const { name, setName } = useNameUser();
    const { email } = useEmailUser();
    const navigation = useNavigation();
    const [nameUser, setNameUser] = useState<string>(name);
    const [password, setPassword] = useState<string>('');
    const [visibleName, setVisibleName] = useState<boolean>(true);
    const [visibleEmail, setVisibleEmail] = useState<boolean>(true);
    const [visiblePassword, setVisiblePassword] = useState<boolean>(true);
    const [visibleTapBar, setVisibleTabBar] = useState<boolean>(true);
    const [visibleSubmit, setVisibleSubmit] = useState<boolean>(true);
    const keyboardHeigth = KeyboardH();
    useEffect(() => {
        console.log('keyboard ', keyboardHeigth);
    }, [keyboardHeigth])


    function handleBackButtonClick() {
        setVisibleEmail(true);
        setVisibleName(true);
        setVisiblePassword(true);
        setVisibleTabBar(true);
        setVisibleSubmit(true);
        return true
    }


    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', handleBackButtonClick)
        return () => {
            Keyboard.removeListener('keyboardDidHide', handleBackButtonClick)
        };
    }, []);



    function handlePressSubmit() {
        if (name !== nameUser) {
            updateName(nameUser).then(() => {
                Toast.showWithGravity('informações atualizadas!', Toast.LONG, Toast.TOP);
                setName(nameUser);
            }).catch(() => Toast.showWithGravity('Ocorreu um erro, verifique sua conexão...', Toast.LONG, Toast.TOP))
        }
        if (password.length) {
            auth().sendPasswordResetEmail(email).then(() => {
                Toast.showWithGravity('Verifique seu email para alterar a senha.', Toast.LONG, Toast.TOP);
                Toast.showWithGravity('Verifique seu email para alterar a senha.', Toast.LONG, Toast.TOP);
            }).catch(() => {
                Toast.showWithGravity('Ocorreu um erro, verifique sua conexão...', Toast.LONG, Toast.TOP)
            })
        }
    }

    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader]}>
                    <Image resizeMode={'contain'} source={require('../../assets/profile.png')} />
                </View>
                <View style={[styles.containerForm]}>

                    {visibleName &&
                        <TextInput
                            style={[styles.inputView, { padding: (width * 0.16) / 4 }, styles.textInfo, keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}
                            value={nameUser}
                            onTouchStart={() => {
                                setVisibleEmail(false);
                                setVisiblePassword(false);
                                setVisibleTabBar(false);
                                setVisibleSubmit(false);
                            }}
                            onEndEditing={() => handleBackButtonClick()}
                            onSubmitEditing={() => handleBackButtonClick()}
                            onChangeText={(e) => setNameUser(e)}
                        />}

                    {visibleEmail &&

                        <View style={[styles.inputView]}>
                            <ScrollView style={{ flex: 1, padding: (width * 0.16) / 4 }} horizontal showsHorizontalScrollIndicator={false}>
                                <Text style={[styles.textInfo]} >{email}</Text>
                            </ScrollView>
                        </View>}

                    {visiblePassword &&
                        <TextInput
                            style={[styles.inputView, { padding: (width * 0.16) / 4 }, styles.textInfo,keyboardHeigth !== 0 ? { position: "absolute", top: height/2 - keyboardHeigth } : {}]}
                            placeholder={'Digite a nova senha...'}
                            value={password}
                            secureTextEntry

                            onTouchStart={() => {
                                setVisibleEmail(false);
                                setVisibleName(false);
                                setVisibleTabBar(false);
                                setVisibleSubmit(false);
                            }}
                            onEndEditing={() => handleBackButtonClick()}
                            onSubmitEditing={() => handleBackButtonClick()}
                            onChangeText={(e) => setPassword(e)}
                        />}


                    {visibleSubmit ?
                        <RectButton style={[styles.submit]} onPress={handlePressSubmit} >
                            <Text style={styles.submitText}>Alterar informações</Text>
                        </RectButton> :
                        <View style={{ height: width * 0.14, width: width }} />
                    }


                </View>
            </ImageBackground>
            {
                visibleTapBar &&
                <View style={styles.tabNavigatorView} >
                    <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#F72585', top: -20 }]} onPress={() => LinkingWhatsapp()}>
                        <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/share.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#7209B7', top: -35 }]} onPress={() => navigation.goBack()}>
                        <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/homeicon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#3A0CA3', top: -20 }]} onPress={() => navigation.navigate('Queries')}>
                        <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/consulticon.png')} />
                    </TouchableOpacity>
                </View>
            }
        </>
    );
};

export default Profile;