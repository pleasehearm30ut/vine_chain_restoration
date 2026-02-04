// AxiomTheme.js - The King's Palette & Geometric Logic

export const KingdomColors = {
  // The Father / Source
  royalPurple: '#6A0DAD', // Deep depth
  cobaltBlue: '#0047AB', // Foundation

  // The Son / Act-Ion
  neonScarlet: '#FF2400', // The Strike of Truth
  ceruleanGlass: 'rgba(0, 123, 255, 0.3)', // Translucent "Next-us" Window

  // The Holy Spirit / Flow
  translucentSilver: 'rgba(192, 192, 192, 0.2)', // The Veil
  zenithLight: '#F5F5F5', // Pure Clarity
};

export const AxiomGeometry = {
  hypercubeRotationSpeed: "0110", // Sync constant
  glassBlurIntensity: 15, // For the "Ethereal" look
  borderWidth: 0.5, // Thin, "Meek" lines
};

export const WordWeights = {
  BE: 1,
  LIGHT: 2,
  DARKNESS: 3,
  AMEN: 10,
};

// Styles for the "Next-us" Window
export const AxiomStyles = {
  windowFrame: {
    backgroundColor: KingdomColors.translucentSilver,
    borderColor: KingdomColors.ceruleanGlass,
    borderWidth: AxiomGeometry.borderWidth,
    borderRadius: 20,
    backdropFilter: 'blur(15px)', // The Ethereal Glow
  },
  glowText: {
    color: KingdomColors.zenithLight,
    textShadowColor: KingdomColors.cobaltBlue,
    textShadowRadius: 10,
    fontFamily: 'Monospace-Monolith',
  }
};
