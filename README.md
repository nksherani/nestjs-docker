<h1>NestJS Demo and ReactJS Front-end</h1>
This repository contains two projects:
<ol>
  <li>NestJS Back-end</li>
  <li>ReactJS Front-end</li>
</ol>
These projects were built and tested on node 16.13.0<br/>
<h2>NestJS Back-end</h2>
Run following commands:
<br/>
<pre>
  cd nestjs-demo # going to project directory
  npm install # install dependencies
  npm run start:debug # for running app in watch mode
</pre>
For other commands please check package.json file

Docker support is also enabled. Docker file and docker-compose file is also there with dev and prod support.

Browse <a href="http://localhost:4000">localhost:4000</a><br/>
Postman collection for a few APIs is also present at the root of the NestJS project
There is a .env file present on the root of project where mongo db connection string is required.
<h3>Available functionality</h3>
<ol>
  <li>Create User (First user will be admin)</li>
  <li>Login</li>
  <li>Add new restaurant to Mongo Db</li>
  <li>Get all restaurants from mongo db</li>
  <li>Some examples of schema definition and model validations are also added</li>
</ol>

<h2>ReactJS Front-end</h2>
Run following commands:
<br/>
<pre>
  cd front-end-react # going to project directory
  npm install # install dependencies
  npm start # for running app in watch mode
</pre>
For other commands please check package.json file

Browse <a href="http://localhost:3000">localhost:3000</a>

This project has a .env file where Google Maps API is required with Places API enabled.

<h3>Available functionality</h3>
<ol>
  <li>Sign up (First user will be admin)</li>
  <li>Login</li>
  <li>Add new restaurant from admin page by searching and selecting a restaurant and it's display image</li>
  <li>See all restaurants</li>
  <li>React toolkit is used as store and API Slice of RTK is used for calling APIs</li>
</ol>
