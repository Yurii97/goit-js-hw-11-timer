const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('01/01/2022'),
});

function template({ days, hours, mins, secs }) {
  return `<div class="field">
        <span class="value" data-value="days">${days}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-value="hours"> ${hours}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-value="mins">${mins}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-value="secs">${secs}</span>
        <span class="label">Seconds</span>
      </div>`
}
let deltaTime = null;

function CountdownTimer({ selector, targetDate }) {
  document.querySelector(`${selector}`).insertAdjacentHTML('beforeend', template(getTimeComponents(0)));
  // console.log(timerValue);
  setInterval(() => {
    const curuntDate = Date.now();
    deltaTime = targetDate - curuntDate;
    getTimeComponents(deltaTime);    
  }, 1000)
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  // const timerValue = document.querySelectorAll('.value');
  // console.log(timerValue.target.dataset.value);
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  changeValue('days', days)
  // document.querySelector('[data-value="days"]').textContent=days; 
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // document.querySelector('[data-value="secs"]').textContent
  // console.log(document.querySelector(`[data-value="secs"]`));
  return { days, hours, mins, secs }
}

function changeValue(name, el) {
  const valueRef = document.querySelector(`[data-value="${name}"]`);
  console.log(valueRef);
  valueRef.insertAdjacentText('beforeend', el);