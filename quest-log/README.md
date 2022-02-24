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

### Unsolved Issues / Major Hurdles

-I left the project open-ended so I can build some more app development/programming skills in my free time. I would like to implement a photo upload system. I would also like to build up the api to show information about ski resorts in the Western United States for users to have as a reference I set up the start of a user authentication system in the back-end but due to time constraints it will need to be implemented later. I recently tested the app in a mobile phone and discovered that the double click gesture does not work using a touch screen and I would like to incorporate mobile functionality with the app.

I had a major hurdle in deployement trying to get the token authorization to work on the deployed app, apparently the .env file is read by react but needs to be explicitly linked within the code to work in the web deployment using netlify.

### Screenshots
