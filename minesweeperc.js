import { Box } from "./Box.js";

export class Minesweeper extends Box
{
        constructor(m,n)
        {   super()
            this.m=m
            this.n=n
            
            this.minelocation=[]
            this.grid()
           
        }

         grid()
         {  
            for(let i=0; i<20; i++)
            {
                var rtemp=Math.floor(Math.random() * (this.m*this.n));
                this.minelocation.push(`${rtemp}`);
            }
            console.log(this.minelocation)
            let board= document.createElement("div");
            board.id="board";
            board.style.height=`${this.m*50}px`
            board.style.width=`${this.n*50}px`
            document.getElementsByTagName("body")[0].append(board)
            for(let i=0; i<(this.m*this.n); i++)
            {
                let temp= new Box().createbox();
                this.arr.push(temp)
                temp.addEventListener("click",() => {this.clickbox(i, temp, this.minelocation,this.arr,this.m,this.n)})                
                document.getElementsByTagName("div")[0].append(temp)
            }

                
         }   
        
    
}
new Minesweeper(10,10)

