import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width
    },
    containerHeader: {
        height: height * 0.35,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 30,

    },
    containerWellcomeUser: {
        top: 5,
        left: -20,
        alignItems: 'center',

    },
    textBalao: {
        top: -90,
        maxWidth: 140,
        fontSize: width * 0.05
    },

    containerForm: {
        width: width,
        height: '58%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
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
        backgroundColor: '#141414'
    },
    gridContarinerRow: {
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',

    },
    cardItems: {
        height: width * 0.32,
        width: '32%',
        borderRadius: 30,
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    textCardItems: {
        color: 'white',
        fontSize: width * 0.035
    },
    viewIconChat: {
        position: 'absolute',
        height: width * 0.12,
        width: width * 0.12,
        top: height / 3.7,
        left: width - width / 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default styles;