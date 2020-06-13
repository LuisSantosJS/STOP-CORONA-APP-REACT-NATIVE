import { StyleSheet } from 'react-native';
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
        fontSize: width * 0.07
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
    recommView: {
        maxHeight: '80%',
        minHeight: '50%',
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%'
    },
    itemView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#3A0CA3',
        borderRadius: 20,
        padding: 30
    },
    textItem: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: '400'
    },
    iconArrow: {
        height: width*0.02,
        width: width*0.02,
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }


});
export default styles;