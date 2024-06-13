let nome = "Hebert";
let nivelHeroi = "";
 
 let resultado = subtração(230, 150);
 
 
 function subtração(numVitorias, numDerrotas){
	let subtração = numVitorias - numDerrotas
    return numVitorias - numDerrotas;
}
	   

 	if (resultado < 10){
        nivelHeroi = " Ferro ";}
        
        else if (resultado >=11 && resultado < 21){
        nivelHeroi = "Bronze";}

    	
    	else if (resultado >=21 && resultado <51){
        nivelHeroi = "Prata";}


    	else if (resultado >=51 &&  resultado < 81){
        nivelHeroi = "Ouro";}


    	else if (resultado >= 81 &&  resultado  <91) {
        nivelHeroi = "Diamante" ;}

    	else if (resultado >= 91 &&  resultado  <101) {
        nivelHeroi = "Lendário";}
    
    	else if (resultado >=101) {
        nivelHeroi = "Imortal"     }

  
    
     console.log ("O Herói " + nome + " tem saldo de " + resultado + " vitórias e está no nível "+ nivelHeroi) 
