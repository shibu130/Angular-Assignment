# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

# How to run the project

### &nbsp; 1.Clone the project
### &nbsp; 2.Run npm install to install dependencies
### &nbsp; 3.Run ng serve and go to (http://localhost:4200/dashboard)
### &nbsp; 4.I havent used karma jasmin before, hence have not added the test cases , need to learn it and add test cases later

# Using the App

### 1. once ng serve is done , visit http://localhost:4200/dashboard , you will be taken to welcome page (i had initially planned to bring some animations and text here ) , click on the login

![image](https://github.com/user-attachments/assets/a86eb4fa-abaa-468b-8daa-5bed046f0ad6)

### 2. once login is clicked u will be redirected to login page
![image](https://github.com/user-attachments/assets/f7fc791c-7ba5-4ca5-a3da-99771c5d45b7)

### 3. once username and password is entered (username can be any email and password should not be space) validations (required , email for username and required for password ) and once validation passed you will be taken to dashboard 
![image](https://github.com/user-attachments/assets/02ca93ef-bd50-4819-8bc1-6a476f3019c4)

### 4. in the above image add more is used for to demonestrate debounce (validatione exists there) 

### 5. clicking on manage will open a popup to edit product details (angular material is used here)

![image](https://github.com/user-attachments/assets/06d53c79-3f4a-4127-98e9-5039fab759fe)

### 6. clicking list will open a page demonestrating the virtual scroll
![image](https://github.com/user-attachments/assets/4f73bf79-83be-4b70-938b-d733dfe141e3)

### 7. logout will clear local storage and will redirect you to login page


# project structure
The project contains 2 modules feature and shared , feature contains components , modals , services and etc. while shared has the reusable components

# documentation
## 1.optimizations
change detection strategy - went with default since the application is small , while on push would have been better.
unsubscribing  - after i subscribe to a observable i unsubscribe to it when component is destroyed (ngOnDestroy).
loops - usage of track by index.
lazy loading of modules - the feature module is lazy loaded.

things missed - use of onpush detection strategy , use of pipes, karma jasmin unit test cases.

## 2. challenges

flexbox - its been a while since i created project from scratch , i was trying to bring a header footer and content, so basically header should stay in top , footer in bottom and content should take remaining width.
while welcome and login doesnt do exactly , dashboard i have done in a correct way by making use of flex box , a main div is a flex box and header in top content has a flex-grow 1 which will take remaining width between header and footer , rather than try all concepts out i will check this website about behaviour of flex box properties https://yoksel.github.io/flex-cheatsheet/.
The interesting part about flex box is how things change when u change the flex direction.

unit test - i have never done karma jasmin before , due to time constrains i chose to drop it , its not like i abandoned it , but i am ready to learn it.


angular material - in my current org i we dont use angular material (this is the first time in 4 years i am using angular material) , but i used angular materials for popups(which contains material inputs, go to list view and click on manage in dashboar) , loading spinner, virtual scrolling (https://material.angular.io/components/categories)


forms - i have implemented a template approach for login and debouncing in dashboard where i can choose number of items which will be added to the list, reactive approach i am using to manage the product in list in the dashboard  

route guards - i didnt refer any video for this , i knew once u implement can activate there is a function that need to be implemented and based on the return either true or false , one will be permitted to enter the route, otherwise its not possible to enter the route

services - i have used services , i am aware of it 

faker.js - never used it before , but it was nice oppurtunity to make use of it  (https://fakerjs.dev/guide/usage.html). When i visited landing page found so many options where i can create temporary data and hence i dedided to go to the ecommerce data

git - i had used another account to push code , as it was configured earlier ( it was a github associcated with my mtech email and during mtech there were assignments)

i had missed some things not intentionally , but i think i could have made things more optimized and etc 

bootstrap - i have used bootstrap for grids and ui components as i have better hold on it  , while for many other things angular material was used




fix : bootstrap 4 tooltip wont work until we use a jquery code snipped as per the documentation


