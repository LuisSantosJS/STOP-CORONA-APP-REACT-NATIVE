
import { Platform } from 'react-native';
import Tts from 'react-native-tts';

async function BoasVindas() {

    Tts.addEventListener('tts-start', (event) => console.log("start", event));
    Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
    Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));

    Tts.voices().then(voices => console.log(voices));
    Tts.setDefaultLanguage('pt-BR');
    Tts.speak('olá, seja bem vindo a nossa plataforma', {
        rate: Platform.OS == 'ios' ? 0.5 : 0.7
    });

};
export async function Somos() {
    Tts.voices().then(voices => console.log(voices));
    Tts.setDefaultLanguage('pt-BR');
    Tts.speak('nosso objetivo é ajudar a comunidade no combate a disserminação do vírus.', {
        rate: Platform.OS == 'ios' ? 0.5 : 0.7
    });
};

export default BoasVindas;