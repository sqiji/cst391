# Milestone 4

## Executive Summary

- This is a Car show API application (Milestone 5) that is build using React based on activity 5, 6 and 7. MAMP is used for data access with Express framework by running Milestone 3 as server (localhost:5000) which is provide access to data that are stored in MAMP and MySQLWorkbenck

## Databse:
- The database that I use is contains one table called cars which contains a list of cars. The table fields are car id, make, model, year, color, and an image.

## Application 

### Design Update
- I apdated the UML while we did not coover the user in this class therefore, I deleted the UML for users, and I also deleted the categories UML while I have not use it.
- I modefied the sitemape and framework according to my final milestone.
- Adding new field (price).

### Sitemap
![screen1](./images/sitemap.png)
- This is the new sitemap.

### ### UI Wireframe: 
![screen2](./images/wireframe1.png)
- This is the wireframe for main page.

![screen3](./images/wireframe2.png)
- this is the framework for create a new car page.

![screen4](./images/wireframe3.png)
- this is the framework for editing a car.


### UML
![Screen1](./images/UML.png)
- This is a new UML

### Challenges
- The only challange that I had in this milestone was that I wanted the user to see the picture of the car in add new car and edit an existing one.

### Pending Bugs:
- The nav bar (Hamburger menu) does not work when resizing the page.

### Lessons learned 
- Debugging is always the solotion to find the error.
- The programmer must be very careful while coding and should be focused.

#### Screenshots

![Screen2](./images/main.png)
- This screen shows the main page of application where all cars are listed.

![Screen3](./images/add1.png)
- This screen shows the page for add new car. In this page all the fields have a placeholders.

![Screen4](./images/add2.png)
- This screen shows the process of adding a new car to cars list. Also, can be motified that when the user enter the url of the car's picture it update the pictue and be displayed in the page.

![Screen5](./images/add3.png)
- This screen shows the main page after the user submit the form which will navigate the usre to main page.

![Screen6](./images/edit1.png)
![Screen7](./images/edit2.png)
- The the screens above, the first screen shows the edit page when the user clicked the edit button. As it shows in the picture that the fields will be filled automatocally with car information. The second page shows the update of the car picture as soon as the user enter the picture's link.

![Screen8](./images/edit3.png)
- This screen shows the main page after the user submit the form after editing the car information, which will navigate the usre to main page.

![Screen9](./images/search.png)
- This screen shows the search process which the user can search for a car using make, model, or year.

![Screen10](./images/beforeDelete.png)
![Screen11](./images/afterDelete.png)
- The screens above shew the the car deletion from database. As can be notefied that For F150 white with wrong image was removed.

### Postman:

![Screen2](./images/getAllCars.png)
- This screen shows select all car from car's list.

![Screen3](./images/getById.png)
- This screen shows select car by its ID.

![Screen4](./images/getByMake.png)
- This screen shows select cars by its make.

![Screen5](./images/getByMode.png)
- This screen shows select cars by its model.

![Screen6](./images/addingNew.png)
- This screen shows adding a new car to the table.

![Screen7](./images/updateCar.png)
- This screen shows the update of one car using Id.

![Screen8](./images/deleteCar.png)
- This screen shows the deletion of a car using car id.

#### Recording:

    
##### Video Link: https://www.loom.com/share/b9cf7881837e418297d25b1e8f71b614?sid=ce96295b-0642-42ce-b6d0-c8c24a8193c0 
- This is vidoe of the Car Show API while running showing the web pages and the postman.

