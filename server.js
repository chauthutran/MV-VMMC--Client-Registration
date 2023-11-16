'use strict';

const fs = require('fs');
const express = require('express');
var cors = require('cors');
const moment = require( 'moment');
const listJson = require('./list.json');

const bodyParser = require("body-parser");


const {ClientUtils} = require("./utils/ClientUtils");
const Utils = new ClientUtils();



const PORT = process.env.PORT || 3111;
const INDEX = '/index.html';

var statusJson = {};

const server = express()
.use(cors())
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.get('/', (req, res) => {  res.send('MV VMMMC - Client Registration server started !!!');  })
.get('/status', (req, res) => { res.send( { status: statusJson } ); })
.post("/search", (req, res) => {

	/*
	fs.readFile('list.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			res.send( { msg: 'Error on file read - ' + err } );
			return;
		}
		else
		{
	*/
	statusJson = {};

	var inputData = [];
	if ( listJson && listJson.length > 0 ) inputData.push( listJson[0] );

	console.log( inputData );
	console.log( JSON.stringify( inputData ) );

	res.send( { msg: 'requestMade' } );

	Utils.checkTEIs2( inputData, statusJson ).then( itemList => {

		statusJson.itemList = itemList;

		fs.writeFile( 'listOut_' + moment().format("YY-MM-DD_HHmmss") + '.json', JSON.stringify( itemList ), (error) => {
			if (error) {
			  console.log('An error has occurred ', error);
			  return;
			}
			console.log('Data written successfully to disk');
		 });
	});		
	
})
.listen(PORT, () => console.log(`Listening on ${PORT}` ));
