
/*
	27.05.'17
	v01
	jarvis owl
*/

//function to replace all specified characters in a string
String.prototype.replaceAll = function(search, replacement) {
		//I have no clue -- copied from:https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

//splice function
String.prototype.splice = function(idx, rem, str) {
    //source: https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};




function updateSlider(val, nr)
{

	//sets slider #nr, amount
	var str = "sliderValue";
	str += (nr+1);
	var sliderout =document.getElementById(str);
	//write value into html
	sliderValue[nr]=parseInt(val);
	sliderout.innerHTML=''+sliderValue[nr]+' %';

}


$(document).ready(function()
{
	// alert('jq worx on ready');
});

//refresh graphs without reload complete page
$(function() {
   var intervalMS = 10000;
   setInterval(function() {
      $("#actual").prop("src", "images/actual.jpg?" + +new Date());


   }, intervalMS);
});

$(function() {
   var intervalMS = 5000;
   setInterval(function() {

		//get tail
		$.post('tail.php',{},
			function(data)
			{
				//handle return
				//one timestamp = 25 chars

				myString = data.replaceAll('\n','<br>');
        //alert(myString.splice(22,0,','));

				$('#tail').html(myString);
			});
   }, intervalMS);
});
