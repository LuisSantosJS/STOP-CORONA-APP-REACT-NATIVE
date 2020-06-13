import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttomNavigator: {
        width: '18%',
        height: width * 0.18,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
})
export default styles;