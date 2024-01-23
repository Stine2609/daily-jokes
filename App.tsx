import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigationStack from './screens/AppNavigationStack';
// import API from '/networking/api.js'

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <StatusBar style="auto" />
        <AppNavigationStack />
        {/* <Text>Test2</Text> */}
      {/* </View> */}
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
