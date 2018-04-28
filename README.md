# XPTO Toggler
Platform Toggles Manager for XPTO Company

## Getting Started

### Prerequisites

The technology prereqs to run the application are:
* Node.js 6.13.0+
* MongoDB 3.6.4+

Besides, the application was set to run on available ports:
* Port 3000: for Node.js application
* Port 27017: for MongoDB database instance

Once the database instance is up and running, it is necessary to create a database named xpto with two collections inside:
* toggle
* user

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

The result of a successful response is
```
Message RESTful API server started on: [port]
``` 