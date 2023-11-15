  
const {RequestUtils} = require("./RequestUtils");
const RESTUtils = new RequestUtils();


class ClientUtils {

	constructor() { 
        this.total = 0;
        this.processingIdx = 0;

        this.data = [
            {
              "Name": "William Thomas",
              "First Name": "William",
              "Last Name": "Thomas"
            },
            {
              "Name": "Tarsizio Clement",
              "First Name": "Tarsizio",
              "Last Name": "Clement"
            }
        ];
    };

    checkTEIs = function( exeFunc ) {
       
        var me = this;
        
        var dataList = this.makeIndexForList(this.data);

        var result = {data: {perfectMatch: [], firstNameMatch: [], lastNameMatch: [] }};
        
        me.checkTEIs_ByProperty(dataList, "Name", function(responseFullName) {
            if(responseFullName.status == "success" )
            {
                result.data.perfectMatch = responseFullName.data.trackedEntityInstances;

                me.checkTEIs_ByProperty(dataList, "First Name", function(responseFirstName) {
                    if(responseFirstName.status == "success" )
                    {
                        result.data.firstNameMatch = responseFirstName.data.trackedEntityInstances;

                        me.checkTEIs_ByProperty(dataList, "Last Name", function(responseLastName) {
                            if(responseLastName.status == "success" )
                            {
                                result.data.lastNameMatch = responseLastName.data.trackedEntityInstances;
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

    makeIndexForList = function( dataList )
    {
        var result = [];
        for( var i=0; i<dataList.length; i++ )
        {
            var item = dataList[i];
            item.idx = i;
            result[i] = item;
        }

        return result;
    }

    // checkTEIs_ByFullName = function(dataList, propName, exeFunc)
    // {
    //     var filterValueList = dataList.map(function(item){ return item[propName]});
    //     var filter = ":IN:" + filterValueList.join(";");
    //     RESTUtils.sendGetRequest(filter, undefined, function(response) {

    //         if( response.status == "success" )
    //         {
    //             var foundFullNameList = response.data.trackedEntityInstances.map(function(item){ 
    //                 return ( item.attributes.filter(function(attrValue){ return attrValue.attribute==LoGHwYUQZ9y}) ).value;
    //             });

    //             var idxList = dataList.filter(function(item) { return foundFullNameList.indexOf(item.Name) });
    //             return ( { status: "success", data: response.data.trackedEntityInstances, idxList });
    //         }
    //         else
    //         {
    //             exeFunc(response);
    //         }
    //     })
    // }

    
    checkTEIs_ByProperty = function(dataList, propName, exeFunc)
    {
        me.total = dataList.length;
        me.processingIdx = 0;

        var result = {};
        for( var i=0; i<dataList.length; i++ )
        {
            var propVal = dataList[i][propName];
            var filter = ":LIKE:" + propVal;
            RESTUtils.sendGetRequest( filter, idx, function(response) {
                
                result[response.idx] = response;
                me.processingIdx++;

                if( me.processingIdx == me.total )
                {
                    exeFunc(response);
                }
            });
        }
    }
}

module.exports = {
    ClientUtils
};
  