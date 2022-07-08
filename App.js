import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './screens/Game';
import ScoreScreen from './screens/Scores';

const Stack = createNativeStackNavigator();
function DefaultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Enter Game"
        onPress={() => navigation.navigate('GameScreen')}
      />
     
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Default" component={DefaultScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});