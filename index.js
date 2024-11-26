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
        document.getElementById(`${i+1}`).addEventListener('click', () => {
            playAudio(`/audios/${i+1}.ogg`);   
        } );
        }

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("a")){
          playAudio(`/audios/1.ogg`)
          document.getElementById("1").style.backgroundColor = "hsl(0, 0%, 80%)";
        }
      });

      document.addEventListener("keyup", event => {
        if(event.key.startsWith("a")){
          document.getElementById("1").style.backgroundColor = "#ffffff";
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("s")){
          playAudio(`/audios/2.ogg`)
          document.getElementById("2").style.backgroundColor = "hsl(0, 0%, 80%)";
        }
      });

      document.addEventListener("keyup", event => {
        if(event.key.startsWith("s")){
          document.getElementById("2").style.backgroundColor = "#ffffff";
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("d")){
          playAudio(`/audios/3.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("f")){
          playAudio(`/audios/4.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("g")){
          playAudio(`/audios/5.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("h")){
          playAudio(`/audios/6.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("j")){
          playAudio(`/audios/7.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("k")){
          playAudio(`/audios/8.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith("l")){
          playAudio(`/audios/9.ogg`)
        }
      });

      document.addEventListener("keydown", event => {
        if(event.key.startsWith(";")){
          playAudio(`/audios/10.ogg`)
        }
      });