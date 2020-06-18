import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    Linking,
    Platform

} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import { useNameUser, useEmailUser, useLatitude, useLongitude, usePhoneNumber } from '../../context/contextRouter';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import styles from './styles';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SYMPTOMS from './symptoms';
import ALARM from './alarm';

const Queries: React.FC = () => {
    interface arrayvalues {
        id: number,
        sintoma: string
    }
    const navigation = useNavigation();
    const { name } = useNameUser();
    const { email } = useEmailUser();
    const { phoneNumber } = usePhoneNumber();
    const { latitude } = useLatitude();
    const { longitude } = useLongitude();
    const [risco, setRisco] = useState<number>(0);
    const [finalResult, setFinalResult] = useState<boolean>(false);
    const [loadindSubmitSymptoms, setLoadingSubmitSymptms] = useState<boolean>(false);
    const [sinaisAlarm, setSinaisAlarm] = useState<boolean>(false);
    const [valueAgreement, setValueAgreement] = useState<boolean>(false);
    const [valueCheckBox, setValueCheckBox] = useState<boolean>(false);
    const [result, setResult] = useState<arrayvalues[]>([]);
    const [resultAlarm, setResultAlarm] = useState<arrayvalues[]>([]);

    function RenderSymptoms(item: arrayvalues, index: number) {
        return (
            <View key={item.id} style={styles.itemViewList}>
                <TouchableOpacity activeOpacity={0.7} style={[styles.itemViewListTouchable, result.map(e => item.id == e.id ? { backgroundColor: '#454ADE' } : {})]} onPress={() => handleSelectSymptoms(item)}>
                    <Text style={[styles.itemViewListTouchableText, result.map(e => item.id == e.id ? { color: 'white' } : {})]}>{item.sintoma}</Text>
                </TouchableOpacity>
            </View >
        );
    }

    function RenderAlarm(item: arrayvalues, index: number) {
        return (
            <View key={item.id} style={styles.itemViewList}>
                <TouchableOpacity activeOpacity={0.7} style={[styles.itemViewListTouchable, resultAlarm.map(e => item.id == e.id ? { backgroundColor: '#454ADE' } : {})]} onPress={() => handleSelectAlarm(item)}>
                    <Text style={[styles.itemViewListTouchableText, resultAlarm.map(e => item.id == e.id ? { color: 'white' } : {})]}>{item.sintoma}</Text>
                </TouchableOpacity>
            </View >
        );
    }

    function handleSelectSymptoms(item: arrayvalues) {
        if (loadindSubmitSymptoms === false) {
            const alreadySelected = result.findIndex(e => e.id === item.id);
            if (alreadySelected >= 0) {
                const filterSymptoms = result.filter(e => e.id !== item.id);
                setResult([]);
                setResult(filterSymptoms)
            } else {
                setResult([...result, item])
            }
        }
    }

    function handleSelectAlarm(item: arrayvalues) {
        if (loadindSubmitSymptoms === false) {
            const alreadySelected = resultAlarm.findIndex(e => e.id === item.id);
            if (alreadySelected >= 0) {
                const filterSymptoms = resultAlarm.filter(e => e.id !== item.id);
                setResultAlarm([]);
                setResultAlarm(filterSymptoms)
            } else {
                setResultAlarm([...resultAlarm, item])
            }
        }
    }

    function handleSubmit() {
        if (!valueCheckBox) {
            return Toast.showWithGravity('Precisamos de você esteja ciente das informações, selecione a caixa...', Toast.LONG, Toast.TOP);
        }
        setValueAgreement(true)

    }
    function handleSubmitSymtomps() {
        if (sinaisAlarm === false) {
            if(result.length == 0){
                setLoadingSubmitSymptms(true);
                const R = result.length;
                const A = resultAlarm.length;
                const Rporcent = ((R * 100) / 12);
                const Aporcent = ((A * 100) / 10);
                writeServer(Rporcent, Aporcent)
            }
            setLoadingSubmitSymptms(true);
            setSinaisAlarm(!sinaisAlarm);
            setLoadingSubmitSymptms(false)
        }
        if (sinaisAlarm) {
            setLoadingSubmitSymptms(true);
            const R = result.length;
            const A = resultAlarm.length;
            const Rporcent = ((R * 100) / 12);
            const Aporcent = ((A * 100) / 10);
            writeServer(Rporcent, Aporcent)
        }
    }

    function writeServer(R: number, A: number) {
        firestore().collection('results').doc(`${auth().currentUser?.uid}`).set({
            id: `${auth().currentUser?.uid}`,
            email,
            latitude,
            longitude,
            nome: name,
            symtomps: R,
            alarm: A,
            telefone: phoneNumber
        }).then(() => {
            result.forEach((e: arrayvalues) => {
                firestore().collection('results').doc(`${auth().currentUser?.uid}`).collection('resultados').doc(`${e.id}`).set({
                    id: e.id,
                    sintoma: e.sintoma
                })
            })
        }).then(() => {
            resultAlarm.forEach((e: arrayvalues) => {
                firestore().collection('results').doc(`${auth().currentUser?.uid}`).collection('alarmes').doc(`${e.id}`).set({
                    id: e.id,
                    sintoma: e.sintoma
                })
            })
        })
        return terminateWriteServer(R, A);
    }
    function terminateWriteServer(R: number, A: number) {
   

        if (A !== 0){
                setRisco(2);
        }else{
         if ((R !== 0) && (A === 0)) {
            setRisco(1);}
        }

          
    
        setLoadingSubmitSymptms(false);
        setFinalResult(true);
    }
    if (finalResult) {
        if (risco === 0) {
            return (
                <>
                    <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                        <View style={[styles.containerForm]}>
                            <View style={styles.viewHeader}>
                                <Image resizeMode={'contain'} source={require('../../assets/docQueires.png')} />
                            </View>
                            <View style={styles.containerAgreement}>
                                <Text style={styles.textTitle}>Pronto, veja seu resultado!</Text>

                                <Text style={styles.textBody} >
                                    Baseado em suas respostas,
                                    <Text style={[styles.textBody, { fontWeight: 'bold' }]}>
                                        Você não possui sintomas, nem sinais de alarme.
                                    </Text>
                                     No entanto, isto não se trata de um diagnóstico.
                                </Text>

                                <Text style={styles.textBody} >
                                    Apesar de não apresentar sintomas, recomendamos que siga as médidas de isolamento social.
                                </Text>

                                <Text style={styles.textBody} >
                                    Obrigado por participar da nossa consulta.
                                </Text>

                                <TouchableOpacity style={styles.submit} onPress={() => navigation.goBack()} >
                                    <Text style={styles.textSubmit}>SAIR</Text>
                                </TouchableOpacity>


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
        return (
            <>
                <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                    <View style={[styles.containerForm]}>
                        <View style={styles.viewHeader}>
                            <Image resizeMode={'contain'} source={require('../../assets/docQueires.png')} />
                        </View>
                        {risco == 1 ? <>
                            <View style={styles.containerAgreement}>
                                <Text style={styles.textTitle}>Pronto, veja seu resultado!</Text>

                                <Text style={styles.textBody} >
                                    Baseado em suas respostas,<Text style={[styles.textBody, { fontWeight: 'bold' }]}>Você possui sintomas, mas não tem sinais de alarme.</Text> No entanto, isto não se trata de um diagnóstico.
                        </Text>

                                <Text style={styles.textBody} >
                                    Recomendamos que você siga as normas de isolamento social, caso os sintomas persistam procure uma unidade mais próxima de saúde.
                        </Text>

                                <Text style={styles.textBody} >
                                    Obrigado por participar da nossa consulta. Em caso de dúvidas ligue <Text style={[styles.textBody, { fontWeight: 'bold' }]}>136</Text>.
                        </Text>
                                <View style={styles.viewCheckBox} >
                                    <TouchableOpacity style={styles.submit} onPress={() => navigation.goBack()}>
                                        <Text style={styles.textSubmit}>SAIR</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.submit} onPress={() => Platform.OS == 'ios' ? Linking.openURL(`telprompt:${136}`) : Linking.openURL(`tel:${136}`)} >
                                        <Text style={styles.textSubmit}>LIGAR</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </> : <>

                                <View style={styles.containerAgreement}>
                                    <Text style={styles.textTitle}>Pronto, veja seu resultado!</Text>

                                    <Text style={styles.textBody} >
                                        Baseado em suas respostas, é provável que está situação se enquadre como doença pelo coronavírus(COVID-19). No entanto isto não se trata de um diagnóstico.
                        </Text>

                                    <Text style={[styles.textBody,{ fontWeight: 'bold' }]} >
                                        Você tem sintomas, e possui sintomas de alarme
                                       
                        </Text>

                                    <Text style={styles.textBody} >
                                        Porém não se assuste, recomendamos que procure orientação médica.
                        </Text>
                                    <View style={styles.viewCheckBox} >
                                        <TouchableOpacity style={styles.submit} onPress={() => navigation.goBack()}>
                                            <Text style={styles.textSubmit}>SAIR</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('QueriesMap')} >
                                            <Text style={styles.textSubmit}>MAPA</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

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
                    <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#3A0CA3', top: -20 }]} onPress={() => navigation.navigate('Cases')}>
                        <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/earth.png')} />
                    </TouchableOpacity>
                </View>
            </>
        );
    }



    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerForm]}>
                    <View style={styles.viewHeader}>
                        <Image resizeMode={'contain'} source={require('../../assets/docQueires.png')} />
                    </View>
                    <View style={styles.containerAgreement}>
                        {!valueAgreement ? <>
                            <Text style={styles.textTitle}>Olá {name}</Text>
                            <Text style={styles.textBody} >
                                Seja bem vindo a nossa plataforma de auto-avaliação,
                                eu me chamo Felipe.
                                Sou médico virtual e estou aqui para te ajudar.
                        </Text>
                            <Text style={styles.textBody}>
                                Só lembrando, todo o nosso aplicativo está dentro das normas da OMS.
                        </Text>
                            <View style={styles.viewCheckBox}>
                                <CheckBox
                                    disabled={false}
                                    onValueChange={() => setValueCheckBox(!valueCheckBox)}
                                    value={valueCheckBox}
                                />
                                <Text>Estou ciente de todas as informações</Text>
                            </View>
                            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                                <Text style={styles.textSubmit}>Próximo</Text>
                            </TouchableOpacity>
                        </> : <>
                                <Text style={styles.textTitle}>{!sinaisAlarm ? 'Antes de prosseguir' : 'Opa, quase lá.'}</Text>
                                <Text style={styles.textBody} >{!sinaisAlarm ? 'O que você está sentindo no momento' : 'Marque os sintomas mais persistentes'}</Text>
                                <View style={styles.scrollView}>
                                    <FlatList
                                        data={!sinaisAlarm ? SYMPTOMS : ALARM}
                                        showsVerticalScrollIndicator
                                        numColumns={2}
                                        renderItem={({ item, index }) => !sinaisAlarm ? RenderSymptoms(item, index) : RenderAlarm(item, index)}
                                        style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}
                                        keyExtractor={(item: arrayvalues) => String(item.id)}
                                    />
                                </View>
                                <TouchableOpacity style={styles.submit} onPress={handleSubmitSymtomps} >
                                    {!loadindSubmitSymptoms ?
                                        <Text style={styles.textSubmit}>{!sinaisAlarm ? 'Continuar' : 'concluir'}</Text>
                                        :
                                        <ActivityIndicator size='small' color="white" />
                                    }
                                </TouchableOpacity>
                            </>}
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


//                            {visibleBalao && <Text numberOfLines={2} ellipsizeMode='tail' style={{ top: width * 0.35, position: 'absolute', color: 'white', left: width / 4, right: width / 9, fontSize: width * 0.05, height: undefined, }}>Vá ao Hospital!</Text>}