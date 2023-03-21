export class Box
{
    constructor() 
    {
        this.arr=[]
        this.arra1=[]
    }

    createbox()
    {
        // console.log("hello")
        this.box = document.createElement("div");
        // this.box.addEventListener("click",() => {this.clickbox(this.box)})
        return this.box;
    }

    clickbox(i, temp, minelocation,ar1,m,n)
    {  
        if(minelocation.includes(`${i}`))
        {
            temp.innerHTML='💣';
            temp.style.backgroundColor='red'
            //loop to display all the other mines
            for(let x=0; x<ar1.length; x++)
            {
                if(this.minelocation.includes(`${x}`))
                {
                    ar1[x].innerHTML='💣'
                    document.getElementsByTagName("h1")[0].innerText="GAME OVER";
                }   
            }
            
        }
        else
        {
            this.minesaround(i, minelocation,ar1,m,n)
        }
            
    }

    minesaround(i,minelocation,ar1,m,n)
    {
        let initval= i-n-1;
        let finval= i+n+1;
        let bef=i-1;
        let af=i+1;
        // console.log(`${initval}${finval}`)
        let count=0;

        for(let x= initval; x<(initval+3); x++)
        {
            if(minelocation.includes(`${x}`)){
                count+=1;
            }
        }
        if(minelocation.includes(`${bef}`))
        {
            count+=1;
        }
        if(minelocation.includes(`${af}`))
        {
            count+=1;
        }
        for(let x= (finval-2); x<(finval+1); x++)
        {
            if(minelocation.includes(`${x}`)){
                count+=1;
            }
        }
        //   if(count==0)
        //   {
        //     for(let y= initval; y<(initval+3); y++)
        //     {   if(y<0)
        //         this.minesaround(y,minelocation,ar1,m,n)
        //     }
        //     this.minesaround(bef,minelocation,ar1,m,n)
        //     this.minesaround(af,minelocation,ar1,m,n)
        //     for(let y= (finval-2); y<(finval+1); y++)
        //     {   
        //         this.minesaround(y,minelocation,ar1,m,n)
        //     }      
        //   }
        //   else
          ar1[i].innerHTML=`${count}`
          ar1[i].style.backgroundColor="darkgray"
    }

    

    

}
