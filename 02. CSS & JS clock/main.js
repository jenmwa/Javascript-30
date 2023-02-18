const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const digitalSet = document.querySelector('.digitalSet');

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secondsdegrees = ((seconds/ 60) * 360) + 90;
//   secondsHand.style.transform = `rotate(${secondsdegrees}deg)`;

//   const minutes = now.getMinutes();
//   const minutesdegrees= ((minutes/60)* 360) + 90;
//   minutesHand.style.transform = `rotate(${minutesdegrees}deg)`;

//   const hours = now.getHours();
//   const hoursdegrees= ((hours/12)* 360) + 90;
//   hoursHand.style.transform = `rotate(${hoursdegrees}deg)`;

//   console.log(hours)
// }

function setDate() {
  const now = new Date();

  setHandRotation(secondsHand, now.getSeconds(), 60);
  setHandRotation(minutesHand, now.getMinutes(), 60);
  setHandRotation(hoursHand, now.getHours(), 12);
}

function setHandRotation(hand, timeValue, maxValue) {
  const degrees = ((timeValue / maxValue) * 360) + 90;
  hand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(setDate, 1000);


function renderDigitalDate() {
  
  const today = new Date();
  const options = { timeZone: 'Europe/Stockholm' };
  const dateTime = today.toLocaleString('sv-SE', options);
  digitalSet.innerHTML = dateTime;
}

setInterval(renderDigitalDate, 1000);


