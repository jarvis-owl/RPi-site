
/*
	Jensen
	10.10.'16
	V7
*/

var sliderValue = [50 , 50 , 50 , 50];


function updateSlider(val, nr)
{

	//sets slider #nr, amount
	var str = "sliderValue";
	str += (nr+1);
	var sliderout =document.getElementById(str);

	//write value into html
	sliderValue[nr]=parseInt(val);
	sliderout.innerHTML=''+sliderValue[nr]+' %';


	//post values to server
	$.post('bin/process.php',
	{val1:sliderValue[0] , val2:sliderValue[1] , val3:sliderValue[2] , val4:sliderValue[3] },
	function(data)
	{
		//handle return
		//$('#feedback').html(data);
	});

}


$(document).ready(function()
{
	// alert('jq worx on ready');
});

//refresh graphs without reload complete page
$(function() {
   var intervalMS = 60000; 
   setInterval(function() {
      $("#actual").prop("src", "images/actual.jpg?" + +new Date());

   }, intervalMS);
});
