window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();
function executeJS(jspath)
{
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
		if (fileData) Function(fileData)();
	}
	doGET(browser.runtime.getURL(jspath),handleFileData);
}
String.prototype.replaceChar =function(i,a)
{
	return this.substring(0,i)+a+this.substring(i+1,this.length);
}
String.prototype.removeChar = function(i)
{
	return this.substring(0,i)+this.substring(i+1,this.length);
}
function alg_changelog()
{
	if (!localStorage.format) localStorage.setItem("format",0);
	let f=document.createElement("button");
  let r=document.createElement("button");
  f.setAttribute("id","format");
  r.setAttribute("id","raw");
  f.setAttribute("style","right:20px");
  r.setAttribute("style","right:100px");
  f.innerText="Formatted";
  r.innerText="Raw";
  let d=document.createElement("div");
  d.setAttribute("style","float:right");
  d.appendChild(r);
  d.appendChild(f);
  document.body.insertBefore(d,document.body.childNodes[0]);
	let st=document.createElement("style");
	st.innerHTML='button {height:40px;font-size:10pt;height:30px;width:80px;top:8px;position:fixed}\nul, p {margin:20px;}\nh3 {margin:8px;font-size:15pt;font-weight:bold;}';
	document.head.appendChild(st);
	let pre=document.getElementsByTagName("pre")[0];
	var text=pre.innerText;
	var date=text.match(/(\d{4}[-]\d{2}[-]\d{2})/g);
	//Format
	text=text.replace(/(\d{4}[-]\d{2}[-]\d{2})/g,'<h3 id="$1">$1</h3>');
	text=text.replace(/[*].+/g,function(v) {
		v=v.removeChar(0);
		v=v.replaceChar(v.indexOf(" ")+1,v[v.indexOf(" ")+1].toUpperCase());
		return "<ul><li>"+v+"</li></ul>";
	});
	text=text.replace(/[\n]\s*[-]\s.+/g,function(v) {
		v=v.replace(/([\n])\s*[-]\s/g,"$1&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp– ");
		return v.replaceChar(v.indexOf("– ")+2,v[v.indexOf("– ")+2].toUpperCase());
	});
	text=text.replace(/([\n])\s*([+]\s.+)/g,"$1&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$2");
	text=text.replace(/[\n]+/g,'<p>');
	//
	let format=document.createElement("div");
	format.setAttribute("class","boxformat");
	format.setAttribute("style","color: rgb(207, 216, 221);background-color:#333;font-family:Verdana,sans-serif;display:block");
	format.innerHTML=text;
	document.body.appendChild(format);
	let nav=document.createElement("div");
	nav.setAttribute("style","position:fixed;right:200px;top:8px");
	nav.innerHTML="<h5 style='margin:0px;margin-bottom:5px'>Filter by date:</h5>";
	let secdate=document.createElement("select");
	secdate.innerHTML="<option disabled selected value='All'>All Changelogs</option>";
	secdate.innerHTML+="<option value='"+date[0]+"'>"+date[0]+" (latest)</option>";
	for (var i=1;i<date.length;i++) secdate.innerHTML+="<option value='"+date[i]+"'>"+date[i]+"</option>";
	secdate.addEventListener("change", function(e) {
		e.preventDefault();
	  if (secdate.options.selectedIndex>0) window.location.hash=date[secdate.options.selectedIndex-1];
	})
	nav.appendChild(secdate);
	format.appendChild(nav);
	if (localStorage.format==1) {
		f.setAttribute("style","right:20px;font-weight:bold");
		f.disabled=true;
		r.disabled=false;
		pre.setAttribute("style","display:none;"); //Can't use pre.hidden=true here
		nav.hidden=false;
		format.hidden=false;
		document.body.style="margin:0px;background-color:#333";
		f.removeAttribute("title");
		r.setAttribute("title",'Display original changelog\nClick or press "/" to switch');
	}
	else {
		r.setAttribute("style","right:100px;font-weight:bold");
		r.disabled=true;
		f.disabled=false;
		pre.setAttribute("style","word-wrap: break-word; white-space: pre-wrap;");
		nav.hidden=true;
		format.hidden=true;
		document.body.style="margin:8px;";
		r.removeAttribute("title");
		f.setAttribute("title",'Display formatted changelog\nClick or press "/" to switch');
	}
	r.addEventListener("click",function() {
		this.setAttribute("style","right:100px;font-weight:bold");
		this.removeAttribute("title");
		f.setAttribute("style","right:20px");
		f.disabled=false;
		this.disabled=true;
		localStorage.format=0;
		pre.setAttribute("style","word-wrap: break-word; white-space: pre-wrap;");
		nav.hidden=true;
		format.hidden=true;
		document.body.style="margin:8px;";
		f.setAttribute("title",'Display formatted changelogs\nClick or press "/" to switch');
	});
	f.addEventListener("click",function() {
		this.setAttribute("style","right:20px;font-weight:bold");
		this.removeAttribute("title");
		r.setAttribute("style","right:100px");
		this.disabled=true;
		r.disabled=false;
		localStorage.format=1;
		pre.setAttribute("style","display:none;");
		nav.hidden=false;
		format.hidden=false;
		document.body.style="margin:0px;background-color:#333";
		r.setAttribute("title",'Display original changelogs\nClick or press "/" to switch');
		secdate.options.selectedIndex=0;
	});
	document.addEventListener("keypress", function(event) {
	  if (event.keyCode === 47) {
	   event.preventDefault();
		 localStorage.format=1-localStorage.format;
	   if (localStorage.format==1) f.click();
		 else r.click();
	  }
	});
}
function alg_modding()
{
	executeJS("/js/main/tools/moddingtools/tools-list.js");
	function isTop () {
    try {
        return window.self !== window.top;
    }
		catch (e) {
        return false;
    }
	}
	if (!isTop()) window.open("https://starblast.io/modding.html","_self");
}
function alg_main()
{
	document.onkeyup = function(e) {
  if (e.ctrlKey && e.shiftKey && e.which == 83) {
    document.getElementsByClassName("sbg sbg-gears")[0].click();
  } else if (e.ctrlKey && e.shiftKey && e.which == 65) {
    document.getElementsByClassName("sbg sbg-info")[0].click();
  } else if (e.ctrlKey && e.shiftKey && e.which == 76) {
    document.getElementsByClassName("full-changelog")[0].click();
  }
};
}
switch (location.host)
{
	case "starblast.io":
	{
		switch (location.pathname)
		{
			case "/shipeditor/":
				executeJS("/js/main/tools/ShipEditorTools/tools-list.js");
				break;
			case "/changelog.txt":
				if (location.hash!="") location.hash="";
				alg_changelog();
				break;
			case "/":
				alg_main();
				break;
		}
		break;
	}
	case "starblast.data.neuronality.com":
	{
		switch (location.pathname)
		{
			case "/modding/moddingcontent.html":
				alg_modding();
				break;
		}
		break;
	}
}
