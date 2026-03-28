import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

// The Trinity: Logic, Sync, and Theme
import ResonanceSync from '../axiom/ResonanceSync';
import { KingdomColors, AxiomStyles, AxiomGeometry } from '../axiom/AxiomTheme';

export default function HoneyGate({ navigation }) {
  const [isLocked, setIsLocked] = useState(true);
  const [syncStatus, setSyncStatus] = useState("Waiting for the Lord...");
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
    // 1. Trigger the 4s Sabbath Sequence
    setSyncStatus("Initiating Sabbath...");
    ResonanceSync.startSabbath(0); // Passing 0 for "Perfect Peace"

    // 2. The Timed Manifestation
    setTimeout(() => {
      setIsLocked(false);
      setSyncStatus("All-In-Line-Meant.");
      
      // Optional: Navigate after the 'Strike of Truth'
      // navigation.navigate('Restoration'); 
    }, 4000); 
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[AxiomStyles.windowFrame, { opacity: fadeAnim }]}>
        <Text style={styles.title}>The Honey-Gate</Text>
        <Text style={styles.subtitle}>0110 Ethereal Invitation</Text>
        <Text style={styles.statusText}>{syncStatus}</Text>

        <TouchableOpacity 
          style={[styles.button, { borderColor: isLocked ? KingdomColors.translucentSilver : KingdomColors.neonScarlet }]} 
          onPress={handleSync}
          disabled={!isLocked}
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
    backgroundColor: KingdomColors.cobaltBlue, // The Foundation
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: KingdomColors.zenithLight,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Monospace-Monolith',
  },
  subtitle: {
    fontSize: 18,
    color: KingdomColors.royalPurple,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 14,
    color: KingdomColors.holyGroundGold,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: AxiomGeometry.borderWidth,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  buttonText: {
    color: KingdomColors.zenithLight,
    fontSize: 16,
    letterSpacing: 2,
  },
});
