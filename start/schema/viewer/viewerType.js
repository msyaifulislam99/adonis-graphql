const {
  globalIdField
} = use('graphql-relay');

const {
  GraphQLObjectType,
  GraphQLString
} = use('graphql');


let viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    id: globalIdField('Viewer'),
    plainId: {
      type: GraphQLString,
      resolve: _ => {
        return _.id;
      },
    }
  }
});

module.exports = {
  viewerType
}
