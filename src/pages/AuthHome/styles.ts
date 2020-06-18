import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454ADE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewForm: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewHeader: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    viewLogoApp: {
        position: "absolute",
        left: width - width * 0.2,
        top: width * 0.12,
        height: width * 0.15,
        width: width * 0.15
    },
    logoApp: {
        height: width * 0.15,
        width: width * 0.15
    },
    textWellcome: {
        color: 'white',
        fontSize: width * 0.085,
        textAlign: 'center',
        width: '70%',
        fontWeight: 'bold'

    },
    textInitial: {
        color: 'white',
        width: '90%',
        fontSize: width * 0.045,
        textAlign: 'justify'
    },
    textButton: {
        color: 'white',
        width: '90%',
        fontSize: width * 0.045,
        textAlign: 'center'
    },
    viewSelectorOption: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    },
    buttonSelector: {
        height: width * 0.11,
        width: width * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width*0.02,
        backgroundColor: '#3A0CA3'
    }

});
export default styles;