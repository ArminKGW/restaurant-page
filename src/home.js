import container from "./index.js";
import body from "./index.js";

function makeDiv(parent){
    const element = document.createElement("div");
    parent.appendChild(element);
    return element;
}

function display(){
    const wrapper = makeDiv(container);
    wrapper.classList.add("wrapper", "wrapper-home");
    const name = makeDiv(wrapper);
    name.classList.add("home-name", "has-border");
    name.textContent = "Baratie";

    const headline = makeDiv(wrapper);
    headline.classList.add("home-headline", "has-border");
    headline.textContent = "Dive into Delectable Depths at Baratie";

    const text = makeDiv(wrapper);
    text.classList.add("home-text", "has-border");
    text.textContent = "Experience a world of flavor with our fresh, sustainably sourced seafood. Enjoy exquisite dishes in a serene, coastal-inspired setting, perfect for any occasion. Immerse yourself in exceptional service and culinary artistry that transforms every meal into a masterpiece.";
}

export default display;
export {makeDiv};

