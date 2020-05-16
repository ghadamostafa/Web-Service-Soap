/*jslint node: true */
"use strict";

// SOAP client example

var soap = require('soap');
var url = 'http://localhost:8800/wsdl?wsdl';
// var args = {name: 'first student'};


soap.createClient(url,function(err,client) {
  client.getStudents(null,function(err,result) {
    console.log(result);
    console.log(client.describe());
  });
});
