import React, { useState } from 'react';
import {
    ImageBackground,
    Dimensions,
    View,
    Image,
    Text,
    Linking,
    TouchableOpacity,
    TextInput

} from 'react-native';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import updateName from './functions';
import { useNameUser, useEmailUser } from '../../context/contextRouter';
const Profile: React.FC = () => {
    const { name, setName } = useNameUser();
    const { email } = useEmailUser();
    const navigation = useNavigation();
    const [nameUser, setNameUser] = useState<string>(name);
    const [password, setPassword] = useState<string>('');



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
                <View style={[styles.containerHeader, { top: 10, position: 'absolute' }]}>
                    <Image resizeMode={'contain'} source={require('../../assets/profile.png')} />
                </View>
                <View style={[styles.containerForm]}>
                    <View style={[styles.gradeLine]} />
                    <View>
                        <View style={styles.infoUserInputView}>
                            <Text style={styles.textInfo}>Nome</Text>
                        </View>
                        <TextInput
                            style={styles.inputView}
                            value={nameUser}
                            onChangeText={(e) => setNameUser(e)}
                        />
                    </View>
                    <View>
                        <View style={styles.infoUserInputView}>
                            <Text style={styles.textInfo}>Email</Text>
                        </View>
                        <View style={styles.inputView}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Text style={{ fontSize: 20, }} >{email}</Text>
                            </ScrollView>
                        </View>
                    </View>
                    <View>
                        <View style={styles.infoUserInputView}>
                            <Text style={styles.textInfo}>Senha</Text>
                        </View>
                        <TextInput
                            style={[styles.inputView]}
                            placeholder={'Digite a nova senha...'}
                            value={password}
                            secureTextEntry
                            onChangeText={(e) => setPassword(e)}
                        />
                    </View>


                    <RectButton style={[styles.submit]} onPress={handlePressSubmit} >
                        <Text style={styles.submitText}>Alterar informações</Text>
                    </RectButton>

                    <View style={[styles.gradeLine]} />
                    <View style={{ height: 20, width: 10, }} />

                </View>
            </ImageBackground>
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
        </>
    );
};

export default Profile;