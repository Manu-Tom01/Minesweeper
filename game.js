import Minesweeper from "./minesweeperc.js"

class Game extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.createminesweeper=new Minesweeper();
        this.appendChild(this.createminesweeper.setgrid());
    }
}
customElements.define("mine-sweeper",Game);