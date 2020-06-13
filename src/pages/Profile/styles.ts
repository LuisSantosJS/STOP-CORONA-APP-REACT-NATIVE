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
        height: width * 0.16,
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

    textProfile: {
        top: 5,
        color: 'white',
        fontSize: 26
    },
    textInfo: {
        color: 'black',
        fontSize: 16
    },
    submit: {
        width: width - 140,
        height: width * 0.14,
        backgroundColor: '#7209B7',
        borderRadius: 65 / 3,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    submitText: {
        color: 'white',
        fontSize: 20
    },

    tabNavigatorView: {
        height: '10%',
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
        width: '18%',
        height: width * 0.18,
        borderRadius: 200,
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
        height: '50%',
        width: '50%'
    },
    gradeLine: {
        height: 1,
        width: '50%',
        backgroundColor: 'black'
    },
    containerForm: {
        width: width,
        height: '65%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
});
export default styles;