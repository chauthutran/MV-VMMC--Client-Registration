  
const {RequestUtils} = require("./RequestUtils");
const RESTUtils = new RequestUtils();


class ClientUtils {

	constructor() { 
        this.total = 0;
        this.processingIdx = 0;
        this.fullNameAttributeId = "LoGHwYUQZ9y";
        this.fullNameMatchNo = 0;
        this.firstNameMatchNo = 0;
        this.lastNameMatchNo = 0;

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

    checkTEIs2 = async function() {
       
        var me = this;
        var itemList = this.data;
        
        for ( var i = 0; i < itemList.length; i++ )
        {
            var item = itemList[i];
            item.result = {};

            var searchedFullNameList = await me.checkTeiByName( item, "Name" );
            item.result[ "Name" ] = me.resolveItem("Name", searchedFullNameList);

            var searchedFirstNameList = await me.checkTeiByName( item, "First Name" );
            item.result[ "First Name" ] = me.resolveItem("First Name", searchedFirstNameList);

            var searchedLastNameList = await me.checkTeiByName( item, "Last Name" );
            item.result[ "Last Name" ]  = me.resolveItem("Last Name", searchedLastNameList);
        }

        itemList.push({ perfectMatch: me.fullNameMatchNo, firstNameMatch: me.firstNameMatchNo, lastNameMatch: me.lastNameMatchNo});

        return itemList;
    }

    resolveItem = function( prop, searchedList )
    {
        var me = this;
        var result = [];
        
        for( var i=0; i<searchedList.length; i++)
        {
            var item = searchedList[i];
            var fullNameAttrVal = item.attributes.filter(function(attrVal) { return attrVal.attribute == me.fullNameAttributeId } );

            result.push( fullNameAttrVal[0].value + "(" + ( item.trackedEntityInstance ) + ")" );
        }

        if( prop == "Name") me.fullNameMatchNo++;
        else if( prop == "First Name") me.firstNameMatchNo++;
        else if( prop == "Last Name") me.lastNameMatchNo++;

        return result;
    }

    checkTeiByName = async function( item, nameProp )
    {
        var filter = ":LIKE:" + item[ nameProp ];
        var data = await RESTUtils.sendGetRequestAS( filter );
        return data.trackedEntityInstances;
    }

}

module.exports = {
    ClientUtils
};
  