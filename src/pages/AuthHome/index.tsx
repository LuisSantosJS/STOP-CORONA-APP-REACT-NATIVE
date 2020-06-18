import React from 'react';
import { ImageBackground, View, StatusBar, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
const AuthHome: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} />
                <View style={styles.viewHeader}>
                    <Image resizeMode={'contain'} source={require('../../assets/docQueires.png')} />
                </View>
                <View style={styles.viewForm}>
                    <Text style={styles.textWellcome}>Bem-vindo ao Stop Corona</Text>
                    <Text style={styles.textInitial}>
                        Seja bem vindo a plataforma stop-corona,
                        nosso objetivo é ajudar a
                        comunidade no combate a disserminação do vírus
                        com dicas além do mapa de casos em tempo real na nossa plataforma.
                        Além também do sitema de auto-avaliação seguindo as normas da OMS
                    </Text>
                    <View style={styles.viewSelectorOption}>

                        <TouchableOpacity style={styles.buttonSelector} onPress={()=> navigation.navigate('Auth')}>
                            <Text style={styles.textButton}>Entar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSelector} onPress={()=> navigation.navigate('AuthCreate')}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <View style={[styles.viewLogoApp]} >
                <Image style={styles.logoApp} resizeMode={'contain'} source={require('../../assets/logo.png')} />
            </View>
        </>
    );
}
export default AuthHome;