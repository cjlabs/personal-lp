/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-backgroundblendmode-backgroundcliptext-canvastext-checked-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssresize-cubicbezierrange-display_runin-displaytable-ellipsis-emoji-mediaqueries-nthchild-opacity-regions-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return function(){return e.apply(t,arguments)}}function i(e,t,n,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+O.join(o+" ")+o).split(" ");return a(t,"string")||a(t,"undefined")?y(s,t,r,i):(s=(e+" "+L.join(o+" ")+o).split(" "),p(s,t,n))}function o(e,t,r){return i(e,n,n,t,r)}function a(e,t){return typeof e===t}function s(){var e,t,n,r,i,o,s;for(var l in E){if(e=[],t=E[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],s=o.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),T.push((r?"":"no-")+s.join("-"))}}function l(e){var t=j.className,n=Modernizr._config.classPrefix||"";if(P&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),P?j.className.baseVal=t:j.className=t)}function c(e,t){if("object"==typeof e)for(var n in e)B(e,n)&&c(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),l([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):P?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function d(){var e=t.body;return e||(e=u(P?"svg":"body"),e.fake=!0),e}function f(e,n,r,i){var o,a,s,l,c="modernizr",f=u("div"),p=d();if(parseInt(r,10))for(;r--;)s=u("div"),s.id=i?i[r]:c+(r+1),f.appendChild(s);return o=u("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=j.style.overflow,j.style.overflow="hidden",j.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),j.style.overflow=l,j.offsetHeight):f.parentNode.removeChild(f),!!a}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],a(i,"function")?r(i,n||t):i);return!1}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t){return!!~(""+e).indexOf(t)}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(v(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+v(t[i])+":"+r+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function y(e,t,r,i){function o(){l&&(delete A.style,delete A.modElem)}if(i=a(i,"undefined")?!1:i,!a(r,"undefined")){var s=g(e,r);if(!a(s,"undefined"))return s}for(var l,c,d,f,p,v=["modernizr","tspan"];!A.style;)l=!0,A.modElem=u(v.shift()),A.style=A.modElem.style;for(d=e.length,c=0;d>c;c++)if(f=e[c],p=A.style[f],h(f,"-")&&(f=m(f)),A.style[f]!==n){if(i||a(r,"undefined"))return o(),"pfx"==t?f:!0;try{A.style[f]=r}catch(y){}if(A.style[f]!=p)return o(),"pfx"==t?f:!0}return o(),!1}Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof u("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var t=e.devicePixelRatio||1,n=12*t,r=u("canvas"),i=r.getContext("2d");return i.fillStyle="#f00",i.textBaseline="top",i.font="32px Arial",i.fillText("🐨",0,0),0!==i.getImageData(n,n,1,1).data[0]}),Modernizr.addTest("csschunit",function(){var e,t=$.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=$.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var x=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return f("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=x,Modernizr.addTest("mediaqueries",x("only all"));var b=w.testStyles=f;Modernizr.addTest("checked",function(){return b("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=u("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),b("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),b("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;return n})},5);var T=(w.testProp=function(e,t,r){return y([e],n,t,r)},[]);w.testAllProps=i;var C=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=m(e)),t?i(e,t,n):i(e,"pfx"))};w.prefixedCSS=function(e){var t=C(e);return t&&v(t)};Modernizr.addTest("backgroundblendmode",C("backgroundBlendMode","text")),w.testAllProps=o,Modernizr.addTest("backgroundcliptext",function(){return o("backgroundClip","text")}),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=o("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=o("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||o(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("displayrunin",o("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",o("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return o("filter","blur(2px)");var e=u("a");return e.style.cssText=N.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),s(),l(T),delete w.addTest,delete w.addAsyncTest;for(var S=0;S<Modernizr._q.length;S++)Modernizr._q[S]();e.Modernizr=Modernizr;var E=[],w={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){E.push({name:e,fn:t,options:n})},addAsyncTest:function(e){E.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=e.CSS;Modernizr.addTest("cssescape",_?"function"==typeof _.escape:!1);var k="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",k||z);var N=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=N;var j=t.documentElement,P="svg"===j.nodeName.toLowerCase();P||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,c(t)}function o(e){var t=S[e[T]];return t||(t={},C++,e[T]=C,S[C]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||x.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)i.createElement(s[a]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function c(e){e||(e=t);var r=o(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(d(t)));return a}function d(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(_+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function f(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+_+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),s=e.namespaces,l=e.parentWindow;return!k||e.printShived?e:("undefined"==typeof s[_]&&s.add(_),l.attachEvent("onbeforeprint",function(){t();for(var o,a,s,l=e.styleSheets,c=[],d=l.length,p=Array(d);d--;)p[d]=l[d];for(;s=p.pop();)if(!s.disabled&&w.test(s.media)){try{o=s.imports,a=o.length}catch(m){a=0}for(d=0;a>d;d++)p.push(o[d]);try{c.push(s.cssText)}catch(m){}}c=f(c.reverse().join("")),i=u(e),r=n(e,c)}),l.attachEvent("onafterprint",function(){p(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",y=e.html5||{},x=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,T="_html5shiv",C=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var E={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:i};e.html5=E,c(t);var w=/^$|\b(?:all|print)\b/,_="html5shiv",k=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();E.type+=" print",E.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t);var B;!function(){var e={}.hasOwnProperty;B=a(e,"undefined")||a(e.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=c});var R=function(e){function n(t,n){var i;return t?(n&&"string"!=typeof n||(n=u(n||"div")),t="on"+t,i=t in n,!i&&r&&(n.setAttribute||(n=u("div")),n.setAttribute(t,""),i="function"==typeof n[t],n[t]!==e&&(n[t]=e),n.removeAttribute(t)),i):!1}var r=!("onblur"in t.documentElement);return n}();w.hasEvent=R,Modernizr.addTest("audio",function(){var e=u("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=u("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=u("a");return n.style.cssText=e+N.join(t+e),!!n.style.length});var $={elem:u("modernizr")};Modernizr._q.push(function(){delete $.elem}),Modernizr.addTest("cubicbezierrange",function(){var e=u("a");return e.style.cssText=N.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("opacity",function(){var e=u("a").style;return e.cssText=N.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("regions",function(){if(P)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),r=!1;if(!e||!t)return r;var i=u("iframe"),o=u("div"),a=u("div"),s=u("div"),l="modernizr_flow_for_regions_check";a.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",s.style.cssText="width: 50px; height: 50px; padding: 42px;",s.style[e]=l,o.appendChild(a),o.appendChild(s),j.appendChild(o);var c,d,f=a.getBoundingClientRect();return a.style[t]=l,c=a.getBoundingClientRect(),d=parseInt(c.left-f.left,10),j.removeChild(o),42==d?r=!0:(j.appendChild(i),f=i.getBoundingClientRect(),i.style[t]=l,c=i.getBoundingClientRect(),f.height>0&&f.height!==c.height&&0===c.height&&(r=!0)),a=s=o=i=n,r});var A={style:$.elem.style};Modernizr._q.unshift(function(){delete A.style});var M="Moz O ms Webkit",L=w._config.usePrefixes?M.toLowerCase().split(" "):[];w._domPrefixes=L;var F=function(e,t){var n=!1,r=u("div"),i=r.style;if(e in i){var o=L.length;for(i[e]=t,n=i[e];o--&&!n;)i[e]="-"+L[o]+"-"+t,n=i[e]}return""===n&&(n=!1),n};w.prefixedCSSValue=F;var O=w._config.usePrefixes?M.split(" "):[];w._cssomPrefixes=O;var q=function(t){var r,i=N.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=N[a],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};w.atRule=q,Modernizr.addTest("cssresize",o("resize","both",!0))}(window,document);