window.onload = function() {
	if(window.location.hash) {
		var link = window.location.hash.substring(1);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				var data = JSON.parse(xhr.responseText)["hero"][link];
				var source = document.getElementById("template").innerHTML;
				var template = Handlebars.compile(source);
				data.link = link;
				document.getElementById("content").innerHTML = template(data);
				document.title = data.name;
				if(data.title) {
					document.title += " - " + data.title;
				}
			}
		}
		xhr.open("GET", "data.json");
		xhr.send();
	}
	else
	{
		document.getElementById("content").innerHTML = "Error";
	}
}