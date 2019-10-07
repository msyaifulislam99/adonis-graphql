'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Graphql = use('./graphql');

const graphqlServer = Graphql.create();

const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// GRAPHQL SERVER
Route.route('/graphql', graphqlServer, ['GET', 'POST']);


// PLAYGROUND
Route.route('/graphiql', Graphql.graphiqlAdonis('/graphql'), ['GET','POST']);
