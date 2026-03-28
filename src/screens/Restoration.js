import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

// The Trinity
import { KingdomColors, AxiomStyles } from '../axiom/AxiomTheme';
import { WordMath } from '../axiom/AxiomLogic';

export default function Restoration({ navigation }) {
  const [gloryLevel, setGloryLevel] = useState(0);
  const pulseAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    // The "Living" Pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // The Progressive Manifestation
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress <= 100) {
        setGloryLevel(progress);
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[AxiomStyles.windowFrame, { transform: [{ scale: pulseAnim }] }]}>
        <Text style={styles.title}>RESTORATION</Text>
        <Text style={styles.gloryText}>{gloryLevel}% ALBEDO</Text>
        
        <View style={styles.meterContainer}>
          <View style={[styles.meterFill, { width: `${gloryLevel}%` }]} />
        </View>

        <Text style={styles.status}>
          {gloryLevel === 100 
            ? `Stationary Truth: ${WordMath.sync} Achieved.` 
            : "Calibrating the Word..."}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: KingdomColors.cobaltBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: KingdomColors.neonScarlet,
    fontWeight: 'bold',
    letterSpacing: 8,
    textAlign: 'center',
  },
  gloryText: {
    fontSize: 24,
    color: KingdomColors.holyGroundGold,
    marginTop: 20,
    fontFamily: 'Monospace-Monolith',
  },
  meterContainer: {
    width: 200,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 30,
    borderRadius: 2,
  },
  meterFill: {
    height: '100%',
    backgroundColor: KingdomColors.zenithLight,
  },
  status: {
    marginTop: 40,
    color: KingdomColors.translucentSilver,
    fontStyle: 'italic',
    fontSize: 12,
  }
});
