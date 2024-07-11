import {makeDiv} from "./home.js";
import container from "./index.js";
import body from "./index.js";

function display(){
    const title = makeDiv(container);
    title.classList.add("contact-title", "has-border");
    title.textContent = "Contact Us";
    const contactBox = makeDiv(container);
    contactBox.classList.add("contact-box");
    constructChef(contactBox);
    constructManager(contactBox);
    constructWaiter(contactBox);
}

function constructChef(box){
    const chefCard = makeDiv(box);
    chefCard.classList.add("chef-card", "has-border");

    const chefHeader = makeDiv(chefCard);
    chefHeader.classList.add("chef-header");
    chefHeader.textContent = "Chef";

    const chefName = makeDiv(chefCard);
    chefName.classList.add("chef-name");
    chefName.textContent = "Sanji";

    const chefNumber = makeDiv(chefCard);
    chefNumber.classList.add("chef-number");
    chefNumber.textContent = "222-222-2222";

    const chefEmail = makeDiv(chefCard);
    chefEmail.classList.add("chef-email");
    chefEmail.textContent = "totallyrealsanji@notfake.com";
}

function constructManager(box){
    const managerCard = makeDiv(box);
    managerCard.classList.add("manager-card", "has-border");

    const managerHeader = makeDiv(managerCard);
    managerHeader.classList.add("manager-header");
    managerHeader.textContent = "Manager";

    const managerName = makeDiv(managerCard);
    managerName.classList.add("manager-name");
    managerName.textContent = "Zeff";

    const managerNumber = makeDiv(managerCard);
    managerNumber.classList.add("manager-number");
    managerNumber.textContent = "333-333-3333";

    const managerEmail = makeDiv(managerCard);
    managerEmail.classList.add("manager-email");
    managerEmail.textContent = "totallyrealzeff@notfake.com";
}

function constructWaiter(box){
    const waiterCard = makeDiv(box);
    waiterCard.classList.add("waiter-card", "has-border");

    const waiterHeader = makeDiv(waiterCard);
    waiterHeader.classList.add("waiter-header");
    waiterHeader.textContent = "Waiter";

    const waiterName = makeDiv(waiterCard);
    waiterName.classList.add("waiter-name");
    waiterName.textContent = "Luffy";

    const waiterNumber = makeDiv(waiterCard);
    waiterNumber.classList.add("waiter-number");
    waiterNumber.textContent = "444-444-4444";

    const waiterEmail = makeDiv(waiterCard);
    waiterEmail.classList.add("waiter-email");
    waiterEmail.textContent = "totallyrealluffy@notfake.com";
}

export default display;