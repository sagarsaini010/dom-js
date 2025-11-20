let img = document.querySelectorAll('img')
let i = document.querySelectorAll('i')

console.log(img)
console.log(i)

// img.map((e)=>{
// e.addEventListener('dblclick',function(){
//     console.log('click hua')
//     i.style.transform = 'translate(-50%,-50%) scale(1)'
//     setTimeout(() => {
//     i.style.top = -50+'%'
//     i.style.rotate = 90+'deg'
//     i.style.transition = 'all ease-out .7s'
//     i.style.transform = 'translate(-50%,-50%) scale(0)'
//     }, 1000);
//     setTimeout(() => {
//     i.style.top = 50+'%'
//     i.style.rotate = 0+'deg'
//     }, 1600);
//     console.log('click hua')
// })
// })

for(let j = 0; j<img.length;j++){
    img[j].addEventListener('dblclick',function(){
    console.log('click hua')
    i[j].style.transform = 'translate(-50%,-50%) scale(1)'
    setTimeout(() => {
    i[j].style.top = -50+'%'
    i[j].style.rotate = 90+'deg'
    i[j].style.transition = 'all ease-out .7s'
    i[j].style.transform = 'translate(-50%,-50%) scale(0)'
    }, 600);
    setTimeout(() => {
    i[j].style.top = 50+'%'
    i[j].style.rotate = 0+'deg'
    }, 1000);
    console.log('click hua')
})
}

