import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayContact from "./contact.js";

const content = document.querySelector("#content");

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

displayHome();


