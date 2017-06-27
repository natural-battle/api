'use strict';

let initialGame = {
  "level": 1,
  "entries": [{
    "id": 1,
    "progress": 0
  }, {
    "id": 2,
    "progress": 0
  }, {
    "id": 3,
    "progress": 0
  }, {
    "id": 4,
    "progress": 0
  }, {
    "id": 5,
    "progress": 0
  }, {
    "id": 6,
    "progress": 0
  }, {
    "id": 7,
    "progress": 0
  }, {
    "id": 8,
    "progress": 0
  }, {
    "id": 9,
    "progress": 0
  }]
};

function get(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // req.swagger.params.name.value;e
  res.json(initialGame);
}

function post(req, res) {
  initialGame = req.body;
  res.json(initialGame);
};

/*
  Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
*/
module.exports = {
  get: get,
  post: post
};
