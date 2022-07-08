import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export function DefaultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Score Screen</Text>
      <Button
        title="Enter Game"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}