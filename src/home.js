import container from "./index.js";

function makeDiv(parent){
    const element = document.createElement("div");
    parent.appendChild(element);
    return element;
}

function display(){
    const name = makeDiv(container);
    name.classList.add("name");
    name.textContent = "Baratie";

    const headline = makeDiv(container);
    headline.classList.add("headline");
    headline.textContent = "Dive into Delectable Depths at Baratie";

    const text = makeDiv(container);
    text.classList.add("text");
    text.textContent = "Experience a world of flavor with our fresh, sustainably sourced seafood. Enjoy exquisite dishes in a serene, coastal-inspired setting, perfect for any occasion. Immerse yourself in exceptional service and culinary artistry that transforms every meal into a masterpiece.";
}

export default display;
export {makeDiv};

