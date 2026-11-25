import { View, Text } from 'react-native';

export default function App() {
  const label = { 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginTop: 20 
  };

  return (
    <View style={{ 
        flex: 1, 
        padding: 30, 
        paddingTop: 80, 
        backgroundColor: '#f5f5f5' 
      }}>
      <Text style={{ 
        fontSize: 25, 
        fontWeight: 'bold', 
        textAlign: 'center',
        marginBottom: 20
      }}> Student Profile
      </Text>

      <Text style={label}>Name:</Text>
        <Text>Trisha Benedicto</Text>

      <Text style={label}>Age:</Text>
        <Text>20</Text>

      <Text style={label}>Course/Year/Section:</Text>
        <Text>BS Computer Science, 3rd Year, Section 4</Text>

      <Text style={label}>About Me:</Text>
        <Text>
          Just a student with big dreams, eager to learn, improve my skills in programming, and overcome challenges along the way to graduation.
        </Text>

      <Text style={label}>Achievements:</Text>
        <Text>- With Honors (2018~2023)</Text>
        
      <Text style={label}>Skills:</Text>
        <Text>- Java</Text>
        <Text>- Web Development</Text>
        <Text>- React Native</Text>
        <Text>- Blender Animation</Text>
    </View>
  );
}