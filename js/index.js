// Your code goes here

// 1) upon loading the page, the user receives this alert.

window.addEventListener("load", event => {
    alert("Welcome to the Fun Bus! Give us all your cookies.");
});
  
// 2) dontCopy, copying anything will make an alert telling you not to copy!

const dontCopy = document.querySelector('html');

dontCopy.addEventListener("copy", event => {
    alert("Please do not copy, Thank you!")
})

// 3) logo, h1 logo effects
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', e => {
    logo.style.backgroundColor = 'yellow';
})

logo.addEventListener('mouseout', e => {
    logo.style.backgroundColor = '#ffffff';
})

// 4) noRefresh, stops nav from refreshing and stops propagation, and tells you clicked it in console.

const noRefresh = document.querySelector('.nav');

noRefresh.addEventListener('click', e =>{
    console.log(`You have clicked a nav!`);
    e.preventDefault();
})
// 5) images, When double clicking the image to the right of the "Let's go!" paragraph, it'll show the Lambda Logo Instead.
const images = document.querySelectorAll("img");

images[0].addEventListener("dblclick", e => {
    e.target.setAttribute("src","https://i.ytimg.com/vi/LleW1Cs0hFw/maxresdefault_live.jpg");
});

// 6) "Welcome To Fun Bus" header turns lime when wheel on mouse used on the element

const h2 = document.querySelectorAll('h2');

h2[0].addEventListener('wheel', e => {
    e.currentTarget.style.color='lime'
});

// 7) Lets go header bg turns light blue when mouse is released over it
// STOP PROPOGATION: also stops events from bubbling (parent event from bubbling into child event since this header is nested within class: 'text-content')
h2[1].addEventListener('dblclick', e=> {
    e.currentTarget.style.backgroundColor='lightblue';
    e.stopPropagation();
});


// 8) button, effects for the three buttons.

const button = document.querySelectorAll('.btn');

button[0].addEventListener('mousedown', e => {
    button[0].style.backgroundColor = 'pink';
    e.stopPropagation();                         //stop propagation <=========
});

button[1].addEventListener('mouseenter', e =>{
    button[1].style.width = '250px'
});

button[2].addEventListener('dblclick', e =>{
    button[1].style.width = '200px'
});

// 9} dragging bus image causes border radius to change;

images[0].addEventListener("contextmenu", e => {
    e.target.style.display = "none";
});
images[0].addEventListener("dragstart", e => {
    e.target.style.borderRadius = "200px";
});
images[0].addEventListener("dragend", e => {
    e.target.style.borderRadius = "0";
});

// 10) gives a message when pasting!

const theHTML = document.querySelector('html');

theHTML.addEventListener("paste", event => alert("Hey, whatcha pasting?"));