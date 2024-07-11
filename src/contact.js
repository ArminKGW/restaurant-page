import {makeDiv} from "./home.js";
import container from "./index.js";

function display(){
    const wrapper = makeDiv(container);
    wrapper.classList.add("wrapper", "wrapper-contact");
    const title = makeDiv(wrapper);
    title.classList.add("contact-title", "has-border");
    title.textContent = "Contact Us";
    const contactBox = makeDiv(wrapper);
    contactBox.classList.add("contact-box");
    constructChef(contactBox);
    constructManager(contactBox);
    constructWaiter(contactBox);
}

function constructChef(box){
    const chefCard = makeDiv(box);
    chefCard.classList.add("contact-card", "has-border");

    const chefHeader = makeDiv(chefCard);
    chefHeader.classList.add("contact-header");
    chefHeader.textContent = "Chef";

    const chefName = makeDiv(chefCard);
    chefName.classList.add("contact-name");
    chefName.textContent = "Sanji";

    const chefNumber = makeDiv(chefCard);
    chefNumber.classList.add("contact-number");
    chefNumber.textContent = "222-222-2222";

    const chefEmail = makeDiv(chefCard);
    chefEmail.classList.add("contact-email");
    chefEmail.textContent = "totallyrealsanji@notfake.com";
}

function constructManager(box){
    const managerCard = makeDiv(box);
    managerCard.classList.add("contact-card", "has-border");

    const managerHeader = makeDiv(managerCard);
    managerHeader.classList.add("contact-header");
    managerHeader.textContent = "Manager";

    const managerName = makeDiv(managerCard);
    managerName.classList.add("contact-name");
    managerName.textContent = "Zeff";

    const managerNumber = makeDiv(managerCard);
    managerNumber.classList.add("contact-number");
    managerNumber.textContent = "333-333-3333";

    const managerEmail = makeDiv(managerCard);
    managerEmail.classList.add("contact-email");
    managerEmail.textContent = "totallyrealzeff@notfake.com";
}

function constructWaiter(box){
    const waiterCard = makeDiv(box);
    waiterCard.classList.add("contact-card", "has-border");

    const waiterHeader = makeDiv(waiterCard);
    waiterHeader.classList.add("contact-header");
    waiterHeader.textContent = "Waiter";

    const waiterName = makeDiv(waiterCard);
    waiterName.classList.add("contact-name");
    waiterName.textContent = "Luffy";

    const waiterNumber = makeDiv(waiterCard);
    waiterNumber.classList.add("contact-number");
    waiterNumber.textContent = "444-444-4444";

    const waiterEmail = makeDiv(waiterCard);
    waiterEmail.classList.add("contact-email");
    waiterEmail.textContent = "totallyrealluffy@notfake.com";
}

export default display;