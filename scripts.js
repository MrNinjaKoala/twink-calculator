var selected_points = 0;
var total_points = 34;

function checkboxClick(num) {
	var checkbox = document.getElementById(num);
	if (checkbox.checked == true)
	{
		selected_points = selected_points + parseInt(checkbox.value);
	} else {
		selected_points = selected_points - parseInt(checkbox.value);
	}
	
	var percent = (selected_points / total_points) * 100;
	document.getElementById("percent").innerHTML = Math.round(percent)+"% Twink";
	 

	const div = document.getElementById('rainbow');

	div.style.top = `${100-percent}vh`;
}