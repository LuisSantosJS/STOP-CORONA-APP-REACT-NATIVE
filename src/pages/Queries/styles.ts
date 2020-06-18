import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        fontSize: width * 0.055
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
    viewHeader: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerForm: {
        width: width,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    gradeLine: {
        height: 1,
        width: '60%',
        backgroundColor: '#141414'
    },
    buttonSelector: {
        height: width * 0.15,

        alignContent: 'center',
        justifyContent: "center",
        alignItems: 'center',
        width: width * 0.25,
        backgroundColor: '#3A0CA3',
        borderRadius: 20,
        elevation: 2,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    containerAgreement: {
        width: '90%',
        height: '50%',
        borderRadius: width * 0.05,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'space-evenly',
        shadowColor: '#E5E5E5',
        alignItems: 'center',
        elevation: 2,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    viewCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'

    },
    submit: {
        height: width * 0.1,
        width: width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.04,
        backgroundColor: '#3A0CA3'
    },
    textSubmit: {
        color: 'white',
        fontSize: width * 0.05
    },
    textTitle: {
        color: '#191919',
        fontSize: width * 0.06,
        textAlign: 'center'
    },
    textBody: {
        color: '#191919',
        fontSize: width * 0.04,
        textAlign: 'center'
    },
    scrollView: {
        width: '100%',
        height: width * 0.4,

    },
    itemViewList: {
        height: width * 0.2,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    itemViewListTouchable: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: width*0.0005,
        borderRadius: width * 0.05,
        borderWidth: width * 0.0009,
        borderColor: 'black',
        width: width / 2.4,
        height: width * 0.15
    },
    itemViewListTouchableText: {
        alignItems: 'center',
        fontSize: width * 0.04,
        color: 'black'
    }
})
export default styles;