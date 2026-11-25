import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>PROFILE</Text>
      </Pressable>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>GO BACK HOME</Text>
      </Pressable>
    </View>
  );
}

function About({ navigation }) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>GO BACK</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            drawerItemStyle: { display: 'none' }, // hide from the menu
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate('Home')}>
                <Text style={styles.backArrow}>←</Text>
              </Pressable>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  button: {
    backgroundColor: '#168DE2',
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  backArrow: {
    fontSize: 24,
    marginLeft: 12,
  },
});