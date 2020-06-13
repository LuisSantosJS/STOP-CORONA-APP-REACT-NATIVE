import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        width: width,
        height: (width / 1.89),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 24
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
    containerForm: {
        width: width,
        height: '60%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    casesView: {
        maxHeight: '80%',
        minHeight: '50%',
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'space-evenly',
        borderRadius: 30,
        backgroundColor: '#7209B7',
        width: '80%'
    },
    textCasesTitle: {
        color: 'white',
        fontSize: 32
    },
    textCasesDecription: {
        color: 'lightgrey',
        fontSize: 26,
        fontWeight: 'bold'
    },
    viewSubmit: {

        height: width * 0.25,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText: {
        color: 'white',
        fontSize: 20
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
});
export default styles;