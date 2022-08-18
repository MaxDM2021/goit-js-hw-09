import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';


refs = {
createPromiseBtn: document.querySelector('button'),
DELAY: document.querySelector('input[name="delay"]').textContent,
STEP: document.querySelector('input[name="step"]').textContent,
AMOUNT: document.querySelector('input[name="amount"]').textContent

}

refs.createPromiseBtn.addEventListener('submit', createPromise)


function createPromise(position, delay) {
  let amountCounter = 0;
  delay = refs.DELAY;
  position = refs.AMOUNT;
  return new Promise((resolve, reject) => {
    setTimeout (() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`));
  } else {
    reject(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
  }
}, refs.DELAY);

setInterval(() => {
  if (amountCounter === refs.AMOUNT) {
  clearInterval();
  reject(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
  return;}
  amountCounter += 1;
  resolve(Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`));
  }, refs.STEP);

});
}

