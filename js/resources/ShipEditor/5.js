String.prototype.getProperJSVariableName=function(mode){let inp=""==this?"_":this.replace(/^(\d)/g,"_$1").replace(/(=|\n|\r|\s|;)/g,"_"),s;switch(mode||""){case"":s="";break;case"strict":s="'use strict';";break;default:throw new Error("Unknown javascript mode '"+mode+"'")}try{eval(s+"var "+inp)}catch(e){let err=0;try{eval(s+"var _"+inp)}catch(er){err=1;for(let i=0;i<inp.length;i++)try{eval(s+"var "+inp.substring(0,i+1))}catch(r){inp=inp.substring(0,i)+"_"+inp.substring(i+1,inp.length)}}0==err&&(inp="_"+inp)}return inp};
Compiler.getModCode = function(src){var code=CoffeeScript.compile(src),shipdata=eval(code);shipdata.typespec=Compiler.compileShip(shipdata);var name=(shipdata.name||"unknown"+"_"+shipdata.typespec.code).getProperJSVariableName("strict");return"var "+name+" = '"+JSON.stringify(shipdata).replace(/(\')/g,"\\'")+"';"};
ShipEditor.prototype.modExport = function(){var code,name,shipdata,src;return src=this.editor.getValue(),code=CoffeeScript.compile(src),shipdata=eval(code),null!=shipdata&&(Compiler.getModCode(src))};
