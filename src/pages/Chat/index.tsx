import React, { useEffect, useState } from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardH from '../../functions/Keyboard';
import {
    View,
    Platform,
    FlatList,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ActivityIndicator,
    Text
} from 'react-native';
import { Dimensions } from 'react-native';
import moment from "moment";
import firestore from '@react-native-firebase/firestore';
import { useNameUser, useEmailUser } from '../../context/contextRouter';
import { useMessages } from '../../context/contextChat';
import auth from '@react-native-firebase/auth';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface ITEM {
    id: string,
    createTimestamp: number,
    text: string,
    name: string,
    email: string
}

const Chat: React.FC = () => {
    const keyboardHeigth = KeyboardH();
    const [sendTextMessage, setSendTextMessage] = useState<string>('');
    const [stateSend, setStateSend] = useState<boolean>(false)
    const { messages } = useMessages();
    const { name } = useNameUser();
    const { email } = useEmailUser();
    useEffect(() => {
    }, [keyboardHeigth]);
    useEffect(() => {
        firestore().collection('users').doc(`${auth().currentUser?.uid}`).update({
            timestampChat: Number(firestore.Timestamp.now().toMillis())
        })
        return () => {
            firestore().collection('users').doc(`${auth().currentUser?.uid}`).update({
                timestampChat: Number(firestore.Timestamp.now().toMillis())
            })
        }
    }, [])

    function sendMessage() {
        setStateSend(true);
        if (sendTextMessage.length !== 0) {
            const DATA = {
                id: `${auth().currentUser?.uid}`,
                createTimestamp: Number(firestore.Timestamp.now().toMillis()),
                text: sendTextMessage,
                name,
                email
            };
            firestore().collection('messages').add(DATA)
        }
        return finishSendMessage()
    }

    function finishSendMessage() {
        setSendTextMessage('');
        setStateSend(false);
    }

    function RenderMessage(item: ITEM, index: number) {
        if (item.id !== String(auth().currentUser?.uid)) {
            return (
                <View key={item.id} style={[styles.boxMessageView, { paddingTop: 10 }]}>
                    <View style={{ width: width - (width * 0.4), flexDirection: 'row-reverse' }}>
                        <Text style={{ left: 10, fontSize: width * 0.035, color: 'black' }}>{moment(Number(item.createTimestamp)).locale('pt-br').fromNow()}</Text>
                    </View>
                    <View style={[styles.boxMessage, { backgroundColor: '#6d8cfe', left: 7, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }]}>
                        <Text style={{ color: '#141414', fontSize: width * 0.04}}> {item.text}</Text>
                    </View>
                    <Text style={{ left: 10, fontSize: width * 0.035, color: 'black' }}>@{item.name}</Text>
                </View>
            );
        }
        return (
            <View key={item.id} style={[styles.boxMessageView, { paddingTop: 10 }]}>
                <View style={[styles.boxMessage, { backgroundColor: '#E5E5E5', left: ((width - (width * 0.6)) - 7), borderBottomStartRadius: 9, borderTopRightRadius: 12 }]}>
                    <Text style={{ color: '#141414', fontSize: width * 0.04 }}>{item.text}</Text>
                </View>
                <View style={{ width: width, flexDirection: 'row-reverse' }}>
                    <Text style={{ left: 10, fontSize: width * 0.035, color: 'black' }}>{moment(Number(item.createTimestamp)).locale('pt-br').fromNow()}</Text>
                </View>

            </View>
        );
    }

    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={messages}
                    inverted
                    keyExtractor={(item: ITEM) => String(item.createTimestamp + item.text)}
                    renderItem={({ item, index }) => RenderMessage(item, index)}
                    ListHeaderComponent={() => <View style={{ height: keyboardHeigth !== 0 ? (height / 2 - keyboardHeigth) : width * 0.19, width: width }} />}
                />
            </View>
            <>
                <View style={[styles.inputEndView]}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Escreva sua mensagem...'}
                        placeholderTextColor={'rgba(0,0,0, 0.8)'}
                        value={sendTextMessage}
                        onChangeText={(e) => setSendTextMessage(e)}

                    />
                    <TouchableOpacity style={styles.send} onPress={sendMessage}>
                        {stateSend ? <ActivityIndicator size={"large"} color={'#454ADE'} /> :
                            <Icon name='send' color={'#454ADE'} size={width * 0.07} />}
                    </TouchableOpacity>
                </View>
                {Platform.OS == 'ios' && <View style={{ width: width, height: keyboardHeigth - width * 0.04 }} />}
            </>

        </>
    );
}

export default Chat;