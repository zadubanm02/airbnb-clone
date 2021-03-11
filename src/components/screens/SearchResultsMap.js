import React from 'react'
import { useState, useEffect,useRef } from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native'
import MapView,{ Marker } from 'react-native-maps';
import places from '../../../assets/images/data/feed'
import CustomMarker from '../CustomMarker';
import PostCarouselItem from '../PostCarouselItem';

const SearchResultsMap = () => {
    const [selectedPlace, setSelectedPlace] = useState(null)
    const width = useWindowDimensions().width
    const flatlist = useRef()
    const viewConfig = useRef({itemVisiblePercentThreshold:70})
    const onViewChanged = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
            const selectedItem = viewableItems[0].item
            setSelectedPlace(selectedItem.id)
        }
    })
    const map = useRef()

    useEffect(() => {
        if(!selectedPlace || !flatlist) return
        console.log("Sroll to selected place", selectedPlace)
        const index = places.findIndex(place => place.id === selectedPlace)
        flatlist.current.scrollToIndex({index:index})
        const foundPlace = places[index]
        const region = {
            latitude: foundPlace.coordinate.latitude,
            longitude: foundPlace.coordinate.longitude,
            latitudeDelta:0.8,
            longitudeDelta:0.8
        }
        map.current.animateToRegion(region)
    }, [selectedPlace])

    return (
        <View style={{width:'100%', height:'100%'}}>
            <MapView
            ref={map}
            style={{width:'100%', height:'100%'}}
            initialRegion={{
            latitude: 28.2379822,
            longitude: -16.5124847,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
            }}
            >
           {places.map((place)=> {
               return (
                   <CustomMarker onPress={()=> setSelectedPlace(place.id)} isSelected={place.id === selectedPlace} key={place.id} coordinates={place.coordinate} price={place.newPrice}/>
               )
           })}
            </MapView>
            <View style={{position:'absolute', bottom:30}}>
             <FlatList 
                ref={flatlist}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={places}
                snapToInterval={width-30}
                snapToAlignment={'center'}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfig.current}
                onViewableItemsChanged={onViewChanged.current}
                renderItem={({item}) => <PostCarouselItem post={item} /> }
                />
            </View>
        </View>
    )
}

export default SearchResultsMap
