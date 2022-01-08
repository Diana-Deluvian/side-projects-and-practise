const keyData = {
  q: {
    sound: new Howl({
      urls: ['sounds/afraid to get your feet wet.mp3'],
    }),
  },
  w: {
    sound: new Howl({
      urls: ['sounds/as I live, all will die.mp3'],
    }),
  },
  e: {
    sound: new Howl({
      urls: ['sounds/ask me if I am listening.mp3'],
    }),
  },
  r: {
    sound: new Howl({
      urls: ['sounds/did you think you could kill me.mp3'],
    }),
  },
  t: {
    sound: new Howl({
      urls: ['sounds/go go go.mp3'],
    }),
  },
  y: {
    sound: new Howl({
      urls: ['sounds/gotta die sometime.mp3'],
    }),
  },
  u: {
    sound: new Howl({
      urls: ['sounds/hope you keep that humour up.mp3'],
    }),
  },
  i: {
    sound: new Howl({
      urls: ['sounds/i can be so much more.mp3'],
    }),
  },
  o: {
    sound: new Howl({
      urls: ['sounds/i speak only truth.mp3'],
    }),
  },
  p: {
    sound: new Howl({
      urls: ['sounds/lucian laughing.mp3'],
    }),
  },
  a: {
    sound: new Howl({
      urls: ['sounds/mush muush.mp3'],
    }),
  },
  s: {
    sound: new Howl({
      urls: ['sounds/my eyes are open.mp3'],
    }),
  },
  d: {
    sound: new Howl({
      urls: ['sounds/no more lies.mp3'],
    }),
  },
  f: {
    sound: new Howl({
      urls: ['sounds/on wings of fury.mp3'],
    }),
  },
  g: {
    sound: new Howl({
      urls: ['sounds/shes such a loser.mp3'],
    }),
  },
  h: {
    sound: new Howl({
      urls: ['sounds/the best intentions.mp3'],
    }),
  },
  j: {
    sound: new Howl({
      urls: ['sounds/these guns run on fury.mp3'],
    }),
  },
  k: {
    sound: new Howl({
      urls: ['sounds/they call me.mp3'],
    }),
  },
  l: {
    sound: new Howl({
      urls: ['sounds/we got the zoomies.mp3'],
    }),
  },
  z: {
    sound: new Howl({
      urls: ['sounds/wheres my fishie fish.mp3'],
    }),
  },
  x: {
    sound: new Howl({
      urls: ['sounds/youre not laughing.mp3'],
    }),
  },
  c: {
    sound: new Howl({
      urls: ['sounds/you have no idea what I am capable of.mp3'],
    }),
  },
  v: {
    sound: new Howl({
      urls: ['sounds/We do bones motherfucker.mp3'],
    }),
  },
  b: {
    sound: new Howl({
      urls: ['sounds/eyes.mp3'],
    }),
  },
  n: {
    sound: new Howl({
      urls: ['sounds/eyes.mp3'],
    }),
  },
  m: {
    sound: new Howl({
      urls: ['sounds/eyes.mp3'],
    }),
  },
};

function playSound() {
  keyData[this.querySelector('span').textContent].sound.play();
}

window.addEventListener(
  'keydown',
  function (e) {
    keyData[e.key].sound.play();
  },
  false
);

const quotebox = document.querySelectorAll('.quote-box');
for (i = 0; i < quotebox.length; i++) {
  quotebox[i].addEventListener('click', playSound);
}
