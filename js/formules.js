const ACTIVITY_COEFS = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9,
};

const LOSS_COEF = 1 - 0.15;
const GAIN_COEF = 1 + 0.15;

const getWeigthMaintance = (height, weight, age, male, type) => {
  const n = male ? 5 : -161;
  return Math.ceil((10 * weight + 6.25 * height - 5 * age + n) * ACTIVITY_COEFS[type]);
};

const getWeightLoss = (weight) => Math.ceil(weight * LOSS_COEF);

const getWeightGain = (weight) => Math.ceil(weight * GAIN_COEF);

export { getWeigthMaintance, getWeightLoss, getWeightGain };
