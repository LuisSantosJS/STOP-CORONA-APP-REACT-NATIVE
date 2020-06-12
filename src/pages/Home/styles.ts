import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        height: (width / 1.47),
        flexDirection: 'row',
        padding: 30
    },
    containerWellcomeUser: {
        top: 5,
        left: -20,
        alignItems: 'center'
    },
    textBalao: {
        top: -90,
        maxWidth: 140,
        fontSize: 24
    },
    containerForm: {
        width: width,
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
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
        backgroundColor: '#141414'
    },
    gridContarinerRow: {
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: width-70,
        flexDirection: 'row',
        height: width/4,
        
    },
    cardItems:{
        height: 130, 
        width: 130, 
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
    textCardItems:{
        color: 'white',
        fontSize: 12
    }
});
export default styles;