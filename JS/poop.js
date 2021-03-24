const poop = {

    // ATTRIBUTES
    board: ['','','','','','','','','','','','','','','',''],
    container_element: null,
    whereIs: null,
    whatIs: 'grass',
    gameover: false,

    init: function(container){
        this.container_element = container;
    },

    start: function(){
        this.whereIs =  Math.round(Math.random() * 15);
        console.log('poop tah na ' + (this.whereIs + 1))

        this.board.fill('grass');
        this.draw();
        this.gameOver = false; 
    },

    start(){
        this.whereIs =  Math.round(Math.random() * 15);
        console.log('poop tah na ' + (this.whereIs + 1))

        this.board.fill('grass');
        this.draw();
        this.gameOver = false; 
    },

    make_play(position) {
        if (this.gameOver || this.board[position] !== 'grass') return false;

        if (position == this.whereIs){
            this.whatIs = 'poop'
            this.gameIsOverIndeed();
        } else {
            this.whatIs = 'nop'
        };

        this.board[position] = this.whatIs;

        this.draw();

        return true;
    },

    gameIsOverIndeed(){
        this.gameOver = true;
        this.restart();
    },

    restart(){
        if (confirm('Tem certeza que quer reiniciar?')){
            this.start();
        };
    },


    draw: function () {
        this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="poop.make_play('${index}')"> <img src="img/${element}.png"> </div>`).reduce((content, current) => content + current);
    },
    
}