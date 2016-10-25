const inertPlugin = { register: require('inert') };
const mongoosePlugin = { register: require('hapi-mongoose-db-connector'), options: { mongodbUrl: "0.0.0.0:27017/my-website" }  };

module.exports = [ inertPlugin, mongoosePlugin ];
