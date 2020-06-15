import React, { createContext, useState, useContext, useEffect } from 'react';
import UserData from '../database/database';
import Geolocation from '@react-native-community/geolocation';

type ContextType = {
    userSaved: boolean;
    setUserSaved: (value: boolean) => void;
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    infected: number;
    setInfected: (value: number) => void;
    recovered: number;
    setRecovered: (value: number) => void;
    deceased: number;
    setDeceased: (value: number) => void;
    cases: [];
    setCases: (value: []) => void;
    latitude: number;
    setLatitude: (value: number) => void;
    longitude: number;
    setLongitude: (value: number) => void;
    source: string;
    setSource: (value: string) => void;
    update: string;
    setUpdate: (value: string) => void;
    phoneNumber: string;
    setPhoneNumber: (value: string) => void;


};



const ContextApp = createContext<ContextType>({
    userSaved: false,
    setUserSaved: (value: boolean) => { },
    name: '',
    setName: (value: string) => { },
    email: '',
    setEmail: (value: string) => { },
    infected: 0,
    setInfected: (value: number) => { },
    recovered: 0,
    setRecovered: (value: number) => { },
    deceased: 0,
    setDeceased: (value: number) => { },
    cases: [],
    setCases: (value: []) => { },
    latitude: -7.0730806,
    setLatitude: (value: number) => { },
    longitude: -65.4400112,
    setLongitude: (value: number) => { },
    source: '',
    setSource: (value: string) => { },
    update: '',
    setUpdate: (value: string) => { },
    phoneNumber: '',
    setPhoneNumber: (value: string) => { },



});





const ProviderAuth: React.FC = ({ children }) => {
    const [userSaved, setUserSaved] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [infected, setInfected] = useState<number>(0);
    const [recovered, setRecovered] = useState<number>(0);
    const [deceased, setDeceased] = useState<number>(0);
    const [cases, setCases] = useState<[]>([]);
    const [source, setSource] = useState<string>('');
    const [update, setUpdate] = useState<string>('');
    const [latitude, setLatitude] = useState<number>(-7.0730806);
    const [longitude, setLongitude] = useState<number>(-65.4400112);


    useEffect(() => {
        if (userSaved) {
            loadUser();
        }
    }, [userSaved]);


    useEffect(() => {
        if (userSaved) {
            getPosition();
        }
    }, [userSaved]);


    useEffect(() => {
        loadCasesBrazil();
    }, [])

    async function loadUser() {
        const { name, email, telefone } = await UserData();
        setName(name);
        setEmail(email);
        setPhoneNumber(telefone);
    }

    function getPosition() {
        Geolocation.getCurrentPosition(e => {
            setLatitude(e.coords.latitude);
            setLongitude(e.coords.longitude);
        }, () => {

        })
    }



    async function loadCasesBrazil() {
        const snapshot = await fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
        const data = await snapshot.json();
        const { infected, recovered, deceased } = data;
        setDeceased(deceased);
        setInfected(infected);
        setRecovered(recovered);
        setSource(data.sourceUrl);
        setUpdate(data.lastUpdatedAtSource)
        setCases(data.infectedByRegion)

    }


    return (
        <ContextApp.Provider value={{
            userSaved,
            setUserSaved,
            name,
            setName,
            email,
            setEmail,
            infected,
            setInfected,
            recovered,
            setRecovered,
            deceased,
            setDeceased,
            cases,
            setCases,
            latitude,
            setLatitude,
            longitude,
            setLongitude,
            source,
            setSource,
            update,
            setUpdate,
            phoneNumber,
            setPhoneNumber

        }}>
            {children}
        </ContextApp.Provider>
    );
}
export default ProviderAuth;


export function useSavedUser() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userSaved, setUserSaved } = infoUser;
    return { userSaved, setUserSaved };
}
export function usePhoneNumber() {
    const infoUser: ContextType = useContext(ContextApp);
    const { phoneNumber, setPhoneNumber } = infoUser;
    return { phoneNumber, setPhoneNumber };
}

export function useNameUser() {
    const infoUser: ContextType = useContext(ContextApp);
    const { name, setName } = infoUser;
    return { name, setName };
}

export function useEmailUser() {
    const infoUser: ContextType = useContext(ContextApp);
    const { email, setEmail } = infoUser;
    return { email, setEmail };
}

export function useInfected() {
    const infoUser: ContextType = useContext(ContextApp);
    const { infected, setInfected } = infoUser;
    return { infected, setInfected };
}


export function useRecovered() {
    const infoUser: ContextType = useContext(ContextApp);
    const { recovered, setRecovered } = infoUser;
    return { recovered, setRecovered };
}


export function useDeceased() {
    const infoUser: ContextType = useContext(ContextApp);
    const { deceased, setDeceased } = infoUser;
    return { deceased, setDeceased };
}


export function useCases() {
    const infoUser: ContextType = useContext(ContextApp);
    const { cases, setCases } = infoUser;
    return { cases, setCases };
}

export function useLatitude() {
    const infoUser: ContextType = useContext(ContextApp);
    const { latitude, setLatitude } = infoUser;
    return { latitude, setLatitude };
}

export function useLongitude() {
    const infoUser: ContextType = useContext(ContextApp);
    const { longitude, setLongitude } = infoUser;
    return { longitude, setLongitude };
}

export function useSource() {
    const infoUser: ContextType = useContext(ContextApp);
    const { source, setSource } = infoUser;
    return { source, setSource };
}

export function useUpdate() {
    const infoUser: ContextType = useContext(ContextApp);
    const { update, setUpdate } = infoUser;
    return { update, setUpdate };
}











