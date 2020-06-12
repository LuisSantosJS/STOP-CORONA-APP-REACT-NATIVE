import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containerHeader: {
        width: width,
        height: (width / 1.89),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    inputView: {
        width: width - 80,
        minHeight: 60,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: (width - 80) / 2,
        elevation: 3,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        fontSize: 20, padding: 20,
        shadowRadius: 10,
    },
    infoUserInputView: {
        width: width - 80,
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        alignContent: 'center'
    },
    textProfile: {
        top: 5,
        color: 'white',
        fontSize: 26
    },
    textInfo: {
        color: 'black',
        fontSize: 22
    },
    submit: {
        width: width - 140,
        height: 65,
        backgroundColor: '#7209B7',
        borderRadius: 65 / 2,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    viewSubmit: {
        height: 100,
        width: width,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText: {
        color: 'white',
        fontSize: 20
    },
    tabNavigatorView: {
        height: width / 4.987951807228916,
        width: width,
        left: 0,
        right: 0,
        backgroundColor: '#454ADE',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    buttomNavigator: {
        width: 75,
        height: 75,
        borderRadius: 40,
        elevation: 2,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    iconButtomNavigator: {
        height: 35,
        width: 35
    },
    gradeLine: {
        height: 1,
        width: '50%',
        backgroundColor: 'black'
    },
    containerForm: {
        width: width,
        top: (width / 1.89),
        height: (height - (width / 1.89) - (width / 4.987951807228916)),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
});
export default styles;