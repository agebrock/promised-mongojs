describe('database', ()=> {
  it.only('promisify', (done)=> {


    var m = require('../');
    var db = m('test');
    var col = db.collection('test');

    col.removeAsync({})
      .return(null)
      .tap(col.insertAsync.bind(col, {_id: 1}))
      .tap(col.saveAsync.bind(col, {_id: 2}))
      .return(null)
      .then(db.listCollectionsAsync.bind(db))
      .then(console.log)
  });

});
