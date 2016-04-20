exports.auth            = require('./samlp').auth;
exports.logout          = require('./samlp').logout;
exports.parseRequest    = require('./samlp').parseRequest;
exports.getSamlResponse = require('./samlp').getSamlResponse;
exports.sendError       = require('./samlp').sendError;
exports.parseSamlRequest = require('./samlp').parseSamlRequest;
exports.buildSamlResponse = require('./samlp').buildSamlResponse;
exports.metadata        = require('./metadata');

