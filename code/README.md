# Assignment - Casino Lobby

### Iteration #1 (16 hrs)     
#### Aim for the first iteration
To make a production work with basic functionalities and user interface     
     
* Functions
      - it should show a list of games
      - filter functionalities (`gameProvider` & `gameCollectionIds`)
           - _make sure those filtering functions work_
           - _those filters to be presented on UI_
      - it should be unit tested _(basic level)_
           - _set up test environment_
           - _run basic tests_

* Design
      - each game should be represented by a game tile
      - a link to start the game

### Elements that can be left for later Iterations     
* Functions
      - (making sure) it should be functional on both mobile and desktop (click & touch)
      - it should be unit tested with ~80% coverage

* Design
      - perhaps some other data that could be relevant for a player to know about


all-games.json has been run on json-server during the development.
To run the json-server `
     npm run json:server
`
The application is set to request from the localhost port 3000, make sure the json-server runs on the port 3000.



# Building a casino lobby

This assignment is intended to be the foundation for a discussion with a coworker at Mr Green.
Your job is to create the first iteration of a casino lobby, we provide you with the data, the rest is up to you.
You'll find the data you need in `lib`.

## Prerequisites
We encourage you to do your own interpretation, there is no right or wrong, make use of a framework or go vanilla, it's up to you.
The data for the lobby should not be available in the front end initially.

## Requirements
All requirements are listed in order of importance/priority to a thought Product Owner.
Determine which ones are feasible to complete in your sprint. Your sprint is 16 hours.

### Functional requirements
* it should show a list of games
	* it should be possible to filter games based on `gameProvider`
	* it should be possible to filter games based on `gameCollectionIds`
* it should be functional on both mobile and desktop (click & touch)
* it should be unit tested with ~80% coverage

### Design requirements
* each game should be represented by a game tile
* the game tile should include:
	* a background image
	* a link to start the game
	* perhaps some other data that could be relevant for a player to know about

### Non functional requirements
* it should load fast
* should be visually appealing