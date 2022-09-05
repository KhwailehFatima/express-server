'use strict';


// Express
const express = require( 'express' );
const app = express();
app.use( express.json() );


// Cors for cross-origin allowance
const cors = require( "cors" );
app.use( cors() );

// Check for alive 
app.get( '/', ( req, res ) => {
    res.status( 200 ).send( 'Hello World' );
} );


// Person endpoint
app.post( '/person', ( req, res ) => {
    const name = req.query.name;
    const age = req.query.age;
    const gender = req.query.gender;
    const newAge = parseInt( age ) + 5;
    res.status( 200 ).send( `${newAge}` );
} );

// Port listen 
function start ( port ) {
    app.listen( port, () => console.log( `server up a wake` ) );
}



// Export
module.exports = {
    app: app,
    start: start
};