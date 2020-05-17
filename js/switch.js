// Juego Piedra, Papel o Tijera
/* Las siguientes son las variables determinadas para el juego:

Piedra=0
Papel=1
Tijera=2

*/

var juego = ['Empate PIEDRA', 'Empate PAPEL', 'Empate TIJERA','Ganador Player1', 'Ganador Player2'];
var elementos = ['Piedra', 'Papel', 'Tijera'];


//Interacciones del juego

switch (juego) {
    case 'Empate PIEDRA': 'Piedra == Piedra'
            console.log ('EMPATE por PIEDRA');
        break;
    
    case 'Empate PAPEL': 'Papel == Papel'
        console.log ('EMPATE por PAPEL');
    break;

    case 'Empate TIJERA': 'Tijera == Tijera'
        console.log ('EMPATE por TIJERA');
    break;

    case 'Ganador Player1': 'Player1 == Piedra', 'Player2 == Tijera'
        console.log ('Ganador Player1 ya que Piedra mata a Tijera');
    break;

    case 'Ganador Player1': 'Player1 == Papel', 'Player2 == Piedra'
        console.log ('Ganador Player1 ya que Papel mata a Piedra');
    break;

    case 'Ganador Player1': 'Player1 == Tijera', 'Player2 == Papel'
    console.log ('Ganador Player1 ya que Tijera mata a Papel');
    break;

    case 'Ganador Player2': 'Player2 == Piedra', 'Player1 == Tijera'
    console.log ('Ganador Player2 ya que Piedra mata a Tijera');
    break;

    case 'Ganador Player1': 'Player2 == Papel', 'Player1 == Piedra'
    console.log ('Ganador Player2 ya que Papel mata a Piedra');
    break;

    case 'Ganador Player2': 'Player2 == Tijera', 'Player1 == Papel'
    console.log ('Ganador Player2 ya que Tijera mata a Papel');
    break;
  
   

}


