import config  from 'config';
const appConfig = config.get('app');

import { graphqlAdonis, graphiqlAdonis } from 'apollo-server-adonis';
// const { ApolloServer } = use('apollo-server');
import { schema } from './schema';

class GraphQLServer {
  // static create2() {
  //   return new ApolloServer({
  //     schema
  //   })
  // }
  static create() {
    return new graphqlAdonis({
      schema,
      // context: ({req,auth ,res}) => {
      //   console.log('req', req);
      //   console.log('auth', auth);
      //   console.log('res', res);
      // }
      // context: ({ req, res }) => {
      //   // if(connection ) {
      //   //     return connection.context;
      //   // } else {
      //   //     const token = req.header.authorization || "";
      //   //     return token;
      //   // }
      //   //user: req.user,
      //   //token: req.get('Authorization'), // if have another header parameter like token can add after this line..
      // },
      // // Initialize engine with your API key
      // engine: {
      //   apiKey: appConfig.apollo, // change for graphql server monitor..
      //   origins: [
      //     {
      //       requestTimeout: '60s',
      //     },
      //   ],
      // },
      // TODO ADDING SOMETHING FOR SUBSCRIPTION ...
      // subscriptions: {
      //   onConnect:  (connectionParams, webSocket, context) => {
      //     // return {
      //     //     user: {
      //     //         name: "bangkit"
      //     //     }
      //     // }
      //     // console.log(connectionParams, webSocket, context);
      //     // console.log('context', context)
      //   },
      //   onDisconnect: (webSocket, context) => {
      //     // console.log('disconnect', webSocket, context);
      //   },
      // }
    });
  }

  static graphiqlAdonis(path) {
    return graphiqlAdonis({
      endpointURL: path
    })
  }
}

module.exports  = GraphQLServer;
