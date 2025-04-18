import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Timer = () => {
  const [initialMinutes, setInitialMinutes] = useState('00');
  const [initialSeconds, setInitialSeconds] = useState('00');
  const [timeLeft, setTimeLeft] = useState(0); // Time left in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isEditing, setIsEditing] = useState(true); // Start in editing mode

  useEffect(() => {
    if (isEditing) {
      return; // Don't run the timer if we're editing
    }

    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(0, prevTime - 10));
      }, 10);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isEditing]);

  const startTimer = () => {
    if (isEditing) {
      const minutes = parseInt(initialMinutes, 10) || 0;
      const seconds = parseInt(initialSeconds, 10) || 0;
      const totalMilliseconds = (minutes * 60 + seconds) * 1000;
      setTimeLeft(totalMilliseconds);
      setIsEditing(false);
    }
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(0);
    setIsEditing(true); // Resetting also allows editing again
    setInitialMinutes('00');
    setInitialSeconds('00');
  };

  const formatTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }}, [timeLeft, isRunning]);

    const editingTimeView = (
      <View style={styles.editTimeContainer}>
        <TextInput style={styles.input} value={initialMinutes} onChangeText={setInitialMinutes} keyboardType="numeric" editable={isEditing}/>
        <Text style={styles.separator}>:</Text>
        <TextInput style={styles.input} value={initialSeconds} onChangeText={setInitialSeconds} keyboardType="numeric" editable={isEditing} />
      </View>
    );

  return (
    <View style={styles.container}>
      {isEditing ? editingTimeView : <Text style={styles.time}>{formatTime(timeLeft)}</Text>}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Set & Start</Text>
          </TouchableOpacity>
        ) : (
          <>
            {isRunning ? (
              <TouchableOpacity style={styles.button} onPress={pauseTimer}>
                <Text style={styles.buttonText}>Pause</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={resumeTimer}>
                <Text style={styles.buttonText}>Resume</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={resetTimer}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  editTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 60,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
  },
  separator: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  time: {
    fontSize: 48,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Timer;