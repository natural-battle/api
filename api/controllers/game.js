'use strict';

const ENTRY_NUMBER = 16;

const listOfNumbers = Array.apply(null, {
  length: ENTRY_NUMBER
}).map(Number.call, Number);

let initialGame = {
  "level": 1,
  "entries": listOfNumbers.map(n => {
    return {
      id: n + 1,
      progress: 0
    };
  })
};

function get(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // req.swagger.params.name.value;e
  res.json(initialGame);
}

function post(req, res) {
  // TODO: storage
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
