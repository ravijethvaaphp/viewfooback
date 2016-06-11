module.exports.adapters = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    user:"root",
     password:"root",
  
    database: 'viewfoopro',
    wlNext: {
      caseSensitive: false
    }
  }
};