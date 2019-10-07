const config = use('config');
const appConfig = config.get('app');

const { graphqlAdonis, graphiqlAdonis } = use('apollo-server-adonis');
const { schema } = use('./schema');

class GraphQLServer {
  static create() {
    return new graphqlAdonis({
      schema,
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
