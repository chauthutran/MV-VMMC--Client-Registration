'use strict';

const fs = require('fs');
const express = require('express');
var cors = require('cors');

const bodyParser = require("body-parser");


const {ClientUtils} = require("./utils/ClientUtils");
const Utils = new ClientUtils();



const PORT = process.env.PORT || 3111;
const INDEX = '/index.html';


const server = express()
.use(cors())
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.get('/', (req, res) => {
	res.send('MV VMMMC - Client Registration server started !!!');
})
.post("/search", (req, res) => {
	
	fs.readFile('list.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		
		Utils.checkTEIs(JSON.parse(data), function(response){
			res.send(response);
		});
	});
	
})
.listen(PORT, () => console.log(`Listening on ${PORT}` ));
