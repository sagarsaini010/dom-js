let arr = [
  "I am Sagar Saini",
  "A Software Engineear",
  "I am a FullStack Web developer",
  "I leave in Hostel",
  "I am now in Meerut city",
];

let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let p = Math.floor(Math.random() * arr.length);
  let r = Math.random() * 360;
  let s = Math.random() * 3;
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let h1 = document.createElement("h1");
  h1.innerHTML = arr[p];
  main.appendChild(h1);
  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = r + "deg";
  h1.style.scale = s;
  h1.style.color = `rgb(${c1},${c2},${c3})`;
});
