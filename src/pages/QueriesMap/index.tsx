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
import Hospital from './Hospital';
import Toast from 'react-native-simple-toast';
const QueriesMap: React.FC = () => {
    const navigation = useNavigation();
    const { latitude, setLatitude } = useLatitude();
    const { longitude, setLongitude } = useLongitude();
    useEffect(() => {
        Geolocation.getCurrentPosition(e => {
            setLatitude(e.coords.latitude);
            setLongitude(e.coords.longitude);
        }, () => { })
        Toast.showWithGravity('Procure o posto de saúde mais próximo...', Toast.LONG, Toast.TOP);
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