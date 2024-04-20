/****************************************************************************
**
**
**
**
****************************************************************************/
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../store/actions/photoActions';
//import { screen_width } from '../utill / util';

const ListScreen = ({ navigation }) => {
    const { width: screen_width } = useWindowDimensions();
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    // only two sections images
    const numColumns = 2
    const column_width = screen_width / numColumns


    useEffect(() => {
        dispatch(fetchPhotos());
    }, []);

    const handlePress = (photo) => {
        navigation.navigate('Photo', { photo });
    }

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            {
                !photos ?
                    <Text style={{ color: 'gray' }} >LOADING...</Text>
                    :
                    <FlatList
                        data={photos}
                        keyExtractor={(item) => item.id}
                        numColumns={numColumns}
                        renderItem={
                            ({ item }) => (

                                <TouchableOpacity onPress={() => handlePress(item)}>
                                    <View style={{
                                        flexDirection: 'column', alignItems: 'center', padding: 10, justifyContent: 'center', width: column_width
                                    }}>
                                        <Image
                                            source={{ uri: item.urls.regular }}
                                            style={{ width: screen_width / 2.2, height: 200 }
                                            }
                                        />
                                        < Text style={{ color: 'gray', marginTop: 2 }}> Image by {item.user.name.length >= 10 ? item.user.name.substring(0, 10) + '...' : item.user.name}</Text >
                                    </View >
                                </TouchableOpacity >
                            )
                        }
                    />
            }
        </View >
    )
}

export default ListScreen;
