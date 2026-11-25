import * as React from 'react';

import { 
  Text, 
  View, 
  StyleSheet 
} from 'react-native';
export default function App() {

return (
  <View style={styles.screen}>
    <Text style={styles.text}>Hello World!</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77c3ec',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
});