// console.log("Hello World!");
// // alert("Alert Message!");
// document.write("This is document.write");
// console.warn("This is a warning");
// console.error("This is an error");

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

let ele = document.getElementById('click');
// console.log(ele);
let eleclass = document.getElementsByClassName('container');
// console.log(eleclass);
// eleclass[0].style.background = 'yellow';
eleclass[0].classList.add('bg-primary');
eleclass[0].classList.add('test-success');
// console.log(eleclass[0].innerHTML);
// console.log(eleclass[0].innerText);
tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = 'This is a created child para';
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = 'This is a created child bold';
tn[0].replaceChild(createdElement2, createdElement);
// tn[0].removeChild(createdElement2);

//selecting using querySelector
que = document.querySelector('.container');
// console.log(que);
queAll = document.querySelectorAll('.container');
// console.log(queAll);

function clicked() {
    console.log("The button was clicked");
}

// window.onload = function () {
//     console.log("The window was loaded");
// }

//Events in JS
firstContainer.addEventListener('click', clicked//function () {
    // console.log('Clicked on container');
    // document.querySelectorAll('.container')[1].innerHTML = "<b> container is clicked </b>";
    // }
)
// firstContainer.addEventListener('mouseover', function () {
//     console.log('Mouse on container');
// })
// firstContainer.addEventListener('mouseout', function () {
//     console.log('Mouse out of container');
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('Mouse up when Clicked on container');
// })
// firstContainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> container is clicked </b>";
//     console.log('Mouse down when Clicked on container');
// })

// Arrow function
//normal
// function sum(a, b){
//     return a+b;
// }
//OR
//using arrow function
// sum = (a, b) => {
//     return a + b;
// }

//SetTimeout and SetInterval
// after2secons = () => {
//     console.log("This line is shown after 2 seconds");
// }
// setTimeout(after2secons, 2000);
// setInterval(after2secons, 2000);
clr = setInterval(after2secons, 2000);
//now use ?clearInterval(clr)? to stop that interval and same for Timeout

// JS localStorage
localStorage.setItem('name', 'Yash');
localStorage.setItem('age', 19);
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();

//JSON
obj = { name: "yash", length: 1 }
// console.log("type of of obj is", typeof obj);
jso = JSON.stringify(obj);
// console.log("type of of jso is", typeof jso);
parsed = JSON.parse(jso);
// console.log("type of of parsed is", typeof parsed);
parsed2 = JSON.parse(`{"name":"yash","length":1}`); // or can use backticks, single or double quotes
// console.log("type of of parsed2 is", typeof parsed2);