# Milestone 3

## Executive Summary

- This is a Car shop API application that use JavaSpring which is used SQL queries, routes, model, dao, and controlers. The app is connect to mySQL service using IP address, port, username and passwors which are defined in .env file. 

## Databse:
- The database that I use is contains one table called cars which contains a list of cars. The table fields are car id, make, model, year, color, and an image.

## Application 

### Design Update
- Updated my design from pet store to car show.

### UML
![Screen1](/milestones/milestone3/milestone3Images/uml.png)
- This is a new UML

### Challenges
- The first challenge that I faced while coding this program it was that the properties' (bariables) name was not matched by my database and application, for example in database I name car Id and id, while in queries I was using car id. therefore, it is better to name the variable the same name wherever they exest.
- I was not able to update the an item in the table. the problem was I forgot to include a carId property to updateCar method in cars.dao.ts which took me time until I figured it out.
- Another mistake, typing mistake, that I did was adding comma in the sql quere for update query before where clause.

### Pending Bugs:
- There is no pending bugs.

### Lessons learned 
- Be more careful while typing because any small mistake could take hours to find it.
- Testing the code step by step and debugging is very helpful.

#### Screenshots

![Screen2](/milestones/milestone3/milestone3Images/1.png)

- This screen shows the welcome message of the Car Show API when the user open the web page using localhost:5000.

![Screen3](/milestones/milestone3/milestone3Images/2.png)

- This screen shows the cars list in mySQL database. Which it can be accessed by using URL localhost:5000/cars 

![Screen4](/milestones/milestone3/milestone3Images/3.png)
- This screen shows the selection of one car using car id. This can be access by typing the url loacalhost:5000/cars?carId=4

![Screen5](/milestones/milestone3/milestone3Images/4.png)
- This screen shows the selection of cars using make. This can be access by typing the url loacalhost:5000/cars/search/make/ford

![Screen6](/milestones/milestone3/milestone3Images/5.png)
- This screen shows the selection of cars using model. This can be access by typing the url loacalhost:5000/cars/search/model/corvatte

#### Recording

- Video1: 

- Video2: 

- This is the vidoe of the Car Show API while running showing the web pages and the postman.


