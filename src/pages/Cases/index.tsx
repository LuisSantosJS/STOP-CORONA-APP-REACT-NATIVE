import React, { useEffect } from 'react';
import {
    ImageBackground,
    Image,
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    useDeceased,
    useInfected,
    useRecovered
} from '../../context/contextRouter';
import { RectButton } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import styles from './styles';
const Cases: React.FC = () => {
    const navigation = useNavigation();
    const { deceased } = useDeceased();
    const { infected } = useInfected();
    const { recovered } = useRecovered();

    useEffect(() => {
        if (infected == 0) {
            Toast.showWithGravity('Verifique sua conexão com a internet!', Toast.LONG, Toast.TOP);
            Toast.showWithGravity('Verifique sua conexão com a internet!', Toast.LONG, Toast.TOP);
            Toast.showWithGravity('Verifique sua conexão com a internet!', Toast.LONG, Toast.TOP);
        }
    }, [])
    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader]}>
                    <Image resizeMode={'contain'} source={require('../../assets/worldcases.png')} />
                    <Text style={styles.textHeader}>Casos</Text>
                </View>
                <View style={[styles.containerForm]}>
                    <View style={styles.casesView}>
                        <Text style={styles.textCasesTitle}>Casos no Brasil</Text>
                        <Text style={styles.textCasesDecription}>{infected}</Text>
                        <Text style={styles.textCasesTitle}>Recuperações</Text>
                        <Text style={styles.textCasesDecription}>{recovered}</Text>
                        <Text style={styles.textCasesTitle}>Mortes</Text>
                        <Text style={styles.textCasesDecription}>{deceased}</Text>
                    </View>
                    <RectButton style={[styles.submit]} onPress={() => navigation.navigate('CasesMap')} >
                        <Text style={styles.submitText}>Ver no Mapa</Text>
                    </RectButton>
                    {Platform.OS == 'ios' && <>
                        <View style={{ height: 15 }} />
                    </>}
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
export default Cases;