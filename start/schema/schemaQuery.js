const { GraphQLObjectType, GraphQLString }  = use('graphql');
const { viewerType } = use("./viewer/viewerType");

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // node: nodeField,
    viewer: {
      type: viewerType,
      resolve: (_, args, context) => {
        return {
          token: context.token ? context.token: null,
          locale: context.user ? context.user.locale : 'en',
          accountId: context.user ? context.user.accountId : undefined,
          id: context.user ? context.user.id : undefined,
        };
      },
    },
  },
});
module.exports=  query;
