// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

import Notiflix from 'notiflix';
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amountOfPromises = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

submitBtn.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  let delay = parseInt(firstDelay.value);
  const step = parseInt(delayStep.value);
  const amount = parseInt(amountOfPromises.value);

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      });
    delay += step;
  }
}
