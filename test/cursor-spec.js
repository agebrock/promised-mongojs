describe('cursor', ()=> {
  it('eachAsync', (done)=> {

    var m = require('../');
    m('test').collection('test').find().eachAsync(function(item, next) {
      console.log(item);
      
      next();
    
    
    }).then(done);
  });

  it('eachAsync', (done)=> {

    var m = require('../');
    m('test').collection('test').find().countAsync().then(console.log).then(done);
  });
})
