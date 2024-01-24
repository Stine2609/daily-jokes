import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigationStack from './screens/AppNavigationStack';
// import API from '/networking/api.js'

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <AppNavigationStack />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
