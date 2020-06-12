import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454ADE'
    },
    header: {
        padding: 35,
        height: ((width / 1.47)),
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerForm: {
        width: width,
        height: (height - (width / 1.47)),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputView: {
        width: width - 80,
        height: 60,
        backgroundColor: 'white',
        borderRadius: (width - 80) / 2,
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
        height: 60, width: 50
    },
    input: {
        width: width - 160,
        height: 60,
        fontSize: 20
    },
    gradeLine: {
        height: 1,
        width: '50%',
        backgroundColor: 'white'
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
    submitText: {
        color: 'white',
        fontSize: 20
    },
    viewSubmit: {
        height: 100,
        width: width,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;