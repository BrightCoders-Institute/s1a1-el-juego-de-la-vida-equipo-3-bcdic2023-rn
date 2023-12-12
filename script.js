/* 
    1.- Crear tabla (8w * 4h), texto plano | matriz
*/
/* import { readString } from './read'; */
class LifeG {
  constructor(value) {
    this.value = value;
  }

  f1() {
    return this.value[1];
  }

  f2() {
    return this.value[2];
  }

  f3() {
    return this.value[3];
  }
  
  f4() {
    return this.value[4];

  
  FuncPrincipal() {
    for (let i = -1; i < this.value.length; i++) {
      for (let k = -1; i < this.value.length; k++) {
        if(i === 0 && k === 0) continue;
        /* if(this.value[]){

                } */
      }
    }
  }
}
//grid[10][30] = 1;

//const a = readString('Celulas: ');

const r = ['........\n', '....*...\n', '...**...\n', '........'];

console.log(String(r).replace(/,/g, ''));


/*
Cualquier célula viva con menos de dos vecinos vivos muere, como si fuera por falta de población.
Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por sobre-población.
Cualquier célula viva con dos o tres vecinos vivos sobrevive a la siguiente generación.
Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva.
*/


/* 

countNeighbors(x, y) {
    let count = 0; número de vecinos vivos
    for (let i = -1; i <= 1; i++) { contar los vecinos para las x
      for (let j = -1; j <= 1; j++) { contar los vecinos para las y
        if (i === 0 && j === 0) continue; evitar contar la celda actual como vecino

        const neighborX = x + i; calculan coordenadas x
        const neighborY = y + j; calculan coordenadas y

        if (
          neighborX >= 0 &&
          neighborX < this.width &&
          neighborY >= 0 &&
          neighborY < this.height
        ) {
          count += this.board[neighborY][neighborX] ? 1 : 0;
        }
      }
    }
    return count;
  }

*/