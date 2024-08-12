import { StyleSheet} from 'react-native';
import { View } from 'react-native';
import Calculator from './Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    backgroundColor: 'pink',
  }
})
