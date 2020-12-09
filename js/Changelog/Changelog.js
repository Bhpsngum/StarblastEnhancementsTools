function doGET(path, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
					// The request is done; did it work?
					if (xhr.status == 200) {
							// ***Yes, use `xhr.responseText` here***
							callback(xhr.responseText);
					} else {
							// ***No, tell the callback the call failed***
							callback(null);
					}
			}
	};
	xhr.open("GET", path);
	xhr.send();
}

function handleFileData(fileData) {
	if (fileData) document.getElementById("Changelog").innerHTML = fileData.split("\n\r\n").map(function(i){
      let l = i.split("\n");
      return l[0].replace(/(^\d+\.\d+\.\d+)\/(.+)/,"<h2>$1</h2><h4>$2</h4>")+"<ul>"+l.slice(1,l.length).map(u => u.replace(/^\*\s(.+)/,"<li>$1</li>").replace(/\"([^"]+)\"/g,"<a href='$1' target='_blank'>$1</a>")).join("").replace(/\\n/g,"<br>")+"</ul>";
    }).join("<br>");
	console.log(fileData.split("\n\r\n"));
}
doGET(chrome.runtime.getURL("Changelog.txt"),handleFileData);
