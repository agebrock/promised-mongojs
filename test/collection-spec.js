describe('collection', ()=> {
  it('promisify', (done)=> {

    var m = require('../');
    var col = m('test').collection('test');

    col.removeAsync({})
      .return(null)
      .tap(col.insertAsync.bind(col, {_id: 1}))
      .tap(col.saveAsync.bind(col, {_id: 2}))
      .tap(col.findAsync.bind(col, {}))
      .then(console.log).then(done);

  });
})
