# Quest-Log | Track your adventures

# Application Summary

The goal of this application is for the user to drop a marker on any location around the globe (by simply double-clicking) and have the ability to add notes specific to the place they have visited. You can use the application to recall memories of past vacations/trips or use it as a inspiration for new quests around the globe. Users are able to see their own pins marked in yellow and other users in purple. Users are able to read other users comments by selecting them on the map.

### Installation

Clone down the repository and run in the terminal of the root folder

```
npm i
```

and then

```
npm start
```

or please stop by and take look at the [web app](https://quest-log-frontend.netlify.app/)

### Stack Utilized for Frontend/Backend

MERN Stack (Full Stack Application)

### Technologies used

-MongoDB -Express.js -React.js -Node.js -CSS -MapBox GL JS -Timeago.js -MUI Icons -Axios -Bcrypt(password-hashing)

### User stories

#### MVP

-As a user, I want to be able to pin locations that I have visited.
-As a user, I want to be able to add information into a form about the place that I have visited.
-As a user, I want my pins to be saved for future reference.

#### Post-MVP

-As a user, I want to be able to create a profile so that I can save my own pins on the map.
-As a user, I want to see what other users of the app have pinned around the world.

### Wireframes
![Quest-Log Wireframe-React Component Hierarchy](https://user-images.githubusercontent.com/93820113/155620326-28debe22-fbf7-44e2-8ce7-89d7869fe9c7.jpg)
![Quest-Log Wireframe-App](https://user-images.githubusercontent.com/93820113/155620351-0081a174-739b-4b34-914f-8dc8cb85a834.jpg)
![Quest-Log Wireframe-Register](https://user-images.githubusercontent.com/93820113/155620370-2ecbd655-cde5-4ca2-bffd-daffd778e861.jpg)
![Quest-Log Wireframe-Login Screen](https://user-images.githubusercontent.com/93820113/155620380-f6ca3bf6-89d9-435c-a5c5-6a52f3af8684.jpg)
![Quest-Log Wireframe-NewPin Screen](https://user-images.githubusercontent.com/93820113/155620390-f94a9c33-8bb3-4465-b15a-ced75679ea6d.jpg)
![Quest-Log Wireframe-ExistingPin Screen](https://user-images.githubusercontent.com/93820113/155620397-dacc6cab-7293-49d1-9f78-5d89fa9e4d17.jpg)
![Quest-Log Wireframe-Photo Gallery _ POST MVP_](https://user-images.githubusercontent.com/93820113/155620427-1f75f0e4-21d7-457e-9960-483f147fd300.jpg)
![Quest-Log Wireframe-Resorts Pin](https://user-images.githubusercontent.com/93820113/155620436-654983b8-25f1-4380-82c5-ec669e236c35.jpg)


### Unsolved Issues / Major Hurdles

-I left the project open-ended so I can build some more app development/programming skills in my free time. I would like to implement a photo upload system. I would also like to build up the api to show information about ski resorts in the Western United States for users to have as a reference I set up the start of a user authentication system in the back-end but due to time constraints it will need to be implemented later. I recently tested the app in a mobile phone and discovered that the double click gesture does not work using a touch screen and I would like to incorporate mobile functionality with the app.

I had a major hurdle in deployement trying to get the token authorization to work on the deployed app, apparently the .env file is read by react but needs to be explicitly linked within the code to work in the web deployment using netlify.

### Screenshots

![image](https://user-images.githubusercontent.com/93820113/155620745-f42c75ed-cb51-4454-9355-1e3456b551c4.png)
Note existing Pins created by other users shown in purple while the User's pins are shown in yellow as shown in the image above.
![image](https://user-images.githubusercontent.com/93820113/155621377-9187b973-121a-4826-84b6-6b11daf59500.png)
User Input form shown in Image Above created when double clicking on any point in the world map. The information is saved to a backend server when the add pin button is clicked.


