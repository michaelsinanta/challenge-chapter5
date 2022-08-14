class RockPaperScissors {

    constructor() {
        this.player;
        this.playerChoice;
        this.comp;
        this.comChoice;
        this.shapes =  [
            'rock', 
            'paper',
            'scissor'
        ];
        this.status = false; //menandakan status bahwa pilihan sudah dipilih atau belum
    }

    saveObject(obj) {
        //Jika belum dipilih (masih belum)
        if(!this.status) {
            this.status = true;
            this.playerChoice = obj;
            this.player = this.playerChoice.id;
            this.playerChoice.classList.add("chosen");
            this.setTheWinner();
            document.getElementById("vs").classList.add("hidden");
            document.getElementById("result").classList.remove("hidden");
            if (this.player == "human-rock"){
                if (this.comp == "com-rock"){
                    document.getElementById("draw").classList.remove("hidden");
                } else if (this.comp == "com-paper"){
                    document.getElementById("computer-win").classList.remove("hidden");
                } else {
                    document.getElementById("human-win").classList.remove("hidden");
                }
            } else if (this.player == "human-paper"){
                if (this.comp == "com-rock"){
                    document.getElementById("human-win").classList.remove("hidden");
                } else if (this.comp == "com-paper"){
                    document.getElementById("draw").classList.remove("hidden");
                } else {
                    document.getElementById("computer-win").classList.remove("hidden");
                }
            } else if (this.player == "human-scissor"){
                if (this.comp == "com-rock"){
                    document.getElementById("computer-win").classList.remove("hidden");
                } else if (this.comp == "com-paper"){
                    document.getElementById("human-win").classList.remove("hidden");
                } else {
                    document.getElementById("draw").classList.remove("hidden");
                }
            }
        } else {
            alert('You have chosen, click refresh to play again!');
        }
    }   

    setTheWinner() {
        var randomnumber = Math.floor(Math.random() * this.shapes.length);
        var shape = this.shapes[randomnumber];
        this.comp = `com-${shape}`;
        this.comChoice = document.querySelector(`#${this.comp}`);
        this.comChoice.classList.add("chosen");
    }

    restart() {
        if (this.status) {
            this.status = false;
            this.playerChoice.classList.remove("chosen");
            this.comChoice.classList.remove("chosen");
            this.player = null;
            this.comp = null;
            this.winner = null;
            document.getElementById("human-win").classList.add("hidden");
            document.getElementById("computer-win").classList.add("hidden");
            document.getElementById("draw").classList.add("hidden");
            document.getElementById("vs").classList.remove("hidden");
            document.getElementById("result").classList.add("hidden");
        } else {
            return alert('Please choose a hand on PLAYER 1 to play!');
        }
    }
}

const gameReady = new RockPaperScissors();