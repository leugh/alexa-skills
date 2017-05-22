//https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interaction-model-reference#intent-schema-parameters
//https://github.com/alexa-js/alexa-app
//https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-best-practices

'use strict';

var alexa = require('alexa-app');
var app = new alexa.app("empfangsservice");

app.launch(function (request, response) {
	response.say("Hallo und Willkommen bei Leo. Wie heißt du?").shouldEndSession(false);
});

app.intent('NameInput',{
	"slots": { "user_name": "AMAZON.DE_FIRST_NAME" },
    "utterances": ["{mein name ist|ich heiße|ich bin} {-|user_name}"]
},
function (request, response) {
	var user_name = request.slot('user_name');
	response.say("Hallo" + user_name + "." + "Wähle aus was du brauchst: WLAN-Passwort, Weg zur Toilette, Willkommensnachricht.");
	response.shouldEndSession(false);
});

app.intent('AskForWLANIntent',{
    "utterances": ["{gib mir das|ich brauche das|sage mir das} WLAN Passwort"]
},
function (request, response) {
	response.say("Das WLAN-Passwort lautet ABC");
	response.shouldEndSession(false);
});


module.exports = app;