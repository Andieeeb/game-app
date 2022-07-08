import * as React from 'react';
import { Text, View, Button } from 'react-native';
import ScoreScreen from './Scores';


export default function GameScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="View Scores"
            onPress={() => navigation.navigate('ScoreScreen')}
          />
      </View>
    );
  }