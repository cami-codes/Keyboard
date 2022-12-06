// pegar todas as notas
const keys = document.querySelectorAll(".key");

// tocar notas
function playNotes(event) {

  let audioKeyCode = getKeyCode(event);

  // tecla digitada ou pressionada
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  // verificar se a tecla existe
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }
 
  addPlayingClass(key)
  playAudio(audioKeyCode)

}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"; // boolean
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0
  audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

// clicar com o mouse
keys.forEach(function (key) {
  key.addEventListener("click", playNotes);
  key.addEventListener("transitionend", removePlayingClass);
});

// clicar com teclado
window.addEventListener("keydown", playNotes);
