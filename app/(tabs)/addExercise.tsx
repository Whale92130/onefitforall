import React, { useState, FC } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
interface Set {
  weight: string;
  reps: string;
  type: 'regular' | 'warmup' | 'drop';
}

// This is the component that will be duplicated for each exercise
// Define the interface for props
interface Props {
  onDelete: () => void;
}
// All state and rendering logic for a single exercise goes here
// This is the component that will be duplicated for each exercise

  // Define the interface for props
  interface Props {
    onDelete: () => void;
  }
  
  const AddExercise: FC<Props> = ({ onDelete }) => {
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
  const [bodyweightReps, setBodyweightReps] = useState(false);
  const [lbs, setLbs] = useState(true);

  const handleAddSet = () => {    setSets([...sets, { weight: bodyweightReps ? 'BW' : '', reps: '', type: 'regular' }]); // Initialize new sets with type 'regular'
  };

  const handleSetChange = (index: number, field: 'weight' | 'reps', value: string) => {
    if (bodyweightReps && field === 'weight') {
      return;
    }
    const newSets = [...sets];
    newSets[index][field] = value;
    setSets(newSets);
  };

 return (
 <View style={styles.container}>
 {exerciseName !== '' && ( // Show delete button only if exercise name is entered
 <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
 <AntDesign name="delete" size={20} color="red" />
 </TouchableOpacity>
 )}



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
 value={bodyweightReps}
 onValueChange={(isBW) => {
 setBodyweightReps(!bodyweightReps);
 setSets(sets.map(set => {
 return {...set, weight: isBW ? 'BW' : '', reps: isBW ? '' : set.reps};
 }));}}
 />
 </View>

      <View style={styles.toggleContainer}>
        <Text>{lbs ? 'Weight in Lbs' : 'Weight in Kg'}</Text>
        <Switch
          value={lbs}
          onValueChange={setLbs}
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
 keyboardType={bodyweightReps ? "default" : "numeric"} // Corrected logic here
 />
 <TextInput
            style={styles.setInput}
            value={set.reps}
            onChangeText={(value) => handleSetChange(index, 'reps', value)} 
 placeholder={"Reps"}
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
    borderColor: 'black',
    width: '40%',
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
    borderColor: 'black',
    width: '10%',
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
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1, // Ensure the button is on top of other elements
    padding: 5,
  },
});
export default AddExercise;