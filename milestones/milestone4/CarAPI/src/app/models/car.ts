

export class Car {
	private carId: number = -1;
	private make: string = "";
	private model: string = "";
	private year: string = "";
	private color: string = ""
	private image: string = "";

	constructor(carId: number, make: string, model: string,  year: string, color: string, image: string) {
		this.carId = carId;
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.image = image;
	}

	get Id(): number {
		return this.carId;
	}
	set Id(carId: number) {
		this.carId = carId;
	}

	get Make(): string {
		return this.make;
	}
	set Make(make: string) {
		this.make = make;
	}

	get Model() : string {
		return this.model
	}

	set Model(model: string){
		this.model = model
	}

	get Year(): string {
		return this.year;
	}
	set Year(year: string) {
		this.year = year;
	}

	get Color(): string {
		return this.color
	}

	set Color(color: string){
		this.color = color;
	}

	public get Image(): string {
		return this.image;
	}
	public set Image(value: string) {
		this.image = value;
	}

	
}
