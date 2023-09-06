// Accessing the buttons 
const homeButton =document.querySelector(".initial");
const contentButton =document.querySelector(".middle");
const footerButton =document.querySelector(".last");

// Accessing the sections 

const homePage=document.querySelector("#home");
const contentPage=document.querySelector("#content");
const footerPage=document.querySelector("#footer");

// appling the click event listener to the anchor tags 

homeButton.addEventListener("click",(e)=>{
    e.preventDefault();
    homePage.scrollIntoView({behavior: "smooth"});
})
contentButton.addEventListener("click",(e)=>{
    e.preventDefault();
    contentPage.scrollIntoView({behavior: "smooth"});
})
footerButton.addEventListener("click",(e)=>{
    e.preventDefault();
    footerPage.scrollIntoView({behavior: "smooth"});
})