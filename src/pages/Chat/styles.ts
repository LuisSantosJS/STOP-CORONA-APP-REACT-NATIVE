import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: '#F5F5F5'
    },
    inputEndView: {
        width: width,
        height: width * 0.19,
        flexDirection: 'row',
        borderTopWidth: width * 0.002,
        borderColor: 'black',
        justifyContent: 'space-evenly'

    },
    input: {
        width: '80%',
        top: width * 0.015,
        color: 'black',
        backgroundColor: '#D3D3D3',
        borderWidth: width * 0.002,
        paddingLeft: width * 0.05,
        borderColor: 'black',
        height: width * 0.11
    },
    send: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        top: width * 0.015,
        height: width * 0.11
    },
    boxMessage: {
        minHeight: undefined,
        maxHeight: undefined,
        minWidth: 10,
        padding: 10,
        maxWidth: (width * 0.6)
    },
    boxMessageView: {
        minHeight: 70,
        maxHeight: undefined,
        width: width
    },
});
export default styles;