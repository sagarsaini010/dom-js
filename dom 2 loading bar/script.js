let btn = document.querySelector('button')
let inner = document.querySelector('.inner')
let h2 = document.querySelector('h2')
let x = 0
let speed =  50+Math.floor(Math.random()*30)
btn.addEventListener('click',function(){
let int = setInterval(()=>{
    x++
    inner.style.width = x+'%'
    h2.innerHTML = x+'%'
    btn.disabled = true;
},speed)
setTimeout(()=>{
    clearInterval(int)
    btn.innerHTML = 'Downloaded'
    btn.style.opacity = 0.8
    console.log("Downloaded in "+(100*speed)/1000 + ' seconds')
},100*speed)
})



