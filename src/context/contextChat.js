import React, { createContext, useState, useContext, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useSavedUser} from '../context/contextRouter';
const Chat = createContext()
export default function ProviderChat({ children }) {
    const [messages, setMessages] = useState([]);
    const [lastTimestampUser, setLastTimestampUser] = useState(0);
    const [notification, setNotification] = useState(false);
    const {userSaved} = useSavedUser();
    useEffect(()=>{
        if(userSaved){
        if(lastTimestampUser < (firestore.Timestamp.now().toMillis()-2000)){
            setNotification(true);
            console.log('msm',notification)
        }else{
            setNotification(false);
            console.log('msm',notification)
        }
    }
    },[lastTimestampUser, userSaved]);

    useEffect(() => {

    }, [messages]);

    useEffect(() => {
        if(userSaved){
            loadMessages();
            loadLastMessageUser();
        }

    }, [userSaved]);

    function loadMessages() {
        firestore().collection('messages').orderBy('createTimestamp', 'desc').onSnapshot(mess => {
            setMessages([])
            mess.docs.forEach(res => {
                const a = res.data();
                setMessages(messages => [...messages, a]);
            });
        });
    }

    function loadLastMessageUser() {
        firestore().collection('users').doc(`${auth().currentUser.uid}`).onSnapshot(mess => {
                console.log('chat',mess.data().timestampChat);
                setLastTimestampUser(mess.data().timestampChat);
        });
    }


    return (
        <Chat.Provider value={{
            messages,
            setMessages,
            notification, 
            setNotification 
        }}>
            {children}
        </Chat.Provider>
    )
}
export function useMessages() {
    const infoUser = useContext(Chat);
    const { messages, setMessages } = infoUser;
    return { messages, setMessages };
}

export function useNotification() {
    const infoUser = useContext(Chat);
    const { notification, setNotification } = infoUser;
    return { notification, setNotification};
}
