import { ScrollView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

import { PlaceIcon } from '../components/PlaceIcon';

function Banner({place}) {
    return (
        <View style={[styles.banner, styles.center]}>
            <PlaceIcon place={place}/>
            <Text style={styles.bannerText}>{place.name}</Text>
        </View>
    );
}

function PlaceProperty({value, title}) {
    return (
        <View style={stylesPlaceProp.container}>
            <Text style={stylesPlaceProp.title}>{title}</Text>
            <Text style={stylesPlaceProp.value}>{value}</Text>
            <View style={[stylesPlaceProp.hairline, stylesPlaceProp.hairlineMargin]}/>
        </View>
    );
}

export function PlaceDetailScreen({route}) {
    const {place} = route.params;
    return (
        <View style={styles.container}>
            <Banner place={place}/>
            <ScrollView>
                <PlaceProperty value={place.id} title='id'/>
                <PlaceProperty value={place.name} title='name'/>
                <PlaceProperty value={place.description} title='description'/>
                <PlaceProperty value={place.info} title='info'/>
                <PlaceProperty value={place.icon} title='icon'/>
                <PlaceProperty value={place.color} title='color'/>
                <PlaceProperty value={place.location.lat} title='latitude'/>
                <PlaceProperty value={place.location.lng} title='longitude'/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        center: tw`items-center`,
        container: tw`h-full bg-gray-200`,
        banner: tw`flex-row bg-purple-500 p-5`,
        bannerText: tw`text-white text-center text-xl`,
    }
)

const stylesPlaceProp = StyleSheet.create(
    {
        container: tw`bg-gray-100 m-2 pb-4 rounded-xl`,
        title: tw`px-8 font-semibold text-gray-400 text-lg`,
        value: tw`px-8`,
        hairlineMargin: tw`mx-8`,
        hairline: {height: StyleSheet.hairlineWidth, backgroundColor: 'gray'},
    }
)