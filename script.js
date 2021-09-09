window.addEventListener('keydown', function(event) {
    const audio = this.document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return; 
    audio.play(); 
}); 