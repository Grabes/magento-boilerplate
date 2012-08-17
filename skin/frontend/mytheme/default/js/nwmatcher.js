/*
 * Copyright (C) 2007-2012 Diego Perini
 * All rights reserved.
 *
 * nwmatcher.js - A fast CSS selector engine and matcher
 *
 * Author: Diego Perini <diego.perini at gmail com>
 * Version: 1.2.5
 * Created: 20070722
 * Release: 20120101
 *
 * License:
 *  http://javascript.nwbox.com/NWMatcher/MIT-LICENSE
 * Download:
 *  http://javascript.nwbox.com/NWMatcher/nwmatcher.js
 */(function(e){var t="nwmatcher-1.2.5",n=typeof exports=="object"?exports:(e.NW||(e.NW={}))&&(e.NW.Dom||(e.NW.Dom={})),r=e.document,i=r.documentElement,s=[].slice,o={}.toString,u,a,f,l,c,h,p,d,v,m="[#.:]?",g="([~*^$|!]?={1})",y="[\\x20\\t\\n\\r\\f]*",b="[\\x20]|[>+~][^>+~]",w="[-+]?\\d*n?[-+]?\\d*",E="\"[^\"]*\"|'[^']*'",S="\\([^()]+\\)|\\(.*\\)",x="\\{[^{}]+\\}|\\{.*\\}",T="\\[[^[\\]]*\\]|\\[.*\\]",N="\\[.*\\]|\\(.*\\)|\\{.*\\}",C="(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)",k="(?:-?[_a-zA-Z]{1}[-\\w]*|[^\\x00-\\xa0]+|\\\\.+)+",L="("+E+"|"+k+")",A=y+"("+C+"+:?"+C+"+)"+y+"(?:"+g+y+L+")?"+y,O=A.replace(L,"([\\x22\\x27]*)((?:\\\\?.)*?)\\3"),M="((?:"+w+"|"+E+"|"+m+"|"+C+"+|"+"\\["+A+"\\]|"+"\\(.+\\)|"+y+"|"+",)+)",_=".+",D="(?=[\\x20\\t\\n\\r\\f]*[^>+~(){}<>])(\\*|(?:"+m+k+")"+"|"+b+"|\\["+A+"\\]"+"|\\("+M+"\\)"+"|\\{"+_+"\\}"+"|,"+")+",P=D.replace(M,".*"),H=new RegExp(D,"g"),B=new RegExp("^"+y+"|"+y+"$","g"),j=new RegExp("^((?!:not)("+m+"|"+k+"|\\([^()]*\\))+"+"|\\["+A+"\\]"+")$"),F=new RegExp("([^,\\\\\\[\\]]+|"+T+"|"+S+"|"+x+"|\\\\."+")+","g"),I=new RegExp("(\\["+A+"\\]|"+"\\("+M+"\\)|"+"[^\\x20>+~]|\\\\.)+","g"),q=/[\x20\t\n\r\f]+/g,R=new RegExp(k+"|^$"),U=function(){var e=(r.appendChild+"").replace(/appendChild/g,"");return function(t,n){var r=t&&t[n]||!1;return r&&typeof r!="string"&&e==(r+"").replace(new RegExp(n,"g"),"")}}(),z=U(r,"hasFocus"),W=U(r,"querySelector"),X=U(r,"getElementById"),V=U(i,"getElementsByTagName"),$=U(i,"getElementsByClassName"),J=U(i,"getAttribute"),K=U(i,"hasAttribute"),Q=function(){var e=!1,t=i.id;i.id="length";try{e=!!s.call(r.childNodes,0)[0]}catch(n){}i.id=t;return e}(),G="nextElementSibling"in i&&"previousElementSibling"in i,Y=X?function(){var e=!0,t="x"+String(+(new Date)),n=r.createElementNS?"a":'<a name="'+t+'">';(n=r.createElement(n)).name=t;i.insertBefore(n,i.firstChild);e=!!r.getElementById(t);i.removeChild(n);return e}():!0,Z=V?function(){var e=r.createElement("div");e.appendChild(r.createComment(""));return!!e.getElementsByTagName("*")[0]}():!0,et=$?function(){var e,t=r.createElement("div"),n="台北";t.appendChild(r.createElement("span")).setAttribute("class",n+"abc "+n);t.appendChild(r.createElement("span")).setAttribute("class","x");e=!t.getElementsByClassName(n)[0];t.lastChild.className=n;return e||t.getElementsByClassName(n).length!=2}():!0,tt=J?function(){var e=r.createElement("input");e.setAttribute("value",5);return e.defaultValue!=5}():!0,nt=K?function(){var e=r.createElement("option");e.setAttribute("selected","selected");return!e.hasAttribute("selected")}():!0,rt=function(){var e=r.createElement("select");e.appendChild(r.createElement("option"));return!e.firstChild.selected}(),it,st,ot,ut,at=/opera/i.test(o.call(e.opera)),ft=at&&parseFloat(opera.version())>=11,lt=W?function(){var e=[],t=r.createElement("div"),n,i=function(e,t,n,r){var i=!1;t.appendChild(n);try{i=t.querySelectorAll(e).length==r}catch(s){}while(t.firstChild)t.removeChild(t.firstChild);return i};n=r.createElement("p");n.setAttribute("class","");i('[class^=""]',t,n,1)&&e.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')");n=r.createElement("option");n.setAttribute("selected","selected");i(":checked",t,n,0)&&e.push(":checked");n=r.createElement("input");n.setAttribute("type","hidden");i(":enabled",t,n,1)&&e.push(":enabled",":disabled");n=r.createElement("link");n.setAttribute("href","x");i(":link",t,n,1)||e.push(":link");nt&&e.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");return e.length?new RegExp(e.join("|")):{test:function(){return!1}}}():!0,ct=new RegExp("(?:\\[[\\x20\\t\\n\\r\\f]*class\\b|\\."+k+")"),ht=new RegExp(!Z||!et?at?"^(?:\\*|#-?[_a-zA-Z]{1}"+C+"*)$":"^(?:\\*|[.#]?-?[_a-zA-Z]{1}"+C+"*)$":"^#?-?[_a-zA-Z]{1}"+C+"*$"),pt={a:1,A:1,area:1,AREA:1,link:1,LINK:1},dt={checked:1,disabled:1,ismap:1,multiple:1,readonly:1,selected:1},vt={value:"defaultValue",checked:"defaultChecked",selected:"defaultSelected"},mt={action:2,cite:2,codebase:2,data:2,href:2,longdesc:2,lowsrc:2,src:2,usemap:2},gt={"class":0,accept:1,"accept-charset":1,align:1,alink:1,axis:1,bgcolor:1,charset:1,checked:1,clear:1,codetype:1,color:1,compact:1,declare:1,defer:1,dir:1,direction:1,disabled:1,enctype:1,face:1,frame:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,method:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,rel:1,rev:1,rules:1,scope:1,scrolling:1,selected:1,shape:1,target:1,text:1,type:1,valign:1,valuetype:1,vlink:1},yt={accept:1,"accept-charset":1,alink:1,axis:1,bgcolor:1,charset:1,codetype:1,color:1,enctype:1,face:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,rel:1,rev:1,target:1,text:1,type:1,vlink:1},bt={},wt={"=":"n=='%m'","^=":"n.indexOf('%m')==0","*=":"n.indexOf('%m')>-1","|=":"(n+'-').indexOf('%m-')==0","~=":"(' '+n+' ').indexOf(' %m ')>-1","$=":"n.substr(n.length-'%m'.length)=='%m'"},Et={ID:new RegExp("^\\*?#("+C+"+)|"+N),TAG:new RegExp("^("+C+"+)|"+N),CLASS:new RegExp("^\\*?\\.("+C+"+$)|"+N)},St={spseudos:/^\:((root|empty|nth-)?(?:(first|last|only)-)?(child)?-?(of-type)?)(?:\(([^\x29]*)\))?(.*)/,dpseudos:/^\:(link|visited|target|lang|not|active|focus|hover|checked|disabled|enabled|selected)(?:\((["']*)(.*?(\(.*\))?[^'"()]*?)\2\))?(.*)/,attribute:new RegExp("^\\["+O+"\\](.*)"),children:/^[\x20\t\n\r\f]*\>[\x20\t\n\r\f]*(.*)/,adjacent:/^[\x20\t\n\r\f]*\+[\x20\t\n\r\f]*(.*)/,relative:/^[\x20\t\n\r\f]*\~[\x20\t\n\r\f]*(.*)/,ancestor:/^[\x20\t\n\r\f]+(.*)/,universal:/^\*(.*)/,id:new RegExp("^#("+C+"+)(.*)"),tagName:new RegExp("^("+C+"+)(.*)"),className:new RegExp("^\\.("+C+"+)(.*)")},xt=function(e,t){var n=-1,r;if(!e.length&&Array.slice)return Array.slice(t);while(r=t[++n])e[e.length]=r;return e},Tt=function(e,t,n){var r=-1,i;while(i=t[++r])if(!1===n(e[e.length]=i))break;return e},Nt=function(e,t){var s,o=r;l=e;r=e.ownerDocument||e;if(t||o!==r){i=r.documentElement;ut=r.createElement("DiV").nodeName=="DiV";ot=!ut&&typeof r.compatMode=="string"?r.compatMode.indexOf("CSS")<0:function(){var e=r.createElement("div").style;return e&&(e.width=1)&&e.width=="1px"}();s=r.createElement("div");s.appendChild(r.createElement("p")).setAttribute("class","xXx");s.appendChild(r.createElement("p")).setAttribute("class","xxx");it=!ut&&$&&ot&&(s.getElementsByClassName("xxx").length!=2||s.getElementsByClassName("xXx").length!=2);st=!ut&&W&&ot&&(s.querySelectorAll("[class~=xxx]").length!=2||s.querySelectorAll(".xXx").length!=2);Xt.CACHING&&n.setCache(!0,r)}},Ct=function(e,t){var n=-1,r=null;while(r=t[++n])if(r.getAttribute("id")==e)break;return r},kt=Y?function(e,t){var n=null;e=e.replace(/\\/g,"");return ut||t.nodeType!=9?Ct(e,t.getElementsByTagName("*")):(n=t.getElementById(e))&&n.name==e&&t.getElementsByName?Ct(e,t.getElementsByName(e)):n}:function(e,t){e=e.replace(/\\/g,"");return t.getElementById&&t.getElementById(e)||Ct(e,t.getElementsByTagName("*"))},Lt=function(e,t){Nt(t||(t=r));return kt(e,t)},At=function(e,t){var n=e=="*",r=t,i=[],s=r.firstChild;n||(e=e.toUpperCase());while(r=s){r.tagName>"@"&&(n||r.tagName.toUpperCase()==e)&&(i[i.length]=r);if(s=r.firstChild||r.nextSibling)continue;while(!s&&(r=r.parentNode)&&r!==t)s=r.nextSibling}return i},Ot=!Z&&Q?function(e,t){return ut||t.nodeType==11?At(e,t):s.call(t.getElementsByTagName(e),0)}:function(e,t){var n=-1,r=n,i=[],s,o=t.getElementsByTagName(e);if(e=="*")while(s=o[++n])s.nodeName>"@"&&(i[++r]=s);else while(s=o[++n])i[n]=s;return i},Mt=function(e,t){Nt(t||(t=r));return Ot(e,t)},_t=function(e,t){return Gt('[name="'+e.replace(/\\/g,"")+'"]',t)},Dt=function(e,t){var n=-1,r=n,i=[],s,o=Ot("*",t),u;e=" "+(ot?e.toLowerCase():e).replace(/\\/g,"")+" ";while(s=o[++n]){u=ut?s.getAttribute("class"):s.className;u&&u.length&&(" "+(ot?u.toLowerCase():u).replace(q," ")+" ").indexOf(e)>-1&&(i[++r]=s)}return i},Pt=function(e,t){return et||it||ut||!t.getElementsByClassName?Dt(e,t):s.call(t.getElementsByClassName(e.replace(/\\/g,"")),0)},Ht=function(e,t){Nt(t||(t=r));return Pt(e,t)},Bt="compareDocumentPosition"in i?function(e,t){return(e.compareDocumentPosition(t)&16)==16}:"contains"in i?function(e,t){return e!==t&&e.contains(t)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},jt=tt?function(e,t){t=t.toLowerCase();return vt[t]?e[vt[t]]||"":mt[t]?e.getAttribute(t,2)||"":dt[t]?e.getAttribute(t)?t:"":(e=e.getAttributeNode(t))&&e.value||""}:function(e,t){return e.getAttribute(t)||""},Ft=nt?function(e,t){t=t.toLowerCase();if(vt[t])return!!e[vt[t]];e=e.getAttributeNode(t);return!(!e||!e.specified&&!e.nodeValue)}:function(e,t){return ut?!!e.getAttribute(t):e.hasAttribute(t)},It=function(e){e=e.firstChild;while(e){if(e.nodeType==3||e.nodeName>"@")return!1;e=e.nextSibling}return!0},qt=function(e){return Ft(e,"href")&&pt[e.nodeName]},Rt=function(e,t){var n=1,r=t?"nextSibling":"previousSibling";while(e=e[r])e.nodeName>"@"&&++n;return n},Ut=function(e,t){var n=1,r=t?"nextSibling":"previousSibling",i=e.nodeName;while(e=e[r])e.nodeName==i&&++n;return n},zt=function(e){for(var t in e){Xt[t]=!!e[t];if(t=="SIMPLENOT"){Yt={};Zt={};en={};tn={};Xt.USE_QSAPI=!1;H=new RegExp(P,"g")}else if(t=="USE_QSAPI"){Xt[t]=!!e[t]&&W;H=new RegExp(D,"g")}}},Wt=function(t){t="SYNTAX_ERR: "+t+" ";if(Xt.VERBOSITY)throw typeof e.DOMException!="undefined"?{code:12,message:t}:new Error(12,t);e.console&&e.console.log?e.console.log(t):e.status+=t},Xt={CACHING:!1,SHORTCUTS:!1,SIMPLENOT:!0,USE_HTML5:!1,USE_QSAPI:W,VERBOSITY:!0},Vt="r[r.length]=c[k];if(f&&false===f(c[k]))break;else continue main;",$t=function(e,t,n){var r=typeof e=="string"?e.match(F):e;typeof t=="string"||(t="");if(r.length==1)t+=Jt(r[0],n?Vt:"f&&f(k);return true;");else{var i=-1,s={},o;while(o=r[++i]){o=o.replace(B,"");!s[o]&&(s[o]=!0)&&(t+=Jt(o,n?Vt:"f&&f(k);return true;"))}}return n?new Function("c,s,r,d,h,g,f","var N,n,x=0,k=-1,e;main:while((e=c[++k])){"+t+"}return r;"):new Function("e,s,r,d,h,g,f","var N,n,x=0,k=e;"+t+"return false;")},Jt=function(e,t){var n,i,s,o=0,u,a,f,l,c,h;while(e){o++;if(a=e.match(St.universal))u="";else if(a=e.match(St.id))t="if("+(ut?'s.getAttribute(e,"id")':'(e.submit?s.getAttribute(e,"id"):e.id)')+'=="'+a[1]+'"'+"){"+t+"}";else if(a=e.match(St.tagName))t="if(e.nodeName"+(ut?'=="'+a[1]+'"':'.toUpperCase()=="'+a[1].toUpperCase()+'"')+"){"+t+"}";else if(a=e.match(St.className))t="if((n="+(ut?'s.getAttribute(e,"class")':"e.className")+')&&n.length&&(" "+'+(ot?"n.toLowerCase()":"n")+".replace("+q+'," ")+" ").indexOf(" '+(ot?a[1].toLowerCase():a[1])+' ")>-1'+"){"+t+"}";else if(a=e.match(St.attribute)){u=a[1].split(":");u=u.length==2?u[1]:u[0]+"";if(a[2]&&!wt[a[2]]){Wt('Unsupported operator in attribute selectors "'+e+'"');return""}c=!1;h="false";if(a[2]&&a[4]&&(h=wt[a[2]])){gt["class"]=ot?1:0;a[4]=a[4].replace(/\\([0-9a-f]{2,2})/,"\\x$1");c=(ut?yt:gt)[u.toLowerCase()];h=h.replace(/\%m/g,c?a[4].toLowerCase():a[4])}else if(a[2]=="!="||a[2]=="=")h="n"+a[2]+'="'+a[4]+'"';u="n=s."+(a[2]?"get":"has")+'Attribute(e,"'+a[1]+'")'+(c?".toLowerCase();":";");t=u+"if("+(a[2]?h:"n")+"){"+t+"}"}else if(a=e.match(St.adjacent))t=G?"var N"+o+"=e;if(e&&(e=e.previousElementSibling)){"+t+"}e=N"+o+";":"var N"+o+'=e;while(e&&(e=e.previousSibling)){if(e.nodeName>"@"){'+t+"break;}}e=N"+o+";";else if(a=e.match(St.relative))t=G?"var N"+o+"=e;e=e.parentNode.firstElementChild;"+"while(e&&e!==N"+o+"){"+t+"e=e.nextElementSibling;}e=N"+o+";":"var N"+o+"=e;e=e.parentNode.firstChild;"+"while(e&&e!==N"+o+'){if(e.nodeName>"@"){'+t+"}e=e.nextSibling;}e=N"+o+";";else if(a=e.match(St.children))t="var N"+o+"=e;if(e&&e!==h&&e!==g&&(e=e.parentNode)){"+t+"}e=N"+o+";";else if(a=e.match(St.ancestor))t="var N"+o+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+t+"}e=N"+o+";";else if((a=e.match(St.spseudos))&&a[1])switch(a[2]){case"root":a[7]?t="if(e===h||s.contains(h,e)){"+t+"}":t="if(e===h){"+t+"}";break;case"empty":t="if(s.isEmpty(e)){"+t+"}";break;default:if(a[2]&&a[6]){if(a[6]=="n"){t="if(e!==h){"+t+"}";break}if(a[6]=="even"){n=2;i=0}else if(a[6]=="odd"){n=2;i=1}else{i=(s=a[6].match(/(-?\d+)$/))?parseInt(s[1],10):0;n=(s=a[6].match(/(-?\d*)n/))?parseInt(s[1],10):0;s&&s[1]=="-"&&(n=-1)}c=i<1&&n>1?"(n-("+i+"))%"+n+"==0":n>1?a[3]=="last"?"(n-("+i+"))%"+n+"==0":"n>="+i+"&&(n-("+i+"))%"+n+"==0":n<-1?a[3]=="last"?"(n-("+i+"))%"+n+"==0":"n<="+i+"&&(n-("+i+"))%"+n+"==0":n===0?"n=="+i:a[3]=="last"?n==-1?"n>="+i:"n<="+i:n==-1?"n<="+i:"n>="+i;t="if(e!==h){n=s["+(a[5]?'"nthOfType"':'"nthElement"')+"]"+"(e,"+(a[3]=="last"?"true":"false")+");"+"if("+c+"){"+t+"}"+"}"}else{n=a[3]=="first"?"previous":"next";s=a[3]=="only"?"previous":"next";i=a[3]=="first"||a[3]=="last";h=a[5]?"&&n.nodeName!=e.nodeName":'&&n.nodeName<"@"';t="if(e!==h){"+("n=e;while((n=n."+n+"Sibling)"+h+");if(!n){"+(i?t:"n=e;while((n=n."+s+"Sibling)"+h+");if(!n){"+t+"}")+"}")+"}"}}else if((a=e.match(St.dpseudos))&&a[1])switch(a[1]){case"not":u=a[3].replace(B,"");if(Xt.SIMPLENOT&&!j.test(u)){Wt('Negation pseudo-class only accepts simple selectors "'+e+'"');return""}"compatMode"in r?t="if(!"+$t([u],"",!1)+"(e,s,r,d,h,g)){"+t+"}":t='if(!s.match(e, "'+u.replace(/\x22/g,'\\"')+'",g)){'+t+"}";break;case"checked":c='if((typeof e.form!="undefined"&&(/^(?:radio|checkbox)$/i).test(e.type)&&e.checked)';t=(Xt.USE_HTML5?c+"||(/^option$/i.test(e.nodeName)&&e.selected)":c)+"){"+t+"}";break;case"disabled":t='if(((typeof e.form!="undefined"&&!(/^hidden$/i).test(e.type))||s.isLink(e))&&e.disabled){'+t+"}";break;case"enabled":t='if(((typeof e.form!="undefined"&&!(/^hidden$/i).test(e.type))||s.isLink(e))&&!e.disabled){'+t+"}";break;case"lang":c="";a[3]&&(c=a[3].substr(0,2)+"-");t='do{(n=e.lang||"").toLowerCase();if((n==""&&h.lang=="'+a[3].toLowerCase()+'")||'+'(n&&(n=="'+a[3].toLowerCase()+'"||n.substr(0,3)=="'+c.toLowerCase()+'")))'+"{"+t+"break;}}while((e=e.parentNode)&&e!==g);";break;case"target":s=r.location?r.location.hash:"";s&&(t='if(e.id=="'+s.slice(1)+'"){'+t+"}");break;case"link":t="if(s.isLink(e)&&!e.visited){"+t+"}";break;case"visited":t="if(s.isLink(e)&&e.visited){"+t+"}";break;case"active":if(ut)break;t="if(e===d.activeElement){"+t+"}";break;case"hover":if(ut)break;t="if(e===d.hoverElement){"+t+"}";break;case"focus":if(ut)break;t=z?"if(e===d.activeElement&&d.hasFocus()&&(e.type||e.href)){"+t+"}":"if(e===d.activeElement&&(e.type||e.href)){"+t+"}";break;case"selected":u=rt?"||(n=e.parentNode)&&n.options[n.selectedIndex]===e":"";t="if(/^option$/i.test(e.nodeName)&&(e.selected"+u+")){"+t+"}";break;default:}else{u=!1;l=!0;for(u in bt)if((a=e.match(bt[u].Expression))&&a[1]){f=bt[u].Callback(a,t);t=f.source;l=f.status;if(l)break}if(!l){Wt('Unknown pseudo-class selector "'+e+'"');return""}if(!u){Wt('Unknown token in selector "'+e+'"');return""}}if(!a){Wt('Invalid syntax in selector "'+e+'"');return""}e=a&&a[a.length-1]}return t},Kt=function(e,t,n,s){var o;if(!(e&&e.nodeName>"@")){Wt("Invalid element argument");return!1}if(!t||typeof t!="string"){Wt("Invalid selector argument");return!1}if(n&&n.nodeType==1&&!Bt(n,e))return!1;l!==n&&Nt(n||(n=e.ownerDocument));t=t.replace(B,"");Xt.SHORTCUTS&&(t=NW.Dom.shortcuts(t,e,n));if(h!=t){if(!(o=t.match(H))||o[0]!=t){Wt('The string "'+t+'", is not a valid CSS selector');return!1}u=(o=t.match(F)).length<2;h=t;d=o}else o=d;if(!Zt[t]||Yt[t]!==n){Zt[t]=$t(u?[t]:o,"",!1);Yt[t]=n}return Zt[t](e,nn,[],r,i,n,s)},Qt=function(e,t){return Gt(e,t,function(){return!1})[0]||null},Gt=function(e,t,o){var u,h,d,m,g,y,b=e;if(arguments.length===0){Wt("Missing required selector parameters");return[]}if(e===""){Wt("Empty selector string");return[]}if(typeof e!="string")return[];if(t&&!/1|9|11/.test(t.nodeType)){Wt("Invalid context element");return[]}l!==t&&Nt(t||(t=r));if(Xt.CACHING&&(m=n.loadResults(b,t,r,i)))return o?Tt([],m,o):m;if(!ft&&ht.test(e))switch(e.charAt(0)){case"#":(d=kt(e.slice(1),t))?m=[d]:m=[];break;case".":m=Pt(e.slice(1),t);break;default:m=Ot(e,t)}else if(!ut&&Xt.USE_QSAPI&&(!st||!ct.test(e))&&!lt.test(e))try{m=t.querySelectorAll(e)}catch(w){}if(m){m=o?Tt([],m,o):Q?s.call(m):xt([],m);Xt.CACHING&&n.saveResults(b,t,r,m);return m}e=e.replace(B,"");Xt.SHORTCUTS&&(e=NW.Dom.shortcuts(e,t));if(h=p!=e){if(!(g=e.match(H))||g[0]!=e){Wt('The string "'+e+'", is not a valid CSS selector');return[]}a=(g=e.match(F)).length<2;p=e;v=g}else g=v;if(t.nodeType==11)m=t.childNodes;else if(!ut&&a){if(h){g=e.match(I);y=g[g.length-1];f=y.split(":not")[0];c=e.length-y.length}if((g=f.match(Et.ID))&&(y=g[1])){if(d=kt(y,t))if(Kt(d,e)){o&&o(d);m=[d]}else m=[]}else if((g=e.match(Et.ID))&&(y=g[1]))if(d=kt(y,r)){if("#"+y==e){o&&o(d);m=[d]}if(/[>+~]/.test(e))t=d.parentNode;else{e=e.replace("#"+y,"*");c-=y.length+1;t=d}}else m=[];if(m){Xt.CACHING&&n.saveResults(b,t,r,m);return m}if(!$&&(g=f.match(Et.TAG))&&(y=g[1])){if((m=Ot(y,t)).length===0)return[];e=e.slice(0,c)+e.slice(c).replace(y,"*")}else if((g=f.match(Et.CLASS))&&(y=g[1])){if((m=Pt(y,t)).length===0)return[];R.test(e.charAt(e.indexOf(y)-1))?e=e.slice(0,c)+e.slice(c).replace("."+y,""):e=e.slice(0,c)+e.slice(c).replace("."+y,"*")}else if((g=e.match(Et.CLASS))&&(y=g[1])){if((m=Pt(y,t)).length===0)return[];for(u=0,els=[];m.length>u;++u)els=xt(els,m[u].getElementsByTagName("*"));m=els;R.test(e.charAt(e.indexOf(y)-1))?e=e.slice(0,c)+e.slice(c).replace("."+y,""):e=e.slice(0,c)+e.slice(c).replace("."+y,"*")}else if($&&(g=f.match(Et.TAG))&&(y=g[1])){if((m=Ot(y,t)).length===0)return[];e=e.slice(0,c)+e.slice(c).replace(y,"*")}}m||(m=/^(?:applet|object)$/i.test(t.nodeName)?t.childNodes:Ot("*",t));if(!tn[e]||en[e]!==t){tn[e]=$t(a?[e]:g,"",!0);en[e]=t}m=tn[e](m,nn,[],r,i,t,o);Xt.CACHING&&n.saveResults(b,t,r,m);return m},Yt={},Zt={},en={},tn={},nn={nthElement:Rt,nthOfType:Ut,getAttribute:jt,hasAttribute:Ft,byClass:Pt,byName:_t,byTag:Ot,byId:kt,contains:Bt,isEmpty:It,isLink:qt,select:Gt,match:Kt};Tokens={prefixes:m,encoding:C,operators:g,whitespace:y,identifier:k,attributes:A,combinators:b,pseudoclass:M,pseudoparms:w,quotedvalue:E};n.ACCEPT_NODE=Vt;n.emit=Wt;n.byId=Lt;n.byTag=Mt;n.byName=_t;n.byClass=Ht;n.getAttribute=jt;n.hasAttribute=Ft;n.match=Kt;n.first=Qt;n.select=Gt;n.compile=$t;n.contains=Bt;n.configure=zt;n.setCache=function(){return};n.loadResults=function(){return};n.saveResults=function(){return};n.shortcuts=function(e){return e};n.Config=Xt;n.Snapshot=nn;n.Operators=wt;n.Selectors=bt;n.Tokens=Tokens;n.registerOperator=function(e,t){wt[e]||(wt[e]=t)};n.registerSelector=function(e,t,n){bt[e]||(bt[e]={Expression:t,Callback:n})};Nt(r,!0)})(this);