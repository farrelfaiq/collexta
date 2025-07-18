/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != null && user = @request.auth.id",
    "viewRule": "@request.auth.id != null && user = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "listRule": "user = @request.auth.id ",
    "viewRule": "@request.auth.id != null"
  }, collection)

  return app.save(collection)
})
