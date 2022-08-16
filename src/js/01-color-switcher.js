const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

class Timer {

  start() {
    this.intervalId = setInterval(() => {
      const color = this.getRandomHexColor();
      document.body.style.backgroundColor = color;
      refs.startBtn.setAttribute('disabled', true);
      refs.stopBtn.removeAttribute('disabled', true);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    const color = this.getRandomHexColor();
    refs.startBtn.removeAttribute('disabled', true);
    refs.stopBtn.setAttribute('disabled', true);
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

const timer = new Timer();

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
