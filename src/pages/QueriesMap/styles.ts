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
        maxHeight: '90%',
        minHeight: '60%',
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#7209B7',
        width: '90%'
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
    containerForm: {
        width: width,
        top: (width / 1.89),
        height: (height - (width / 1.89) - (width / 4.987951807228916)),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    gradeLine: {
        height: 1,
        width: '60%',
        backgroundColor: '#141414'
    },
    casesViewMap:{
        height: '90%',
        width: '90%'
    },
    buttonSelector: {
        height: 70,
        alignContent: 'center',
        justifyContent: "center",
        alignItems: 'center',
        width: 130,
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