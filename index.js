// var em = (new require('events').EventEmitter)();
var em = new (require('events').EventEmitter)();
em.emit('error')
