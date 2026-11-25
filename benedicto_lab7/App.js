import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const PINK = '#E75480';
const DEEP = '#8B1E4A';
const SOFT = '#FFD6E5';
const BG = '#FFF0F5';

function Home({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadUser() {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) throw new Error('Request failed');

      const { results } = await response.json();
      if (!results?.[0]) throw new Error('No user returned');

      setUser(results[0]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <View style={styles.home}>
      {user && (
        <>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open profile"
            onPress={() => navigation.navigate('Profile', { user })}
            style={styles.photoButton}
          >
            <Image source={{ uri: user.picture.large }} style={styles.homePhoto} />
          </Pressable>
          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}

      {loading && !user && <ActivityIndicator color={PINK} />}
      {error && <Text style={styles.error}>Could not load a user. Try again.</Text>}

      <Pressable
        accessibilityRole="button"
        disabled={loading}
        onPress={loadUser}
        style={[styles.button, loading && styles.disabled]}
      >
        <Text style={styles.buttonText}>
          {loading ? 'LOADING…' : 'RANDOM USER'}
        </Text>
      </Pressable>
    </View>
  );
}

function Section({ title, icon, rows }) {
  return (
    <View style={styles.section}>
      <View style={styles.headingRow}>
        <Ionicons name={icon} size={14} color={PINK} />
        <Text style={styles.heading}>{title}</Text>
      </View>

      {rows.map(([label, value]) => (
        <View key={label} style={styles.row}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value} numberOfLines={1}>
            {value}
          </Text>
        </View>
      ))}
    </View>
  );
}

function Profile({ route }) {
  const { name, picture, dob, gender, location, email, phone, registered } =
    route.params.user;
  const { street, city, country } = location;

  return (
    <View style={styles.profile}>
      {/* Pink banner */}
      <View style={styles.banner}>
        <Image source={{ uri: picture.large }} style={styles.profilePhoto} />
        <Text style={styles.profileName}>
          {name.title} {name.first} {name.last}
        </Text>
      </View>

      <Section
        title="About"
        icon="person"
        rows={[
          ['Age', dob.age],
          ['Birthday', new Date(dob.date).toDateString()],
          ['Gender', gender],
          ['Address', `${street.number} ${street.name}, ${city}, ${country}`],
        ]}
      />

      <Section
        title="Contact"
        icon="mail"
        rows={[
          ['Email', email],
          ['Phone', phone],
        ]}
      />

      <Section
        title="Other"
        icon="ellipsis-horizontal"
        rows={[['Registered', new Date(registered.date).toDateString()]]}
      />
    </View>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        drawerType: 'front',
        drawerStyle: { width: '70%' },
        drawerActiveTintColor: '#1565C0',
        drawerActiveBackgroundColor: '#DCECFC',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeMenu"
            component={HomeDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitleAlign: 'left',
              headerStyle: { backgroundColor: PINK },
              headerTintColor: '#FFFFFF',
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },

  home: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoButton: { width: '50%', maxWidth: 200 },
  homePhoto: { width: '100%', aspectRatio: 1, borderRadius: 10, borderWidth: 1},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  button: {
    backgroundColor: PINK,
    padding: 9,
    borderRadius: 2,
    marginTop: 16,
  },
  buttonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '500' },
  disabled: { opacity: 0.6 },
  error: { color: '#B91C1C', marginTop: 12, textAlign: 'center' },

  // ----- Profile (pink, compact, no scrolling) -----
  profile: { flex: 1, backgroundColor: BG },
  banner: {
    backgroundColor: PINK,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profilePhoto: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 6,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 14,
    marginTop: 8,
    elevation: 2,
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  heading: {
    color: PINK,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: SOFT,
  },
  label: {
    width: 80,
    fontSize: 13,
    color: PINK,
  },
  value: {
    flex: 1,
    fontSize: 13,
    color: DEEP,
  },
});