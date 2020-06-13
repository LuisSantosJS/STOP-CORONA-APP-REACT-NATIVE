import React, { useEffect, useState } from 'react';
import { useSavedUser } from './context/contextRouter';
import AsyncStorage from '@react-native-community/async-storage';
import AuthRouter from './routes/AuthRouter';
import MainRouter from './routes/MainRouter';

import auth from '@react-native-firebase/auth';

const Routes = () => {
    const { userSaved, setUserSaved } = useSavedUser();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
            if(!user){
                AsyncStorage.clear();
            }
        })
    },[])

    useEffect(() => {
        async function loadUser() {
            try {
                const value = await AsyncStorage.getItem('@userSaved');
                if (value !== null) {
                    console.log('value',value)
                    setUserSaved(true)
                    setLoading(false)
                } else {
                    setUserSaved(false)
                    setLoading(false)
                }
            } catch (e) {
                setUserSaved(false)
                setLoading(false)
            }
        }
        loadUser();
    }, []);


    



    if (loading) {
        return null
    }

    if (!userSaved) {
        return <AuthRouter />
    }
    return <MainRouter />

}
export default Routes;