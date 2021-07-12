// A.1
var n = Number(prompt ("enter number n from 4 to 20"));
var inputnumber = Number(prompt ("enter number from 0 to n-1"));
function findOppositeNumber(n,inputnumber){
    if(inputnumber>=0 && inputnumber<= n-1 && inputnumber < n/2){
        console.log(inputnumber+n/2)}
    else if (inputnumber>=0 && inputnumber<= n-1 && inputnumber > n/2 ){
        console.log(inputnumber-n/2);}
    else if (inputnumber>=0 && inputnumber<= n-1 && inputnumber == n/2 ){
            console.log(inputnumber-n/2);}
    else if (inputnumber>=0 && inputnumber<= n-1 && inputnumber == 0 ){
                console.log(inputnumber+n/2);}
}
findOppositeNumber(n,inputnumber);

// A.2
var s1 = "abc";
var n2 = 123;
var s2 = n2.toString();
var s3 = s1.split("");
var s4 = s2.split("");
var string1 = function str1(){
    for (let i = 0; i<s3.length; i=i+1){
        console.log(s3[i])}
}
var string2 = function str1(){
    for (let i = 0; i<s4.length; i=i+1){
        console.log(s4[i])}
}
console.log(string1+string2);

var merge2string = s3.concat(s4);
console.log(merge2string);


// A.3
var quaySo = document.getElementById("quaySo");
var soQuay = document.getElementById("soQuay");
var ketQua = document.getElementById("ketQua");
var inputN = document.getElementById("inputN");
quaySo.addEventListener("click",ranNumber)
function ranNumber(x,y){
    x = Math.floor(Math.random()*11)
    soQuay.value = x
    y = inputN.value
    if(x == y){
        ketQua.value = "Trúng thưởng"}
    else {ketQua.value = "May mắn lần sau" }
}

