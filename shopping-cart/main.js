import './styles.css'
import { fetchShopItems, renderShopItems } from "./shop-items";



window.addEventListener('load', async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  console.log(shopItems);
  renderShopItems(shopItems.products);
});


