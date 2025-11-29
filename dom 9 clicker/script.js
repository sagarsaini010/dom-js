const indianGreetings = [
  "नमस्ते",
  "नमः",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "નમસ્તે",
  "नमस्कार",
  "নমস্কার",
  "வணக்கம்",
  "నమస్కారం",
  "ನಮಸ್ಕಾರ",
  "നമസ്കാരം",
  "ନମସ୍କାର",
  "নমস্কাৰ",
  "السلام علیکم"
];

let body = document.querySelector('body')
let color = ['red','green','yellow','pink']
body.addEventListener('click',(e)=>{
    let greet =  `${indianGreetings[Math.floor(Math.random()*13)]}`
    let circle = document.createElement('div')
    circle.classList.add('clicker')
    circle.style.top = `${e.clientY - 25}px`
    circle.style.left = `${e.clientX - 25}px`
    circle.style.backgroundColor = color[Math.floor(Math.random()*4)]
    circle.innerText = greet
    body.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 5000);
})