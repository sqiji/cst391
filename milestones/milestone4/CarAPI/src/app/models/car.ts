export class Car {
    carId: number = -1;
    make: string = "";
    model: string = "";
    year: number = 1960;
    color: string = "";
    image: string = "";

    constructor(carId: number, make: string, model: string, year: number, color: string, image: string){
      this.carId = carId,
      this.make = make,
      this.model = model,
      this.year = year,
      this.color = color,
      this.image = image
    }




    get CarId(): number{
      return this.carId;
    }

    set CarId(carId: number) {
      this.carId = carId;
    }

    get Make(): string{
      return this.make;
    }

    set Make(make: string) {
      this.make = make;
    }

    get Model(): string{
      return this.model;
    }

    set Model(model: string) {
      this.model = model;
    }

    get Year(): number{
      return this.year;
    }

    set Year(year: number) {
      this.year = year;
    }

    get Color(): string{
      return this.color;
    }

    set Color(color: string) {
      this.color = color;
    }

    get Image(): string{
      return this.image;
    }

    set Image(image: string) {
      this.image = image;
    }
}
