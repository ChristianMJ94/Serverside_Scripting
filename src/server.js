//Doc
//https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httpcreateserveroptions-requestlistener
//https://dev.to/tradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe
//npm install nodemon - dette modul er til at kunne refese server ved ændringer

//Start from (local server) = npx nodemon .\src\server.js 
//Start from (global server) = nodemon .\src\server.js 
//Start from (npm init) server = npm start
//(ctrl+C stopper processen)
//http://localhost:3003/ (Server)

//Henter http
const http = require("http");

//Get controller
const controller = require("./controller");

//Callback funktion
const server = http.createServer(controller)

//Portnummer
server.listen(3003)