"use strict";

var ee = require("event-emitter");

var referee = ee();

// construct the public API
referee.add = require("./create-add")(referee);
referee.assert = require("./create-assert")(referee);
referee.refute = require("./create-refute")(referee);
referee.expect = require("./create-expect")(referee);
referee.fail = require("./create-fail")(referee);
referee.pass = require("./create-pass")(referee);
referee.verifier = require("./create-verifier")(referee);
referee.equals = require("@sinonjs/samsam").deepEqual;
referee.match = require("@sinonjs/samsam").createMatcher;

// add all all the built-in assertions to the API
require("./assertions/class-name")(referee);
require("./assertions/contains")(referee);
require("./assertions/equals")(referee);
require("./assertions/exception")(referee);
require("./assertions/greater")(referee);
require("./assertions/has-arity")(referee);
require("./assertions/has-prototype")(referee);
require("./assertions/is-array")(referee);
require("./assertions/is-array-buffer")(referee);
require("./assertions/is-array-like")(referee);
require("./assertions/is-boolean")(referee);
require("./assertions/is-data-view")(referee);
require("./assertions/is-date")(referee);
require("./assertions/is-error")(referee);
require("./assertions/is-eval-error")(referee);
require("./assertions/is-false")(referee);
require("./assertions/is-float-32-array")(referee);
require("./assertions/is-float-64-array")(referee);
require("./assertions/is-function")(referee);
require("./assertions/is-infinity")(referee);
require("./assertions/is-int-8-array")(referee);
require("./assertions/is-int-16-array")(referee);
require("./assertions/is-int-32-array")(referee);
require("./assertions/is-intl-collator")(referee);
require("./assertions/is-intl-date-time-format")(referee);
require("./assertions/is-intl-number-format")(referee);
require("./assertions/is-map")(referee);
require("./assertions/is-nan")(referee);
require("./assertions/is-null")(referee);
require("./assertions/is-negative-infinity")(referee);
require("./assertions/is-number")(referee);
require("./assertions/is-object")(referee);
require("./assertions/is-promise")(referee);
require("./assertions/is-range-error")(referee);
require("./assertions/is-reference-error")(referee);
require("./assertions/is-reg-exp")(referee);
require("./assertions/is-set")(referee);
require("./assertions/is-string")(referee);
require("./assertions/is-symbol")(referee);
require("./assertions/is-syntax-error")(referee);
require("./assertions/is-true")(referee);
require("./assertions/is-type-error")(referee);
require("./assertions/is-undefined")(referee);
require("./assertions/is-uri-error")(referee);
require("./assertions/is-u-int-16-array")(referee);
require("./assertions/is-u-int-32-array")(referee);
require("./assertions/is-u-int-8-array")(referee);
require("./assertions/is-u-int-8-clamped-array")(referee);
require("./assertions/is-weak-map")(referee);
require("./assertions/is-weak-set")(referee);
require("./assertions/keys")(referee);
require("./assertions/less")(referee);
require("./assertions/match")(referee);
require("./assertions/near")(referee);
require("./assertions/same")(referee);
require("./assertions/tag-name")(referee);
require("./assertions/json")(referee);
require("./assertions/match-json")(referee);
require("./assertions/resolves")(referee);
require("./assertions/rejects")(referee);

module.exports = referee;