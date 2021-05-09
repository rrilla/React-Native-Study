import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const EventButton = () => {
    const _onPressIn = () => console.log('Press In !!!\n');
    const _onPressOut = () => console.log('Press Out !!!\n');
    const _onPress = () => console.log('Press !!!\n');
    const _onLongPress = () => console.log('Long Press !!!\n');

    return(
        <TouchableOpacity
        style={{
            backgroundColor: '#f1c40f',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        onPressIn={_onPressIn}
        onLongPress={_onLongPress}
        onPressOut={_onPressOut}
        onPress={_onPress}
        delayLongPress={5000}
        >
        <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>
        </TouchableOpacity>
    );
};

export default EventButton;