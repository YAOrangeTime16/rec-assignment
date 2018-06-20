# Assignment - Building a casino lobby
This assignment is intended to be the foundation for a discussion with a coworker at Mr Green.
Your job is to create the first iteration of a casino lobby.     
## Iteration #1 (16 hrs)     
### Aim for the first iteration
To implement basic functionalities and UI         
     
##### Functions   
* it should show a list of games     
* filter functionalities (`gameProvider` & `gameCollectionIds`)     
      * _make sure those filters work_     
      * _the filters should be presented on the user interface_     
* it should be unit tested _(basic level)_     
      * _set up test environment_     
      * _run basic tests_     
     
#### Designs      
* each game should be represented by a game tile     
* the game tile should include:
	* a background image
	* a link to start the game    

### Technologies (framework, library, etc) beging used
#### JS Framework
React.js (create-react-app)     
#### User Interface
Material-ui    
### Running JSON data
json-server     
#### Test
Jest and enzyme     

## Elements that can be left for later iterations     
#### Functions 
* (making sure) it should be functional on both mobile and desktop (click & touch)     
* it should be unit tested with ~80% coverage     
     
#### Designs
* perhaps some other data that could be relevant for a player to know about     
     
#### Non functional requirements
* it should load fast
* should be visually appealing

## To run this casino lobby

`all-games.json` has been run on json-server during the development.

To run the project
```bash
      git clone https://github.com/YAOrangeTime16/rec-assignment.git
```  

```bash
      npm install
```

     
Before you start the app, json-server needs to be run. To run the json-server,     
```bash
     npm run json:server
```   
It should run on the default port on 3000. If you change the port, the endpoint needs to be changed at `src/db/endpoint.js`
     
If your machine has not installed `json-server`;
```bash
     npm install -g json-server
``` 

Then you start the app on any other port number than 3000
```bash
      PORT={your port number} npm start
```