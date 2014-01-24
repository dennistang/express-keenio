"use strict";

var helpers = require('../core/helpers');

var RequestModule = (function (options) {

  var handlers = options.handlers,
      overrideParseRequestBody = !!(handlers && handlers.parseRequestBody);

  this.parseRequestBody = function (req) {
    if (!req.is('application/json')) {
      return {};
    }

    return this._parseRequestBody(req.body);
  };

  this._fallbackParseRequestBody = function (body) {
    return body;
  };

  this._parseRequestBody = overrideParseRequestBody ? handlers.parseRequestBody
                                                    : this._fallbackParseRequestBody;
  
  return this;

}).bind({});

exports = module.exports = RequestModule;