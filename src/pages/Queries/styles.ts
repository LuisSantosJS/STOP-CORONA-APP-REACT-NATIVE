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
    casesView: {
        height: '80%',
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#7209B7',
        width: '80%'
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
        height: '65%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    gradeLine: {
        height: 1,
        width: '60%',
        backgroundColor: '#141414'
    },
    buttonSelector: {
        height: width * 0.18,

        alignContent: 'center',
        justifyContent: "center",
        alignItems: 'center',
        width: width * 0.30,
        backgroundColor: '#3A0CA3',
        borderRadius: 20,
        elevation: 2,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})
export default styles;