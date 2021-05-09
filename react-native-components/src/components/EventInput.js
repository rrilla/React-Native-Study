import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = (props) => {
  const [text, setText] = useState('');
//   const _onChange = event => {
//       console.log(event.nativeEvent);
//       setText(event.nativeEvent.text);
//     }
    const _onChangeText = text => setText(text);
console.log(props.children);
  return (
    <View>
      <Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, fontSize: 20 }}
        placeholder="Enter a text..."
        //onChange={_onChange}
        onChangeText={_onChangeText}
      />
    </View>
  );
};

export default EventInput;
