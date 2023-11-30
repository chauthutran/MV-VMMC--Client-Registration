'use strict';

const fs = require('fs');
const moment = require( 'moment');
const listJson = require('./Issuelist_vc.json');

const {RequestUtils} = require("./utils/RequestUtils");
const RESTUtils = new RequestUtils();


var inputData = listJson; //.slice(0, 1);

var url = 'https://api.psi-connect.org/R_LA.bot?action-details=3';
var iCount = 0;

// Format Data File Output
inputData.forEach( async item => 
{
	try
	{
		if ( item.payload )
		{
			if ( item.payload.activity && item.payload.activity.id )
			{
				item.payload.activity.id = item.payload.activity.id + '1';

			
				console.log( item.payload );
				console.log( url );
	
				var outJson = await RESTUtils.sendPostRequest(url, item.payload);
	
				iCount++;
	
				console.log( outJson );
	
				console.log( "------------" );
				console.log( "  iCount: " + iCount );
			}			
		}
	}
	catch ( errMsg ) { console.log( 'ERROR in inputData, ' + errMsg ); }
});		 
