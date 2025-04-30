import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, TouchableOpacity } from 'react-native';

interface Set {
  weight: string;
  reps: string;
  type: 'regular' | 'warmup' | 'drop'; // Set default to 'regular'
}
const AddExercise = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const muscleGroupOptions = [
    'Chest',
    'Back',
    'Shoulders',
    'Biceps',
    'Triceps',
    'Legs',
    'Abs',
    'Cardio',
  ];

  const handleMuscleGroupChange = (itemValue: string) => {
    setMuscleGroups(prevGroups =>
      prevGroups.includes(itemValue) ? prevGroups.filter(group => group !== itemValue) : [...prevGroups, itemValue]
    );
  };
 const [sets, setSets] = useState<Set[]>([{ weight: '', reps: '', type: 'regular' }]);
 const [isBodyweight, setIsBodyweight] = useState(false);
 
 const handleAddSet = () => {
    setSets([...sets, { weight: isBodyweight ? 'BW' : '', reps: '', type: 'regular' }]); // Initialize new sets with type 'regular'
 };

 const handleSetChange = (index: number, field: 'weight' | 'reps', value: string) => {
 if (isBodyweight && field === 'weight') {
 return;
 }
 const newSets = [...sets];
 newSets[index][field] = value;
 setSets(newSets);
 };

 return (
 <View style={styles.container}>
 <View style={styles.formBox}>
 <Text>Exercise Name:</Text>
 <TextInput
 style={styles.input}
 value={exerciseName}
 onChangeText={setExerciseName}
 placeholder="Enter exercise name"
 />
 
 <View style={styles.toggleContainer}>
 <Text>Body Weight Reps </Text>
 <Switch
 value={isBodyweight}
 onValueChange={(value) => {
            setIsBodyweight(value);
 if (value) {
 setSets(sets.map(set => ({ ...set, weight: 'BW' })));
 }
 }}
 />
 </View>

        <Text>Muscle Groups:</Text>
        <View style={styles.muscleGroupContainer}>
          {muscleGroupOptions.map(group => (
            <TouchableOpacity
              key={group}
              style={[styles.muscleGroupButton, muscleGroups.includes(group) && styles.selectedMuscleGroup]}
              onPress={() => handleMuscleGroupChange(group)}
            >
              <Text style={[styles.muscleGroupButtonText, muscleGroups.includes(group) && styles.selectedMuscleGroupText]}>
                {group}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

 <Text>Sets and Reps:</Text>
 {sets.map((set, index) => (
        <View key={index} style={styles.setRow}>
          <View style={styles.setTypeContainer}>
          </View>
 <TextInput
 style={styles.setInput}
 value={set.weight}
 onChangeText={(value) => handleSetChange(index, 'weight', value)}
 placeholder="Weight"
 keyboardType="numeric"
 />
 <TextInput
            style={styles.setInput}
            value={set.reps}
            onChangeText={(value) => handleSetChange(index, 'reps', value)}
            placeholder="Reps"
            keyboardType="numeric"
          />
        </View>
      ))}
 
 <Button title="Add Set" onPress={handleAddSet} />
 </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  setRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  setInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginRight: 5,
 flex: 1
  },
  setTypeContainer: {
    marginRight: 5,
    justifyContent: 'center',
  },
  muscleGroupContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  muscleGroupButton: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    margin: 4,
    borderRadius: 5,
  },
  selectedMuscleGroup: {
    backgroundColor: 'blue', // You can change this color
  },
  muscleGroupButtonText: {
    color: 'black',
  },
  selectedMuscleGroupText: {
 color: 'white',
  },
});

export default AddExercise;