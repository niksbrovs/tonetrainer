'use strict';
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
    
};

var handlers = {
    'tonetrainerIntent': function (){
        this.emit(':ask','Welcome to Tone Trainer!', 'What note is this?')//Insert link to play
    },
    'launchRequest': function (){
        this.emit('tonetrainerIntent')
    }
};