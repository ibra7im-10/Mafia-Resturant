
// create pop-up with images 
let gallary = document.querySelectorAll(".gallary img");

gallary.forEach( img => {
    img.addEventListener("click" , () => {
        
// create overlay element
let overlay =document.createElement("div");


//add class to overlay
overlay.className = ("pop-up");

//append overlay to the body
document.body.appendChild(overlay);


//create popup-box
let popupBox = document.createElement("div");

//add class to popup-Box
popupBox.className = ("popup-box");

//create the image
let popimg = document.createElement("img");

//set image src
popimg.src = img.src;

//add image to popup-box
popupBox.appendChild(popimg);

//append popupBox in body
document.body.appendChild(popupBox);


//create close-span
let closebtn = document.createElement("span");

//create text in close-span 
let closebtnText = document.createTextNode("x");

//add closebtnText in close-button
closebtn.appendChild(closebtnText);

//add class to close-button 
closebtn.className = 'close-button';

//add close-button to popup-box
popupBox.appendChild(closebtn)

    })
})


//close popup
document.addEventListener( "click" , (e) => {

    if (e.target.className == 'close-button') {

    //remove current popup
    e.target.parentNode.remove();

    //remove overlay
    document.querySelector(".pop-up").remove()
    }
})


