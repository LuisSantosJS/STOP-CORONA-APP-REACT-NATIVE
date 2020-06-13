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
        height: '65%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    containerHeaderSvg: {
        height: height * 0.35,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 30
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
        height: width * 0.06,

    },
    inputView: {
        width: width - 80,
        height: width * 0.15,
        backgroundColor: 'white',
        borderRadius: 25,
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
        height: width * 0.15,
        width: width * 0.15
    },
    input: {
        width: width - 160,
        height: width * 0.15,

        fontSize: 20
    },

    submit: {
        width: width - 140,
        height: width * 0.15,
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

    submitText: {
        color: 'white',
        fontSize: 20
    },
    textRecoverPassword: {
        color: 'white',
        fontSize: 18
    },
    viewSubmitAndRecover: {
        height: width * 0.25,
        width: width - 130,
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
});

export default styles;