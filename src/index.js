import "./styles.css";
import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayContact from "./contact.js";
import leftIcon from "./img/fish.png";
import rightIcon from "./img/fish-mirror.png";


if(module.hot){
    module.hot.accept("./styles.css", function(){
        console.log("Applying updated css.");
    });
}

const nav = document.querySelector("nav");
const leftFishIcon = new Image(); const rightFishIcon = new Image();
leftFishIcon.src = leftIcon; rightFishIcon.src = rightIcon;
nav.insertBefore(leftFishIcon, nav.querySelector(".home"));
nav.appendChild(rightFishIcon);

const content = document.querySelector("#content");
const body = document.querySelector("body");

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("home")){
        clearPage();
        displayHome();
    }
    if(e.target.classList.contains("menu")){
        clearPage();
        displayMenu();
    }
    if(e.target.classList.contains("contact")){
        clearPage();
        displayContact();
    }
});

function clearPage(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

export default content;
export {body};

displayHome();


