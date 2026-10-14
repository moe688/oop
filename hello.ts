class Cat {
	name: string;
	type: string;
	constructor(name: string, type: string) {
		this.name = name;
		this.type = type;
	}
	getTag() {
		console.log(`Hi my name is ${this.name} and I am a ${this.type}`);
	}
}

const myCat = new Cat("Morris", "Tabby");

myCat.getTag();
