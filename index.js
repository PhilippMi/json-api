module.exports = {
  adapters: {
    Mongoose: require('./build/adapters/MongooseAdapter')
  },
  types: {
    Collection: require('./build/types/Collection'),
    Document: require('./build/types/Document'),
    ErrorResource: require('./build/types/ErrorResource'),
    Resource: require('./build/types/Resource'),
    ResourceType: require('./build/types/ResourceType'),
  },
  BaseController: require('./build/BaseController')
};