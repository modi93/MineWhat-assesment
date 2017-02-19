function funFlyIn() 
{	
	// To Create Modal
	var div = document.createElement('div'); //create Modal Div
	div.id = 'flyin'; // Id To Modal
	div.innerHTML = '<div class="classModalHeaderWrapper"><div class="classModalHeaderContent"><p>Are you looking for" <b> Dersses </b>"?</p></div><div class="classModalHeaderContent"><input type="button" class="classButtonClose" id="idClose"></div></div><div classModalMainBodyWrapper><div class="classModalMainBodyContent"><div class="classModalMainContent"><img src="images/r1.jpg" id="idModalImage"></div><div class="classModalMainContent"><p>Cotton Dress</p><a href="#"><b>See More</b></a></div></div><div class="classModalMainBodyContent"><div class="classModalMainContent"><img src="images/r2.jpg" id="idModalImage"></div><div class="classModalMainContent"><p>Cotton Dress</p><a href="#"><b>See More</b></a></div></div></div>';
	document.body.appendChild(div); // adds element to body
	document.getElementById("flyin").className = "run"; //Class Name to Modal
	
	//To Close Modal 
	var modal = document.getElementById('flyin');
	var btn = document.getElementById('idClose');
	btn.onclick = function() 
	{
    	modal.style.display = "none";
	}
}