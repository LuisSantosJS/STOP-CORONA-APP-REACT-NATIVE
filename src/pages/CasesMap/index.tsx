import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
import {
    useCases,
    useLatitude,
    useLongitude,
    useSource,
    useUpdate,
    useInfected
} from '../../context/contextRouter';
import Icon from 'react-native-vector-icons/Ionicons';
import MapLocation from '../../constants/LocationsMapBrasil';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const CasesMap: React.FC = () => {
    interface CASES {
        count: number,
        state: string
    }
    const navigation = useNavigation();
    const { cases } = useCases();
    const { latitude, setLatitude } = useLatitude();
    const { longitude, setLongitude } = useLongitude();
    const { source } = useSource();
    const { update } = useUpdate();
    const { infected } = useInfected();

    useEffect(() => {
        Geolocation.getCurrentPosition(e => {
            setLatitude(e.coords.latitude);
            setLongitude(e.coords.longitude);
        }, () => { })
    }, [])
    useEffect(() => {
        if (infected !== 0) {
            Toast.showWithGravity(`Atualizado ${moment(update).locale('pt-br').fromNow()}`, Toast.LONG, Toast.TOP);

        }
        return () => {
            Toast.showWithGravity(`Fontes de ${source}`, Toast.SHORT, Toast.TOP);
        }
    }, [])
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 20,
                    longitudeDelta: 20
                }}
                provider={PROVIDER_GOOGLE}>
                {
                    MapLocation.map(e => (
                        <Marker
                            key={e.uf}
                            coordinate={{
                                latitude: e.latitude,
                                longitude: e.longitude
                            }}>
                            <View style={{ height: 45, backgroundColor: "white", alignItems: 'center', justifyContent: "center", alignContent: 'center', borderRadius: 10, }}>
                                <Text >{cases.map((res: CASES) => res.state.includes(e.uf) ? `  ${e.nome} com ${res.count} Casos  ` : undefined)}</Text>
                            </View>

                        </Marker>
                    ))
                }

            </MapView>
            <TouchableOpacity style={[{ position: "absolute", top: 10, left: 10 }, styles.buttomNavigator]} onPress={() => navigation.goBack()}>
                <Icon name={Platform.OS == 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={26} color='black' />
            </TouchableOpacity>

        </>
    );
}

export default CasesMap;