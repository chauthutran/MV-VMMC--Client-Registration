const { default: fetch } = require("node-fetch");

  
class RequestUtils {

    // https://data.psi-mis.org/api/trackedEntityInstances.json?program=q2Ng4S8BfO0&fields=trackedEntityInstance,attributes&ouMode=DESCENDANTS&ou=LerLJqt8r7y&skipPaging=true&filter=LoGHwYUQZ9y:IN:TEST;TEST%20TEST
	constructor() {
		this.baseURL = "https://data.psi-mis.org/api/";
		this.URL_QUERY_TEIS = this.baseURL + "trackedEntityInstances.json?program=q2Ng4S8BfO0&fields=trackedEntityInstance,attributes,created,lastUpdated&ouMode=DESCENDANTS&ou=LerLJqt8r7y&page=1&pageSize=4";        
        this.fullNameFilter = "&filter=LoGHwYUQZ9y";
	};

    sendGetRequestAS = async function( filter, progIdxName ) {
        let url = this.URL_QUERY_TEIS + this.fullNameFilter + filter;
        console.log( progIdxName );

        // "username": "cws_dws_pwa"
        var response = await fetch(url, {
            method:'GET', 
            headers: {'Authorization': 'Basic Y3dzX2R3c19wd2E6QGFWWGlXdlZxNUxidmZRdw==' }
        });

        return await response.json();
    };
}

module.exports = {
    RequestUtils
};
  