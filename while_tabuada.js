//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);

//let contador = 0;

//o while precisa de uma variável para controlar o processo de repetição, todo o processo é verificado na condição "contador <= 10"
//só vai entrar dentro do while quando a condição for verdadeira
//while(contador <= 10) {
  //  console.log(contador);
    //variável sendo incrementada
    //contador += 1;
//}

//let contador = 1;
//let contador1 = 1;

//while(contador <= 10){

   // while(contador1 <= 10){
     //   console.log(`${contador} x ${contador1} = ${contador} * ${contador1} `);
      //  contador1++;
   // }
  //  contador1 = 0;
  //  contador++;
//}



contador = 1;
contador1 = 1;

while(contador <= 10){
    
    while(contador1 <= 10){
        console.log(`${contador} x ${contador1} = ${contador * contador1}`);
        contador1++;
    }
    contador1=0;
    contador++;
}