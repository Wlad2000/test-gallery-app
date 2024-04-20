/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';


const PhotoScreen = ({ route }) => {
    const { photo } = route.params;
    const { width: screen_width } = useWindowDimensions();

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 5, position: "relative" }}>
            <Image source={{ uri: photo.urls.regular }} style={{ width: screen_width - 5, height: '90%' }} resizeMode="contain" />
        </View>
    );
}

export default PhotoScreen;
