var mongodb = require('mongodb');

// we store the connection to mongo in this
var db = null;

// this is the model for accessing mongo
function MongoModel() {
    
    return {
      // every request is wrapped in this, so we will create the
      //connection if we need it
      doIt : function (callback){
        // if the connection isn't defined, we need to create it
        if (db === null) {
            var uri = 'mongodb://'
                    +process.env.MONG_USER+':'+process.env.MONG_PASS+'@'
                    +process.env.MONG_HOST+':'+process.env.MONG_PORT+'/'
                    +process.env.MONG_DB;
                    
            mongodb.MongoClient.connect(uri, function(err, cdb) {
              if(err) {
                console.log("Err:" + err);
                throw err;
              }
              db = cdb;
              callback(cdb);
              
            });      
        } else {
          callback(db)
        }
      },

      // get something from the collection
      find : function(collection, callback) {
          this.doIt(function(db){
            db.collection(collection).find().toArray(function(err,docs){
              callback(docs)
            });            
          })
      },
      
      //save the element 
      save : function (collection, element, callback) {
          this.doIt(function(db){
            db.collection(collection).insert(element, {w:1}, 
            function(err, result) {
              callback(result)
            });    
          });
      },
      
      // delete the id
      delete : function (collection, id, callback){
        this.doIt(function(db){
          console.log('Remove from '+ collection + ': '+id)
          db.collection(collection).remove(
            {'_id': new mongodb.ObjectID(id)},  
            function(err, result){callback(result)}
          )
        });
      }
      
      
    };
}

module.exports = new MongoModel();