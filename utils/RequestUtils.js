const { default: fetch } = require("node-fetch");

  
class RequestUtils {

	constructor() {
	};

    sendGetRequestAS = async function( filter, progIdxName ) {
        let url = this.URL_QUERY_TEIS + this.fullNameFilter + filter;

        // "username": "cws_dws_pwa"
        var response = await fetch(url, {
            method:'GET', 
            headers: {'Authorization': 'Basic Y2hhdGJvdGNob2NvbGF0ZTpOeGgkS1Y2U3FrNndR' }
        });

        return await response.json();
    };

    sendPostRequest = async function( url, data ) 
    {
        // "username": "cws_dws_pwa"
        var response = await fetch( url, {
            headers: {"Content-Type": "application/json", 'Authorization': 'Basic Y2hhdGJvdGNob2NvbGF0ZTpOeGgkS1Y2U3FrNndR'},
            method: 'POST',
            body: JSON.stringify(data)
        });

        return await response.json();
	};
}

module.exports = {
    RequestUtils
};
  