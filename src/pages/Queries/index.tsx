import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNameUser, useEmailUser, useLatitude, useLongitude } from '../../context/contextRouter';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import styles from './styles';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { useNavigation } from '@react-navigation/native';


const Queries: React.FC = () => {
    interface arrayvalues {
        id: number,
        sintoma: string,
        status: boolean
    }
    const navigation = useNavigation();
    const { name } = useNameUser();
    const { email } = useEmailUser();
    const { latitude } = useLatitude();
    const { longitude } = useLongitude();
    const [question, setQuestion] = useState<string>('Você está com febre?');
    const [valCount, setValCount] = useState<number>(0);
    const [simButton, setSimButton] = useState<string>('Sim');
    const [visibleButtons, setVisibleButtons] = useState<boolean>(true);
    const [visibleBalao, setVisibleBalao] = useState<boolean>(false);
    const [naoButton, setNaoButton] = useState<string>('Não');
    const [result, setResult] = useState<arrayvalues[]>([]);
    const [count, setCount] = useState<number>(0);
    function writeServer() {
        result.forEach(e => {
            firestore().collection('results').doc(`${auth().currentUser?.uid}`).set({
                nome: name,
                email: email,
                latitude,
                longitude,
                porcent: Number((valCount*100)/5)
            }).then(() => {
                firestore().collection('results').doc(`${auth().currentUser?.uid}`).collection('resultados').doc(`${e.id}`).set(e);
            })
        });

    }

    function SaveResult(val: string) {
        if (count === 0) {
            if (val === 'sim') {
                const value = {
                    id: 0,
                    sintoma: 'febre',
                    status: true
                };
                setValCount(valCount + 1);
                setResult(result => [...result, value]);
                setCount(1);
                setQuestion('Você está com falta de ar?');
            }
            if (val === 'nao') {
                const value = {
                    id: 0,
                    sintoma: 'febre',
                    status: false
                };
                setResult(result => [...result, value]);
                setCount(1);
                setQuestion('Você está com falta de ar?');
            }
        } else {
            if (count === 1) {
                if (val === 'sim') {
                    const value = {
                        id: 1,
                        sintoma: 'falta de ar',
                        status: true
                    };
                    setResult(result => [...result, value]);
                    setCount(2);
                    setValCount(valCount + 1);
                    setQuestion('Você está com Tosse?');
                }
                if (val === 'nao') {
                    const value = {
                        id: 1,
                        sintoma: 'falta de ar',
                        status: false
                    };
                    setResult(result => [...result, value]);
                    setCount(2);
                    setQuestion('Você está com Tosse?');
                }
            } else {
                if (count === 2) {
                    if (val === 'sim') {
                        const value = {
                            id: 2,
                            sintoma: 'tosse',
                            status: true
                        };
                        setResult(result => [...result, value]);
                        setCount(3);
                        setValCount(valCount + 1);
                        setQuestion('Você está com Mal estar?');
                    }
                    if (val === 'nao') {
                        const value = {
                            id: 2,
                            sintoma: 'tosse',
                            status: false
                        };
                        setResult(result => [...result, value]);
                        setCount(3);
                        setQuestion('Você está com Mal estar?');
                    }
                } else {
                    if (count === 3) {
                        if (val === 'sim') {
                            const value = {
                                id: 3,
                                sintoma: 'mal estar',
                                status: true
                            };
                            setResult(result => [...result, value]);
                            setCount(4);
                            setValCount(valCount + 1);
                            setQuestion('Corrimento nasal?');
                        }
                        if (val === 'nao') {
                            const value = {
                                id: 3,
                                sintoma: 'mal estar',
                                status: false
                            };
                            setResult(result => [...result, value]);
                            setCount(4);
                            setQuestion('Corrimento nasal?');
                        }
                    } else {
                        if (count === 4) {
                            if (val === 'sim') {
                                const value = {
                                    id: 4,
                                    sintoma: 'corrimento nasal',
                                    status: true
                                };
                                setValCount(valCount + 1);
                                setResult(result => [...result, value]);
                                setCount(5);
                                setNaoButton('Mapa');
                                setSimButton('OK');
                                writeServer();

                                if (valCount !== 0) {
                                    setQuestion('Você não está bem!');
                                    setVisibleBalao(true);
                                }

                            }
                            if (val === 'nao') {
                                const value = {
                                    id: 4,
                                    sintoma: 'corrimento nasal',
                                    status: false
                                };
                                setResult(result => [...result, value]);
                                setCount(5);
                                setNaoButton('Mapa');
                                setSimButton('OK');
                                writeServer();

                                if (valCount === 0) {
                                    setQuestion('Você aparenta estar bem!');
                                    setVisibleButtons(false);
                                } else {
                                    setQuestion('Você não está bem!');
                                    setVisibleBalao(true);
                                }

                            }
                        } else {
                            if (val == 'sim') {

                            } else {
                                navigation.navigate('QueriesMap');
                            }
                        }
                    }
                }
            }
        }
    }
    useEffect(() => {
        return () => {
            console.log(result)
        }
    }, [])

    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader, { top: 10, position: 'absolute' }]}>
                    <Image resizeMode={'contain'} source={require('../../assets/consu.png')} />
                    <Text style={styles.textHeader}>Consulta Virtual</Text>
                </View>
                <View style={[styles.containerForm]}>
                    <View style={[styles.casesView, { justifyContent: 'flex-end' }]}>
                        <View style={{ width: '100%', padding: 20, flexDirection: 'row', height: '40%', top: 0, position: 'absolute' }}>
                            <Image source={require('../../assets/docQueires.png')} />
                            <Image source={require('../../assets/blos.png')} />
                            <Text numberOfLines={4} ellipsizeMode='tail' style={{ top: 20, position: 'absolute', color: 'black', left: width / 3, right: width / 7, fontSize: 24, height: 100 }}>{question}</Text>
                            {visibleBalao && <Text numberOfLines={2} ellipsizeMode='tail' style={{ top: 130, position: 'absolute', color: 'white', left: width / 4, right: width / 9, fontSize: 24, height: 100 }}>Vá ao Hospital!</Text>}
                        </View>

                        <View style={{ width: '100%', height: '40%', padding: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            {visibleButtons && <>
                                <TouchableOpacity style={styles.buttonSelector} onPress={() => SaveResult('sim')}>
                                    <Text style={{ color: 'white', fontSize: 22 }}>{simButton}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSelector} onPress={() => SaveResult('nao')}>
                                    <Text style={{ color: 'white', fontSize: 22 }} >{naoButton}</Text>
                                </TouchableOpacity>
                            </>}

                        </View>
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
export default Queries;