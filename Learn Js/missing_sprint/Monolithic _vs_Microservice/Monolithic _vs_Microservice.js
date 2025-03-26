// Monolithic vs Microservice

// Monolithic
/*
    is classic model to make software application
        the software build with signle langauge or framework
    /monolithic-app
    ├── src
    │   ├── components
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   ├── pages
    │   │   ├── Home.js
    │   │   ├── Profile.js
    │   ├── services
    │   │   ├── api.js  (Handles all API calls)
    │   ├── App.js
    │   ├── index.js
    └── package.json

    Problems: Complected to Understand &&
        Update in Modele [must update all] && 
        not easy to change the techs
*/

// Microservice
/*
    divide the software in small services

    /microservices-app
    ├── frontend --> React
    │   ├── src
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── App.js
    │   └── package.json
    ├── backend-auth --> Express
    │   ├── src
    │   │   ├── routes
    │   │   ├── controllers
    │   │   ├── server.js
    │   └── package.json
    ├── backend-orders --> PHP
    │   ├── src
    │   │   ├── routes
    │   │   ├── controllers
    │   │   ├── server.js
    │   └── package.json

    Problems: Complected &&
        Understand The Dependecies
*/

