//ex 3 
var events = require('events');

var eventEmitter = new events.EventEmitter();

var fn = function(){
    console.log('call me.');
}

var alarm = function(){
    console.log('alarm has been triggered')

}

//listener
eventEmitter.on('call',fn);
eventEmiiter.emit('call');

//emitter

eventEmitter.emit('alarmKey');
eventEmitter.emit('call');


eventEmitter.emit('alarmKey');