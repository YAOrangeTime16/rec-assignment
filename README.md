# Assignment - Building a casino lobby
This assignment is intended to be the foundation for a discussion with a coworker at Mr Green.
Your job is to create the first iteration of a casino lobby.     
## Iteration #1 (16 hrs)     
### The aim for the first iteration
To implement basic functionalities and user interface       
     
### Functions   
* It should show a list of games
* Filter functionalities (`gameProvider` & `gameCollectionIds`)
	* Make sure those filters work
	* The filters should be represented on the user interface
* It should be unit tested (basic level)
	* Set up test environment
	* Run basic tests    
     
### Designs      
* Each game should be represented by a game tile
* The game tile should include:
	* A background image
	* A link to start the game    

## Things to be left for later iterations     
#### Functional requirements 
* It should be functional on both mobile and desktop (click & touch)     
* It should be unit tested with ~80% coverage     
     
#### Design requirements
* Perhaps some other data that could be relevant for a player to know about     
     
#### Non functional requirements
* It should load fast
* It should be visually appealing

## Tools (framework, library, etc) that I chose for this assignment
#### JS Framework
[React](https://reactjs.org/) ([create-react-app](https://github.com/facebook/create-react-app))     
#### User Interface
[Material-ui](https://material-ui.com/)    
#### Running JSON data
[json-server](https://github.com/typicode/json-server)     
#### Test
[Jest](https://facebook.github.io/jest/) and [enzyme](https://airbnb.io/enzyme/)     

## To run this casino lobby

Clone the repo from GitHub;
```bash
  $ git clone https://github.com/YAOrangeTime16/rec-assignment.git
  $ cd rec-assignment
```  
then install the packages;
```bash
  $ npm install
```

     
`all-games.json` needs to be run locally before you start the app. For this assignment, `json-server` is used. To run a `json-server` on this app,     
```bash
  $ npm run json:server
```   
It should run on the default port on 3000. If you change the port for `json-server`, replace the endpoint with the new port number at `src/db/endpoint.js`.
     
If you have not installed `json-server` to your machine, follow [their instruction](https://github.com/typicode/json-server#install) to install.


Then you are ready to start the app on any other port number than 3000;
```bash
  $ npm start  #'Would you like to run the app on another port instead?' -> Y
```
or you can choose a port number and run the app by;
```bash
  $ PORT={yourPortNumber} npm start
```