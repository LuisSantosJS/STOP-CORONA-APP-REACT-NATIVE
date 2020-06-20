import React from 'react';
import {
    ImageBackground,
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions

} from 'react-native';
import Lottie from 'lottie-react-native';

import Carousel from 'react-native-snap-carousel';
import LinkingWhatsapp from '../../functions/LinkWhatsapp';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const data = [
    {
        title: 'Lave as mãos regularmente!',
        id: 0

    },
    {
        title: 'Sempre use máscara!',
        id: 1
    },
    {
        title: 'Mantenha distância das pessoas!',
        id: 2
    },

];

interface ITEM {
    title: string,
    id: number
}

const Recommendations: React.FC = () => {
    const navigation = useNavigation();

    function RenderRecomendações(item: ITEM, index: number) {
        console.log('index', index)
        return (
            <View key={item.id} style={styles.itemView}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                    {index !== 0 &&
                        <View style={[styles.iconArrow, { left: 0 }]} >
                            <Image source={require('../../assets/arrow_right.png')} />
                        </View>

                    }
                    <View style={{ height: width * 0.4, width: width * 0.4 }}>
                        {item.id == 0 ? <Lottie loop autoPlay source={require(`../../assets/lottieJSON/0.json`)} resizeMode={'cover'} /> : item.id == 1 ? <Lottie loop autoPlay source={require(`../../assets/lottieJSON/2.json`)} resizeMode={'cover'} /> : <Lottie loop autoPlay source={require(`../../assets/lottieJSON/1.json`)} resizeMode={'cover'} />  }
                        
                    </View>

                    {index !== 2 &&
                        <View style={[styles.iconArrow, { left: undefined, right: 0 }]} >
                            <Image source={require('../../assets/arrow_es.png')} />
                        </View>
                    }
                </View>
                <Text style={styles.textItem}>{item.title}</Text>
            </View>
        );
    };




    return (
        <>
            <ImageBackground style={styles.container} imageStyle={styles.containerHeader} source={require('../../assets/headerscreen.png')}>
                <View style={[styles.containerHeader]}>
                    <Image resizeMode={'contain'} source={require('../../assets/recommendations.png')} />
                    <Text style={styles.textHeader}>Recomendações</Text>
                </View>
                <View style={[styles.containerForm]}>
                    <View style={[styles.recommView]}>
                        <Carousel

                            data={data}
                            renderItem={({ item, index }) => RenderRecomendações(item, index)}
                            sliderWidth={width}
                            itemWidth={(width - (width / 10))}
                        />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.tabNavigatorView} >
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#F72585', top: -20 }]} onPress={() => LinkingWhatsapp()}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/share.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#7209B7', top: -35 }]} onPress={() => navigation.goBack()}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/homeicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.buttomNavigator, { backgroundColor: '#3A0CA3', top: -20 }]} onPress={() => navigation.navigate('Queries')}>
                    <Image style={styles.iconButtomNavigator} resizeMode={'contain'} source={require('../../assets/consulticon.png')} />
                </TouchableOpacity>
            </View>
        </>
    );

}

export default Recommendations;