export class Product {
	name: string;
	id: number;
	price: number;
	inStock: boolean;

	constructor(name: string, id: number, price: number, inStock: boolean) {
		this.name = name;
		this.id = id;
		this.price = price;
		this.inStock = inStock;
	}
}

const monitor = new Product("Rog", 13, 400, true);

console.log(monitor);
