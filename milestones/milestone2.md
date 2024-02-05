 
###### Soran Qiji 
###### CST-391 
###### Milestone 2 
###### 02/4/2024 

# Milestone 2: 

This applica on demonstrates the web app the user post item for sell on it, something like Craigslis.org. 
The user will be able to add an item to the website by providing product details like name, model, piece, descrip on, picture, and user email address for contact. 

### Sitemap: 
![sitemap](/milestones/images/sitemap.png)
- This is the sitemap for my website applicication. the website contains multiple pages, Home, products, categories, login, signup, update and delete products.

### ER diagram: 
![ER_diagram](/milestones/images/ER.png)
- This picture shows the ER diagram for the website, which display the relation between products table, cartecory table and user table. 

## UML: 
![UML](/milestones/images/uml.png)
- This picture displays the UML for all classes in the website application. The UML shows all the classes, properties, and methods.
### UI Wireframe:  

#### Home page: 
![Home_page](/milestones/images/Wireframe_Home.png)
- This is the home page of my wibsite, will contains a slide show of products pictures and about the websiste.

### Customer Product Page: 
![Customer_products](/milestones/images/Wireframe_products.png)
- This is the web page that will display the product for the customers.

### User Product page:
![User_procucts](/milestones/images/user_products.png) 
- This the products page after the user sing in the websire using the user name and password. The user will be able to add new product, update and delete a specific product.
 
### Add Product: 
![Add_new](/milestones/images/add_product.png)
- This is the page of adding new product. The user will be able to add a new item to the database after providing the information about the product such as name, description, price.

### Update Item: 
![update_product](/milestones/images/products_update.png)
- This is the web page where the user can update the specific product using the product ID and changing one or more item properties.
 
### Delete Item: 
![delete_product](/milestones/images/products_delete.png)
 - This is the delete product web page that will allow the user to delete a specific product by providing product ID and name.
 
 ### Customer category Page: 
![Customer_category](/milestones/images/customer_categories.png)
- This is the web page that will display the products' categories for the customers.

### User categoey page:
![User_procucts](/milestones/images/user_categories.png) 
- This the categories page that allow the user to add, update, and delete a products' category after the user sing in to the websire using the user name and password.
 
### Add category: 
![Add_new](/milestones/images/add_category.png)
- This is the page of adding new catecory. The user will be able to add a new catecory to the database after providing the information about the product's category such as name, description, price.

### Update category: 
![update_category](/milestones/images/categories_update.png)
- This is the web page where the user can update the specific product using the product ID and changing one or more item properties.
 
### Delete category: 
![delete_category](/milestones/images/categories_delete.png)
 - This is the delete product web page that will allow the user to delete a specific product by providing product ID and name.
 
 ### Singn-in page:
 ![Sign-in](/milestones/images/login.png)
 - This is the page were the user can log-in using the username and password after regestering which this will allow the user to add, modify, and update the item.

 ### Register (sing-up) page:
 ![Sign-up](/milestones/images/signup.png)
 - This the registser page that the usre will allow to register by providing information such as first and last name, email, and password.
 
## Postman

![Screen1](/milestones/images/p1.png)
- the screen shows the get artists by using localhost:5000/artists url.

![Screen2](/milestones/images/p2.png)
- This screen shows get all albums from database using the localhost:5000/albums

![Screen3](/milestones/images/p3.png)
- This screen shows the get album by album id which the album with ID number 4 was used to get album 4.

![Screen4](/milestones/images/p4.png)
- This screen shows the seatch for the album that artists name is the beatles.

![Screen5](/milestones/images/p5.png)
- This screen shows the search process which it is searchig the album with an artist name contains "B".

![Screen6](/milestones/images/p6.png)
- - This screen shows the search process which search the description that contains the word "rubber".

![Screen7](/milestones/images/p7.png)
- This screen shows the process of adding a new album to albums table.

![Screen8](/milestones/images/p8.png)
- This screen shows the process of updating an album, here the album title was updated.

![Screen9](/milestones/images/p9.png)
- This screen shows the process of deleting an album, here album with ID 13 was deleted.

## Risks: 
One of the risks is how to add a picture to the database and what data type I should use. The other risk is how to connect the webpage to database server like MAMP using mySQL and JavaScript, I did that using with Java and C# in CST-345 Database Class using Connec on with database URL, username, and password. The other risk is security, what I mean by security is that everyone would not be able to edit the products in the system. Therefore, I added a user that will give access only to person with username and password to edit the products, such as adding new product, update or delete the product. 