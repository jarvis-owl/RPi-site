
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
			//get tail
			$.post('timestamps_ln.log',{NULL},
			function(data)
			{
				//handle return
				$('#tail').html(data);
			});
   }, intervalMS);
});
