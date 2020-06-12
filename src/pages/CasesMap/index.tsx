import React, { useEffect } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import MapLocation from '../../constants/LocationsMapBrasil';
import { useCases, useLatitude, useLongitude, useSource, useUpdate, useInfected } from '../../context/contextRouter';
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
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader, { top: 10, position: 'absolute' }]}>
                    <Image resizeMode={'contain'} source={require('../../assets/worldcases.png')} />
                    <Text style={styles.textHeader}>Casos</Text>
                </View>
                <View style={[styles.containerForm]}>
                    <View style={styles.casesView}>
                        <MapView
                            style={styles.casesViewMap}
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
                    </View>
                </View>
            </ImageBackground >
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

export default CasesMap;