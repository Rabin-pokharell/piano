let currentAudio = null;

    function playAudio(audioFile) {

      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }


      currentAudio = new Audio(audioFile);
      currentAudio.play().then(() => {
        console.log(`Playing: ${audioFile}`);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }


    for(let i= 0; i<21; i++){
        document.getElementById(`${i+1}`).addEventListener('click', () => playAudio(`/audios/${i+1}.ogg`));
    }
    