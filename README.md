# Randomize
A webapp using using the MERN stack built to randomize the languages to be used for future projects

## Getting Started
To get started with this project either download the zip of the project or clone the project using the following command

```
git clone https://github.com/DeanLi586/randomize
```

Then run 
```
npm install 
```

to install all the dependencies of the project and use

```
npm start 
```
to start the server or if __nodemon__ is installed

```
npm run dev
```

## Folder Structure
1. config --> will contain configurations for miscellaneous things, like the logger and other app-wide configuration
2. db --> will contain the settings for connecting to the database
3. log --> a log folder will be generated that will contain the logs
4. models --> a models folder will be created to hold the various models that will be defined in the project
5. routes --> a routes folder will be created to hold the various routes that will be defined in the project
6. .env --> the individual application wide constants should be saved in a .env file on the local that for security sake will not be added to git

## Technologies
1. MongoDB for the database
2. Mongoose an ORM for connecting to the MongoDB database
3. Express
4. Winston for logging the messages
5. React.js for the client-side which will be added later on