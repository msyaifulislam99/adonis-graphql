We support adonis ES6 using babel <3 :)
```
"scripts": {
    "start": "nodemon --exec babel-node  server.js",
    "test": "node ace test",
    "update-schema": "babel-node ./start/updateSchema.js",
    "migration": "babel-node ./node_modules/.bin/adonis migration:run",
    "serve": "babel-node ./node_modules/.bin/adonis serve --dev"
  },
```
you can modif it like what you want
