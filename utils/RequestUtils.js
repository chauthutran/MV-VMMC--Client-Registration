const { default: fetch } = require("node-fetch");

  
class RequestUtils {

    // https://data.psi-mis.org/api/trackedEntityInstances.json?program=q2Ng4S8BfO0&fields=trackedEntityInstance,attributes&ouMode=DESCENDANTS&ou=LerLJqt8r7y&skipPaging=true&filter=LoGHwYUQZ9y:IN:TEST;TEST%20TEST
	constructor() {
		this.baseURL = "https://data.psi-mis.org/api/";
		this.URL_QUERY_TEIS = this.baseURL + "trackedEntityInstances.json?program=q2Ng4S8BfO0&fields=trackedEntityInstance,attributes&ouMode=ALL&skipPaging=true";
        this.fullNameFilter = "&filter=LoGHwYUQZ9y";
	};

    sendGetRequest = function( filter, exeFunc ) {
        let url = this.URL_QUERY_TEIS + this.fullNameFilter + filter;
        console.log(url);

        // "username": "cws_dws_pwa"
        fetch(url, {
            method:'GET', 
            headers: {'Authorization': 'Basic Y3dzX2R3c19wd2E6QGFWWGlXdlZxNUxidmZRdw==' }
        })
        .then(response => response.json())
        .then((result) => {
            exeFunc({status: "success", data: result});
        }).catch((error) => {
            exeFunc({status: "error", data: error});
        });
	};

    sendPostRequest = function( url, data, exeFunc ) {
        console.log(url);

        // "username": "cws_dws_pwa"
        fetch(url, {
            headers: {"Content-Type": "application/json", 'Authorization': 'Basic Y3dzX2R3c19wd2E6QGFWWGlXdlZxNUxidmZRdw=='},
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((result) => {
            if( result.error )
            {
                exeFunc({status: "error", data: result.error.message});
            }
            else {
                exeFunc({status: "success", data: result});
            }
        }).catch((error) => {
            exeFunc({status: "error", data: error});
        });
	};

}

module.exports = {
    RequestUtils
};
  