//INTERAZIONE BOTTONI
const btnSetting = document.getElementById('set');
const levelSize = document.getElementById('size');
/*
btnSetting.addEventListener('click', () => {
    const gridSize = levelSize.value;
    console.log(gridSize);

    let boxNum;
    let boxForSide;

    switch (gridSize) {
        case 'easy':
            boxNum = 49;
            boxForSide = 7;
            break;
        case 'medium':
            boxNum = 81;
            boxForSide = 9;
            break; 
        case 'hard':
            boxNum = 100;
            boxForSide = 10; 
    }

    console.log(boxNum);
    console.log(boxForSide);
    */
    


 const elementGrid = document.querySelector('.grid');

 for(let i = 0; i < 49; i++) {
     const elementSquare = squareGrid();

     elementSquare.addEventListener('click', function() {
         console.log(this);
         this.classList.add('clicked');
     });
     elementGrid.append(elementSquare);
 }

 

     function squareGrid() {
         const node = document.createElement('div');
         node.classList.add('square');
         return node;
     }
