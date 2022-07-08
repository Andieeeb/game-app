import * as React from 'react';
import { Text, View, Button } from 'react-native';
import App from '../App';


export default function ScoreScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="Go Home"
            onPress={() => navigation.navigate('App')}
          />
      </View>
    );
  }