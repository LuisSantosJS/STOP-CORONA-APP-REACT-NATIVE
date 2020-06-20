import React, { useEffect } from 'react';
import { ImageBackground, Dimensions, Image, View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { useNameUser } from '../../context/contextRouter';
import { useNotification } from '../../context/contextChat';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home: React.FC = () => {
    const navigation = useNavigation();
    const { name } = useNameUser();
    const { notification } = useNotification();
    useEffect(()=>{},[notification]);
    return (
        <>
            <ImageBackground style={styles.container} imageStyle={{ width: width, height: (width / 1.47) }} source={require('../../assets/retanguloheaderhome.png')}>
                <View style={styles.containerHeader}>
                    <Image resizeMode={'contain'} style={{ width: width * 0.35, height: height * 0.25 }} source={require('../../assets/doctor.png')} />
                    <View style={styles.containerWellcomeUser}>
                        <Image source={require('../../assets/balaomsm.png')} />
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.textBalao}>Olá {name}!</Text>
                    </View>

                    <Image style={{ width: width * 0.15, height: width * 0.15 }} resizeMode={'contain'} source={require('../../assets/logo.png')} />

                </View>

                <View style={[styles.containerForm]}>


                    <View style={styles.gridContarinerRow}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#F72585' }]} onPress={() => navigation.navigate('Recommendations')}>
                            <Image resizeMode={'contain'} style={{ width: '40%', height: '40%' }} source={require('../../assets/recomendation.png')} />
                            <Text style={styles.textCardItems}>Recomendações</Text>
                        </TouchableOpacity >
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#3A0CA3' }]} onPress={() => navigation.navigate('Queries')}>
                            <Image resizeMode={'contain'} style={{ width: '40%', height: '40%' }} source={require('../../assets/queries.png')} />
                            <Text style={styles.textCardItems}>Auto Avaliação</Text>
                        </TouchableOpacity >

                    </View>
                    <View style={styles.gridContarinerRow}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#7209B7' }]} onPress={() => navigation.navigate('Contacts')}>
                            <Image resizeMode={'contain'} style={{ width: '40%', height: '40%' }} source={require('../../assets/contactless.png')} />
                            <Text style={styles.textCardItems}>Contatos Úteis</Text>
                        </TouchableOpacity >
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#4361EE' }]} onPress={() => navigation.navigate('Cases')}>
                            <Image resizeMode={'contain'} style={{ width: '40%', height: '40%' }} source={require('../../assets/world.png')} />
                            <Text numberOfLines={2} style={styles.textCardItems}>Casos COVID - 19</Text>
                        </TouchableOpacity >
                    </View>


                </View>


            </ImageBackground>
            <View style={styles.tabNavigatorView} >
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#F72585', top: -20 }]} onPress={() => LinkingWhatsapp()}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/share.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#7209B7', top: -35 }]} onPress={() => navigation.navigate('Queries')}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/consulticon.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#3A0CA3', top: -20 }]} onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/person.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.viewIconChat} onPress={() => navigation.navigate('Chat')}>
                <Icon name='chat' size={width * 0.11} color='#3A0CA3' />
                {notification &&
                    <View style={{ height: width * 0.03, width: width * 0.03, borderRadius: ((width * 0.03) / 2), backgroundColor: 'orange', position: 'absolute', top: 0, right: 0, left: undefined }} />}
            </TouchableOpacity>
        </>
    );
}

export default Home;