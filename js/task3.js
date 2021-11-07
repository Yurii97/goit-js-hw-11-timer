const addTimerButtonRef = document.querySelector('#add-time')

addTimerButtonRef.addEventListener('click', addTimer)

function addTimer() {
  const timeId = Date.now();
  const timer = new CountdownTimer({
    selector: '#timer',
    timeId: timeId,
    targetDate: new Date(prompt('Please enter date: day/month/year')),
  })
}

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('01/01/2022'),
// });

function template({ days, hours, mins, secs, planeDate }) {
  return `<div class="f">
  <span>${planeDate} залишилось:</span>
  <div class="field">
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
      </div>
      </div>`  
}
let deltaTime = null;

function CountdownTimer({ selector, targetDate }) {
  document.querySelector(`${selector}`).insertAdjacentHTML('beforeend', template(getTimeComponents(targetDate)));
  console.log(targetDate);
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
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  let planeDate = 'До: ';
  planeDate += time.getFullYear() + '/';
  planeDate += time.getMonth()+ '/';
  planeDate += time.getDate();
  return { days, hours, mins, secs, planeDate }
}