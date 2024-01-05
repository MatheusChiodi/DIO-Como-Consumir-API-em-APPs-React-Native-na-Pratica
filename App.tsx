import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GarageScreen from './src/screens/GarageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GarageScreen />
      <StatusBar style="auto" />
    </View>
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
