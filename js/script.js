import { getWeigthMaintance, getWeightGain, getWeightLoss } from './formules.js';

const sexMaleElement = document.querySelector('#gender-male');

const ageElement = document.querySelector('#age');
const heightElement = document.querySelector('#height');
const weightElement = document.querySelector('#weight');

const chooseActivityElement = document.querySelector('.radios-group');

const computationButtonElement = document.querySelector('.form__submit-button');
const resetButtonElement = document.querySelector('.form__reset-button');

const resultWindowElement = document.querySelector('.counter__result');

const weigthMaintanceElement = resultWindowElement.querySelector('#calories-norm');
const weightLossElement = resultWindowElement.querySelector('#calories-minimal');
const weightGainElement = resultWindowElement.querySelector('#calories-maximal');

let activityValue = 'min';

const changeButtonsStatus = () => {
  computationButtonElement.disabled = !(
    ageElement.value !== '' && heightElement.value !== '' && weightElement.value !== '');
  resetButtonElement.disabled = !(
    ageElement.value !== '' || heightElement.value !== '' || weightElement.value !== '');
};

ageElement.addEventListener('input', changeButtonsStatus);

heightElement.addEventListener('input', changeButtonsStatus);

weightElement.addEventListener('input', changeButtonsStatus);

chooseActivityElement.addEventListener('change', (evt) => {
  activityValue = evt.target.value;
});

resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  sexMaleElement.checked = true;
  ageElement.value = '';
  heightElement.value = '';
  weightElement.value = '';
  chooseActivityElement.querySelector('#activity-minimal').checked = true;
  resultWindowElement.classList.add('counter__result--hidden');
  changeButtonsStatus();
});

computationButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  const weigthMaintance = getWeigthMaintance(
    heightElement.value,
    weightElement.value,
    ageElement.value,
    sexMaleElement.checked,
    activityValue,
  );
  weigthMaintanceElement.textContent = weigthMaintance;
  weightLossElement.textContent = getWeightLoss(weigthMaintance);
  weightGainElement.textContent = getWeightGain(weigthMaintance);
  resultWindowElement.classList.remove('counter__result--hidden');
});
