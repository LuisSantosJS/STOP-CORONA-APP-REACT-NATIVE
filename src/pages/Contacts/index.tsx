import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image,
    TouchableOpacity

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import styles from './styles';
const Contacts: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader, { top: 10, position: 'absolute' }]}>
                    <Image resizeMode={'contain'} source={require('../../assets/contatos.png')} />
                    <Text style={styles.textHeader}>Contatos úteis</Text>
                </View>
                <View style={[styles.containerForm]}>
                    <View style={[styles.gradeLine]} />
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 26 }}>Contato de auto ajuda</Text>
                    <Text style={{ fontSize: 20 }}>188</Text>
                    <View style={[styles.gradeLine]} />
                    <View style={[styles.gradeLine]} />
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 26 }}>Contato dos desenvolvedores</Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 20 }}>querytena@gmail.com</Text>
                    <View style={[styles.gradeLine]} />
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
}
export default Contacts;