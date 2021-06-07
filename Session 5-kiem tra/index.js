// bài 1
let input1 = 'program';
let imput2 = 'data';
input1 = 'margorp';
input2 = 'atad';
console.log(input1);
console.log(input2);

// bài 2
let string1 = 'this is test';
console.log(string1.toUpperCase());

// bài 3
let arr = ['one', 'two', 'three', 'one','one', 'four', 'five', 'four', 'five']
let unique = [...new Set(arr)];
console.log(unique);

// bài 4
let nvMindx = [{
    name: 'Nguyen Van A',
    age: 18,
    salary: 500,
    position: 'nhan vien'},
    {
        name: 'Nguyen Van B',
        age: 19,
        salary: 600,
        position: 'nhan vien'},
    {
        name: 'Nguyen Van C',
        age: 30,
        salary: 700,
        position: 'quan li'
    }];
    console.log(nvMindx);
    nvMindx.push('Nguyen Van D');
    nvMindx[nvMindx.length] = 'Nguyen Van E';
    nvMindx.splice(0,1);
    console.log(nvMindx);

// bài 5
let inputDay = prompt('enter a day');
let inputMonth = prompt('enter a month');
let inputYear = prompt('enter a year');
if(inputDay>=1 && inputDay<=31 && inputMonth>=1 && inputMonth <=12){
    console.log(inputDay + '/' + inputMonth + '/' + inputYear + ' là ngày hợp lệ');}
else {
    console.log(inputDay + '/' + inputMonth + '/' + inputYear + ' là ngày ko hợp lệ');    
}    