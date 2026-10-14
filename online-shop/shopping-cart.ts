import { Product } from "./products";

export class ShoppingCart {
	shoppingCart: Product[] = [];

	addProduct(product: Product) {
		this.shoppingCart.push(product);
	}
}

const myCart = new ShoppingCart();

myCart.addProduct();
