const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      ties: 0,
      losses: 0
    };
    console.log(localStorage.getItem('score'));

    document.querySelector('.page-score').innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;

    function runCode(playerMove){

      let result = ''
      if (playerMove === 'Scissors') {
        if (pcMove === 'Rock'){
        result = 'You lose'
       } else if (pcMove === 'Paper'){
        result = 'You win'
       } else if (pcMove === 'Scissors'){
        result = 'Tie'
       }

       console.log(result);
       

       } else if (playerMove === 'Paper'){
      

          if (pcMove === 'Rock'){
            result = 'You win'
          } else if (pcMove === 'Paper'){
            result = 'Tie'
          } else if (pcMove === 'Scissors'){
            result = 'You lose'
          }

          console.log(result);


       } else if(playerMove === 'Rock'){
        

          if (pcMove === 'Rock'){
            result = 'Tie'
          } else if (pcMove === 'Paper'){
            result = 'You lose'
          } else if (pcMove === 'Scissors'){
            result = 'You win'
          }

          console.log(result);
       }
       if(result === 'You win'){
        score.wins++
       }else if(result === 'You lose'){
        score.losses++
       }else if (result === 'Tie') score.ties++;

       console.log(`Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`);
       localStorage.setItem('score', JSON.stringify(score));
       updateScore();

       document.querySelector('.page-result').innerHTML = result;
       document.querySelector('.page-moves').innerHTML = `You: <img src="${playerMove}-emoji.png" class="move-icon"> 
       Computer: <img src="${pcMove}-emoji.png" class="move-icon">
       `;
    }
    function pickPcMove() {
      const randomNumber1 = Math.random()
  if(randomNumber1 >= 0 && randomNumber1 <= 1/3){
    pcMove = 'Rock';
  } else if (randomNumber1 >=1/3 && randomNumber1 <= 2/3){ pcMove = 'Paper';

  }else {
    pcMove = 'Scissors';
  }
    };
    let pcMove = '';

function pickPlayerMove() {
      const randomNumber1 = Math.random()
  if(randomNumber1 >= 0 && randomNumber1 <= 1/3){
    return 'Rock';
  } else if (randomNumber1 >=1/3 && randomNumber1 <= 2/3){ return 'Paper';

  }else {
    return 'Scissors';
  }
    };
    

    localStorage.setItem('score', JSON.stringify(score));

    function updateScore(){
      document.querySelector('.page-score').innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
    };

    let isAutoPlay = false;
    let intervalId;

    function autoPlay() {
      if(!isAutoPlay){
        intervalId = setInterval(function() {
        const playerMove = pickPlayerMove();
        pickPcMove();
        runCode(playerMove);
      }, 2000)
      isAutoPlay = true
      }else{
        clearInterval(intervalId);
        isAutoPlay = false
      }
      
    }

    document.querySelector('.js-rock').addEventListener('click', () => {
      pickPcMove();
      runCode('Rock');
    })
    document.querySelector('.js-paper').addEventListener('click', () => {
      pickPcMove();
      runCode('Paper');
    })
    document.querySelector('.js-scissors').addEventListener('click', () => {
      pickPcMove();
      runCode('Scissors');
    })

    document.body.addEventListener('keydown', (event) => {
      if(event.key === 'r'){
        pickPcMove()
        runCode('Rock')
      } else if(event.key === 'p'){
        pickPcMove();
        runCode('Paper')
      } else if(event.key === 's'){
        pickPcMove()
        runCode('Scissors')
      }
    })