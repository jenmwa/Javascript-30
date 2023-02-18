function playSound(e) {
  const key = e.key.toLowerCase();
  const audio = document.querySelector(`audio[data-key='${key}']`);
  const keyElement = document.querySelector(`.key[data-key='${key}']`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "scale")
    return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
