window.alert('Welcome to Google');


// Thanks to this: https://qiita.com/hmmrjn/items/be29c62ba4e4a02d305c
const uttr = new SpeechSynthesisUtterance("\
    This is a demo using the browser's built-in text-to-speech. \
    It is amazing how easy and free speech synthesis is. \
    It's an amazing time we live in.\
  ");
uttr.lang = "en-US"
speechSynthesis.speak(uttr);

window.alert('Bye bye!');
