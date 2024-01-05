import { View, Text } from 'react-native';
import { styles } from './style';
import CardView from '../../components/CardView';

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottonLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottonRight]}></View>
        <CardView />
      </View>
    </View>
  );
}
