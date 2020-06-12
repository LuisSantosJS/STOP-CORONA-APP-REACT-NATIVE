import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions

} from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import styles from './styles';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { useNavigation } from '@react-navigation/native';
import { useLatitude, useLongitude } from '../../context/contextRouter';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const QueriesMap: React.FC = () => {
    const navigation = useNavigation();
    const { latitude, setLatitude } = useLatitude();
    const { longitude, setLongitude } = useLongitude();
    useEffect(() => {
        Geolocation.getCurrentPosition(e => {
            setLatitude(e.coords.latitude);
            setLongitude(e.coords.longitude);
        }, () => { })
    }, [])
    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader, { top: 10, position: 'absolute' }]}>
                    <Image resizeMode={'contain'} source={require('../../assets/consu.png')} />
                    <Text style={styles.textHeader}>Consulta Virtual</Text>
                </View>
                <View style={[styles.containerForm]}>
                    <View style={[styles.casesView]}>
                        <MapView
                            style={styles.casesViewMap}
                            initialRegion={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.034,
                                longitudeDelta: 0.034
                            }}
                            provider={PROVIDER_GOOGLE} />

                    </View>
                </View>
            </ImageBackground>
            <View style={styles.tabNavigatorView} >
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#F72585', top: -20 }]} onPress={() => LinkingWhatsapp()}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/share.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#7209B7', top: -35 }]} onPress={() => navigation.goBack()}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/homeicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#3A0CA3', top: -20 }]} onPress={() => navigation.navigate('Cases')}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/earth.png')} />
                </TouchableOpacity>
            </View>
        </>
    );
}
export default QueriesMap;