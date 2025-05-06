
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stopwatch = () => { 
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsRunning(true); // Automatically start the stopwatch
    if (true) { // Keep the interval running once started
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000); // Increment by 1000 milliseconds (1 second)
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current!);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);


  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

 return (
 <View style={styles.container}>
 <Text style={styles.time}>{formatTime(time)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50, // Static small height
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent', // Transparent background
  },
  time: {
    fontSize: 24, // Smaller font size
    fontWeight: 'bold',
    color: '#333',
  },
  timePadding: {
  },
});

export default Stopwatch;