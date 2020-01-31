/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var Scores, roundScore, activePlayer, gamePlaying;
var prevDice = 0; 
init()
//document.querySelector('#current-'+activePlayer).textContent = dice;



document.querySelector('.btn-roll').addEventListener('click', function()
{
    if(gamePlaying){
        
    document.getElementById('dice-1').style.display = "block";
    document.getElementById('dice-2').style.display = "block";
    //kamateli
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
        
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
     /*var prevDice = dice; */
    /*if(dice1 !== 6 && dice2 !== 6)
        {
         prevDice = 0; 
            
        }
        else 
        {
         prevDice +=dice1 + dice2;   
        }*/
    if(dice1 !== 1 && dice2 !== 1)
        {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
            
        }else
            {
            nextPlayer()
            }
    }
    if(prevDice === 12)
        {
            document.querySelector('#score-' + activePlayer).textContent = '0';
            document.querySelector('#current-' + activePlayer).textContent = '0';
            roundScore = 0;
            Scores[activePlayer] = 0;
            prevDice = 0;
            nextPlayer();
        }
    /*else 
        {
         prevDice = 0;   
}
   */ 
});
document.querySelector('.btn-hold').addEventListener('click', function()
{
    var input = document.getElementById('winingScore').value;
    var WS;
    
    if(input)
        {
          WS = input;  
            
        }
    else
        {
            WS = 100;
        }
    if(gamePlaying){
    //add current score
    Scores[activePlayer] += roundScore;
    //update UI
    document.querySelector('#score-' + activePlayer).textContent = Scores[activePlayer];
    //check if player won the game
    if(Scores[activePlayer] >= WS)
    {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
      
    document.getElementById('dice-1').style.dislpay = 'none';  
    document.getElementById('dice-2').style.dislpay = 'none';  
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
    //next player
    nextPlayer();}
}
});

function nextPlayer()
{
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;
                
                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';
                
                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');
                //droebit block
                document.getElementById('dice-1').style.display = "none";  
     document.getElementById('dice-2').style.display = "none";  
}
document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
 Scores= [0, 0];
 roundScore= 0;
 activePlayer = 0;   
gamePlaying = true;
    
document.getElementById('dice-1').style.display = "none";  
     document.getElementById('dice-2').style.display = "none";  
    
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent =' 0';
    
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
    
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
    
document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
    
    

}









