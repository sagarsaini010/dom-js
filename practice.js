// function greeting(){
//     console.log("hello bhai")
// }

// console.log(greeting())

// function adding (x,y){
    // let a = x
    // let b = y
    // // return {
    //  let   add= function() {
    //         console.log(a,b)
    //         a+=10
    //         b+=20
    //         return a+b
    //     }
    //     return add
    //     sub: function(){
    //         return this.b-this.a
    //     },
    //     product: function(){
    //         return this.a*this.b
    //     }
    // }
// }


// let newAdd = adding(1,2)

// console.log(newAdd())
// console.log(newAdd())
// console.log(newAdd())

let counter = (function () {
  let count = 0; // private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
})();

console.log(counter.value());    // 0
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0