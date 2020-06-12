import React from 'react';
import {Linking} from 'react-native';
import Toast from 'react-native-simple-toast';

async function LinkingWhatsapp() {
    Toast.showWithGravity('Compartilhe o APP com seus amigos!!!', Toast.LONG, Toast.TOP);
    Linking.openURL(`whatsapp://send?text=Baixe esse app: Stop Corona`);
}

export default LinkingWhatsapp;