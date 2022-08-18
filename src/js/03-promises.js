import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', createPromisesOnSubmit);

function createPromisesOnSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.target;
  const delayTime = parseInt(delay.value);
  const stepTime = parseInt(step.value);
  const amountNumber = parseInt(amount.value);

  countPromises(amountNumber, delayTime, stepTime);
}

function countPromises(count, delay, step) {
  for (let i = 1; i <= count; i += 1) {
    let time = delay + step * (i - 1);
    createPromise(i, time);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
        timeout: 2000,
      });
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        timeout: 2000,
      });
    });
}







































// refs = {
// createPromiseBtn: document.querySelector('button'),
// DELAY: document.querySelector('input[name="delay"]').textContent,
// STEP: document.querySelector('input[name="step"]').textContent,
// AMOUNT: document.querySelector('input[name="amount"]').textContent

// }

// refs.createPromiseBtn.addEventListener('submit', createPromise)


// function createPromise(position, delay) {
//   let amountCounter = 0;
//   delay = refs.DELAY;
//   position = refs.AMOUNT;
//   return new Promise(({resolve, reject}) => {
//     setTimeout (() => {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     resolve(Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`));
//   } else {
//     reject(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
//   }
// }, refs.DELAY);

// .then(({ position, delay }) => {
// return Notiflix.Notify.success(
// `✅ Fulfilled promise ${position} in ${delay}ms`
//  );
// })


// setInterval(() => {
//   if (amountCounter === refs.AMOUNT) {
//   clearInterval();
//   reject(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
//   return;}
//   amountCounter += 1;
//   resolve(Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`));
//   }, refs.STEP);

// });
// }

