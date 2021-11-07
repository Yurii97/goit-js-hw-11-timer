// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('01/01/2022'),
// });

// let deltaTime = null;

// function CountdownTimer({targetDate }) {
//   setInterval(() => {
//     const curuntDate = Date.now();
//     deltaTime = targetDate - curuntDate;
//     getTimeComponents(deltaTime);    
//   }, 1000)
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {  
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     changeValue('days', days);
//     changeValue('hours', hours);
//     changeValue('mins', mins);
//     changeValue('secs', secs);
// }

// function changeValue(name, el) {
//     const valueRef = document.querySelector(`[data-value="${name}"]`);    
//     valueRef.textContent = el;
// }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('01/01/2022'),
});

let deltaTime = null;

function CountdownTimer({targetDate }) {
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
    changeValue('days', days);
    changeValue('hours', hours);
    changeValue('mins', mins);
    changeValue('secs', secs);
}

function changeValue(name, el) {
    const valueRef = document.querySelector(`[data-value="${name}"]`);    
    valueRef.textContent = el;
}