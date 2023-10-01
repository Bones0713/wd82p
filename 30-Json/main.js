const shopItems = [
    {
        name: "Product 1",
        price: 19.99,
        descirption: "Lorem ipsum"
    },
    {
        name: "Product 2",
        price: 20.99,
        descirption: "Lorem ipsum"
    },
    {
        name: "Product 3",
        price: 25.99,
        descirption: "Lorem ipsum"
    },
    {
        name: "Product 4",
        price: 29.99,
        descirption: "Lorem ipsum"
    }

]; 

function renderShopItems(shopitems){
    const shoppingList = document.getElementById("shopping-list");

    shopItems.forEach((shopItem) => {
        const listItem = document.createElement("li");
        listItem.classList.add("shop-item");

        listItem.innerHTML = `
            <h2>${shopItem.name}</h2>
            <p>${shopItem.price}</p>
            <p>${shopItem.descirption}</p>
        `;
        shoppingList.appendChild(listItem);
    })
}

renderShopItems(shopItems)