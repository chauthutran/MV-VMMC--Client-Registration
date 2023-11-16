
const { RequestUtils } = require("./RequestUtils");
const RESTUtils = new RequestUtils();


class ClientUtils {

	constructor() 
	{
		this.total = 0;
		this.processingIdx = 0;
		this.fullNameAttributeId = "LoGHwYUQZ9y";
		this.fullNameMatchNo = 0;
		this.firstNameMatchNo = 0;
		this.lastNameMatchNo = 0;

		// this.data = [ { "Name": "William Thomas",..
	};

	checkTEIs2 = async function (inputData, statusJson) {

		var me = this;
		var itemList = inputData; // this.data;

		for (var i = 0; i < itemList.length; i++) {
			statusJson.processingIdx = i;

			var item = itemList[i];
			item.result = {};

			try {
				var searchedFullNameList = await me.checkTeiByName(item, "Name", i + '_Name' );
				item.result["Name"] = me.resolveItem("Name", searchedFullNameList);

				if (item.result["Name"].length == 0) 
				{
					var searchedFirstNameList = await me.checkTeiByName(item, "First Name", i + '_FirstName');
					item.result["First Name"] = me.resolveItem("First Name", searchedFirstNameList);

					var searchedLastNameList = await me.checkTeiByName(item, "Last Name", i + '_LastName');
					item.result["Last Name"] = me.resolveItem("Last Name", searchedLastNameList);
				}
			}
			catch (errMsg) { }
		}

		itemList.push({ perfectMatch: me.fullNameMatchNo, firstNameMatch: me.firstNameMatchNo, lastNameMatch: me.lastNameMatchNo });

		return itemList;
	}

	resolveItem = function (prop, searchedList) {
		var me = this;
		var result = [];

		if (searchedList && searchedList.length > 0) 
		{
			for (var i = 0; i < searchedList.length; i++) 
			{
				try {
					var item = searchedList[i];

					var fullNameAttrVal = item.attributes.find(attrVal => attrVal.attribute == me.fullNameAttributeId);
					
					var strVal = fullNameAttrVal.value + ' [ UID: ' + item.trackedEntityInstance + ', Created: ' + item.created + ', LastUpdated: ' + item.lastUpdated + ']'

					if (fullNameAttrVal) result.push( strVal );
				}
				catch (errMsg) { console.log('ERROR in searchedList, ' + errMsg); }
			}

			if (prop == "Name") me.fullNameMatchNo++;
			else if (prop == "First Name") me.firstNameMatchNo++;
			else if (prop == "Last Name") me.lastNameMatchNo++;
		}

		return result;
	}

	checkTeiByName = async function (item, nameProp, progIdxName ) {
		var result = [];

		try {
			var filter = ":LIKE:" + item[nameProp];
			var data = await RESTUtils.sendGetRequestAS(filter, progIdxName);
			result = data.trackedEntityInstances;
		}
		catch (errMsg) {
			item.error = "ERROR in searching name: " + item[nameProp] + ", item FullName: " + item.Name;
			console.log('ERROR in checkTeiByName, ' + errMsg);
		}

		return result;
	}

}

module.exports = {
	ClientUtils
};
