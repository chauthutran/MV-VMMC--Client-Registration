  
const {RequestUtils} = require("./RequestUtils");
const RESTUtils = new RequestUtils();


class ClientUtils {

	constructor() { };

    checkTEIs = function( dataList, exeFunc ) {
       
        var me = this;

        var result = {data: {perfectMatch: [], firstNameMatch: [], lastNameMatch: [] }};
        
        me.checkTEIs_ByProperty(dataList, "Name", function(responseFullName) {
            if(responseFullName.status == "success" )
            {
                result.data.perfectMatch = responseFullName.data.trackedEntityInstances;
console.log("result.data.perfectMatch: " + result.data.perfectMatch.length);
                me.checkTEIs_ByProperty(dataList, "First Name", function(responseFirstName) {
                    if(responseFirstName.status == "success" )
                    {
                        result.data.firstNameMatch = responseFirstName.data.trackedEntityInstances;
console.log("result.data.perfectMatch: " + result.data.firstNameMatch.length);

                        me.checkTEIs_ByProperty(dataList, "Last Name", function(responseLastName) {
                            if(responseLastName.status == "success" )
                            {
                                result.data.lastNameMatch = responseLastName.data.trackedEntityInstances;
console.log("result.data.lastNameMatch: " + result.data.lastNameMatch.length);
                                result.status = "success";
                                exeFunc( result );
                            }
                            else
                            {
                                exeFunc( responseLastName );
                            }
                        })
                    }
                    else
                    {
                        exeFunc( responseFirstName );
                    }
                });
            }
            else
            {
                exeFunc( responseFullName );
            }
        })
      
	};

    checkTEIs_ByProperty = function(dataList, propName, exeFunc)
    {
        var filterValueList = dataList.map(function(item){ return item[propName]});
        var filter = ":IN:" + filterValueList.join(";");
        RESTUtils.sendGetRequest(filter, function(response) {
            exeFunc(response);
        })
    }
}

module.exports = {
    ClientUtils
};
  