let p = document.querySelector('p')

let text = p.innerText

let characters = 'ABCDEFGHIJKLMNOPQRStUVWXYZabcdefghijklmnopqrstuvwxyz'
let itrater = 0
function randomText(){
    let str = text.split("").map((char,index)=>{
        if(index < itrater){
            return char
        }
        return (characters.split("")[Math.floor(Math.random()*52)])
    }).join("")
    p.innerText = str
    itrater+= 0.4
}




setInterval(randomText,30)