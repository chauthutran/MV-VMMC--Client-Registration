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

	statusJson = {};

	var inputData = listJson; //.slice(0, 1);

	// console.log( JSON.stringify( inputData ) );

	res.send( { msg: 'requestMade' } );

	Utils.checkTEIs2( inputData, statusJson ).then( itemList => {

		// console.log( JSON.stringify( itemList ) );
		var dtStr = moment().format("YY-MM-DD_HHmmss");

		statusJson.itemList = itemList;
		statusJson.started = dtStr;

		fs.writeFile( 'listOut_' + dtStr + '.json', JSON.stringify( itemList ), (error) => {
			if (error) { console.log('An error has occurred ', error); return; }
			//else console.log('Data written successfully to disk');
			statusJson.file =  'listOut_' + dtStr + '.json';
		 });

		 
		 // Format Data File Output
		 itemList.forEach( item => {
			try
			{
				if ( item.result )
				{
					if ( !item.result[ "Name" ] ) item.result[ "Name" ] = [];
					if ( !item.result[ "First Name" ] ) item.result[ "First Name" ] = [];
					if ( !item.result[ "Last Name" ] ) item.result[ "Last Name" ] = [];
				
					item.resultA_Name = JSON.stringify( item.result[ "Name" ] ).replace( ',', ' ' );			
					item.resultB_FirstName = JSON.stringify( item.result[ "First Name" ] ).replace( ',', ' ' );
					item.resultC_LastName = JSON.stringify( item.result[ "Last Name" ] ).replace( ',', ' ' );
				
					delete item.result;	
				}	
			}
			catch ( errMsg ) { console.log( 'ERROR in itemList format output, ' + errMsg ); }
		});		 

		 fs.writeFile( 'listOutFM_' + dtStr + '.json', JSON.stringify( itemList ), (error) => {
			if (error) { console.log('An error has occurred ', error); return; }
			//else console.log('Data written successfully to disk');

			statusJson.fileFM =  'listOutFM_' + dtStr + '.json';
		 });
		
		 statusJson.ended = moment().format("YY-MM-DD_HHmmss");

		 console.log('Operation finished at ' + statusJson.ended );
	});		
	
})
.listen(PORT, () => console.log(`Listening on ${PORT}` ));


