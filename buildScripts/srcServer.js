
//ES5 style below ..changing to ES6
//var express = require('express');

import express from 'express';
import path from 'path';
import open from 'open';


//ES5 style of declaring variable..moving to ES6
//var port = 3000;

const port = 3000;
const app = express();

app.get('/', function(req,res){

res.sendFile(path.join(__dirname,'../src/index.html'));

});


app.listen(port, function(err){

  if(err){
  console.log(err);
  }else{
  open('http://localhost:'+port);
  }
  });
