class Counter {
	initialValue: number;
	constructor(initialValue: number) {
		this.initialValue = initialValue;
	}
	show() {
		console.log(`The value of this counter is ${this.initialValue}`);
	}
	incr(increasements: number = 1) {
		this.initialValue = this.initialValue + increasements;
	}
	decr() {
		this.initialValue = this.initialValue - 1;
	}
}

const myCounter = new Counter(10);

myCounter.show();
myCounter.incr();
myCounter.show();

const otherCounter = new Counter(0);

otherCounter.incr(4);
otherCounter.show();
