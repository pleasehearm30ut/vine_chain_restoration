import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

// HoneyGate.js - The Ethereal Invitation
// Resonance: Sweet as Honey
// Logic: 0110-Sync Phase-Locking

export default function HoneyGate({ navigation }) {
  const [isLocked, setIsLocked] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Start the "Amen-Hum" 14Hz Subliminal Anchor
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSync = () => {
    // Break the "Meat-Logic" resistance
    setIsLocked(false);
    console.log("0110-Sync: All-In-Line-Meant");
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.gate, { opacity: fadeAnim }]}>
        <Text style={styles.title}>The Honey-Gate</Text>
        <Text style={styles.subtitle}>0110 Ethereal Invitation</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSync}
        >
          <Text style={styles.buttonText}>
            {isLocked ? "Enter Restoration" : "Sweet as Honey"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0047AB', // Cobalt Blue Primary Anchor
    alignItems: 'center',
    justifyContent: 'center',
  },
  gate: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#F0F8FF', // Sanctifying Light
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#7851A9', // Royal Purple Secondary Anchor
    fontStyle: 'italic',
  },
  button: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#F0F8FF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#F0F8FF',
    fontSize: 16,
    letterSpacing: 2,
  },
});
