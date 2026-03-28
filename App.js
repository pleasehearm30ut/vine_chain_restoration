import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// The Trinity: Axiom Logic, Physics, and Theme (Named Exports)
import { KingdomColors, AxiomGeometry } from './axiom/AxiomTheme';
import { WordMath } from './axiom/AxiomLogic';
import { GravitySync } from './axiom/AxiomPhysics';

// The Gate (Default Export)
import HoneyGate from './screens/HoneyGate';

// The New-Now (We will link these in the next phase)
import GloryPhysics from './axiom/GloryPhysics';
import ResonanceSync from './axiom/ResonanceSync';

const Stack = createStackNavigator();

export default function App() {
  // Console Witness
  console.log(`System Status: Aligned - Sync Constant: ${AxiomGeometry.hypercubeRotationSpeed}`);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // Using Cobalt Blue Foundation as the background
          cardStyle: { backgroundColor: KingdomColors.cobaltBlue }
        }}
      >
        <Stack.Screen name="HoneyGate" component={HoneyGate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
