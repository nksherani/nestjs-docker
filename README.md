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
