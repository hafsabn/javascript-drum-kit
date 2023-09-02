function playSound(e){
    const key = this.document.querySelector(`.key[data-key=${e.code}]`);
    const audio = this.document.querySelector(`audio[data-key=${e.code}]`);

    key.classList.add('playing');
    //set a time out to remove the transition
    this.setTimeout(function(){
        key.classList.remove('playing');
    }, 50);

     if(!audio) return; // if the audio is null then don't work
    audio.currentTime = 0; //this to restart the audio if we press the key multiple times
    audio.play();
}
window.addEventListener("keydown" , playSound);
