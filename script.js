window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return; // if button pressed has no matching data-key, do nothing
    audio.currentTime = 0; // lets you play same drum sound fast in succession 
    audio.play(); 
}); 