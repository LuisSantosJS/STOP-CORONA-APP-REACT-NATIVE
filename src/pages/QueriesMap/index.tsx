import React, { useEffect } from 'react';
import {
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useLatitude, useLongitude } from '../../context/contextRouter';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons';

const Hospital = [
    {
        nome: 'Posto Médico GU',
        latitude: -9.9573685,
        longitude: -67.8094079,
    },
    {
        nome: 'Pronto Socorro - Hospital de Urgência e Emergência de Rio Branco',
        latitude: -9.9653701,
        longitude: -67.8142476,
    },
    {
        nome: 'UPA DA CIDADE DO POVO DR EDILBERTO PARIGOT DE SOUZA FILHO',
        latitude: -9.9757,
        longitude: -67.8018363,
    },
    {
        nome: 'UPA sobral',
        latitude: -9.9832225,
        longitude: -67.8248932
    },
    {
        nome: 'UPA segundo distrito',
        latitude: -10.0137486,
        longitude: -67.8101626
    }
];
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
            <StatusBar translucent backgroundColor={'transparent'} />
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 0.0121,
                }}
                provider={PROVIDER_GOOGLE} >
                {Hospital.map(res => (
                    <Marker
                        title={res.nome}
                        key={res.nome}
                        coordinate={{
                            latitude: res.latitude,
                            longitude: res.longitude
                        }}
                    />
                ))}
            </MapView>
            <TouchableOpacity style={[{ position: "absolute", top: 10, left: 10 }, styles.buttomNavigator]} onPress={() => navigation.goBack()}>
                <Icon name={Platform.OS == 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={26} color='black' />
            </TouchableOpacity>
        </>
    );
}
export default QueriesMap;