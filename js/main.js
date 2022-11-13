
const imgArray = [];

imgArray[0] = new Image();
imgArray[0].src = "img /01.webp";

imgArray[1] = new Image();
imgArray[1].src = "img /02.webp";

imgArray[2] = new Image();
imgArray[2].src = "img /03.webp";

imgArray[3] = new Image();
imgArray[3].src = "img /04.webp";

imgArray[4] = new Image();
imgArray[4].src = "img /05.webp";



for (let i = 0; i < imgArray.length; i++){
    let cont = document.getElementById("container");
    let div = document.createElement("div");
    div.classList.add("img", "item");
    
    div.append (imgArray[i]);
    cont.append (div);
}

const divArrey = document.getElementsByClassName("img");

const items = document.getElementsByClassName("item");
console.log(items);

divArrey[0].classList.add("active")

let activeItem = 0;


let next = document.getElementsByClassName("next");
let prev = document.getElementsByClassName("prev");


next.addEventListener ("click",
function (){

    if (activeItem < items.length -1){
            
        items[activeItem].classList.remove("active");

        activeItem++;

        items[activeItem].classList.add("active");

        if (activeItem === items.length -1){
                next.classList.add("hidden");
            }
        if (activeItem == 0){
                next.classList.remove("hidden");
                next.classList.add("active");
        // } else if (activeItem > 0) {
            //     prev.classList.remove("hidden");
        }
             
    } else  {
    }
        
});

prev.addEventListener("click",

function (){

    if (activeItem > 0){
        prev.classList.remove("hidden");
        items[activeItem].classList.remove("active");

        activeItem--;

        items[activeItem].classList.add("active");
            
        if (activeItem == 0){
            prev.classList.add("hidden");
        }
        if (activeItem < items.length -1){
            prev.classList.remove("hidden");
        }
        
    } else  {
    }
        
});

    


