import '../CSS/style.css';
const DOMSelectors = {
    cardContainer: document.getElementById("container-box"),
}
const groceryItems = [
    { item: "Apples", price: 1.50 },
    { item: "Bananas", price: 0.75 },
    { item: "Bread", price: 2.00 },
    { item: "Milk", price: 3.50 },
    { item: "Eggs", price: 2.25 },
    { item: "Chicken Breast", price: 5.99 },
    { item: "Broccoli", price: 1.20 },
    { item: "Rice", price: 1.80 },
    { item: "Pasta", price: 1.00 },
    { item: "Cheese", price: 4.50 }
];
function injectCardIntoDOM(groceryItem) {    
    DOMSelectors.cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="itemCards">
        <p>${groceryItem.item}</p>
      </div>`
    );
  }

groceryItems.forEach((groceryItem) => injectCardIntoDOM(groceryItem));      