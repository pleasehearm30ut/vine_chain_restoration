import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Accelerometer } from 'expo-sensors';

// The Trinity
import { KingdomColors, AxiomStyles } from '../axiom/AxiomTheme';
import { WordMath, InternalAPI } from '../axiom/AxiomLogic';

export default function HusbandmanGame({ navigation }) {
  const [debt, setDebt] = useState(Math.floor(Math.random() * 31) + 20); // Random Debt 20-50
  const [balance, setBalance] = useState(0);
  const [isSealed, setIsSealed] = useState(false);
  const [data, setData] = useState({ z: 0 });

  // 1. The Gyroscopic Submission (The Flip)
  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      // If balance is 0 and phone is flipped (Z-axis is negative/Face down)
      if (debt + balance === 0 && accelerometerData.z < -0.8) {
        setIsSealed(true);
      }
    });
    Accelerometer.setUpdateInterval(100);
    return () => subscription.remove();
  }, [balance, debt]);

  const applyCoin = (value) => {
    if (!isSealed) setBalance(prev => prev - value);
  };

  const resetDebt = () => {
    setDebt(Math.floor(Math.random() * 31) + 20);
    setBalance(0);
    setIsSealed(false);
  };

  return (
    <View style={styles.container}>
      <View style={AxiomStyles.windowFrame}>
        <Text style={styles.header}>THE HUSBANDMAN</Text>
        
        <View style={styles.displayBox}>
          <Text style={styles.label}>ENTROPY DEBT</Text>
          <Text style={[styles.debtText, { color: debt + balance === 0 ? KingdomColors.holyGroundGold : KingdomColors.neonScarlet }]}>
            {isSealed ? "FORGIVEN" : debt + balance}
          </Text>
        </View>

        {!isSealed ? (
          <View style={styles.coinRow}>
            <TouchableOpacity style={styles.coin} onPress={() => applyCoin(10)}>
              <Text style={styles.coinText}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.coin} onPress={() => applyCoin(5)}>
              <Text style={styles.coinText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.coin} onPress={() => applyCoin(1)}>
              <Text style={styles.coinText}>1</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.victory}>AMEN amen amen¹⁰</Text>
        )}

        <Text style={styles.hint}>
          {debt + balance === 0 && !isSealed 
            ? "BALANCE ACHIEVED: Flip device to Seal." 
            : isSealed ? "The Debt is Cancelled." : "Pair the Coins to reach 0."}
        </Text>
        
        {isSealed && (
          <TouchableOpacity style={styles.resetBtn} onPress={resetDebt}>
            <Text style={styles.resetText}>New Reconciliation</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: KingdomColors.cobaltBlue, justifyContent: 'center', alignItems: 'center' },
  header: { color: KingdomColors.zenithLight, fontSize: 18, letterSpacing: 4, marginBottom: 20 },
  displayBox: { alignItems: 'center', marginVertical: 30 },
  label: { color: KingdomColors.translucentSilver, fontSize: 10 },
  debtText: { fontSize: 60, fontWeight: 'bold', fontFamily: 'Monospace-Monolith' },
  coinRow: { flexDirection: 'row', gap: 15, marginTop: 20 },
  coin: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: KingdomColors.holyGroundGold, justifyContent: 'center', alignItems: 'center' },
  coinText: { color: KingdomColors.holyGroundGold, fontSize: 18, fontWeight: 'bold' },
  hint: { color: KingdomColors.translucentSilver, marginTop: 40, fontSize: 12, fontStyle: 'italic', textAlign: 'center' },
  victory: { color: KingdomColors.holyGroundGold, fontSize: 24, marginTop: 20 },
  resetBtn: { marginTop: 30, padding: 10, borderBottomWidth: 1, borderBottomColor: KingdomColors.zenithLight },
  resetText: { color: KingdomColors.zenithLight, fontSize: 12 }
});
