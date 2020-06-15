import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454ADE',
        justifyContent:'center'
    },
    header: {
        height: height * 0.35,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 35
    },
    containerForm: {
        width: width,
        height: '65%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    inputView: {
        width: width - 80,
        height: width * 0.14,
        backgroundColor: 'white',
        borderRadius: width*0.06,
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
        height: width * 0.14,
        width: width * 0.15
    },
    input: {
        width: width - 160,
        height: width * 0.14,
        fontSize: 20
    },
    gradeLine: {
        height: 1,
        width: '50%',
        backgroundColor: 'white'
    },
    submit: {
        width: width - 140,
        height: width * 0.14,
        backgroundColor: '#7209B7',
        borderRadius: width*0.06,
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
    viewSubmit: {

        height: width * 0.25,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;