import {makeDiv} from "./home.js";

const container = document.querySelector("#content");

function display(){
    const title = makeDiv(container);
    title.classList.add("title");
    title.textContent = "Menu";
    constructMainDishes();
    constructSideDishes();
    constructBeverages();
}

function constructBeverages(){
    const beverageBox = makeDiv(container);
    beverageBox.classList.add("beverage-box");
    const beverageTitle = makeDiv(beverageBox);
    beverageTitle.classList.add("beverage-title");
    beverageTitle.textContent = "Beverages";
    const beverageCards = makeDiv(beverageBox);
    beverageCards.classList.add("beverage-cards");
    for(let i = 0; i < 2; i++){
        const beverageCard = makeDiv(beverageCards);
        beverageCard.classList.add("beverage-card", "card");
        const beverageName = makeDiv(beverageCard);
        beverageName.classList.add("beverage-name", "name");
        const beverageDescription = makeDiv(beverageCard);
        beverageDescription.classList.add("beverage-description", "description");
        const beveragePrice = makeDiv(beverageCard);
        beveragePrice.classList.add("beverage-price", "price");
        const beverageImage = makeDiv(beverageCard);
        beverageImage.classList.add("beverage-image", "image");
        if(i === 0){
            beverageName.textContent = "Coastal Breeze Lemonade";
            beverageDescription.textContent = "A blend of freshly squeezed lemons, mint, and sparkling water over ice, offering a refreshing balance of tartness and sweetness.";
            beveragePrice.textContent = "$4.50";
        }
        if(i === 1){
            beverageName.textContent = "Ocean Blue Margarita";
            beverageDescription.textContent = "A tropical cocktail with premium tequila, blue curaçao, lime juice, and agave syrup, served on the rocks with a salted rim for a vibrant and relaxing drink.";
            beveragePrice.textContent = "$8.00";
        }
    }
}

function constructSideDishes(){
    const sideDishesBox = makeDiv(container);
    sideDishesBox.classList.add("side-dishes-box");
    const sideDishesTitle = makeDiv(sideDishesBox);
    sideDishesTitle.classList.add("side-dishes-title");
    sideDishesTitle.textContent = "side Dishes";
    const sideDishesCards = makeDiv(sideDishesBox);
    sideDishesCards.classList.add("side-dishes-cards");
    for(let i = 0; i < 2; i++){
        const sideDishCard = makeDiv(sideDishesCards);
        sideDishCard.classList.add("side-dish-card", "card");
        const sideDishName = makeDiv(sideDishCard);
        sideDishName.classList.add("side-dish-name", "name");
        const sideDishDescription = makeDiv(sideDishCard);
        sideDishDescription.classList.add("side-dish-description", "description");
        const sideDishPrice = makeDiv(sideDishCard);
        sideDishPrice.classList.add("side-dish-price", "price");
        const sideDishImage = makeDiv(sideDishCard);
        sideDishImage.classList.add("side-dish-image", "image");
        if(i === 0){
            sideDishName.textContent = "Garlic Butter Asparagus";
            sideDishDescription.textContent = "Tender asparagus sautéed in garlic butter, topped with parmesan and lemon for a vibrant and savory side dish.";
            sideDishPrice.textContent = "$7.99";
        }
        if(i === 1){
            sideDishName.textContent = "Crispy Calamari Rings";
            sideDishDescription.textContent = "Lightly breaded and fried calamari rings, served with marinara sauce and lemon, offering a delightful crispiness to accompany your seafood meal.";
            sideDishPrice.textContent = "$9.50";
        }
    }
}

function constructMainDishes(){

    const mainDishesBox = makeDiv(container);
    mainDishesBox.classList.add("main-dishes-box");
    const mainDishesTitle = makeDiv(mainDishesBox);
    mainDishesTitle.classList.add("main-dishes-title");
    mainDishesTitle.textContent = "Main Dishes";
    const mainDishesCards = makeDiv(mainDishesBox);
    mainDishesCards.classList.add("main-dishes-cards");
    for(let i = 0; i < 3; i++){
        const mainDishCard = makeDiv(mainDishesCards);
        mainDishCard.classList.add("main-dish-card", "card");
        const mainDishName = makeDiv(mainDishCard);
        mainDishName.classList.add("main-dish-name", "name");
        const mainDishDescription = makeDiv(mainDishCard);
        mainDishDescription.classList.add("main-dish-description", "description");
        const mainDishPrice = makeDiv(mainDishCard);
        mainDishPrice.classList.add("main-dish-price", "price");
        const mainDishImage = makeDiv(mainDishCard);
        mainDishImage.classList.add("main-dish-image", "image");
        if(i === 0){
            mainDishName.textContent = "Seafood Paella";
            mainDishDescription.textContent = "A traditional Spanish rice dish with shrimp, mussels, and calamari, cooked with saffron and vegetables.";
            mainDishPrice.textContent = "$25.50";
        }
        if(i === 1){
            mainDishName.textContent = "Seared Scallops";
            mainDishDescription.textContent = "Scallops seared to perfection, served in a white wine butter sauce with a hint of lemon and fresh herbs.";
            mainDishPrice.textContent = "$29.95";
        }
        if(i === 2){
            mainDishName.textContent = "Grilled Lobster Tail";
            mainDishDescription.textContent = "Succulent lobster tail basted with garlic herb butter, offering a rich flavor and a touch of lemon.";
            mainDishPrice.textContent = "$38.99";
        }
    }
}

export default display;

