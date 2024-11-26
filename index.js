let currentAudio = null; // Keeps track of the currently playing audio

    function playAudio(audioFile) {
      // Stop the currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the beginning
      }

      // Create and play the new audio
      currentAudio = new Audio(audioFile);
      currentAudio.play().then(() => {
        console.log(`Playing: ${audioFile}`);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }

    // Assign buttons to play different audio files
    for(let i= 0; i<21; i++){
        document.getElementById(`${i+1}`).addEventListener('click', () => playAudio(`/audios/${i+1}.ogg`));
    }
    