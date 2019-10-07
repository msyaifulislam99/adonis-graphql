import fs from 'fs';
import path from 'path';
import { schema } from './schema';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

let schemaPath = path.resolve(__dirname, './schema/schema.graphql');
let schemaJSONPath = path.resolve(__dirname, './schema/schema.json');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Wrote ' + schemaPath);

function printJson() {
  return graphql(schema, introspectionQuery).then(result => {
    fs.writeFileSync(schemaJSONPath, JSON.stringify(result, null, 2));
    console.log('Wrote ' + schemaJSONPath);
    process.exit();
  });
}

printJson();
