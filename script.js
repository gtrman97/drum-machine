window.addEventListener('keydown', function(event) {
    const audio = this.document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return; 
    audio.currentTime = 0; // lets you play same drum sound fast in succession 
    audio.play(); 
}); 