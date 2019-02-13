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

//calls the document when it loads
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

//jQuery ajax method, help calls the correct file as in the megacity.json file
$(document).ready(function(){
    $.ajax("data/megacity.GeoJSON", {
        dataType: "json",
        success: function(response){
			
			//will convert json to string, then add to mydiv
            $("#mydiv").append('<br>GeoJSON data:<br>' + JSON.stringify(response));

        }
    });
});