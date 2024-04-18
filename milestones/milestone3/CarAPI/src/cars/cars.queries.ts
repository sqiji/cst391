export const carQueries = {
	readCars:
		`select id as carId, make as make, model as model, year as year, color as color, price as price, image as image from cardb.cars`,

	searchCarsByMake:
		`select id as carId, make as make, model as model, year as year, color as color, price as price, image as image from cardb.cars
		where cardb.cars.Make like ?`,

	searchCarsByModel:
		`select id as carId, make as make, model as model, year as year, color as color, price as price, image as image from cardb.cars
		where cardb.cars.Model like ?`,

	readCarsByCarID:
		`select id as carId, make as make, model as model, year as year, color as color, price as price, image as image from cardb.cars
		where cardb.cars.id = ?`,
	
	createNewCar:
		`insert into cars(make, model, year, color, price, image) values(?,?,?,?,?,?)`,

	updateCar:
		`update  cardb.cars set make=?, model=?, year=?, color=?, price=?, image=? where id = ?`,

	deleteCar:
		`delete from cardb.cars where id = ?`,
}


