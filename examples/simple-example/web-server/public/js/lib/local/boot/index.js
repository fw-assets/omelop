var Emitter = require('emitter');
window.EventEmitter = Emitter;

var protocol = require('omelop-protocol');
window.Protocol = protocol;

var protobuf = require('omelop-protobuf');
window.protobuf = protobuf;

var omelop = require('omelop-jsclient-websocket');
window.omelop = omelop;
