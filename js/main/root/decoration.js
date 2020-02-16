function locatehrefJS(jspath)
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
		if (fileData) location.href='javascript:'+fileData+"void 0;";
	}
	doGET(chrome.runtime.getURL(jspath),handleFileData);
}
function des_modding()
{
  let icon=document.createElement("link");
  icon.setAttribute("rel","icon");
  icon.setAttribute("type","image/png");
  icon.setAttribute("href","https://starblast.io/static/img/icon64.png");
  document.head.appendChild(icon);
  //Can't access cross-domain iframe in Modding, so the decoration stops here
}
function des_shipeditor()
{
  function copyToClipboard(text) {
		var dummy = document.createElement("textarea");
	  document.body.appendChild(dummy);
	  dummy.value = text;
	  dummy.select();
	  document.execCommand('copy');
	  document.body.removeChild(dummy);
  }
	locatehrefJS("/js/resources/ShipEditor/5.js");
  document.getElementsByTagName("title")[0].innerText="Starblast Ship Editor";
  des_cmn();
  document.getElementsByClassName("loadship")[0].setAttribute("data-tooltip","Load Ship From File");
  let a=document.getElementsByClassName("header")[0];
  a.innerHTML=a.innerHTML.substring(0,a.innerHTML.lastIndexOf('>')+1);
  let title=document.createElement("h");
  title.setAttribute("style","font-weight: bold;");
  title.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;SHIP EDITOR\n          ";
  a.appendChild(title);
  let head=document.createElement("div");
  head.setAttribute("style","float:right");
  a.getElementsByTagName("a")[0].setAttribute("style","position:relative;margin:5px");
  head.appendChild(a.getElementsByTagName("a")[0]);
  let item=head.firstChild.cloneNode(head.childNodes[0]);
  head.insertBefore(item,head.childNodes[0]);
  item.setAttribute("href","https://starblastio.gamepedia.com/Ship_Editor_Tutorial");
  item.setAttribute("target","wiki_documentation");
  item.getElementsByTagName("i")[0].setAttribute("class","sbg sbg-help-full");
  item.setAttribute("style","position:relative");
  item.innerHTML=item.innerHTML.substring(0,item.innerHTML.lastIndexOf('>')+1)+" Ship Editor Tutorial\n        ";
  a.appendChild(head);
  let bar=document.getElementsByClassName("iconsbar editoriconsbar")[0];
  bar.removeChild(bar.childNodes[5]);
  let d=bar.removeChild(bar.childNodes[10]);
  bar.insertBefore(d,bar.childNodes[15]);
  let doc=document.createElement("a");
  doc.setAttribute("href","https://starblastio.gamepedia.com/Ship_Editor_Tutorial");
  doc.setAttribute("target","_blank");
  doc.setAttribute("data-tooltip","Documentation");
  doc.setAttribute("id","Documentation");
  let i=document.createElement("i");
  i.setAttribute("class","fa fa-fw fa-book");
  doc.appendChild(i);
  bar.insertBefore(doc,bar.childNodes[15]);
  let copy=document.createElement("a");
  copy.setAttribute("href","#");
  copy.setAttribute("data-tooltip","Copy to Clipboard");
  copy.setAttribute("id","copy");
  let i2=document.createElement("i");
  i2.setAttribute("class","fa fa-fw fa-clipboard");
  copy.appendChild(i2);
  copy.addEventListener("click", function() {
		locatehrefJS("/js/resources/ShipEditor/2.js");
		this.setAttribute("data-tooltip","Copied!");
		setTimeout(function(){copy.setAttribute("data-tooltip","Copy to Clipboard")},500);
  })
  bar.insertBefore(copy,bar.childNodes[4]);
  bar.insertBefore(bar.childNodes[0],bar.childNodes[4]);
  let code=document.createElement("span");
  code.setAttribute("style","margin-right:20px;font-weight:bold");
  code.innerHTML="Ship Code";
  bar.insertBefore(code,bar.childNodes[0]);
  let modcopy=document.createElement("a");
  modcopy.setAttribute("href","#");
  modcopy.setAttribute("id","modcopy");
  modcopy.setAttribute("data-tooltip","Copy Mod Code");
  modcopy.innerHTML='<i class="fa fa-fw fa-copy"></i>';
  bar.insertBefore(modcopy,bar.childNodes[20]);
  modcopy.addEventListener('click', function()
  {
		locatehrefJS("/js/resources/ShipEditor/1.js");
  });
  let s=bar.removeChild(bar.childNodes[7]);
  bar.removeChild(bar.childNodes[11]);
  bar.insertBefore(s,bar.childNodes[18]);
  document.getElementById("loadModel").setAttribute("data-tooltip","Load Ship");
  document.getElementById("loadModel").innerHTML='<i class="sbg sbg-fly-full" style="font-size:17pt;margin-left:3px;margin-right:3px"></i>';
  document.getElementById("modExport").setAttribute("data-tooltip","Mod Export");
  document.getElementById("modExport").innerHTML='<i class="fa fa-fw fa-download"></i>';
	document.getElementById("modExport").addEventListener("click", function() {
		locatehrefJS("/js/resources/ShipEditor/4.js");
	});
}
function des_main()
{
  if (localStorage.ECPVerified=="yes")
  {
    let add=document.createElement("div");
    add.setAttribute("class","textcentered community changelog-new");
    add.setAttribute("data-translate-base","developer");
    add.setAttribute("lang","en");
    add.setAttribute("style","display:block;");
    let alpha=document.createElement("a");
    let alpha1=document.createElement("a");
    alpha.appendChild(document.createElement("i"));
    alpha1.appendChild(document.createElement("i"));
    alpha.appendChild(document.createElement("br"));
    alpha1.appendChild(document.createElement("br"));
    alpha.setAttribute("href","https://starblast.io/shipeditor/");
    alpha.firstElementChild.setAttribute("class","sbg sbg-fly-full");
    alpha.innerHTML+="Ship Editor";
    alpha1.setAttribute("href","https://starblast.io/modding.html");
    alpha1.firstElementChild.setAttribute("class","sbg sbg-modding");
    alpha1.innerHTML+="Mod Editor";
    alpha.setAttribute("target","_blank");
    alpha1.setAttribute("target","_blank");
    add.appendChild(alpha);
    add.appendChild(alpha1);
    document.getElementsByClassName("bottom-left")[0].insertBefore(add,document.getElementsByClassName("bottom-left")[0].childNodes[2]);
    let al=document.createElement("a");
    al.setAttribute("href","https://dankdmitron.github.io/");
    al.setAttribute("alt","Starblast Standalone by Dank Dmitron");
    al.setAttribute("style","text-decoration:underline");
    al.innerText="Starblast Standalone";
		let oal=document.createElement("p");
		oal.setAttribute("style","text-align:center;");
		oal.appendChild(al);
		let more=document.getElementsByClassName("changelog-new")[1].getElementsByTagName("div")[0];
		more.appendChild(oal);
  }
  var modeicon={
    team:"👥",
    survival:"☠️",
    deathmatch:"🏆",
    invasion:"🛸",
    modding:"🛠️",
    private:"🔒"
  }
  var modid={
    intrusion: "Alien Intrusion",
    useries: "U-Series",
    racing: "Racing",
    prototypes: "Prototypes",
    nauticseries: "Nautic Series",
    battleroyale: "Battle Royale"
  }
  let synctitle=document.head.getElementsByTagName("title")[0];
  synctitle.innerText="Starblast";
  document.getElementsByClassName("textprogress")[0].addEventListener("DOMSubtreeModified", setmapname=function() {
    var title=this.innerText;
    if (title.indexOf("Warping to system ")!=-1) {
        this.removeEventListener("DOMSubtreeModified",setmapname);
        title=title.replace(/Warping to system /,"");
        setTimeout(function() {
          var xhr = new XMLHttpRequest();
        	xhr.open('GET', '/simstatus.json', true);
        	xhr.onreadystatechange = function() {
          	if (xhr.readyState === 4)  {
            		var text=xhr.responseText;
                var b=0;
        			  eval("var data="+text);
  				      for (var i=0;i<data.length;i++) {
                    for (var j=0;j<data[i].systems.length;j++) {
                      	if ((data[i].systems[j].name==title) && (window.location.href=="https://starblast.io/" || window.location.href=="https://starblast.io/#" || window.location.href.replace("https://starblast.io/#","")==data[i].systems[j].id))
                        {
                          switch(data[i].systems[j].mode)
                          {
                            case "modding":
                              synctitle.innerText="Starblast – "+modeicon[data[i].systems[j].mode]+title+" System ("+modid[data[i].systems[j].mod_id]+")";
                              break;
                            default:
                              synctitle.innerText="Starblast – "+modeicon[data[i].systems[j].mode]+title+" System";
                          }
                          b=1;
                        }
  					        }
                }
                if (b!=1) synctitle.innerText="Starblast – "+modeicon['private']+title+" System";
            }
        	};
        	xhr.send(null);
        },1000);
    }
  })
  document.getElementsByClassName("modalbody")[0].addEventListener('DOMSubtreeModified', change=function() {
    this.removeEventListener("DOMSubtreeModified",change);
    switch (document.getElementsByClassName("modaltitle")[0].innerText) {
      case "Changelog":
        this.innerHTML=this.innerHTML.replace(/\*\s([^<]+)(<br>)+/g,function(v) {
          v=v.substring(v.indexOf("*")+1,v.indexOf("<br>"));
          v=v.replaceChar(v.indexOf(" ")+1,v[v.indexOf(" ")+1].toUpperCase());
          return "<ul><li>"+v+"</li></ul>";
        }).replace(/^<p (.+)<\/p>$/g,"<div $1</div>").replace(/(-\s[^<]+)(<br>)+/g, function(v) {
          v=v.substring(0,v.indexOf("<br>"));
          v=v.replaceChar(v.indexOf(" ")+1,v[v.indexOf(" ")+1].toUpperCase());
          return '<p style="margin-inline-start:40px">'+v+"</p>";
        }).replace(/(\+\s[^<]+)(<br>)+/g,'<p style="margin-inline-start:80px">$1</p>');
        break;
      case "INFO":
        this.innerHTML=this.innerHTML.replace(/\*/g,"•");
        break;
      case "Your custom game":
        let copy=document.createElement("button");
        copy.setAttribute("style","margin:10px");
        copy.setAttribute("class","donate-btn");
        copy.setAttribute("id","copylink");
        copy.innerText="Copy link";
        copy.addEventListener("click", function() {
					document.getElementsByClassName("stats textcentered")[0].getElementsByTagName("input")[0].click();
					document.execCommand('copy');
				})
        if (document.getElementsByClassName("stats textcentered")[0]) {
          let stats=document.getElementsByClassName("stats textcentered")[0];
          stats.insertBefore(copy, stats.childNodes[5]);
          stats.insertBefore(document.createElement("br"),stats.childNodes[5]);
        }
        break;
			case "Modding Space":
				if (document.getElementsByClassName("modecp")[0]) document.getElementsByClassName("modecp")[0].setAttribute("style","z-index:1");
				break;
    }
    this.addEventListener('DOMSubtreeModified', change);
  });
}
function des_standalone()
{
  des_cmn();
  document.head.getElementsByTagName("title")[0].innerText="Starblast Standalone";
}
function des_changelog()
{
  des_cmn();
  let a=document.createElement("title");
  a.innerText="Starblast Changelog";
  document.head.appendChild(a);
}
function des_moddingdata()
{
	des_cmn();
  let a=document.getElementsByClassName("header")[0];
  a.innerHTML=a.innerHTML.substring(0,a.innerHTML.lastIndexOf('>')+1);
  let title=document.createElement("h");
  title.setAttribute("style","font-weight: bold;");
  title.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;MODDING\n          ";
  a.appendChild(title);
  document.getElementsByClassName("iconsbar editoriconsbar")[0].setAttribute("style","margin-right:20px;font-weight:bold");
  let sp=document.createElement("span");
  sp.setAttribute("class","separator");
	document.getElementsByClassName("iconsbar editoriconsbar")[0].appendChild(sp);
	let copy=document.createElement("a");
	copy.setAttribute("data-tooltip","Copy Mod Code");
	copy.setAttribute("href","#");
	copy.setAttribute("id","copy");
	let i=document.createElement("i");
	i.setAttribute("class","fa fa-fw fa-clipboard");
	copy.appendChild(i);
	copy.addEventListener("click", function() {
		locatehrefJS("/js/resources/ShipEditor/2.js");
		this.setAttribute("data-tooltip","Copied!");
		setTimeout(function(){copy.setAttribute("data-tooltip","Copy Mod Code")},500);
	});
	let test=document.createElement("a");
	test.setAttribute("style","display:none");
	test.setAttribute("id","test");
	test.setAttribute("data-tooltip","Open Game Frame");
	test.setAttribute("href","#");
	let i3=document.createElement("i");
	i3.setAttribute("class","fa fa-fw fa-gamepad");
	test.appendChild(i3);
	test.addEventListener("click",function() {
		location.href='javascript:$("#terminal").terminal().exec("test",true);void 0;';
	});
	let consl=document.getElementsByClassName("iconsbar runiconsbar")[0];
	consl.setAttribute("style","text-align:right");
	let bar=document.getElementsByClassName("iconsbar editoriconsbar")[0];
	document.head.getElementsByTagName("style")[0].innerHTML+='select{font-family:Lato,Sans-Serif;font-size:1em;padding:3px 5px;color:white;background:hsl(200,60%,15%);border:1px solid hsl(200,60%,10%);vertical-align:middle;width:150px;box-sizing:border-box}'
	var reg=["Asia","America","Europe"];
	let regc=document.createElement("select");
	regc.setAttribute("id","region-select");
	regc.innerHTML+='<option disabled>Select region</option>';
	for (var h=0;h<=2;h++) regc.innerHTML+='<option id="'+reg[h]+'">'+reg[h]+'</option>';
	regc.options.selectedIndex=reg.indexOf(document.getElementsByClassName("terminal-output")[0].getElementsByTagName("div")[3].innerText.replace(/Region\sset\sto\s/g,""))+1;
	regc.addEventListener("change",function() {
		location.href='javascript:$("#terminal").terminal().exec("region '+reg[regc.options.selectedIndex-1]+'",true);void 0;';
	});
	let help=document.createElement("a");
	help.setAttribute("href","#");
	help.innerText="Console Help";
	help.addEventListener("click", function() {
		location.href='javascript:$("#terminal").terminal().exec("help",true);void 0;';
	});
	let space=document.createElement("span");
	space.setAttribute("class","separator");
	let space1=document.createElement("span");
	space1.setAttribute("class","separator");
	if (!localStorage.showtick) localStorage.setItem("showtick",1);
	let sh=document.createElement("a");
	sh.setAttribute("href","#");
	sh.setAttribute("id","showtick");
	sh.innerHTML='<i class="fa fa-fw fa-code" style="color:#EEE"></i>';
	if (localStorage.showtick==1)
	{
	  sh.setAttribute("data-tooltip","Hide in-game tick");
	  sh.getElementsByTagName("i")[0].setAttribute("style","color:#EEE");
	}
	else
	{
	  sh.setAttribute("data-tooltip","Show in-game tick");
	  sh.getElementsByTagName("i")[0].setAttribute("style","color:grey");
	}
	sh.addEventListener('click', function()
	{
	  localStorage.showtick=1-localStorage.showtick;
	  if (localStorage.showtick==1)
	  {
	    sh.setAttribute("data-tooltip","Hide in-game tick");
	    sh.getElementsByTagName("i")[0].setAttribute("style","color:#EEE");
	  }
	  else
	  {
	    sh.setAttribute("data-tooltip","Show in-game tick");
	    sh.getElementsByTagName("i")[0].setAttribute("style","color:grey");
	  }
	});
	let clear=document.createElement("a");
	clear.setAttribute("href","#");
	clear.innerText="Clear Console";
	clear.addEventListener("click", function() {
		locatehrefJS("/js/resources/Modding/3.js")
	});
	consl.appendChild(regc);
	consl.appendChild(space1);
	consl.appendChild(sh);
	consl.appendChild(space);
	consl.appendChild(clear);
	consl.appendChild(bar.firstChild.cloneNode(true));
	consl.appendChild(help);
	bar.insertBefore(copy,bar.childNodes[7]);
	bar.removeChild(bar.childNodes[10]);
	let run=document.createElement("a");
	run.setAttribute("id","runstopmod");
	run.setAttribute("data-tooltip","Run Mod");
	run.setAttribute("cmd","start");
	run.setAttribute("href",'#');
	let i2=document.createElement("i");
	i2.setAttribute("class","fa fa-fw fa-play");
	run.appendChild(i2);
	bar.insertBefore(run, bar.childNodes[10]);
	bar.insertBefore(test, bar.childNodes[12]);
	run.addEventListener("click", function() {
		locatehrefJS("/js/resources/Modding/1.js");
	});
	locatehrefJS("/js/resources/Modding/2.js");
}
function des_cmn()
{
	let icon=document.createElement("link");
  icon.setAttribute("rel","icon");
  icon.setAttribute("type","image/png");
  icon.setAttribute("href","https://starblast.io/static/img/icon64.png");
  document.head.appendChild(icon);
}
function des_client()
{
	document.getElementsByClassName("modalbody")[0].addEventListener('DOMSubtreeModified', change=function() {
    this.removeEventListener("DOMSubtreeModified",change);
    switch (document.getElementsByClassName("modaltitle")[0].innerText) {
      case "":
				document.getElementsByClassName("modaltitle")[0].innerText="Your custom game";
        setTimeout(function() {
          document.getElementsByClassName("textcentered")[1].innerHTML+='<br><button id="copylink" style="margin:0px" class="donate-btn">Copy link</button>';
					document.getElementById("copylink").addEventListener("click", function() {
						document.getElementsByClassName("textcentered")[1].getElementsByTagName("input")[0].click();
						document.execCommand('copy');
					})
        },500);
				console.log(document.getElementsByClassName("textcentered")[1]);
        break;
    }
    this.addEventListener('DOMSubtreeModified', change);
  });
	document.getElementsByClassName("choices")[0].removeChild(document.getElementsByClassName("choices")[0].lastElementChild);
}
switch (location.host)
{
	case "starblast.io":
	{
		switch(location.pathname)
		{
			case "/shipeditor/":
				des_shipeditor();
				break;
			case "/modding.html":
				des_modding();
				break;
			case "/changelog.txt":
				des_changelog();
				break;
			case "/mobile.html":
				break;
			case "/app.html":
				des_client();
				break;
			case "/":
				des_main();
				break;
			default:
				des_cmn();
		}
		break;
	}
	case "dankdmitron.github.io":
		des_standalone();
		break;
	case "starblast.data.neuronality.com":
	{
		switch (location.pathname)
		{
			case "/modding/moddingcontent.html":
				des_moddingdata();
				break;
			default:
				des_cmn();
		}
		break;
	}
}
