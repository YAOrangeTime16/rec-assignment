# Assignment - Building a casino lobby
This assignment is intended to be the foundation for a discussion with a coworker at Mr Green.
Your job is to create the first iteration of a casino lobby.     
## Iteration #1 (16 hrs)     
### Aim for the first iteration
To implement basic functionalities and UI         
     
### Functions   
* it should show a list of games     
* filter functionalities (`gameProvider` & `gameCollectionIds`)     
      * make sure those filters work      
      * the filters should be represented on the user interface    
* it should be unit tested (basic level)      
      * set up test environment      
      * run basic tests     
     
### Designs      
* each game should be represented by a game tile     
* the game tile should include:
	* a background image
	* a link to start the game    

## Tools (framework, library, etc) that I chose for this assignment
### JS Framework
[React](https://reactjs.org/) ([create-react-app](https://github.com/facebook/create-react-app))     
### User Interface
[Material-ui](https://material-ui.com/)    
### Running JSON data
[json-server](https://github.com/typicode/json-server)     
### Test
[Jest](https://facebook.github.io/jest/) and [enzyme](https://airbnb.io/enzyme/)     

## Things to be left for later iterations     
#### Functional requirements 
* it should be functional on both mobile and desktop (click & touch)     
* it should be unit tested with ~80% coverage     
     
#### Design requirements
* perhaps some other data that could be relevant for a player to know about     
     
#### Non functional requirements
* it should load fast
* should be visually appealing
     
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
It should run on the default port on 3000. If you change the port, replace the endpoint at `src/db/endpoint.js` with the new port number.
     
If you have not installed `json-server` to your machine, follow [their instruction](https://github.com/typicode/json-server#install) to install.

Then you are ready to start the app on any other port number than 3000;
```bash
  $ npm start  #'Would you like to run the app on another port instead?' Y
```
or you can also set a port number to run;
```bash
  $ PORT={yourPortNumber} npm start
```