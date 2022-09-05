'use strict';

// Dotenv
require( 'dotenv' ).config();


// Calling the start function from server.js to start the server
const server = require( './server' );
server.start( process.env.PORT || 3001 );