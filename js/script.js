console.log('Ecco la lista di numeri da 1 a 100:');

//ciclo for per comparare ogni i
for (i = 1; i <= 100; i++) {
  //col primo if controllo se i è divisibile sia per 3 che per 5 e nel caso restituisco 'FizzBuzz' al posto del numero
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz (${i})`);
  }
  else
    /*se non sono divisibili per entrambi, ma per uno solo o nessuno, vado nell'else e controllo se è divisibile solo per 3 e nel caso restituisco 'Fizz' al posto del numero*/
    if (i % 3 === 0) {
      console.log(`Fizz (${i})`);
    }
    else
      //se non è divisibile neanche per 3 allora controllo se è divisibile per 5 e nel caso restituisco 'Buzz' al posto del numero
      if (i % 5 === 0) {
        console.log(`Buzz (${i})`);
      }
      else
        //se non è divisibile neanche per 5, restituisco solo il numero
        console.log(i);
}