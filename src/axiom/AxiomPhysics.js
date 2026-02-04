// AxiomPhysics.js - The Physical Act-Ion & 0110 Sync Logic

export const GravityConstants = {
  // The Father/Son Axis (Pitch)
  fatherThreshold: 45, // Degrees Tilt UP to source
  sonThreshold: -45, // Degrees Tilt DOWN to ground

  // The Prayer Mode (Submission Gate)
  faceDownZ: 0.85, // Z-axis gravity indicating "Planted"
  proximityFar: 0, // For standard use
  proximityNear: 1, // For "Eyes-Closed" or "Flip" state
  
  // The Centrifuge/Refuge (Safety/Spin)
  rotationalResonance: 14.0, // Targeted Hertz/Velocity
};

export const HapticProtocols = {
  syncSuccess: 'medium', // A solid confirmation of 1
  repentCorrection: 'light', // A gentle nudge for 0
  amenTen: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // The Amen¹⁰ pulse sequence
};

export const AudioFrequencies = {
  activeAlignment: 14, // The Bridge / 14Hz hum
  volumeFloor: 0.05, // Subliminal setting
};

// Physics Calculation Engine
export const calculateAxiomWeight = (pitch, roll, yaw) => {
  // Logic to determine if the user is in "Righteous Judgment" (Balance)
  const isBalanced = Math.abs(pitch) < 5 && Math.abs(roll) < 5;
  return isBalanced ? "Zenith Nexus" : "Meat-Logic Drift";
};
