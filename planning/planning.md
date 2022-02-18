### Bill Sweeney

### Your project idea: Quest-Log

My idea is to create a app, where you can login and pin locations and add information and pictures of places you have been around the world. If time allows I would like to expand it to show the ski resorts in the Rocky Mountains.

### Your tech stack (frontend, backend, database)

ReactJS, MongoDB or Django
Will start the project using MongoDB if I can’t figure out user authorization and photo upload in MongoDB I will switch to Django.

### List of backend models and their properties

Models

User

UserName: String;
FirstName: String;
LastName: String;
Password: String;
TimeStamp: String;

Pin

UserName: String;
Title: String;
Description: String;
Rating: Number;
Photo: Image File;
Latitude: Number;
Longitude: Number;
TimeStamp: String;

Resort

Name: String;
State: String;
City: String;
Description: String;
Photo: Image file;
Latitude: Number;
Longitude: Number;
Website: String;

### React component hierarchy

![Quest-Log Wireframe-React Component Hierarchy](https://media.git.generalassemb.ly/user/40132/files/4e93c280-8b25-11ec-8f77-90c9269be902)

### User stories

As a user, I want to be able to create a profile so that I can save my own pins on the map.

As a user, I want to be able to pin locations that I have visited.

As a user, I want to be able to add information into a form about the place that I have visited.

As a user, I want to be able to upload photos to the database.

As a user, I want to be able to see a gallery of the photos I have uploaded.

As a user I want to be able to see the ski resorts in the Rocky Mountains on the map as pins with the Name, State, Description, Website and Photo.


### Wireframes

![Quest-Log Wireframe-App](https://media.git.generalassemb.ly/user/40132/files/72a3d380-8b26-11ec-9fb7-6e1d294b385e)
![Quest-Log Wireframe-Register](https://media.git.generalassemb.ly/user/40132/files/746d9700-8b26-11ec-9686-5bbbdd9bcbaa)
![Quest-Log Wireframe-Login Screen](https://media.git.generalassemb.ly/user/40132/files/759ec400-8b26-11ec-90f3-2b8c96b19a82)
![Quest-Log Wireframe-NewPin Screen](https://media.git.generalassemb.ly/user/40132/files/76cff100-8b26-11ec-9d7c-7eee890b98bd)
![Quest-Log Wireframe-ExistingPin Screen](https://media.git.generalassemb.ly/user/40132/files/78011e00-8b26-11ec-91eb-23e1e749e145)
![Quest-Log Wireframe-Photo Gallery _ POST MVP_](https://media.git.generalassemb.ly/user/40132/files/79324b00-8b26-11ec-8174-5c35bb975967)
![Quest-Log Wireframe-Resorts Pin](https://media.git.generalassemb.ly/user/40132/files/7a637800-8b26-11ec-928a-b4cbe0cb5846)

### Anything else your squad lead should know

I am planning to learn how to use Mapbox and Mapbox GL for this project.
