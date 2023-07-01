   
      let azerty = -8;
      if(azerty > 0 && azerty < 40) { 
        console.log('azerty est au rouge');
      } else if (azerty >40 && azerty < 60) { 
        console.log('azerty est au orange');
      } else if(azerty >60 && azerty <80){
        console.log('azerty est au bleu');
      } else if(azerty >80 && azerty <100)
      console.log('azerty est au vert'); 
      else if(azerty <0 || azerty >100){
        console.log('Veuillez verifier vos données');
      }  