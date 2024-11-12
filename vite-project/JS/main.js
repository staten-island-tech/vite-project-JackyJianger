import '../CSS/style.css';
import { groceryItems } from './product';
const DOMSelectors = {
    cardContainer: document.getElementById("container-box"),
    fruitBtn: document.getElementById('fruit-btn'),
    bakeryBtn: document.getElementById('bakery-btn'),
    dairyBtn: document.getElementById('dairy-btn'),
    meatBtn: document.getElementById('meat-btn'),
    vegetablesBtn: document.getElementById('vegetables-btn'),
    grainsBtn: document.getElementById('grains-btn'),
    pantryBtn: document.getElementById('pantry-btn'),

    
}
function injectCardIntoDOM(groceryItem) {    
    DOMSelectors.cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="itemCards">
        <p>${groceryItem.item}</p>
        <img src=${groceryItem.image}><img>
        <p>${groceryItem.price}</p>
      </div>`
    );
  }

groceryItems.forEach((groceryItem) => injectCardIntoDOM(groceryItem));      

const fruits = groceryItems.filter((groceryItem) => groceryItem.category === "Fruits");      
const bakery = groceryItems.filter((groceryItem) => groceryItem.category === "Bakery"); 
const dairy = groceryItems.filter((groceryItem) => groceryItem.category === "Dairy"); 
const meat = groceryItems.filter((groceryItem) => groceryItem.category === "Meat"); 
const vegetables = groceryItems.filter((groceryItem) => groceryItem.category === "Vegetables"); 
const grains = groceryItems.filter((groceryItem) => groceryItem.category === "Grains"); 
const pantry = groceryItems.filter((groceryItem) => groceryItem.category === "Pantry"); 

/*function filterItems(type){
  return groceryItems.filter((groceryItem) => groceryItem.category === type); 
}*/

const fruitsBtn = DOMSelectors.fruitBtn;
fruitsBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  fruits.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});

const bakeryBtn = DOMSelectors.bakeryBtn;
bakeryBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  bakery.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});

const dairyBtn = DOMSelectors.dairyBtn;
dairyBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  dairy.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});
const meatBtn = DOMSelectors.meatBtn;
meatBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  meat.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});
const vegetablesBtn = DOMSelectors.vegetablesBtn;
vegetablesBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  vegetables.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});
const grainsBtn = DOMSelectors.grainsBtn;
grainsBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  grains.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});

const pantryBtn = DOMSelectors.pantryBtn;
pantryBtn.addEventListener("click", function () {
  document.getElementById("container-box").innerHTML = "";
  pantry.forEach((groceryItem) => injectCardIntoDOM(groceryItem));
});

changebtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});     