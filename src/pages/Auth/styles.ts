import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454ADE',
        alignItems: 'center',
    },
    containerForm: {
        width: width,
        height: (height - (width / 1.47)),
        top: (width / 1.47),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerHeaderSvg: {

    },
    logo: {
        padding: 30,
        top: 0,
        position: 'absolute',
        left: 0
    },
    gradeLine: {
        height: 1,
        width: '70%',
        backgroundColor: 'white'
    },
    gradeLineOR: {
        height: 1,
        width: '30%',
        backgroundColor: 'white'
    },
    gradeLineORView: {
        alignContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width,
        flexDirection: 'row',
        height: 30
    },
    inputView: {
        width: width - 80,
        height: 60,
        backgroundColor: 'white',
        borderRadius: (width - 80) / 2,
        elevation: 3,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    inputViewImage: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, width: 50
    },
    input: {
        width: width - 160,
        height: 60,
        fontSize: 20
    },

    submit: {
        width: width - 140,
        height: 65,
        backgroundColor: '#7209B7',
        borderRadius: 65 / 2,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    viewLoginSocial: {
        width: width - 140,
        height: Platform.OS == 'ios' ? 65 : 45,
        alignContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconTouchableSocialLogin: {
        height: 65,
        width: 65,
        borderRadius: 32.5,
        backgroundColor: '#7209B7',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        elevation: 2,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    iconSocial: {
        height: 30,
        width: 30
    },
    submitText: {
        color: 'white',
        fontSize: 20
    },
    textRecoverPassword: {
        color: 'white',
        fontSize: 18
    },
    viewSubmitAndRecover: {
        height: 100,
        width: width - 130,
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
});

export default styles;