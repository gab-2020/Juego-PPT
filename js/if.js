// JUEGO Piedra, Papel o Tijera

/* Las siguientes son las variables determinadas para el juego:

Piedra=0
Papel=1
Tijera=2

*/

var variables= ["Piedra\=0", "Papel\=1", "Tijera\=2"]; 

//Interacciones del juego


function juego (Player1, Player2){

    // En caso de empate
if (Player1==Player2) {
    console.log(`ESTO ES UN EMPATE por ${variables [Player1]}`);
}


   //Ganador Player1
else if (Player1 == 0 && Player2 == 2 || Player1 == 1 && Player2 == 0 || Player1 == 2 && Player2 == 1) {
    console.log(`GANA PARTICIPANTE 1, ya que ${variables [Player1]} mata a ${variables [Player2]}`);
}


  //Ganador Player2
else {
    console.log(`GANA PARTICIPANTE 2, ya que ${variables [Player2]} mata a ${variables [Player1]}`);
}

}
