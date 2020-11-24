function init()
{
	var first = document.getElementById("first");
	first.style.color = "green";
	
	var p = document.getElementsByTagName("p");
	for(var i = 0; i < p.length; i++)
	{
		 p[i].style.fontStyle = "italic";
	}
	
	var h1 = first.previousSibling;
	h1.style.color = "red";
	
	var p2 = first.nextSibling;
	p2.style.color = "pink";
}

window.onload = init;
