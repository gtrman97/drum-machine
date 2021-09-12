window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if(!audio) return; // if button pressed has no matching data-key, do nothing
    audio.currentTime = 0; // lets you play same drum sound fast in succession 
    audio.play(); 
    key.classList.add('playing'); 
}); 