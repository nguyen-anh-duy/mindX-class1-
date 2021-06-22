let Color1 = document.getElementById("color1");
let Color2 = document.getElementById("color2");
let Color3 = document.getElementById("color3");
let hslView = document.getElementById("hslView");
let chanceColor = document.getElementById("chanceColor");
function randomColor(){
var H1 = Math.floor(Math.random() * 361);
let H2 = Math.floor(Math.random() * 361);
let H3 = Math.floor(Math.random() * 361);
let S1 = Math.floor(Math.random() * 101);
let S2 = Math.floor(Math.random() * 101);
let S3 = Math.floor(Math.random() * 101);
let L1 = Math.floor(Math.random() * 101);
let L2 = Math.floor(Math.random() * 101);
let L3 = Math.floor(Math.random() * 101);
let HSL1 = "hsl("+ H1 +", "+ S1 +"%" +", "+ L1 + "%" + ")";
let HSL2 = "hsl("+ H2 +", "+ S2 +"%" +", "+ L2 + "%" + ")";
let HSL3 = "hsl("+ H3 +", "+ S3 +"%" +", "+ L3 + "%" + ")";
console.log(HSL1, HSL2, HSL3);
let arrayHsl = [HSL1, HSL2, HSL3];
Color1.style.backgroundColor = HSL1;
Color2.style.backgroundColor = HSL2;
Color3.style.backgroundColor = HSL3;
let resault = Math.floor(Math.random() * arrayHsl.length);
hslView.innerHTML = arrayHsl[resault];
console.log(resault + 1);
};
chanceColor.addEventListener("click", randomColor)

