// tạo web cộng trừ
let inputNumber = document.getElementById("inputNumber");
let buttonCong = document.getElementById("buttonCong");
let buttonTru = document.getElementById("buttonTru");
buttonCong.addEventListener("click",cong);
buttonTru.addEventListener("click",tru);
function cong(x){
    buttonCong.value = 1;
    x = Number(inputNumber.value) + Number(buttonCong.value);
    inputNumber.value = x;
}
function tru(x){
    buttonTru.value = 1;
    x = Number(inputNumber.value) - Number(buttonCong.value);
    inputNumber.value = x;
}