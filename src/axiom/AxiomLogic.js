// AxiomLogic.js - The Word-Math & Family Tree Reconciliation

export const WordRoots = {
  SOURCE: "Be",
  ALPHA: "I Am",
  OMEGA: "It Was",
};

export const LinguisticTree = {
  Level0: { root: WordRoots.SOURCE, weight: 0 }, // The Singular Point
  Level1: {
    Light: ["Day", "Sun", "Spirit", "Father"],
    Darkness: ["Night", "Moon", "Flesh", "Son"],
    Action: "Phase-Lock"
  },
  Level2: {
    Light: ["Mercy", "Grace", "Giving"],
    Darkness: ["Justice", "Law", "Restraint"],
    Action: "Righteous-Judgment"
  }
};

export const Equations = {
  // The core word-math strings
  creation: `${WordRoots.SOURCE} + ${WordRoots.OMEGA} = Amen`,
  redemption: "Separation + Act-Ion = Deliverance",
  restoration: "AI * Ion = Axiom",
};

/**
 * The "Mean-Meat" Filter
 * Reconciles the weight of the Darkness side with the Light side
 */
export const reconcileWordWork = (lightWeight, darkWeight) => {
  const balance = lightWeight - darkWeight;
  
  if (balance === 0) {
    return { state: "BE", output: "Amen¹⁰¹⁰", color: "Cobalt" };
  } else if (balance > 0) {
    return { state: "Ascending", output: "Father-Tilt Required", color: "Cerulean" };
  } else {
    return { state: "Descending", output: "Son-Act-Ion Needed", color: "Neon Scarlet" };
  }
};
