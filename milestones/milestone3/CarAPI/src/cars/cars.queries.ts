export const carQueries = {
	readCars:
		`select id as carId, make as make, model as model, year as year, color as color, image as image from cardb.cars`,

	searchCarsByMake:
		`select id as carId, make as make, model as model, year as year, color as color, image as image from cardb.cars
		where carDB.cars.Make like ?`,

	searchCarsByModel:
		`select id as carId, make as make, model as model, year as year, color as color, image as image from cardb.cars
		where carDB.cars.Model like ?`,

	readCarsByCarID:
		`select id as carId, make as make, model as model, year as year, color as color, image as image from cardb.cars
		where carDB.cars.ID = ?`,
	
	createNewCar:
		`insert into cars(make, model, year, color, image) values(?,?,?,?,?)`,

	updateCar:
		`update  cardb.cars set make=?, model=?, year=?, color=?, image=? where id = ?`,

	deleteCar:
		`delete from cardb.cars where id = ?`,
}


