import React from 'react';
import { ImageBackground, Dimensions, Image, View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';

import { useNameUser } from '../../context/contextRouter';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home: React.FC = () => {
    const navigation = useNavigation();
    const { name } = useNameUser();


    return (
        <>
            <ImageBackground style={styles.container} imageStyle={{ width: width, height: (width / 1.47) }} source={require('../../assets/retanguloheaderhome.png')}>
                <View style={styles.containerHeader}>
                    <Image width={100} height={(width / 1.47)} source={require('../../assets/doctor.png')} />
                    <View style={styles.containerWellcomeUser}>
                        <Image source={require('../../assets/balaomsm.png')} />
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.textBalao}>Olá {name}!</Text>
                    </View>
                    <View style={{ width: 80, height: 80, }}>
                        <Image style={{ width: 70, height: 70 }} resizeMode={'contain'} source={require('../../assets/logo.png')} />
                    </View>
                </View>

                <View style={styles.containerForm}>

                    <View style={[styles.gradeLine]} />
                    <View style={styles.gridContarinerRow}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#F72585' }]} onPress={() => navigation.navigate('Recommendations')}>
                            <Image resizeMode={'contain'} style={{ width: 50, height: 50 }} source={require('../../assets/recomendation.png')} />
                            <Text style={styles.textCardItems}>Recomendações</Text>
                        </TouchableOpacity >
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#3A0CA3' }]} onPress={() => navigation.navigate('Queries')}>
                            <Image resizeMode={'contain'} style={{ width: 50, height: 50 }} source={require('../../assets/queries.png')} />
                            <Text style={styles.textCardItems}>Consulta Virtual</Text>
                        </TouchableOpacity >

                    </View>
                    <View style={styles.gridContarinerRow}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#7209B7' }]} onPress={() => navigation.navigate('Contacts')}>
                            <Image resizeMode={'contain'} style={{ width: 50, height: 50 }} source={require('../../assets/contactless.png')} />
                            <Text style={styles.textCardItems}>Contatos Úteis</Text>
                        </TouchableOpacity >
                        <TouchableOpacity activeOpacity={0.7} style={[styles.cardItems, { backgroundColor: '#4361EE' }]} onPress={() => navigation.navigate('Cases')}>
                            <Image resizeMode={'contain'} style={{ width: 50, height: 50 }} source={require('../../assets/world.png')} />
                            <Text numberOfLines={2} style={styles.textCardItems}>Casos COVID - 19</Text>
                        </TouchableOpacity >


                    </View>

                    <View style={[styles.gradeLine]} />
                </View>


            </ImageBackground>
            <View style={styles.tabNavigatorView} >
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#F72585', top: -20 }]} onPress={() => LinkingWhatsapp()}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/share.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#7209B7', top: -35 }]} onPress={()=> navigation.navigate('Queries')}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/consulticon.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#3A0CA3', top: -20 }]} onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/person.png')} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Home;