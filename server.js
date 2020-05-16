/*jslint node: true */
"use strict";


var http = require('http');
var soap = require('soap');
var StudentService = {
  Students_Service: {
    Students_Port: {
      getStudents: function(args) {
        return ([
          {
              name : "first student",
              age : 29 ,
              courses : ['arabic','math','english'],
              married : false
          },
          {
              name : "second student",
              age : 25 ,
              courses : ['arabic','math','english'],
              married : false
          },
          {
              name : "third student",
              age : 24 ,
              courses : ['deutsch','math','english'],
              married : false
          }
      ]);
      }
    }
  }
};

var xml = require('fs').readFileSync('StudentService.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
          response.end("404: Not Found: "+request.url);
      });

server.listen(8800);

soap.listen(server, '/wsdl', StudentService, xml);