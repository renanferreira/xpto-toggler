# XPTO Toggler
Platform Toggles Manager for XPTO  written em Javascript

## Getting Started

### Prerequisites

The technology prereqs to run the application are:
* Node.js 6.13.0+
* MongoDB 3.6.4+
* Postman (for API calls)

Besides, the application was set to run on available ports:
* Port 3000: for Node.js application
* Port 27017: for MongoDB database instance

Once the database instance is up and running, it is necessary to create a database named xpto with two collections inside:
* toggle
* user

It is required to import the JSON sample files under /db-samples folder to preserve the document schema.

Is also required to create the indexes:

toogle
* A compound index with toggleName and toggleVersion elements

user
* An index with username element
* An index with token element

### Running the application

Step 1:

Download dependencies with NPM on project's folder where is placed packege.json file:
```
npm install
```

Step 2:

To run the application:

```
node server.js
```

If the result is
```
Message RESTful API server started on: [port]
``` 
you're ready to make API calls!

## API Resources

### /toggler/toggles/services

(GET): Retrieve a list of toggles

Header:
* Content-Type: "application/json"

Body: 
[No Parameters]

(POST): Retrieve a toggle with a given indentifier (toggleName) and version (toggleVersion)

Header:
* Content-Type: "application/json"

Body:
* toggleName: String type
* toggleVersion: Number type

### /toggler/toggles

(POST): Add a new toggle (requires administrator privileges)

Header:
* Content-Type: "application/json"
* Authentication: [user's token information in user document]

Body:
* toggleName: String type
* toggleVersion: Number type
* serviceListOn:
    * service: String Array type
    * override: Boolean type
* serviceListOff:
    * service: String Array type
    * override: Boolean type

(PUT): Update a toggle (requires admin privileges)

Header:
* Content-Type: "application/json"
* Authentication: [user's token information in user document]

Body:
* toggleName: String type
* toggleVersion: Number type
* serviceListOn:
    * service: String Array type
    * override: Boolean type
* serviceListOff:
    * service: String Array type
    * override: Boolean type

## Author

[Renan Ferreira de Jesus](https://github.com/renanferreira)