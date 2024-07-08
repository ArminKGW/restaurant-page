import displayHome from "./home.js";
import displayMenu from "./menu.js";

displayHome();
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
    const content = document.querySelector("#content");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}