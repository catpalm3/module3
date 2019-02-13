function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			
			debugCallback(mydata);
		}
	});

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

-------------------------
//original
//define AJAX 
function jQueryAjax(){
    //jQuery ajax method, help calls the correct file as in the megacity.json file
    $.ajax("data/megacity.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback
function callback(response, status, jqXHRobject){
    //tasks using the data to go here to make sure it is correct
    console.log(response);
};

//calls the document when it load
$(document).ready(jQueryAjax);

//define AJAX
function jQueryAjax(){
    //define to retain the data
    var mydata;

    //jQuery ajax method, to show the AJAX the correct file to retain
    $.ajax("data/megacity.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data if it is correct
            console.log(mydata);
        }
    });

    //double check the data again to see if it is correct
    console.log(mydata);
};

function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};
