
/*
	27.05.'17
	v01
	jarvis owl
*/

String.prototype.replaceAll = function(search, replacement) {
		//I have no clue -- copied from:https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
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
   var intervalMS = 2000;
   setInterval(function() {

		//get tail
		$.post('tail.php',{},
			function(data)
			{
				//handle return
				//one timestamp = 25 chars
				//alert(data[24] +','+ data[25] +','+ data[26]);
				//data.insert(25,"\n")
				//data.splice(5,0,"ENTER");
				myString = data.replaceAll('\n','<br>');

				//data[25] = "9";
				//alert(typeof data + ',' + data);
				//alert(typeof myString + ',' + myString);
				$('#tail').html(myString);
			});
   }, intervalMS);
});
