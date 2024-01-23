import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigationStack from './screens/AppNavigationStack';
import { useFonts } from 'expo-font';
// import API from '/networking/api.js'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Digitalt.otf'),
  });

  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <StatusBar style="auto" />
        <AppNavigationStack />
        <Text style={{ fontFamily: 'Digitalt', fontSize: 30 }}>Inter Black</Text>
        <Text style={{ fontSize: 30 }}>Platform Default</Text>
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
