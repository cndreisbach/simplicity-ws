/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c,g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal = (function(){

	'use strict';

	var SLIDES_SELECTOR = '.reveal .slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
		VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

		// Configurations defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: null,

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// A delay used to activate the overview mode
		activateOverviewTimeout = 0,

		// A delay used to deactivate the overview mode
		deactivateOverviewTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

	}


    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Cache references to key DOM elements
		dom.theme = document.querySelector( '#theme' );
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// State background element [DEPRECATED]
		createSingletonNode( dom.wrapper, 'div', 'state-background', null );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		var node = container.querySelector( '.' + classname );
		if( !node ) {
			node = document.createElement( tagname );
			node.classList.add( classname );
			if( innerHTML !== null ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );
		}
		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		if( isPrintingPDF() ) {
			document.body.classList.add( 'print-pdf' );
		}

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Helper method for creating a background element for the
		// given slide
		function _createBackground( slide, container ) {

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' )
			};

			var element = document.createElement( 'div' );
			element.className = 'slide-background';

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
					element.style.backgroundImage = 'url('+ data.background +')';
				}
				else {
					element.style.background = data.background;
				}
			}

			if( data.background || data.backgroundColor || data.backgroundImage ) {
				element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
			if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			container.appendChild( element );

			return element;

		}

		// Iterate over all horizontal slides
		toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( isPrintingPDF() ) {
				backgroundStack = _createBackground( slideh, slideh );
			}
			else {
				backgroundStack = _createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( isPrintingPDF() ) {
					_createBackground( slidev, slidev );
				}
				else {
					_createBackground( slidev, backgroundStack );
				}

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Auto-slide playback controls
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}
		else if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Load the theme in the config, if it's not already loaded
		if( config.theme && dom.theme ) {
			var themeURL = dom.theme.getAttribute( 'href' );
			var themeFinder = /[^\/]*?(?=\.css)/;
			var themeName = themeURL.match(themeFinder)[0];

			if(  config.theme !== themeName ) {
				themeURL = themeURL.replace(themeFinder, config.theme);
				dom.theme.setAttribute( 'href', themeURL );
			}
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisiblityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( child.style.position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element after subtracting the height of all
	 * siblings.
	 *
	 * remaining height = [parent height] - [ siblings height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var parent = element.parentNode;
			var siblings = parent.childNodes;

			// Subtract the height of each sibling
			toArray( siblings ).forEach( function( sibling ) {

				if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

					var styles = window.getComputedStyle( sibling ),
						marginTop = parseInt( styles.marginTop, 10 ),
						marginBottom = parseInt( styles.marginBottom, 10 );

					height -= sibling.offsetHeight + marginTop + marginBottom;

				}

			} );

			var elementStyles = window.getComputedStyle( element );

			// Subtract the margins of the target element
			height -= parseInt( elementStyles.marginTop, 10 ) +
						parseInt( elementStyles.marginBottom, 10 );

		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, properties ) {

		var event = document.createEvent( "HTMLEvents", 1, 2 );
		event.initEvent( type, true, true );
		extend( event, properties );
		dom.wrapper.dispatchEvent( event );

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function openPreview( url ) {

		closePreview();

		dom.preview = document.createElement( 'div' );
		dom.preview.classList.add( 'preview-link-overlay' );
		dom.wrapper.appendChild( dom.preview );

		dom.preview.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.preview.classList.add( 'loaded' );
		}, false );

		dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closePreview();
			event.preventDefault();
		}, false );

		dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closePreview();
		}, false );

		setTimeout( function() {
			dom.preview.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Closes the iframe preview window.
	 */
	function closePreview() {

		if( dom.preview ) {
			dom.preview.setAttribute( 'src', '' );
			dom.preview.parentNode.removeChild( dom.preview );
			dom.preview = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			// Available space to scale within
			var availableWidth = dom.wrapper.offsetWidth,
				availableHeight = dom.wrapper.offsetHeight;

			// Reduce available space by margin
			availableWidth -= ( availableHeight * config.margin );
			availableHeight -= ( availableHeight * config.margin );

			// Dimensions of the content
			var slideWidth = config.width,
				slideHeight = config.height,
				slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			// Slide width may be a percentage of available width
			if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
				slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
				slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
			}

			dom.slides.style.width = slideWidth + 'px';
			dom.slides.style.height = slideHeight + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Prefer applying scale via zoom since Chrome blurs scaled content
			// with nested transforms
			if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
				dom.slides.style.zoom = scale;
			}
			// Apply scale transform as a fallback
			else {
				transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by
	 * scaling down and arranging all slide elements.
	 *
	 * Experimental feature, might be dropped if perf
	 * can't be improved.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			var wasActive = dom.wrapper.classList.contains( 'overview' );

			// Vary the depth of the overview based on screen size
			var depth = window.innerWidth < 400 ? 1000 : 2500;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			// Not the pretties solution, but need to let the overview
			// class apply first so that slides are measured accurately
			// before we can position them
			activateOverviewTimeout = setTimeout( function() {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

				for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
					var hslide = horizontalSlides[i],
						hoffset = config.rtl ? -105 : 105;

					hslide.setAttribute( 'data-index-h', i );

					// Apply CSS transform
					transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

					if( hslide.classList.contains( 'stack' ) ) {

						var verticalSlides = hslide.querySelectorAll( 'section' );

						for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
							var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

							var vslide = verticalSlides[j];

							vslide.setAttribute( 'data-index-h', i );
							vslide.setAttribute( 'data-index-v', j );

							// Apply CSS transform
							transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

							// Navigate to this slide on click
							vslide.addEventListener( 'click', onOverviewSlideClicked, true );
						}

					}
					else {

						// Navigate to this slide on click
						hslide.addEventListener( 'click', onOverviewSlideClicked, true );

					}
				}

				updateSlidesVisibility();

				layout();

				if( !wasActive ) {
					// Notify observers of the overview showing
					dispatchEvent( 'overviewshown', {
						'indexh': indexh,
						'indexv': indexv,
						'currentSlide': currentSlide
					} );
				}

			}, 10 );

		}

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			dom.wrapper.classList.remove( 'overview' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			deactivateOverviewTimeout = setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Select all slides
			toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				// Resets all transforms to use the external styles
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			slide( indexh, indexv );

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return dom.wrapper.classList.contains( 'overview' );

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullScreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );

		cancelAutoSlide();
		dom.wrapper.classList.add( 'paused' );

		if( wasPaused === false ) {
			dispatchEvent( 'paused' );
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause() {

		if( isPaused() ) {
			resume();
		}
		else {
			pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// If the overview is active, re-activate it to update positions
		if( isOverview() ) {
			activateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( document.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

					// Show all fragments on prior slides
					while( pastFragments.length ) {
						var pastFragment = pastFragments.pop();
						pastFragment.classList.add( 'visible' );
						pastFragment.classList.remove( 'current-fragment' );
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

					// No fragments in future slides should be visible ahead of time
					while( futureFragments.length ) {
						var futureFragment = futureFragments.pop();
						futureFragment.classList.remove( 'visible' );
						futureFragment.classList.remove( 'current-fragment' );
					}
				}

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 1;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Loops so that it measures 1 between the first and last slides
				distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

				// Show the horizontal slide if it's within the view distance
				horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

						verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progress ) {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past and total slides
			var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Display the number of the page using 'indexh - indexv' format
			var indexString = indexh;
			if( indexv > 0 ) {
				indexString += ' - ' + indexv;
			}

			dom.slideNumber.innerHTML = indexString;
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			if( h < indexh ) {
				backgroundh.className = 'slide-background ' + horizontalPast;
			}
			else if ( h > indexh ) {
				backgroundh.className = 'slide-background ' + horizontalFuture;
			}
			else {
				backgroundh.className = 'slide-background present';

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

					if( v < indexv ) {
						backgroundv.className = 'slide-background past';
					}
					else if ( v > indexv ) {
						backgroundv.className = 'slide-background future';
					}
					else {
						backgroundv.className = 'slide-background present';

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Don't transition between identical backgrounds. This
		// prevents unwanted flicker.
		if( currentBackground ) {
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth;
			var horizontalSlideCount = horizontalSlides.length;
			var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

			var slideHeight = dom.background.offsetHeight;
			var verticalSlideCount = verticalSlides.length;
			var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.play();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:start', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) ) {
					el.pause();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			// Find the slide with the specified name
			var element = document.querySelector( '#' + name );

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else {
				var url = '/';

				// If the current slide has an ID, use that as a named link
				if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
					url = '/' + currentSlide.getAttribute( 'id' );
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
				f = visibleFragments.length - 1;
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current slide's data-autoslide
			// 2. Parent slide's data-autoslide
			// 3. Global autoSlide setting
			if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media
			toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					if( autoSlide && el.duration * 1000 > autoSlide ) {
						autoSlide = ( el.duration * 1000 ) + 1000;
					}
				}
			} );

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		autoSlidePaused = true;
		clearTimeout( autoSlideTimeout );

		if( autoSlidePlayer ) {
			autoSlidePlayer.setPlaying( false );
		}

	}

	function resumeAutoSlide() {

		autoSlidePaused = false;
		cueAutoSlide();

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * Same as #navigatePrev() but navigates forwards.
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			availableRoutes().down ? navigateDown() : navigateRight();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// b, period, Logitech presenter tools "black screen" button
				case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.preview ) {
				closePreview();
			}
			else {
				toggleOverview();
			}

			event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			document.activeElement.blur();
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		var url = event.target.getAttribute( 'href' );
		if( url ) {
			openPreview( url );
			event.preventDefault();
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	return {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns the slide at the specified index, y is optional
		getSlide: function( x, y ) {
			var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( typeof y !== 'undefined' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;
		},

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = unescape( value );

				if( value === 'null' ) query[ i ] = null;
				else if( value === 'true' ) query[ i ] = true;
				else if( value === 'false' ) query[ i ] = false;
				else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		}
	};

})();

var f;
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var aa="closure_uid_"+(1E9*Math.random()>>>0),ba=0;function ca(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};function da(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ea(a,b){null!=a&&this.append.apply(this,arguments)}ea.prototype.Ra="";ea.prototype.append=function(a,b,c){this.Ra+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Ra+=arguments[d];return this};ea.prototype.toString=function(){return this.Ra};var fa=null;function ga(){return new ha(null,5,[ja,!0,ka,!0,la,!1,ma,!1,na,null],null)}function q(a){return null!=a&&!1!==a}function oa(a){return q(a)?!1:!0}function s(a,b){return a[k(null==b?null:b)]?!0:a._?!0:v?!1:null}function pa(a){return null==a?null:a.constructor}function qa(a,b){var c=pa(b),c=q(q(c)?c.ac:c)?c.$b:k(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function sa(a){var b=a.$b;return q(b)?b:""+x.a(a)}
function ta(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}var ua={},va={};function wa(a){if(a?a.L:a)return a.L(a);var b;b=wa[k(null==a?null:a)];if(!b&&(b=wa._,!b))throw qa("ICounted.-count",a);return b.call(null,a)}function xa(a){if(a?a.J:a)return a.J(a);var b;b=xa[k(null==a?null:a)];if(!b&&(b=xa._,!b))throw qa("IEmptyableCollection.-empty",a);return b.call(null,a)}var ya={};
function za(a,b){if(a?a.F:a)return a.F(a,b);var c;c=za[k(null==a?null:a)];if(!c&&(c=za._,!c))throw qa("ICollection.-conj",a);return c.call(null,a,b)}
var Aa={},y=function(){function a(a,b,c){if(a?a.na:a)return a.na(a,b,c);var h;h=y[k(null==a?null:a)];if(!h&&(h=y._,!h))throw qa("IIndexed.-nth",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.A:a)return a.A(a,b);var c;c=y[k(null==a?null:a)];if(!c&&(c=y._,!c))throw qa("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}(),
Ba={};function Ca(a){if(a?a.S:a)return a.S(a);var b;b=Ca[k(null==a?null:a)];if(!b&&(b=Ca._,!b))throw qa("ISeq.-first",a);return b.call(null,a)}function Da(a){if(a?a.X:a)return a.X(a);var b;b=Da[k(null==a?null:a)];if(!b&&(b=Da._,!b))throw qa("ISeq.-rest",a);return b.call(null,a)}
var Ea={},Fa={},Ga=function(){function a(a,b,c){if(a?a.C:a)return a.C(a,b,c);var h;h=Ga[k(null==a?null:a)];if(!h&&(h=Ga._,!h))throw qa("ILookup.-lookup",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.B:a)return a.B(a,b);var c;c=Ga[k(null==a?null:a)];if(!c&&(c=Ga._,!c))throw qa("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;
c.c=a;return c}();function Ha(a,b){if(a?a.Va:a)return a.Va(a,b);var c;c=Ha[k(null==a?null:a)];if(!c&&(c=Ha._,!c))throw qa("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Ia(a,b,c){if(a?a.za:a)return a.za(a,b,c);var d;d=Ia[k(null==a?null:a)];if(!d&&(d=Ia._,!d))throw qa("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Ja={};function Ka(a,b){if(a?a.Xa:a)return a.Xa(a,b);var c;c=Ka[k(null==a?null:a)];if(!c&&(c=Ka._,!c))throw qa("IMap.-dissoc",a);return c.call(null,a,b)}
var La={};function Ma(a){if(a?a.Ya:a)return a.Ya(a);var b;b=Ma[k(null==a?null:a)];if(!b&&(b=Ma._,!b))throw qa("IMapEntry.-key",a);return b.call(null,a)}function Na(a){if(a?a.kb:a)return a.kb(a);var b;b=Na[k(null==a?null:a)];if(!b&&(b=Na._,!b))throw qa("IMapEntry.-val",a);return b.call(null,a)}var Oa={};function Pa(a,b){if(a?a.Ib:a)return a.Ib(0,b);var c;c=Pa[k(null==a?null:a)];if(!c&&(c=Pa._,!c))throw qa("ISet.-disjoin",a);return c.call(null,a,b)}
function Qa(a){if(a?a.Aa:a)return a.Aa(a);var b;b=Qa[k(null==a?null:a)];if(!b&&(b=Qa._,!b))throw qa("IStack.-peek",a);return b.call(null,a)}function Ra(a){if(a?a.Ba:a)return a.Ba(a);var b;b=Ra[k(null==a?null:a)];if(!b&&(b=Ra._,!b))throw qa("IStack.-pop",a);return b.call(null,a)}var Sa={};function Ta(a,b,c){if(a?a.Pa:a)return a.Pa(a,b,c);var d;d=Ta[k(null==a?null:a)];if(!d&&(d=Ta._,!d))throw qa("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function Ua(a){if(a?a.Eb:a)return a.state;var b;b=Ua[k(null==a?null:a)];if(!b&&(b=Ua._,!b))throw qa("IDeref.-deref",a);return b.call(null,a)}var Va={};function Wa(a){if(a?a.D:a)return a.D(a);var b;b=Wa[k(null==a?null:a)];if(!b&&(b=Wa._,!b))throw qa("IMeta.-meta",a);return b.call(null,a)}var Xa={};function Ya(a,b){if(a?a.H:a)return a.H(a,b);var c;c=Ya[k(null==a?null:a)];if(!c&&(c=Ya._,!c))throw qa("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var Za={},$a=function(){function a(a,b,c){if(a?a.R:a)return a.R(a,b,c);var h;h=$a[k(null==a?null:a)];if(!h&&(h=$a._,!h))throw qa("IReduce.-reduce",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.Q:a)return a.Q(a,b);var c;c=$a[k(null==a?null:a)];if(!c&&(c=$a._,!c))throw qa("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;
return c}();function ab(a,b){if(a?a.u:a)return a.u(a,b);var c;c=ab[k(null==a?null:a)];if(!c&&(c=ab._,!c))throw qa("IEquiv.-equiv",a);return c.call(null,a,b)}function bb(a){if(a?a.v:a)return a.v(a);var b;b=bb[k(null==a?null:a)];if(!b&&(b=bb._,!b))throw qa("IHash.-hash",a);return b.call(null,a)}var cb={};function db(a){if(a?a.G:a)return a.G(a);var b;b=db[k(null==a?null:a)];if(!b&&(b=db._,!b))throw qa("ISeqable.-seq",a);return b.call(null,a)}var eb={},fb={};
function gb(a){if(a?a.Sa:a)return a.Sa(a);var b;b=gb[k(null==a?null:a)];if(!b&&(b=gb._,!b))throw qa("IReversible.-rseq",a);return b.call(null,a)}function hb(a,b){if(a?a.ub:a)return a.ub(a,b);var c;c=hb[k(null==a?null:a)];if(!c&&(c=hb._,!c))throw qa("ISorted.-sorted-seq",a);return c.call(null,a,b)}function ib(a,b,c){if(a?a.vb:a)return a.vb(a,b,c);var d;d=ib[k(null==a?null:a)];if(!d&&(d=ib._,!d))throw qa("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}
function jb(a,b){if(a?a.tb:a)return a.tb(a,b);var c;c=jb[k(null==a?null:a)];if(!c&&(c=jb._,!c))throw qa("ISorted.-entry-key",a);return c.call(null,a,b)}function kb(a){if(a?a.sb:a)return a.sb(a);var b;b=kb[k(null==a?null:a)];if(!b&&(b=kb._,!b))throw qa("ISorted.-comparator",a);return b.call(null,a)}function lb(a,b){if(a?a.Ob:a)return a.Ob(0,b);var c;c=lb[k(null==a?null:a)];if(!c&&(c=lb._,!c))throw qa("IWriter.-write",a);return c.call(null,a,b)}var mb={};
function nb(a,b,c){if(a?a.t:a)return a.t(a,b,c);var d;d=nb[k(null==a?null:a)];if(!d&&(d=nb._,!d))throw qa("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function ob(a,b,c){if(a?a.xb:a)return a.xb(a,b,c);var d;d=ob[k(null==a?null:a)];if(!d&&(d=ob._,!d))throw qa("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}function pb(a,b,c){if(a?a.wb:a)return a.wb(a,b,c);var d;d=pb[k(null==a?null:a)];if(!d&&(d=pb._,!d))throw qa("IWatchable.-add-watch",a);return d.call(null,a,b,c)}
function qb(a){if(a?a.Wa:a)return a.Wa(a);var b;b=qb[k(null==a?null:a)];if(!b&&(b=qb._,!b))throw qa("IEditableCollection.-as-transient",a);return b.call(null,a)}function rb(a,b){if(a?a.Na:a)return a.Na(a,b);var c;c=rb[k(null==a?null:a)];if(!c&&(c=rb._,!c))throw qa("ITransientCollection.-conj!",a);return c.call(null,a,b)}function sb(a){if(a?a.Oa:a)return a.Oa(a);var b;b=sb[k(null==a?null:a)];if(!b&&(b=sb._,!b))throw qa("ITransientCollection.-persistent!",a);return b.call(null,a)}
function tb(a,b,c){if(a?a.$a:a)return a.$a(a,b,c);var d;d=tb[k(null==a?null:a)];if(!d&&(d=tb._,!d))throw qa("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function ub(a,b,c){if(a?a.Nb:a)return a.Nb(0,b,c);var d;d=ub[k(null==a?null:a)];if(!d&&(d=ub._,!d))throw qa("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}function vb(a){if(a?a.Db:a)return a.Db();var b;b=vb[k(null==a?null:a)];if(!b&&(b=vb._,!b))throw qa("IChunk.-drop-first",a);return b.call(null,a)}
function wb(a){if(a?a.qb:a)return a.qb(a);var b;b=wb[k(null==a?null:a)];if(!b&&(b=wb._,!b))throw qa("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function xb(a){if(a?a.rb:a)return a.rb(a);var b;b=xb[k(null==a?null:a)];if(!b&&(b=xb._,!b))throw qa("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function yb(a){if(a?a.pb:a)return a.pb(a);var b;b=yb[k(null==a?null:a)];if(!b&&(b=yb._,!b))throw qa("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function zb(a){this.dc=a;this.q=0;this.l=1073741824}zb.prototype.Ob=function(a,b){return this.dc.append(b)};function Ab(a){var b=new ea;a.t(null,new zb(b),ga());return""+x.a(b)}function Bb(a,b){if(q(Cb.b?Cb.b(a,b):Cb.call(null,a,b)))return 0;var c=oa(a.ka);if(q(c?b.ka:c))return-1;if(q(a.ka)){if(oa(b.ka))return 1;c=Db.b?Db.b(a.ka,b.ka):Db.call(null,a.ka,b.ka);return 0===c?Db.b?Db.b(a.name,b.name):Db.call(null,a.name,b.name):c}return Eb?Db.b?Db.b(a.name,b.name):Db.call(null,a.name,b.name):null}
function Fb(a,b,c,d,e){this.ka=a;this.name=b;this.La=c;this.Ma=d;this.sa=e;this.l=2154168321;this.q=4096}f=Fb.prototype;f.t=function(a,b){return lb(b,this.La)};f.v=function(){var a=this.Ma;return null!=a?a:this.Ma=a=Hb.b?Hb.b(Ib.a?Ib.a(this.ka):Ib.call(null,this.ka),Ib.a?Ib.a(this.name):Ib.call(null,this.name)):Hb.call(null,Ib.a?Ib.a(this.ka):Ib.call(null,this.ka),Ib.a?Ib.a(this.name):Ib.call(null,this.name))};f.H=function(a,b){return new Fb(this.ka,this.name,this.La,this.Ma,b)};f.D=function(){return this.sa};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ga.c(c,this,null);case 3:return Ga.c(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return Ga.c(a,this,null)};f.b=function(a,b){return Ga.c(a,this,b)};f.u=function(a,b){return b instanceof Fb?this.La===b.La:!1};f.toString=function(){return this.La};
var Jb=function(){function a(a,b){var c=null!=a?""+x.a(a)+"/"+x.a(b):b;return new Fb(a,b,c,null,null)}function b(a){return a instanceof Fb?a:c.b(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}();
function A(a){if(null==a)return null;if(a&&(a.l&8388608||a.lc))return a.G(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new Kb(a,0);if(s(cb,a))return db(a);if(v)throw Error(""+x.a(a)+" is not ISeqable");return null}function B(a){if(null==a)return null;if(a&&(a.l&64||a.Za))return a.S(null);a=A(a);return null==a?null:Ca(a)}function E(a){return null!=a?a&&(a.l&64||a.Za)?a.X(null):(a=A(a))?Da(a):Lb:Lb}
function G(a){return null==a?null:a&&(a.l&128||a.Gb)?a.la(null):A(E(a))}
var Cb=function(){function a(a,b){return null==a?null==b:a===b||ab(a,b)}var b=null,c=function(){function a(b,d,l){var m=null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,m)}function c(a,d,e){for(;;)if(b.b(a,d))if(G(e))a=d,d=B(e),e=G(e);else return b.b(d,B(e));else return!1}a.m=2;a.h=function(a){var b=B(a);a=G(a);var d=B(a);a=E(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.d(b,e,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.m=2;b.h=c.h;b.a=function(){return!0};b.b=a;b.d=c.d;return b}();va["null"]=!0;wa["null"]=function(){return 0};Date.prototype.u=function(a,b){return b instanceof Date&&this.toString()===b.toString()};ab.number=function(a,b){return a===b};Va["function"]=!0;Wa["function"]=function(){return null};ua["function"]=!0;bb._=function(a){return a[aa]||(a[aa]=++ba)};function Mb(a){return a+1}
var Ob=function(){function a(a,b,c,d){for(var m=wa(a);;)if(d<m)c=b.b?b.b(c,y.b(a,d)):b.call(null,c,y.b(a,d)),d+=1;else return c}function b(a,b,c){for(var d=wa(a),m=0;;)if(m<d)c=b.b?b.b(c,y.b(a,m)):b.call(null,c,y.b(a,m)),m+=1;else return c}function c(a,b){var c=wa(a);if(0===c)return b.r?b.r():b.call(null);for(var d=y.b(a,0),m=1;;)if(m<c)d=b.b?b.b(d,y.b(a,m)):b.call(null,d,y.b(a,m)),m+=1;else return d}var d=null,d=function(d,g,h,l){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,
d,g,h);case 4:return a.call(this,d,g,h,l)}throw Error("Invalid arity: "+arguments.length);};d.b=c;d.c=b;d.k=a;return d}(),Pb=function(){function a(a,b,c,d){for(var m=a.length;;)if(d<m)c=b.b?b.b(c,a[d]):b.call(null,c,a[d]),d+=1;else return c}function b(a,b,c){for(var d=a.length,m=0;;)if(m<d)c=b.b?b.b(c,a[m]):b.call(null,c,a[m]),m+=1;else return c}function c(a,b){var c=a.length;if(0===a.length)return b.r?b.r():b.call(null);for(var d=a[0],m=1;;)if(m<c)d=b.b?b.b(d,a[m]):b.call(null,d,a[m]),m+=1;else return d}
var d=null,d=function(d,g,h,l){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,d,g,h,l)}throw Error("Invalid arity: "+arguments.length);};d.b=c;d.c=b;d.k=a;return d}();function Qb(a){return a?a.l&2||a.Rb?!0:a.l?!1:s(va,a):s(va,a)}function Rb(a){return a?a.l&16||a.Fb?!0:a.l?!1:s(Aa,a):s(Aa,a)}function Kb(a,b){this.e=a;this.p=b;this.l=166199550;this.q=8192}f=Kb.prototype;f.v=function(){return Sb.a?Sb.a(this):Sb.call(null,this)};
f.la=function(){return this.p+1<this.e.length?new Kb(this.e,this.p+1):null};f.F=function(a,b){return J.b?J.b(b,this):J.call(null,b,this)};f.Sa=function(){var a=wa(this);return 0<a?new Tb(this,a-1,null):null};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Pb.k(this.e,b,this.e[this.p],this.p+1)};f.R=function(a,b,c){return Pb.k(this.e,b,c,this.p)};f.G=function(){return this};f.L=function(){return this.e.length-this.p};f.S=function(){return this.e[this.p]};
f.X=function(){return this.p+1<this.e.length?new Kb(this.e,this.p+1):Lb};f.u=function(a,b){return Ub.b?Ub.b(this,b):Ub.call(null,this,b)};f.A=function(a,b){var c=b+this.p;return c<this.e.length?this.e[c]:null};f.na=function(a,b,c){a=b+this.p;return a<this.e.length?this.e[a]:c};f.J=function(){return Lb};
var Vb=function(){function a(a,b){return b<a.length?new Kb(a,b):null}function b(a){return c.b(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}(),I=function(){function a(a,b){return Vb.b(a,b)}function b(a){return Vb.b(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.b=a;return c}();function Tb(a,b,c){this.hb=a;this.p=b;this.j=c;this.l=32374990;this.q=8192}f=Tb.prototype;f.v=function(){return Sb.a?Sb.a(this):Sb.call(null,this)};f.la=function(){return 0<this.p?new Tb(this.hb,this.p-1,null):null};f.F=function(a,b){return J.b?J.b(b,this):J.call(null,b,this)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b?Wb.b(b,this):Wb.call(null,b,this)};f.R=function(a,b,c){return Wb.c?Wb.c(b,c,this):Wb.call(null,b,c,this)};
f.G=function(){return this};f.L=function(){return this.p+1};f.S=function(){return y.b(this.hb,this.p)};f.X=function(){return 0<this.p?new Tb(this.hb,this.p-1,null):Lb};f.u=function(a,b){return Ub.b?Ub.b(this,b):Ub.call(null,this,b)};f.H=function(a,b){return new Tb(this.hb,this.p,b)};f.D=function(){return this.j};f.J=function(){return Xb.b?Xb.b(Lb,this.j):Xb.call(null,Lb,this.j)};ab._=function(a,b){return a===b};
var Yb=function(){function a(a,b){return null!=a?za(a,b):za(Lb,b)}var b=null,c=function(){function a(b,d,l){var m=null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,m)}function c(a,d,e){for(;;)if(q(e))a=b.b(a,d),d=B(e),e=G(e);else return b.b(a,d)}a.m=2;a.h=function(a){var b=B(a);a=G(a);var d=B(a);a=E(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.d(b,e,I(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.m=2;b.h=c.h;b.b=a;b.d=c.d;return b}();function K(a){if(null!=a)if(a&&(a.l&2||a.Rb))a=a.L(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(s(va,a))a=wa(a);else if(v)a:{a=A(a);for(var b=0;;){if(Qb(a)){a=b+wa(a);break a}a=G(a);b+=1}a=void 0}else a=null;else a=0;return a}
var Zb=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return A(a)?B(a):c;if(Rb(a))return y.c(a,b,c);if(A(a))a=G(a),b-=1;else return v?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(A(a))return B(a);throw Error("Index out of bounds");}if(Rb(a))return y.b(a,b);if(A(a)){var c=G(a),h=b-1;a=c;b=h}else{if(v)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}(),M=function(){function a(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(a&&(a.l&16||a.Fb))return a.na(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(s(Aa,a))return y.b(a,b);if(a?a.l&64||a.Za||(a.l?0:s(Ba,a)):s(Ba,a))return Zb.c(a,b,c);if(v)throw Error("nth not supported on this type "+x.a(sa(pa(a))));return null}function b(a,
b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.l&16||a.Fb))return a.A(null,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(s(Aa,a))return y.b(a,b);if(a?a.l&64||a.Za||(a.l?0:s(Ba,a)):s(Ba,a))return Zb.b(a,b);if(v)throw Error("nth not supported on this type "+x.a(sa(pa(a))));return null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+
arguments.length);};c.b=b;c.c=a;return c}(),$b=function(){function a(a,b,c){return null!=a?a&&(a.l&256||a.Vb)?a.C(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:s(Fa,a)?Ga.c(a,b,c):v?c:null:c}function b(a,b){return null==a?null:a&&(a.l&256||a.Vb)?a.B(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:s(Fa,a)?Ga.b(a,b):null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}(),bc=function(){function a(a,b,c){return null!=a?Ia(a,b,c):ac.b?ac.b([b],[c]):ac.call(null,[b],[c])}var b=null,c=function(){function a(b,d,l,m){var n=null;3<arguments.length&&(n=I(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,l,n)}function c(a,d,e,m){for(;;)if(a=b.c(a,d,e),q(m))d=B(m),e=B(G(m)),m=G(G(m));else return a}a.m=3;a.h=function(a){var b=B(a);a=G(a);var d=B(a);a=G(a);var m=B(a);a=E(a);return c(b,
d,m,a)};a.d=c;return a}(),b=function(b,e,g,h){switch(arguments.length){case 3:return a.call(this,b,e,g);default:return c.d(b,e,g,I(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.m=3;b.h=c.h;b.c=a;b.d=c.d;return b}(),cc=function(){function a(a,b){return null==a?null:Ka(a,b)}var b=null,c=function(){function a(b,d,l){var m=null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,m)}function c(a,d,e){for(;;){if(null==a)return null;a=b.b(a,d);
if(q(e))d=B(e),e=G(e);else return a}}a.m=2;a.h=function(a){var b=B(a);a=G(a);var d=B(a);a=E(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,e,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.m=2;b.h=c.h;b.a=function(a){return a};b.b=a;b.d=c.d;return b}();function dc(a){var b="function"==k(a);return b?b:a?q(q(null)?null:a.Qb)?!0:a.Pb?!1:s(ua,a):s(ua,a)}
function ec(a,b){this.f=a;this.j=b;this.q=0;this.l=393217}f=ec.prototype;
f.call=function(){var a=null;return a=function(a,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra,Gb){switch(arguments.length){case 2:var u=a,u=this;return u.f.a?u.f.a(c):u.f.call(null,c);case 3:return u=a,u=this,u.f.b?u.f.b(c,d):u.f.call(null,c,d);case 4:return u=a,u=this,u.f.c?u.f.c(c,d,e):u.f.call(null,c,d,e);case 5:return u=a,u=this,u.f.k?u.f.k(c,d,e,g):u.f.call(null,c,d,e,g);case 6:return u=a,u=this,u.f.o?u.f.o(c,d,e,g,h):u.f.call(null,c,d,e,g,h);case 7:return u=a,u=this,u.f.s?u.f.s(c,d,e,g,h,l):u.f.call(null,
c,d,e,g,h,l);case 8:return u=a,u=this,u.f.T?u.f.T(c,d,e,g,h,l,m):u.f.call(null,c,d,e,g,h,l,m);case 9:return u=a,u=this,u.f.V?u.f.V(c,d,e,g,h,l,m,n):u.f.call(null,c,d,e,g,h,l,m,n);case 10:return u=a,u=this,u.f.ia?u.f.ia(c,d,e,g,h,l,m,n,p):u.f.call(null,c,d,e,g,h,l,m,n,p);case 11:return u=a,u=this,u.f.Z?u.f.Z(c,d,e,g,h,l,m,n,p,r):u.f.call(null,c,d,e,g,h,l,m,n,p,r);case 12:return u=a,u=this,u.f.$?u.f.$(c,d,e,g,h,l,m,n,p,r,t):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t);case 13:return u=a,u=this,u.f.U?u.f.U(c,
d,e,g,h,l,m,n,p,r,t,w):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w);case 14:return u=a,u=this,u.f.aa?u.f.aa(c,d,e,g,h,l,m,n,p,r,t,w,z):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z);case 15:return u=a,u=this,u.f.ba?u.f.ba(c,d,e,g,h,l,m,n,p,r,t,w,z,C):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C);case 16:return u=a,u=this,u.f.ca?u.f.ca(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D);case 17:return u=a,u=this,u.f.da?u.f.da(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):u.f.call(null,c,d,e,g,h,l,m,n,
p,r,t,w,z,C,D,H);case 18:return u=a,u=this,u.f.ea?u.f.ea(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L);case 19:return u=a,u=this,u.f.fa?u.f.fa(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T);case 20:return u=a,u=this,u.f.ga?u.f.ga(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia):u.f.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia);case 21:return u=a,u=this,u.f.ha?u.f.ha(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra):u.f.call(null,c,
d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra);case 22:return u=a,u=this,fc.Ub?fc.Ub(u.f,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra,Gb):fc.call(null,u.f,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra,Gb)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.f.a?this.f.a(a):this.f.call(null,a)};f.b=function(a,b){return this.f.b?this.f.b(a,b):this.f.call(null,a,b)};
f.c=function(a,b,c){return this.f.c?this.f.c(a,b,c):this.f.call(null,a,b,c)};f.k=function(a,b,c,d){return this.f.k?this.f.k(a,b,c,d):this.f.call(null,a,b,c,d)};f.o=function(a,b,c,d,e){return this.f.o?this.f.o(a,b,c,d,e):this.f.call(null,a,b,c,d,e)};f.s=function(a,b,c,d,e,g){return this.f.s?this.f.s(a,b,c,d,e,g):this.f.call(null,a,b,c,d,e,g)};f.T=function(a,b,c,d,e,g,h){return this.f.T?this.f.T(a,b,c,d,e,g,h):this.f.call(null,a,b,c,d,e,g,h)};
f.V=function(a,b,c,d,e,g,h,l){return this.f.V?this.f.V(a,b,c,d,e,g,h,l):this.f.call(null,a,b,c,d,e,g,h,l)};f.ia=function(a,b,c,d,e,g,h,l,m){return this.f.ia?this.f.ia(a,b,c,d,e,g,h,l,m):this.f.call(null,a,b,c,d,e,g,h,l,m)};f.Z=function(a,b,c,d,e,g,h,l,m,n){return this.f.Z?this.f.Z(a,b,c,d,e,g,h,l,m,n):this.f.call(null,a,b,c,d,e,g,h,l,m,n)};f.$=function(a,b,c,d,e,g,h,l,m,n,p){return this.f.$?this.f.$(a,b,c,d,e,g,h,l,m,n,p):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p)};
f.U=function(a,b,c,d,e,g,h,l,m,n,p,r){return this.f.U?this.f.U(a,b,c,d,e,g,h,l,m,n,p,r):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r)};f.aa=function(a,b,c,d,e,g,h,l,m,n,p,r,t){return this.f.aa?this.f.aa(a,b,c,d,e,g,h,l,m,n,p,r,t):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t)};f.ba=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w){return this.f.ba?this.f.ba(a,b,c,d,e,g,h,l,m,n,p,r,t,w):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w)};
f.ca=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z){return this.f.ca?this.f.ca(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z)};f.da=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C){return this.f.da?this.f.da(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C)};f.ea=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D){return this.f.ea?this.f.ea(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D)};
f.fa=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H){return this.f.fa?this.f.fa(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H)};f.ga=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L){return this.f.ga?this.f.ga(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L)};
f.ha=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T){return this.f.ha?this.f.ha(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):this.f.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T)};f.Qb=!0;f.H=function(a,b){return new ec(this.f,b)};f.D=function(){return this.j};function Xb(a,b){return dc(a)&&!(a?a.l&262144||a.pc||(a.l?0:s(Xa,a)):s(Xa,a))?new ec(a,b):null==a?null:Ya(a,b)}function gc(a){var b=null!=a;return(b?a?a.l&131072||a.Xb||(a.l?0:s(Va,a)):s(Va,a):b)?Wa(a):null}
var hc=function(){function a(a,b){return null==a?null:Pa(a,b)}var b=null,c=function(){function a(b,d,l){var m=null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,m)}function c(a,d,e){for(;;){if(null==a)return null;a=b.b(a,d);if(q(e))d=B(e),e=G(e);else return a}}a.m=2;a.h=function(a){var b=B(a);a=G(a);var d=B(a);a=E(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,
e,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.m=2;b.h=c.h;b.a=function(a){return a};b.b=a;b.d=c.d;return b}(),ic={},jc=0;function Ib(a){if(a&&(a.l&4194304||a.ic))a=a.v(null);else if("number"===typeof a)a=Math.floor(a)%2147483647;else if(!0===a)a=1;else if(!1===a)a=0;else if("string"===typeof a){255<jc&&(ic={},jc=0);var b=ic[a];"number"!==typeof b&&(b=ca(a),ic[a]=b,jc+=1);a=b}else a=null==a?0:v?bb(a):null;return a}
function kc(a){return a?a.l&16777216||a.mc?!0:a.l?!1:s(eb,a):s(eb,a)}function lc(a){return null==a?!1:a?a.l&1024||a.jc?!0:a.l?!1:s(Ja,a):s(Ja,a)}function mc(a){return a?a.l&16384||a.oc?!0:a.l?!1:s(Sa,a):s(Sa,a)}function nc(a){return a?a.q&512||a.fc?!0:!1:!1}function oc(a){var b=[];da(a,function(a){return function(b,e){return a.push(e)}}(b));return b}function pc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var qc={};function rc(a){return null==a?!1:a?a.l&64||a.Za?!0:a.l?!1:s(Ba,a):s(Ba,a)}
function sc(a){return q(a)?!0:!1}function tc(a,b){return $b.c(a,b,qc)===qc?!1:!0}function Db(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(pa(a)===pa(b))return a&&(a.q&2048||a.ib)?a.jb(null,b):a>b?1:a<b?-1:0;if(v)throw Error("compare on non-nil objects of different types");return null}
var uc=function(){function a(a,b,c,h){for(;;){var l=Db(M.b(a,h),M.b(b,h));if(0===l&&h+1<c)h+=1;else return l}}function b(a,b){var g=K(a),h=K(b);return g<h?-1:g>h?1:v?c.k(a,b,g,0):null}var c=null,c=function(c,e,g,h){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,g,h)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.k=a;return c}(),Wb=function(){function a(a,b,c){for(c=A(c);;)if(c)b=a.b?a.b(b,B(c)):a.call(null,b,B(c)),c=G(c);else return b}function b(a,
b){var c=A(b);return c?vc.c?vc.c(a,B(c),G(c)):vc.call(null,a,B(c),G(c)):a.r?a.r():a.call(null)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}(),vc=function(){function a(a,b,c){return c&&(c.l&524288||c.Zb)?c.R(null,a,b):c instanceof Array?Pb.c(c,a,b):"string"===typeof c?Pb.c(c,a,b):s(Za,c)?$a.c(c,a,b):v?Wb.c(a,b,c):null}function b(a,b){return b&&(b.l&524288||
b.Zb)?b.Q(null,a):b instanceof Array?Pb.b(b,a):"string"===typeof b?Pb.b(b,a):s(Za,b)?$a.b(b,a):v?Wb.b(a,b):null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}(),wc=function(){var a=null,b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a<c)if(G(d))a=
c,c=B(d),d=G(d);else return c<B(d);else return!1}a.m=2;a.h=function(a){var c=B(a);a=G(a);var h=B(a);a=E(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<d;default:return b.d(a,d,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.m=2;a.h=b.h;a.a=function(){return!0};a.b=function(a,b){return a<b};a.d=b.d;return a}(),xc=function(){var a=null,b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=I(Array.prototype.slice.call(arguments,
2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a<=c)if(G(d))a=c,c=B(d),d=G(d);else return c<=B(d);else return!1}a.m=2;a.h=function(a){var c=B(a);a=G(a);var h=B(a);a=E(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<=d;default:return b.d(a,d,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.m=2;a.h=b.h;a.a=function(){return!0};a.b=function(a,b){return a<=b};a.d=b.d;return a}(),yc=function(){var a=null,
b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a>c)if(G(d))a=c,c=B(d),d=G(d);else return c>B(d);else return!1}a.m=2;a.h=function(a){var c=B(a);a=G(a);var h=B(a);a=E(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>d;default:return b.d(a,d,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.m=2;a.h=b.h;
a.a=function(){return!0};a.b=function(a,b){return a>b};a.d=b.d;return a}(),zc=function(){var a=null,b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a>=c)if(G(d))a=c,c=B(d),d=G(d);else return c>=B(d);else return!1}a.m=2;a.h=function(a){var c=B(a);a=G(a);var h=B(a);a=E(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;
default:return b.d(a,d,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.m=2;a.h=b.h;a.a=function(){return!0};a.b=function(a,b){return a>=b};a.d=b.d;return a}();function Ac(a){return 0<=a?Math.floor.a?Math.floor.a(a):Math.floor.call(null,a):Math.ceil.a?Math.ceil.a(a):Math.ceil.call(null,a)}function Bc(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function Cc(a){var b=1;for(a=A(a);;)if(a&&0<b)b-=1,a=G(a);else return a}
var x=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var l=null;1<arguments.length&&(l=I(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,l)}function c(a,d){for(var e=new ea(b.a(a)),m=d;;)if(q(m))e=e.append(b.a(B(m))),m=G(m);else return e.toString()}a.m=1;a.h=function(a){var b=B(a);a=E(a);return c(b,a)};a.d=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.d(b,I(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.m=1;b.h=c.h;b.r=function(){return""};b.a=a;b.d=c.d;return b}(),Dc=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.b=function(a,c){return a.substring(c)};a.c=function(a,c,d){return a.substring(c,d)};return a}();
function Ub(a,b){return sc(kc(b)?function(){for(var c=A(a),d=A(b);;){if(null==c)return null==d;if(null==d)return!1;if(Cb.b(B(c),B(d)))c=G(c),d=G(d);else return v?!1:null}}():null)}function Hb(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function Sb(a){if(A(a)){var b=Ib(B(a));for(a=G(a);;){if(null==a)return b;b=Hb(b,Ib(B(a)));a=G(a)}}else return 0}
function Ec(a){var b=0;for(a=A(a);;)if(a){var c=B(a),b=(b+(Ib(Fc.a?Fc.a(c):Fc.call(null,c))^Ib(Gc.a?Gc.a(c):Gc.call(null,c))))%4503599627370496;a=G(a)}else return b}function Hc(a,b,c,d,e){this.j=a;this.first=b;this.Ea=c;this.count=d;this.n=e;this.l=65937646;this.q=8192}f=Hc.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.la=function(){return 1===this.count?null:this.Ea};f.F=function(a,b){return new Hc(this.j,b,this,this.count+1,null)};f.toString=function(){return Ab(this)};
f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.L=function(){return this.count};f.Aa=function(){return this.first};f.Ba=function(){return Da(this)};f.S=function(){return this.first};f.X=function(){return 1===this.count?Lb:this.Ea};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Hc(b,this.first,this.Ea,this.count,this.n)};f.D=function(){return this.j};f.J=function(){return Lb};
function Ic(a){this.j=a;this.l=65937614;this.q=8192}f=Ic.prototype;f.v=function(){return 0};f.la=function(){return null};f.F=function(a,b){return new Hc(this.j,b,null,1,null)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return null};f.L=function(){return 0};f.Aa=function(){return null};f.Ba=function(){throw Error("Can't pop empty list");};f.S=function(){return null};f.X=function(){return Lb};
f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Ic(b)};f.D=function(){return this.j};f.J=function(){return this};var Lb=new Ic(null);function Jc(a){return gb(a)}function Kc(a){return(a?a.l&134217728||a.kc||(a.l?0:s(fb,a)):s(fb,a))?gb(a):vc.c(Yb,Lb,a)}
var Lc=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof Kb&&0===a.p)b=a.e;else a:{for(b=[];;)if(null!=a)b.push(a.S(null)),a=a.la(null);else break a;b=void 0}a=b.length;for(var e=Lb;;)if(0<a){var g=a-1,e=e.F(null,b[a-1]);a=g}else return e}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}();
function Mc(a,b,c,d){this.j=a;this.first=b;this.Ea=c;this.n=d;this.l=65929452;this.q=8192}f=Mc.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.la=function(){return null==this.Ea?null:A(this.Ea)};f.F=function(a,b){return new Mc(null,b,this,this.n)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.S=function(){return this.first};f.X=function(){return null==this.Ea?Lb:this.Ea};
f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Mc(b,this.first,this.Ea,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};function J(a,b){var c=null==b;return(c?c:b&&(b.l&64||b.Za))?new Mc(null,a,b,null):new Mc(null,a,A(b),null)}function N(a,b,c,d){this.ka=a;this.name=b;this.Ia=c;this.Ma=d;this.l=2153775105;this.q=4096}f=N.prototype;f.t=function(a,b){return lb(b,":"+x.a(this.Ia))};
f.v=function(){null==this.Ma&&(this.Ma=Hb(Ib(this.ka),Ib(this.name))+2654435769);return this.Ma};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return $b.b(c,this);case 3:return $b.c(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return $b.b(a,this)};f.b=function(a,b){return $b.c(a,this,b)};f.u=function(a,b){return b instanceof N?this.Ia===b.Ia:!1};
f.toString=function(){return":"+x.a(this.Ia)};function Nc(a){return a instanceof N}function Oc(a){if(a&&(a.q&4096||a.Yb))return a.ka;throw Error("Doesn't support namespace: "+x.a(a));}
var Qc=function(){function a(a,b){return new N(a,b,""+x.a(q(a)?""+x.a(a)+"/":null)+x.a(b),null)}function b(a){if(a instanceof N)return a;if(a instanceof Fb)return new N(Oc(a),Pc.a?Pc.a(a):Pc.call(null,a),a.La,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new N(b[0],b[1],a,null):new N(null,b[0],a,null)}return null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=
b;c.b=a;return c}();function Rc(a,b,c,d){this.j=a;this.fn=b;this.M=c;this.n=d;this.q=0;this.l=32374988}f=Rc.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.la=function(){db(this);return null==this.M?null:G(this.M)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};function Sc(a){null!=a.fn&&(a.M=a.fn.r?a.fn.r():a.fn.call(null),a.fn=null);return a.M}f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};
f.G=function(){Sc(this);if(null==this.M)return null;for(var a=this.M;;)if(a instanceof Rc)a=Sc(a);else return this.M=a,A(this.M)};f.S=function(){db(this);return null==this.M?null:B(this.M)};f.X=function(){db(this);return null!=this.M?E(this.M):Lb};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Rc(b,this.fn,this.M,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};function Tc(a,b){this.ob=a;this.end=b;this.q=0;this.l=2}Tc.prototype.L=function(){return this.end};
Tc.prototype.add=function(a){this.ob[this.end]=a;return this.end+=1};Tc.prototype.O=function(){var a=new Uc(this.ob,0,this.end);this.ob=null;return a};function Vc(a){return new Tc(Array(a),0)}function Uc(a,b,c){this.e=a;this.off=b;this.end=c;this.q=0;this.l=524306}f=Uc.prototype;f.Q=function(a,b){return Pb.k(this.e,b,this.e[this.off],this.off+1)};f.R=function(a,b,c){return Pb.k(this.e,b,c,this.off)};
f.Db=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new Uc(this.e,this.off+1,this.end)};f.A=function(a,b){return this.e[this.off+b]};f.na=function(a,b,c){return 0<=b&&b<this.end-this.off?this.e[this.off+b]:c};f.L=function(){return this.end-this.off};
var Wc=function(){function a(a,b,c){return new Uc(a,b,c)}function b(a,b){return new Uc(a,b,a.length)}function c(a){return new Uc(a,0,a.length)}var d=null,d=function(d,g,h){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,g);case 3:return a.call(this,d,g,h)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.b=b;d.c=a;return d}();function Xc(a,b,c,d){this.O=a;this.wa=b;this.j=c;this.n=d;this.l=31850732;this.q=1536}f=Xc.prototype;
f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.la=function(){if(1<wa(this.O))return new Xc(vb(this.O),this.wa,this.j,null);var a=db(this.wa);return null==a?null:a};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.G=function(){return this};f.S=function(){return y.b(this.O,0)};f.X=function(){return 1<wa(this.O)?new Xc(vb(this.O),this.wa,this.j,null):null==this.wa?Lb:this.wa};f.pb=function(){return null==this.wa?null:this.wa};
f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Xc(this.O,this.wa,b,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};f.qb=function(){return this.O};f.rb=function(){return null==this.wa?Lb:this.wa};function Yc(a,b){return 0===wa(a)?b:new Xc(a,b,null,null)}function Zc(a){for(var b=[];;)if(A(a))b.push(B(a)),a=G(a);else return b}function $c(a,b){if(Qb(a))return K(a);for(var c=a,d=b,e=0;;)if(0<d&&A(c))c=G(c),d-=1,e+=1;else return e}
var bd=function ad(b){return null==b?null:null==G(b)?A(B(b)):v?J(B(b),ad(G(b))):null},cd=function(){function a(a,b){return new Rc(null,function(){var c=A(a);return c?nc(c)?Yc(wb(c),d.b(xb(c),b)):J(B(c),d.b(E(c),b)):b},null,null)}function b(a){return new Rc(null,function(){return a},null,null)}function c(){return new Rc(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var g=null;2<arguments.length&&(g=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,d,g)}function b(a,c,e){return function r(a,b){return new Rc(null,function(){var c=A(a);return c?nc(c)?Yc(wb(c),r(xb(c),b)):J(B(c),r(E(c),b)):q(b)?r(B(b),G(b)):null},null,null)}(d.b(a,c),e)}a.m=2;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=E(a);return b(c,d,a)};a.d=b;return a}(),d=function(d,h,l){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,h);default:return e.d(d,h,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};d.m=2;d.h=e.h;d.r=c;d.a=b;d.b=a;d.d=e.d;return d}(),dd=function(){function a(a,b,c,d){return J(a,J(b,J(c,d)))}function b(a,b,c){return J(a,J(b,c))}var c=null,d=function(){function a(c,d,e,n,p){var r=null;4<arguments.length&&(r=I(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,n,r)}function b(a,c,d,e,g){return J(a,J(c,J(d,J(e,bd(g)))))}a.m=4;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=G(a);var e=B(a);a=G(a);var p=B(a);a=E(a);return b(c,d,e,p,a)};a.d=b;return a}(),c=function(c,
g,h,l,m){switch(arguments.length){case 1:return A(c);case 2:return J(c,g);case 3:return b.call(this,c,g,h);case 4:return a.call(this,c,g,h,l);default:return d.d(c,g,h,l,I(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.m=4;c.h=d.h;c.a=function(a){return A(a)};c.b=function(a,b){return J(a,b)};c.c=b;c.k=a;c.d=d.d;return c}(),ed=function(){var a=null,b=function(){function a(c,g,h,l){var m=null;3<arguments.length&&(m=I(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,
g,h,m)}function b(a,c,d,l){for(;;)if(a=tb(a,c,d),q(l))c=B(l),d=B(G(l)),l=G(G(l));else return a}a.m=3;a.h=function(a){var c=B(a);a=G(a);var h=B(a);a=G(a);var l=B(a);a=E(a);return b(c,h,l,a)};a.d=b;return a}(),a=function(a,d,e,g){switch(arguments.length){case 3:return tb(a,d,e);default:return b.d(a,d,e,I(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.m=3;a.h=b.h;a.c=function(a,b,e){return tb(a,b,e)};a.d=b.d;return a}();
function fd(a,b,c){var d=A(c);if(0===b)return a.r?a.r():a.call(null);c=Ca(d);var e=Da(d);if(1===b)return a.a?a.a(c):a.a?a.a(c):a.call(null,c);var d=Ca(e),g=Da(e);if(2===b)return a.b?a.b(c,d):a.b?a.b(c,d):a.call(null,c,d);var e=Ca(g),h=Da(g);if(3===b)return a.c?a.c(c,d,e):a.c?a.c(c,d,e):a.call(null,c,d,e);var g=Ca(h),l=Da(h);if(4===b)return a.k?a.k(c,d,e,g):a.k?a.k(c,d,e,g):a.call(null,c,d,e,g);var h=Ca(l),m=Da(l);if(5===b)return a.o?a.o(c,d,e,g,h):a.o?a.o(c,d,e,g,h):a.call(null,c,d,e,g,h);var l=Ca(m),
n=Da(m);if(6===b)return a.s?a.s(c,d,e,g,h,l):a.s?a.s(c,d,e,g,h,l):a.call(null,c,d,e,g,h,l);var m=Ca(n),p=Da(n);if(7===b)return a.T?a.T(c,d,e,g,h,l,m):a.T?a.T(c,d,e,g,h,l,m):a.call(null,c,d,e,g,h,l,m);var n=Ca(p),r=Da(p);if(8===b)return a.V?a.V(c,d,e,g,h,l,m,n):a.V?a.V(c,d,e,g,h,l,m,n):a.call(null,c,d,e,g,h,l,m,n);var p=Ca(r),t=Da(r);if(9===b)return a.ia?a.ia(c,d,e,g,h,l,m,n,p):a.ia?a.ia(c,d,e,g,h,l,m,n,p):a.call(null,c,d,e,g,h,l,m,n,p);var r=Ca(t),w=Da(t);if(10===b)return a.Z?a.Z(c,d,e,g,h,l,m,n,
p,r):a.Z?a.Z(c,d,e,g,h,l,m,n,p,r):a.call(null,c,d,e,g,h,l,m,n,p,r);var t=Ca(w),z=Da(w);if(11===b)return a.$?a.$(c,d,e,g,h,l,m,n,p,r,t):a.$?a.$(c,d,e,g,h,l,m,n,p,r,t):a.call(null,c,d,e,g,h,l,m,n,p,r,t);var w=Ca(z),C=Da(z);if(12===b)return a.U?a.U(c,d,e,g,h,l,m,n,p,r,t,w):a.U?a.U(c,d,e,g,h,l,m,n,p,r,t,w):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w);var z=Ca(C),D=Da(C);if(13===b)return a.aa?a.aa(c,d,e,g,h,l,m,n,p,r,t,w,z):a.aa?a.aa(c,d,e,g,h,l,m,n,p,r,t,w,z):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z);var C=Ca(D),
H=Da(D);if(14===b)return a.ba?a.ba(c,d,e,g,h,l,m,n,p,r,t,w,z,C):a.ba?a.ba(c,d,e,g,h,l,m,n,p,r,t,w,z,C):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C);var D=Ca(H),L=Da(H);if(15===b)return a.ca?a.ca(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):a.ca?a.ca(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D);var H=Ca(L),T=Da(L);if(16===b)return a.da?a.da(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):a.da?a.da(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H);var L=Ca(T),ia=Da(T);if(17===
b)return a.ea?a.ea(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):a.ea?a.ea(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L);var T=Ca(ia),ra=Da(ia);if(18===b)return a.fa?a.fa(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):a.fa?a.fa(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T);ia=Ca(ra);ra=Da(ra);if(19===b)return a.ga?a.ga(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia):a.ga?a.ga(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,
z,C,D,H,L,T,ia);var Gb=Ca(ra);Da(ra);if(20===b)return a.ha?a.ha(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,Gb):a.ha?a.ha(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,Gb):a.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,Gb);throw Error("Only up to 20 arguments supported on functions");}
var fc=function(){function a(a,b,c,d,e){b=dd.k(b,c,d,e);c=a.m;return a.h?(d=$c(b,c+1),d<=c?fd(a,d,b):a.h(b)):a.apply(a,Zc(b))}function b(a,b,c,d){b=dd.c(b,c,d);c=a.m;return a.h?(d=$c(b,c+1),d<=c?fd(a,d,b):a.h(b)):a.apply(a,Zc(b))}function c(a,b,c){b=dd.b(b,c);c=a.m;if(a.h){var d=$c(b,c+1);return d<=c?fd(a,d,b):a.h(b)}return a.apply(a,Zc(b))}function d(a,b){var c=a.m;if(a.h){var d=$c(b,c+1);return d<=c?fd(a,d,b):a.h(b)}return a.apply(a,Zc(b))}var e=null,g=function(){function a(c,d,e,g,h,w){var z=null;
5<arguments.length&&(z=I(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,g,h,z)}function b(a,c,d,e,g,h){c=J(c,J(d,J(e,J(g,bd(h)))));d=a.m;return a.h?(e=$c(c,d+1),e<=d?fd(a,e,c):a.h(c)):a.apply(a,Zc(c))}a.m=5;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=G(a);var e=B(a);a=G(a);var g=B(a);a=G(a);var h=B(a);a=E(a);return b(c,d,e,g,h,a)};a.d=b;return a}(),e=function(e,l,m,n,p,r){switch(arguments.length){case 2:return d.call(this,e,l);case 3:return c.call(this,e,l,m);case 4:return b.call(this,
e,l,m,n);case 5:return a.call(this,e,l,m,n,p);default:return g.d(e,l,m,n,p,I(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.m=5;e.h=g.h;e.b=d;e.c=c;e.k=b;e.o=a;e.d=g.d;return e}(),gd=function(){function a(a,b){return!Cb.b(a,b)}var b=null,c=function(){function a(c,d,l){var m=null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,m)}function b(a,c,d){return oa(fc.k(Cb,a,c,d))}a.m=2;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=E(a);return b(c,
d,a)};a.d=b;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.d(b,e,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.m=2;b.h=c.h;b.a=function(){return!1};b.b=a;b.d=c.d;return b}();function hd(a,b){for(;;){if(null==A(b))return!0;if(q(a.a?a.a(B(b)):a.call(null,B(b)))){var c=a,d=G(b);a=c;b=d}else return v?!1:null}}
function id(a){for(var b=jd;;)if(A(a)){var c=b.a?b.a(B(a)):b.call(null,B(a));if(q(c))return c;a=G(a)}else return null}function jd(a){return a}
var kd=function(){function a(a,b,c){return function(){var d=null,m=function(){function d(a,b,c,e){var g=null;3<arguments.length&&(g=I(Array.prototype.slice.call(arguments,3),0));return l.call(this,a,b,c,g)}function l(d,m,n,p){return a.a?a.a(b.a?b.a(fc.o(c,d,m,n,p)):b.call(null,fc.o(c,d,m,n,p))):a.call(null,b.a?b.a(fc.o(c,d,m,n,p)):b.call(null,fc.o(c,d,m,n,p)))}d.m=3;d.h=function(a){var b=B(a);a=G(a);var c=B(a);a=G(a);var d=B(a);a=E(a);return l(b,c,d,a)};d.d=l;return d}(),d=function(d,l,r,t){switch(arguments.length){case 0:return a.a?
a.a(b.a?b.a(c.r?c.r():c.call(null)):b.call(null,c.r?c.r():c.call(null))):a.call(null,b.a?b.a(c.r?c.r():c.call(null)):b.call(null,c.r?c.r():c.call(null)));case 1:return a.a?a.a(b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d))):a.call(null,b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d)));case 2:return a.a?a.a(b.a?b.a(c.b?c.b(d,l):c.call(null,d,l)):b.call(null,c.b?c.b(d,l):c.call(null,d,l))):a.call(null,b.a?b.a(c.b?c.b(d,l):c.call(null,d,l)):b.call(null,
c.b?c.b(d,l):c.call(null,d,l)));case 3:return a.a?a.a(b.a?b.a(c.c?c.c(d,l,r):c.call(null,d,l,r)):b.call(null,c.c?c.c(d,l,r):c.call(null,d,l,r))):a.call(null,b.a?b.a(c.c?c.c(d,l,r):c.call(null,d,l,r)):b.call(null,c.c?c.c(d,l,r):c.call(null,d,l,r)));default:return m.d(d,l,r,I(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.m=3;d.h=m.h;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,g){var h=null;3<arguments.length&&(h=I(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,h)}function d(c,h,l,m){return a.a?a.a(fc.o(b,c,h,l,m)):a.call(null,fc.o(b,c,h,l,m))}c.m=3;c.h=function(a){var b=B(a);a=G(a);var c=B(a);a=G(a);var e=B(a);a=E(a);return d(b,c,e,a)};c.d=d;return c}(),c=function(c,h,p,r){switch(arguments.length){case 0:return a.a?a.a(b.r?b.r():b.call(null)):a.call(null,b.r?b.r():b.call(null));case 1:return a.a?a.a(b.a?b.a(c):b.call(null,c)):a.call(null,b.a?b.a(c):b.call(null,c));case 2:return a.a?a.a(b.b?b.b(c,h):b.call(null,c,h)):a.call(null,
b.b?b.b(c,h):b.call(null,c,h));case 3:return a.a?a.a(b.c?b.c(c,h,p):b.call(null,c,h,p)):a.call(null,b.c?b.c(c,h,p):b.call(null,c,h,p));default:return d.d(c,h,p,I(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.m=3;c.h=d.h;return c}()}var c=null,d=function(){function a(c,d,e,n){var p=null;3<arguments.length&&(p=I(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,p)}function b(a,c,d,e){return function(a){return function(){function b(a){var d=null;0<arguments.length&&
(d=I(Array.prototype.slice.call(arguments,0),0));return c.call(this,d)}function c(b){b=fc.b(B(a),b);for(var d=G(a);;)if(d)b=B(d).call(null,b),d=G(d);else return b}b.m=0;b.h=function(a){a=A(a);return c(a)};b.d=c;return b}()}(Kc(dd.k(a,c,d,e)))}a.m=3;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=G(a);var e=B(a);a=E(a);return b(c,d,e,a)};a.d=b;return a}(),c=function(c,g,h,l){switch(arguments.length){case 0:return jd;case 1:return c;case 2:return b.call(this,c,g);case 3:return a.call(this,c,g,h);default:return d.d(c,
g,h,I(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.m=3;c.h=d.h;c.r=function(){return jd};c.a=function(a){return a};c.b=b;c.c=a;c.d=d.d;return c}(),ld=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=I(Array.prototype.slice.call(arguments,0),0));return p.call(this,b)}function p(e){return fc.o(a,b,c,d,e)}e.m=0;e.h=function(a){a=A(a);return p(a)};e.d=p;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&
(b=I(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return fc.k(a,b,c,d)}d.m=0;d.h=function(a){a=A(a);return e(a)};d.d=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=I(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return fc.c(a,b,c)}c.m=0;c.h=function(a){a=A(a);return d(a)};c.d=d;return c}()}var d=null,e=function(){function a(c,d,e,g,r){var t=null;4<arguments.length&&(t=I(Array.prototype.slice.call(arguments,
4),0));return b.call(this,c,d,e,g,t)}function b(a,c,d,e,g){return function(){function b(a){var c=null;0<arguments.length&&(c=I(Array.prototype.slice.call(arguments,0),0));return h.call(this,c)}function h(b){return fc.o(a,c,d,e,cd.b(g,b))}b.m=0;b.h=function(a){a=A(a);return h(a)};b.d=h;return b}()}a.m=4;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=G(a);var e=B(a);a=G(a);var g=B(a);a=E(a);return b(c,d,e,g,a)};a.d=b;return a}(),d=function(d,h,l,m,n){switch(arguments.length){case 1:return d;case 2:return c.call(this,
d,h);case 3:return b.call(this,d,h,l);case 4:return a.call(this,d,h,l,m);default:return e.d(d,h,l,m,I(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.m=4;d.h=e.h;d.a=function(a){return a};d.b=c;d.c=b;d.k=a;d.d=e.d;return d}(),nd=function md(b,c){return new Rc(null,function(){var d=A(c);if(d){if(nc(d)){for(var e=wb(d),g=K(e),h=Vc(g),l=0;;)if(l<g){var m=b.a?b.a(y.b(e,l)):b.call(null,y.b(e,l));null!=m&&h.add(m);l+=1}else break;return Yc(h.O(),md(b,xb(d)))}e=b.a?b.a(B(d)):b.call(null,
B(d));return null==e?md(b,E(d)):J(e,md(b,E(d)))}return null},null,null)},od=function(){function a(a,b,c,e){return new Rc(null,function(){var n=A(b),p=A(c),r=A(e);return n&&p&&r?J(a.c?a.c(B(n),B(p),B(r)):a.call(null,B(n),B(p),B(r)),d.k(a,E(n),E(p),E(r))):null},null,null)}function b(a,b,c){return new Rc(null,function(){var e=A(b),n=A(c);return e&&n?J(a.b?a.b(B(e),B(n)):a.call(null,B(e),B(n)),d.c(a,E(e),E(n))):null},null,null)}function c(a,b){return new Rc(null,function(){var c=A(b);if(c){if(nc(c)){for(var e=
wb(c),n=K(e),p=Vc(n),r=0;;)if(r<n){var t=a.a?a.a(y.b(e,r)):a.call(null,y.b(e,r));p.add(t);r+=1}else break;return Yc(p.O(),d.b(a,xb(c)))}return J(a.a?a.a(B(c)):a.call(null,B(c)),d.b(a,E(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,g,r){var t=null;4<arguments.length&&(t=I(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,g,t)}function b(a,c,e,g,h){var t=function z(a){return new Rc(null,function(){var b=d.b(A,a);return hd(jd,b)?J(d.b(B,b),z(d.b(E,b))):null},
null,null)};return d.b(function(){return function(b){return fc.b(a,b)}}(t),t(Yb.d(h,g,I([e,c],0))))}a.m=4;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=G(a);var e=B(a);a=G(a);var g=B(a);a=E(a);return b(c,d,e,g,a)};a.d=b;return a}(),d=function(d,h,l,m,n){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,l);case 4:return a.call(this,d,h,l,m);default:return e.d(d,h,l,m,I(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.m=4;d.h=e.h;d.b=c;d.c=b;d.k=
a;d.d=e.d;return d}(),qd=function pd(b,c){return new Rc(null,function(){if(0<b){var d=A(c);return d?J(B(d),pd(b-1,E(d))):null}return null},null,null)};function rd(a,b){return new Rc(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=A(b);if(0<a&&e){var g=a-1,e=E(e);a=g;b=e}else return e}}),null,null)}
function sd(a,b){return new Rc(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=A(b),g;g=(g=e)?a.a?a.a(B(e)):a.call(null,B(e)):g;if(q(g))g=a,e=E(e),a=g,b=e;else return e}}),null,null)}
var td=function(){function a(a,b){return qd(a,c.a(b))}function b(a){return new Rc(null,function(){return J(a,c.a(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}(),ud=function(){function a(a,c){return new Rc(null,function(){var g=A(a),h=A(c);return g&&h?J(B(g),J(B(h),b.b(E(g),E(h)))):null},null,null)}var b=null,c=function(){function a(b,d,l){var m=
null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,m)}function c(a,d,e){return new Rc(null,function(){var c=od.b(A,Yb.d(e,d,I([a],0)));return hd(jd,c)?cd.b(od.b(B,c),fc.b(b,od.b(E,c))):null},null,null)}a.m=2;a.h=function(a){var b=B(a);a=G(a);var d=B(a);a=E(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.d(b,e,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.m=2;b.h=c.h;b.b=a;b.d=c.d;return b}();function vd(a){return function c(a,e){return new Rc(null,function(){var g=A(a);return g?J(B(g),c(E(g),e)):A(e)?c(B(e),E(e)):null},null,null)}(null,a)}
var wd=function(){function a(a,b){return vd(od.b(a,b))}var b=null,c=function(){function a(c,d,l){var m=null;2<arguments.length&&(m=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,m)}function b(a,c,d){return vd(fc.k(od,a,c,d))}a.m=2;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=E(a);return b(c,d,a)};a.d=b;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.d(b,e,I(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.m=2;b.h=c.h;b.b=a;b.d=c.d;return b}();function xd(a,b){var c;null!=a?a&&(a.q&4||a.hc)?(c=vc.c(rb,qb(a),b),c=sb(c)):c=vc.c(za,a,b):c=vc.c(Yb,Lb,b);return c}
var yd=function(){function a(a,b,c,l){return new Rc(null,function(){var m=A(l);if(m){var n=qd(a,m);return a===K(n)?J(n,d.k(a,b,c,rd(b,m))):za(Lb,qd(a,cd.b(n,c)))}return null},null,null)}function b(a,b,c){return new Rc(null,function(){var l=A(c);if(l){var m=qd(a,l);return a===K(m)?J(m,d.c(a,b,rd(b,l))):null}return null},null,null)}function c(a,b){return d.c(a,a,b)}var d=null,d=function(d,g,h,l){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,
d,g,h,l)}throw Error("Invalid arity: "+arguments.length);};d.b=c;d.c=b;d.k=a;return d}();function zd(a,b){this.w=a;this.e=b}function Ad(a){return new zd(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function Bd(a){return new zd(a.w,ta(a.e))}function Cd(a){a=a.i;return 32>a?0:a-1>>>5<<5}function Dd(a,b,c){for(;;){if(0===b)return c;var d=Ad(a);d.e[0]=c;c=d;b-=5}}
var Fd=function Ed(b,c,d,e){var g=Bd(d),h=b.i-1>>>c&31;5===c?g.e[h]=e:(d=d.e[h],b=null!=d?Ed(b,c-5,d,e):Dd(null,c-5,e),g.e[h]=b);return g};function Gd(a,b){throw Error("No item "+x.a(a)+" in vector of length "+x.a(b));}function Hd(a){var b=a.root;for(a=a.shift;;)if(0<a)a-=5,b=b.e[0];else return b.e}function Id(a,b){if(b>=Cd(a))return a.Y;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.e[b>>>d&31],d=e;else return c.e}function Jd(a,b){return 0<=b&&b<a.i?Id(a,b):Gd(b,a.i)}
var Ld=function Kd(b,c,d,e,g){var h=Bd(d);if(0===c)h.e[e&31]=g;else{var l=e>>>c&31;b=Kd(b,c-5,d.e[l],e,g);h.e[l]=b}return h},Nd=function Md(b,c,d){var e=b.i-2>>>c&31;if(5<c){b=Md(b,c-5,d.e[e]);if(null==b&&0===e)return null;d=Bd(d);d.e[e]=b;return d}return 0===e?null:v?(d=Bd(d),d.e[e]=null,d):null};function O(a,b,c,d,e,g){this.j=a;this.i=b;this.shift=c;this.root=d;this.Y=e;this.n=g;this.q=8196;this.l=167668511}f=O.prototype;
f.Wa=function(){return new Od(this.i,this.shift,Pd.a?Pd.a(this.root):Pd.call(null,this.root),Qd.a?Qd.a(this.Y):Qd.call(null,this.Y))};f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){return"number"===typeof b?y.c(this,b,c):c};f.za=function(a,b,c){if("number"===typeof b)return Ta(this,b,c);throw Error("Vector's key for assoc must be a number.");};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.na(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.A(null,a)};f.b=function(a,b){return this.na(null,a,b)};
f.F=function(a,b){if(32>this.i-Cd(this)){for(var c=this.Y.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.Y[e],e+=1;else break;d[c]=b;return new O(this.j,this.i+1,this.shift,this.root,d,null)}c=(d=this.i>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=Ad(null),d.e[0]=this.root,e=Dd(null,this.shift,new zd(null,this.Y)),d.e[1]=e):d=Fd(this,this.shift,this.root,new zd(null,this.Y));return new O(this.j,this.i+1,c,d,[b],null)};f.Sa=function(){return 0<this.i?new Tb(this,this.i-1,null):null};
f.Ya=function(){return y.b(this,0)};f.kb=function(){return y.b(this,1)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Ob.b(this,b)};f.R=function(a,b,c){return Ob.c(this,b,c)};f.G=function(){return 0===this.i?null:32>=this.i?new Kb(this.Y,0):v?Rd.k?Rd.k(this,Hd(this),0,0):Rd.call(null,this,Hd(this),0,0):null};f.L=function(){return this.i};f.Aa=function(){return 0<this.i?y.b(this,this.i-1):null};
f.Ba=function(){if(0===this.i)throw Error("Can't pop empty vector");if(1===this.i)return Ya(Sd,this.j);if(1<this.i-Cd(this))return new O(this.j,this.i-1,this.shift,this.root,this.Y.slice(0,-1),null);if(v){var a=Id(this,this.i-2),b=Nd(this,this.shift,this.root),b=null==b?P:b,c=this.i-1;return 5<this.shift&&null==b.e[1]?new O(this.j,c,this.shift-5,b.e[0],a,null):new O(this.j,c,this.shift,b,a,null)}return null};
f.Pa=function(a,b,c){if(0<=b&&b<this.i)return Cd(this)<=b?(a=ta(this.Y),a[b&31]=c,new O(this.j,this.i,this.shift,this.root,a,null)):new O(this.j,this.i,this.shift,Ld(this,this.shift,this.root,b,c),this.Y,null);if(b===this.i)return za(this,c);if(v)throw Error("Index "+x.a(b)+" out of bounds  [0,"+x.a(this.i)+"]");return null};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new O(b,this.i,this.shift,this.root,this.Y,this.n)};f.D=function(){return this.j};
f.A=function(a,b){return Jd(this,b)[b&31]};f.na=function(a,b,c){return 0<=b&&b<this.i?Id(this,b)[b&31]:c};f.J=function(){return Xb(Sd,this.j)};var P=new zd(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Sd=new O(null,0,5,P,[],0);function Td(a){return sb(vc.c(rb,qb(Sd),a))}
function Ud(a,b,c,d,e,g){this.N=a;this.ra=b;this.p=c;this.off=d;this.j=e;this.n=g;this.l=32243948;this.q=1536}f=Ud.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.la=function(){if(this.off+1<this.ra.length){var a=Rd.k?Rd.k(this.N,this.ra,this.p,this.off+1):Rd.call(null,this.N,this.ra,this.p,this.off+1);return null==a?null:a}return yb(this)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};
f.Q=function(a,b){return Ob.b(Vd.c?Vd.c(this.N,this.p+this.off,K(this.N)):Vd.call(null,this.N,this.p+this.off,K(this.N)),b)};f.R=function(a,b,c){return Ob.c(Vd.c?Vd.c(this.N,this.p+this.off,K(this.N)):Vd.call(null,this.N,this.p+this.off,K(this.N)),b,c)};f.G=function(){return this};f.S=function(){return this.ra[this.off]};f.X=function(){if(this.off+1<this.ra.length){var a=Rd.k?Rd.k(this.N,this.ra,this.p,this.off+1):Rd.call(null,this.N,this.ra,this.p,this.off+1);return null==a?Lb:a}return xb(this)};
f.pb=function(){var a=this.p+this.ra.length;return a<wa(this.N)?Rd.k?Rd.k(this.N,Id(this.N,a),a,0):Rd.call(null,this.N,Id(this.N,a),a,0):null};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return Rd.o?Rd.o(this.N,this.ra,this.p,this.off,b):Rd.call(null,this.N,this.ra,this.p,this.off,b)};f.J=function(){return Xb(Sd,this.j)};f.qb=function(){return Wc.b(this.ra,this.off)};
f.rb=function(){var a=this.p+this.ra.length;return a<wa(this.N)?Rd.k?Rd.k(this.N,Id(this.N,a),a,0):Rd.call(null,this.N,Id(this.N,a),a,0):Lb};
var Rd=function(){function a(a,b,c,d,m){return new Ud(a,b,c,d,m,null)}function b(a,b,c,d){return new Ud(a,b,c,d,null,null)}function c(a,b,c){return new Ud(a,Jd(a,b),b,c,null,null)}var d=null,d=function(d,g,h,l,m){switch(arguments.length){case 3:return c.call(this,d,g,h);case 4:return b.call(this,d,g,h,l);case 5:return a.call(this,d,g,h,l,m)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.k=b;d.o=a;return d}();
function Wd(a,b,c,d,e){this.j=a;this.qa=b;this.start=c;this.end=d;this.n=e;this.l=166617887;this.q=8192}f=Wd.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){return"number"===typeof b?y.c(this,b,c):c};f.za=function(a,b,c){if("number"===typeof b)return Ta(this,b,c);throw Error("Subvec's key for assoc must be a number.");};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.na(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.A(null,a)};f.b=function(a,b){return this.na(null,a,b)};
f.F=function(a,b){return Xd.o?Xd.o(this.j,Ta(this.qa,this.end,b),this.start,this.end+1,null):Xd.call(null,this.j,Ta(this.qa,this.end,b),this.start,this.end+1,null)};f.Sa=function(){return this.start!==this.end?new Tb(this,this.end-this.start-1,null):null};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Ob.b(this,b)};f.R=function(a,b,c){return Ob.c(this,b,c)};
f.G=function(){var a=this;return function(b){return function d(e){return e===a.end?null:J(y.b(a.qa,e),new Rc(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};f.L=function(){return this.end-this.start};f.Aa=function(){return y.b(this.qa,this.end-1)};f.Ba=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return Xd.o?Xd.o(this.j,this.qa,this.start,this.end-1,null):Xd.call(null,this.j,this.qa,this.start,this.end-1,null)};
f.Pa=function(a,b,c){var d=this,e=d.start+b;return Xd.o?Xd.o(d.j,bc.c(d.qa,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):Xd.call(null,d.j,bc.c(d.qa,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return Xd.o?Xd.o(b,this.qa,this.start,this.end,this.n):Xd.call(null,b,this.qa,this.start,this.end,this.n)};f.D=function(){return this.j};
f.A=function(a,b){return 0>b||this.end<=this.start+b?Gd(b,this.end-this.start):y.b(this.qa,this.start+b)};f.na=function(a,b,c){return 0>b||this.end<=this.start+b?c:y.c(this.qa,this.start+b,c)};f.J=function(){return Xb(Sd,this.j)};function Xd(a,b,c,d,e){for(;;)if(b instanceof Wd)c=b.start+c,d=b.start+d,b=b.qa;else{var g=K(b);if(0>c||0>d||c>g||d>g)throw Error("Index out of bounds");return new Wd(a,b,c,d,e)}}
var Vd=function(){function a(a,b,c){return Xd(null,a,b,c,null)}function b(a,b){return c.c(a,b,K(a))}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}();function Pd(a){return new zd({},ta(a.e))}
function Qd(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];pc(a,0,b,0,a.length);return b}var Zd=function Yd(b,c,d,e){d=b.root.w===d.w?d:new zd(b.root.w,ta(d.e));var g=b.i-1>>>c&31;if(5===c)b=e;else{var h=d.e[g];b=null!=h?Yd(b,c-5,h,e):Dd(b.root.w,c-5,e)}d.e[g]=b;return d};function Od(a,b,c,d){this.i=a;this.shift=b;this.root=c;this.Y=d;this.l=275;this.q=88}f=Od.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){return"number"===typeof b?y.c(this,b,c):c};
f.A=function(a,b){if(this.root.w)return Jd(this,b)[b&31];throw Error("nth after persistent!");};f.na=function(a,b,c){return 0<=b&&b<this.i?y.b(this,b):c};f.L=function(){if(this.root.w)return this.i;throw Error("count after persistent!");};
f.Nb=function(a,b,c){var d=this;if(d.root.w){if(0<=b&&b<d.i)return Cd(this)<=b?d.Y[b&31]=c:(a=function(){return function g(a,l){var m=d.root.w===l.w?l:new zd(d.root.w,ta(l.e));if(0===a)m.e[b&31]=c;else{var n=b>>>a&31,p=g(a-5,m.e[n]);m.e[n]=p}return m}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.i)return rb(this,c);if(v)throw Error("Index "+x.a(b)+" out of bounds for TransientVector of length"+x.a(d.i));return null}throw Error("assoc! after persistent!");};
f.$a=function(a,b,c){if("number"===typeof b)return ub(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
f.Na=function(a,b){if(this.root.w){if(32>this.i-Cd(this))this.Y[this.i&31]=b;else{var c=new zd(this.root.w,this.Y),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.Y=d;if(this.i>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=Dd(this.root.w,this.shift,c);this.root=new zd(this.root.w,d);this.shift=e}else this.root=Zd(this,this.shift,this.root,c)}this.i+=1;return this}throw Error("conj! after persistent!");};f.Oa=function(){if(this.root.w){this.root.w=null;var a=this.i-Cd(this),b=Array(a);pc(this.Y,0,b,0,a);return new O(null,this.i,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function $d(a,b,c,d){this.j=a;this.oa=b;this.xa=c;this.n=d;this.q=0;this.l=31850572}f=$d.prototype;
f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.G=function(){return this};f.S=function(){return B(this.oa)};f.X=function(){var a=G(this.oa);return a?new $d(this.j,a,this.xa,null):null==this.xa?xa(this):new $d(this.j,this.xa,null,null)};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new $d(b,this.oa,this.xa,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};
function ae(a,b,c,d,e){this.j=a;this.count=b;this.oa=c;this.xa=d;this.n=e;this.l=31858766;this.q=8192}f=ae.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.F=function(a,b){var c;q(this.oa)?(c=this.xa,c=new ae(this.j,this.count+1,this.oa,Yb.b(q(c)?c:Sd,b),null)):c=new ae(this.j,this.count+1,Yb.b(this.oa,b),Sd,null);return c};f.toString=function(){return Ab(this)};f.G=function(){var a=A(this.xa),b=this.oa;return q(q(b)?b:a)?new $d(null,this.oa,A(a),null):null};f.L=function(){return this.count};
f.Aa=function(){return B(this.oa)};f.Ba=function(){if(q(this.oa)){var a=G(this.oa);return a?new ae(this.j,this.count-1,a,this.xa,null):new ae(this.j,this.count-1,A(this.xa),Sd,null)}return this};f.S=function(){return B(this.oa)};f.X=function(){return E(A(this))};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new ae(b,this.count,this.oa,this.xa,this.n)};f.D=function(){return this.j};f.J=function(){return be};var be=new ae(null,0,null,Sd,0);function ce(){this.q=0;this.l=2097152}
ce.prototype.u=function(){return!1};var de=new ce;function ee(a,b){return sc(lc(b)?K(a)===K(b)?hd(jd,od.b(function(a){return Cb.b($b.c(b,B(a),de),B(G(a)))},a)):null:null)}
function fe(a,b){var c=a.e;if(b instanceof N)a:{for(var d=c.length,e=b.Ia,g=0;;){if(d<=g){c=-1;break a}var h=c[g];if(h instanceof N&&e===h.Ia){c=g;break a}if(v)g+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(v)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof Fb)a:{d=c.length;e=b.La;for(g=0;;){if(d<=g){c=-1;break a}h=c[g];if(h instanceof Fb&&e===h.La){c=g;break a}if(v)g+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(v)e+=2;else{c=null;break a}}c=void 0}else if(v)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(Cb.b(b,c[e])){c=e;break a}if(v)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function ge(a,b,c){this.e=a;this.p=b;this.sa=c;this.q=0;this.l=32374990}f=ge.prototype;f.v=function(){return Sb(this)};f.la=function(){return this.p<this.e.length-2?new ge(this.e,this.p+2,this.sa):null};
f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.L=function(){return(this.e.length-this.p)/2};f.S=function(){return new O(null,2,5,P,[this.e[this.p],this.e[this.p+1]],null)};f.X=function(){return this.p<this.e.length-2?new ge(this.e,this.p+2,this.sa):Lb};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new ge(this.e,this.p,b)};f.D=function(){return this.sa};
f.J=function(){return Xb(Lb,this.sa)};function ha(a,b,c,d){this.j=a;this.i=b;this.e=c;this.n=d;this.q=8196;this.l=16647951}f=ha.prototype;f.Wa=function(){return new he({},this.e.length,ta(this.e))};f.v=function(){var a=this.n;return null!=a?a:this.n=a=Ec(this)};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){a=fe(this,b);return-1===a?c:this.e[a+1]};
f.za=function(a,b,c){a=fe(this,b);if(-1===a){if(this.i<ie){a=this.e;for(var d=a.length,e=Array(d+2),g=0;;)if(g<d)e[g]=a[g],g+=1;else break;e[d]=b;e[d+1]=c;return new ha(this.j,this.i+1,e,null)}return Ya(Ia(xd(je,this),b,c),this.j)}return c===this.e[a+1]?this:v?(b=ta(this.e),b[a+1]=c,new ha(this.j,this.i,b,null)):null};f.Va=function(a,b){return-1!==fe(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};
f.F=function(a,b){if(mc(b))return Ia(this,y.b(b,0),y.b(b,1));for(var c=this,d=A(b);;){if(null==d)return c;var e=B(d);if(mc(e))c=Ia(c,y.b(e,0),y.b(e,1)),d=G(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return 0<=this.e.length-2?new ge(this.e,0,null):null};f.L=function(){return this.i};f.u=function(a,b){return ee(this,b)};
f.H=function(a,b){return new ha(b,this.i,this.e,this.n)};f.D=function(){return this.j};f.J=function(){return Ya(ke,this.j)};f.Xa=function(a,b){if(0<=fe(this,b)){var c=this.e.length,d=c-2;if(0===d)return xa(this);for(var d=Array(d),e=0,g=0;;){if(e>=c)return new ha(this.j,this.i-1,d,null);if(Cb.b(b,this.e[e]))e+=2;else if(v)d[g]=this.e[e],d[g+1]=this.e[e+1],g+=2,e+=2;else return null}}else return this};var ke=new ha(null,0,[],null),ie=8;
function le(a){for(var b=a.length,c=0,d=qb(ke);;)if(c<b)var e=c+2,d=tb(d,a[c],a[c+1]),c=e;else return sb(d)}function he(a,b,c){this.Ta=a;this.Da=b;this.e=c;this.q=56;this.l=258}f=he.prototype;f.$a=function(a,b,c){if(q(this.Ta)){a=fe(this,b);if(-1===a)return this.Da+2<=2*ie?(this.Da+=2,this.e.push(b),this.e.push(c),this):ed.c(me.b?me.b(this.Da,this.e):me.call(null,this.Da,this.e),b,c);c!==this.e[a+1]&&(this.e[a+1]=c);return this}throw Error("assoc! after persistent!");};
f.Na=function(a,b){if(q(this.Ta)){if(b?b.l&2048||b.Wb||(b.l?0:s(La,b)):s(La,b))return tb(this,Fc.a?Fc.a(b):Fc.call(null,b),Gc.a?Gc.a(b):Gc.call(null,b));for(var c=A(b),d=this;;){var e=B(c);if(q(e))c=G(c),d=tb(d,Fc.a?Fc.a(e):Fc.call(null,e),Gc.a?Gc.a(e):Gc.call(null,e));else return d}}else throw Error("conj! after persistent!");};f.Oa=function(){if(q(this.Ta))return this.Ta=!1,new ha(null,Ac((this.Da-this.Da%2)/2),this.e,null);throw Error("persistent! called twice");};
f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){if(q(this.Ta))return a=fe(this,b),-1===a?c:this.e[a+1];throw Error("lookup after persistent!");};f.L=function(){if(q(this.Ta))return Ac((this.Da-this.Da%2)/2);throw Error("count after persistent!");};function me(a,b){for(var c=qb(je),d=0;;)if(d<a)c=ed.c(c,b[d],b[d+1]),d+=2;else return c}function ne(){this.val=!1}function oe(a,b){return a===b?!0:a===b||a instanceof N&&b instanceof N&&a.Ia===b.Ia?!0:v?Cb.b(a,b):null}
var pe=function(){function a(a,b,c,h,l){a=ta(a);a[b]=c;a[h]=l;return a}function b(a,b,c){a=ta(a);a[b]=c;return a}var c=null,c=function(c,e,g,h,l){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,l)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.o=a;return c}();function qe(a,b){var c=Array(a.length-2);pc(a,0,c,0,2*b);pc(a,2*(b+1),c,2*b,c.length-2*b);return c}
var re=function(){function a(a,b,c,h,l,m){a=a.Ua(b);a.e[c]=h;a.e[l]=m;return a}function b(a,b,c,h){a=a.Ua(b);a.e[c]=h;return a}var c=null,c=function(c,e,g,h,l,m){switch(arguments.length){case 4:return b.call(this,c,e,g,h);case 6:return a.call(this,c,e,g,h,l,m)}throw Error("Invalid arity: "+arguments.length);};c.k=b;c.s=a;return c}();function se(a,b,c){this.w=a;this.I=b;this.e=c}f=se.prototype;
f.ua=function(a,b,c,d,e,g){var h=1<<(c>>>b&31),l=Bc(this.I&h-1);if(0===(this.I&h)){var m=Bc(this.I);if(2*m<this.e.length){a=this.Ua(a);b=a.e;g.val=!0;a:for(c=2*(m-l),g=2*l+(c-1),m=2*(l+1)+(c-1);;){if(0===c)break a;b[m]=b[g];m-=1;c-=1;g-=1}b[2*l]=d;b[2*l+1]=e;a.I|=h;return a}if(16<=m){l=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];l[c>>>b&31]=te.ua(a,b+5,c,d,e,g);for(e=d=0;;)if(32>d)0!==
(this.I>>>d&1)&&(l[d]=null!=this.e[e]?te.ua(a,b+5,Ib(this.e[e]),this.e[e],this.e[e+1],g):this.e[e+1],e+=2),d+=1;else break;return new ue(a,m+1,l)}return v?(b=Array(2*(m+4)),pc(this.e,0,b,0,2*l),b[2*l]=d,b[2*l+1]=e,pc(this.e,2*l,b,2*(l+1),2*(m-l)),g.val=!0,a=this.Ua(a),a.e=b,a.I|=h,a):null}m=this.e[2*l];h=this.e[2*l+1];return null==m?(m=h.ua(a,b+5,c,d,e,g),m===h?this:re.k(this,a,2*l+1,m)):oe(d,m)?e===h?this:re.k(this,a,2*l+1,e):v?(g.val=!0,re.s(this,a,2*l,null,2*l+1,ve.T?ve.T(a,b+5,m,h,c,d,e):ve.call(null,
a,b+5,m,h,c,d,e))):null};f.ab=function(){return we.a?we.a(this.e):we.call(null,this.e)};f.Ua=function(a){if(a===this.w)return this;var b=Bc(this.I),c=Array(0>b?4:2*(b+1));pc(this.e,0,c,0,2*b);return new se(a,this.I,c)};
f.bb=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.I&d))return this;var e=Bc(this.I&d-1),g=this.e[2*e],h=this.e[2*e+1];return null==g?(a=h.bb(a+5,b,c),a===h?this:null!=a?new se(null,this.I,pe.c(this.e,2*e+1,a)):this.I===d?null:v?new se(null,this.I^d,qe(this.e,e)):null):oe(c,g)?new se(null,this.I^d,qe(this.e,e)):v?this:null};
f.ta=function(a,b,c,d,e){var g=1<<(b>>>a&31),h=Bc(this.I&g-1);if(0===(this.I&g)){var l=Bc(this.I);if(16<=l){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=te.ta(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.I>>>c&1)&&(h[c]=null!=this.e[d]?te.ta(a+5,Ib(this.e[d]),this.e[d],this.e[d+1],e):this.e[d+1],d+=2),c+=1;else break;return new ue(null,l+1,h)}a=Array(2*(l+1));pc(this.e,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;pc(this.e,2*h,a,2*(h+1),2*(l-h));e.val=!0;return new se(null,this.I|g,a)}l=this.e[2*h];g=this.e[2*h+1];return null==l?(l=g.ta(a+5,b,c,d,e),l===g?this:new se(null,this.I,pe.c(this.e,2*h+1,l))):oe(c,l)?d===g?this:new se(null,this.I,pe.c(this.e,2*h+1,d)):v?(e.val=!0,new se(null,this.I,pe.o(this.e,2*h,null,2*h+1,ve.s?ve.s(a+5,l,g,b,c,d):ve.call(null,a+5,l,g,b,c,d)))):null};
f.Ja=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.I&e))return d;var g=Bc(this.I&e-1),e=this.e[2*g],g=this.e[2*g+1];return null==e?g.Ja(a+5,b,c,d):oe(c,e)?g:v?d:null};var te=new se(null,0,[]);function ue(a,b,c){this.w=a;this.i=b;this.e=c}f=ue.prototype;f.ua=function(a,b,c,d,e,g){var h=c>>>b&31,l=this.e[h];if(null==l)return a=re.k(this,a,h,te.ua(a,b+5,c,d,e,g)),a.i+=1,a;b=l.ua(a,b+5,c,d,e,g);return b===l?this:re.k(this,a,h,b)};f.ab=function(){return xe.a?xe.a(this.e):xe.call(null,this.e)};
f.Ua=function(a){return a===this.w?this:new ue(a,this.i,ta(this.e))};f.bb=function(a,b,c){var d=b>>>a&31,e=this.e[d];if(null!=e){a=e.bb(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.i)a:{e=this.e;a=2*(this.i-1);b=Array(a);c=0;for(var g=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[g]=e[c],g+=2,h|=1<<c),c+=1;else{d=new se(null,h,b);break a}d=void 0}else d=new ue(null,this.i-1,pe.c(this.e,d,a));else d=v?new ue(null,this.i,pe.c(this.e,d,a)):null;return d}return this};
f.ta=function(a,b,c,d,e){var g=b>>>a&31,h=this.e[g];if(null==h)return new ue(null,this.i+1,pe.c(this.e,g,te.ta(a+5,b,c,d,e)));a=h.ta(a+5,b,c,d,e);return a===h?this:new ue(null,this.i,pe.c(this.e,g,a))};f.Ja=function(a,b,c,d){var e=this.e[b>>>a&31];return null!=e?e.Ja(a+5,b,c,d):d};function ye(a,b,c){b*=2;for(var d=0;;)if(d<b){if(oe(c,a[d]))return d;d+=2}else return-1}function ze(a,b,c,d){this.w=a;this.Ca=b;this.i=c;this.e=d}f=ze.prototype;
f.ua=function(a,b,c,d,e,g){if(c===this.Ca){b=ye(this.e,this.i,d);if(-1===b){if(this.e.length>2*this.i)return a=re.s(this,a,2*this.i,d,2*this.i+1,e),g.val=!0,a.i+=1,a;c=this.e.length;b=Array(c+2);pc(this.e,0,b,0,c);b[c]=d;b[c+1]=e;g.val=!0;g=this.i+1;a===this.w?(this.e=b,this.i=g,a=this):a=new ze(this.w,this.Ca,g,b);return a}return this.e[b+1]===e?this:re.k(this,a,b+1,e)}return(new se(a,1<<(this.Ca>>>b&31),[null,this,null,null])).ua(a,b,c,d,e,g)};
f.ab=function(){return we.a?we.a(this.e):we.call(null,this.e)};f.Ua=function(a){if(a===this.w)return this;var b=Array(2*(this.i+1));pc(this.e,0,b,0,2*this.i);return new ze(a,this.Ca,this.i,b)};f.bb=function(a,b,c){a=ye(this.e,this.i,c);return-1===a?this:1===this.i?null:v?new ze(null,this.Ca,this.i-1,qe(this.e,Ac((a-a%2)/2))):null};
f.ta=function(a,b,c,d,e){return b===this.Ca?(a=ye(this.e,this.i,c),-1===a?(a=2*this.i,b=Array(a+2),pc(this.e,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new ze(null,this.Ca,this.i+1,b)):Cb.b(this.e[a],d)?this:new ze(null,this.Ca,this.i,pe.c(this.e,a+1,d))):(new se(null,1<<(this.Ca>>>a&31),[null,this])).ta(a,b,c,d,e)};f.Ja=function(a,b,c,d){a=ye(this.e,this.i,c);return 0>a?d:oe(c,this.e[a])?this.e[a+1]:v?d:null};
var ve=function(){function a(a,b,c,h,l,m,n){var p=Ib(c);if(p===l)return new ze(null,p,2,[c,h,m,n]);var r=new ne;return te.ua(a,b,p,c,h,r).ua(a,b,l,m,n,r)}function b(a,b,c,h,l,m){var n=Ib(b);if(n===h)return new ze(null,n,2,[b,c,l,m]);var p=new ne;return te.ta(a,n,b,c,p).ta(a,h,l,m,p)}var c=null,c=function(c,e,g,h,l,m,n){switch(arguments.length){case 6:return b.call(this,c,e,g,h,l,m);case 7:return a.call(this,c,e,g,h,l,m,n)}throw Error("Invalid arity: "+arguments.length);};c.s=b;c.T=a;return c}();
function Ae(a,b,c,d,e){this.j=a;this.va=b;this.p=c;this.M=d;this.n=e;this.q=0;this.l=32374860}f=Ae.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.S=function(){return null==this.M?new O(null,2,5,P,[this.va[this.p],this.va[this.p+1]],null):B(this.M)};
f.X=function(){return null==this.M?we.c?we.c(this.va,this.p+2,null):we.call(null,this.va,this.p+2,null):we.c?we.c(this.va,this.p,G(this.M)):we.call(null,this.va,this.p,G(this.M))};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Ae(b,this.va,this.p,this.M,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};
var we=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Ae(null,a,b,null,null);var h=a[b+1];if(q(h)&&(h=h.ab(),q(h)))return new Ae(null,a,b+2,h,null);b+=2}else return null;else return new Ae(null,a,b,c,null)}function b(a){return c.c(a,0,null)}var c=null,c=function(c,e,g){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function Be(a,b,c,d,e){this.j=a;this.va=b;this.p=c;this.M=d;this.n=e;this.q=0;this.l=32374860}f=Be.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.S=function(){return B(this.M)};f.X=function(){return xe.k?xe.k(null,this.va,this.p,G(this.M)):xe.call(null,null,this.va,this.p,G(this.M))};
f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Be(b,this.va,this.p,this.M,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};
var xe=function(){function a(a,b,c,h){if(null==h)for(h=b.length;;)if(c<h){var l=b[c];if(q(l)&&(l=l.ab(),q(l)))return new Be(a,b,c+1,l,null);c+=1}else return null;else return new Be(a,b,c,h,null)}function b(a){return c.k(null,a,0,null)}var c=null,c=function(c,e,g,h){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,g,h)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.k=a;return c}();
function Ce(a,b,c,d,e,g){this.j=a;this.i=b;this.root=c;this.ja=d;this.pa=e;this.n=g;this.q=8196;this.l=16123663}f=Ce.prototype;f.Wa=function(){return new De({},this.root,this.i,this.ja,this.pa)};f.v=function(){var a=this.n;return null!=a?a:this.n=a=Ec(this)};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){return null==b?this.ja?this.pa:c:null==this.root?c:v?this.root.Ja(0,Ib(b),b,c):null};
f.za=function(a,b,c){if(null==b)return this.ja&&c===this.pa?this:new Ce(this.j,this.ja?this.i:this.i+1,this.root,!0,c,null);a=new ne;b=(null==this.root?te:this.root).ta(0,Ib(b),b,c,a);return b===this.root?this:new Ce(this.j,a.val?this.i+1:this.i,b,this.ja,this.pa,null)};f.Va=function(a,b){return null==b?this.ja:null==this.root?!1:v?this.root.Ja(0,Ib(b),b,qc)!==qc:null};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};
f.F=function(a,b){if(mc(b))return Ia(this,y.b(b,0),y.b(b,1));for(var c=this,d=A(b);;){if(null==d)return c;var e=B(d);if(mc(e))c=Ia(c,y.b(e,0),y.b(e,1)),d=G(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};f.toString=function(){return Ab(this)};f.G=function(){if(0<this.i){var a=null!=this.root?this.root.ab():null;return this.ja?J(new O(null,2,5,P,[null,this.pa],null),a):a}return null};f.L=function(){return this.i};f.u=function(a,b){return ee(this,b)};
f.H=function(a,b){return new Ce(b,this.i,this.root,this.ja,this.pa,this.n)};f.D=function(){return this.j};f.J=function(){return Ya(je,this.j)};f.Xa=function(a,b){if(null==b)return this.ja?new Ce(this.j,this.i-1,this.root,!1,null,null):this;if(null==this.root)return this;if(v){var c=this.root.bb(0,Ib(b),b);return c===this.root?this:new Ce(this.j,this.i-1,c,this.ja,this.pa,null)}return null};var je=new Ce(null,0,null,!1,null,0);
function ac(a,b){for(var c=a.length,d=0,e=qb(je);;)if(d<c)var g=d+1,e=e.$a(null,a[d],b[d]),d=g;else return sb(e)}function De(a,b,c,d,e){this.w=a;this.root=b;this.count=c;this.ja=d;this.pa=e;this.q=56;this.l=258}f=De.prototype;f.$a=function(a,b,c){return Ee(this,b,c)};
f.Na=function(a,b){var c;a:{if(this.w){if(b?b.l&2048||b.Wb||(b.l?0:s(La,b)):s(La,b)){c=Ee(this,Fc.a?Fc.a(b):Fc.call(null,b),Gc.a?Gc.a(b):Gc.call(null,b));break a}c=A(b);for(var d=this;;){var e=B(c);if(q(e))c=G(c),d=Ee(d,Fc.a?Fc.a(e):Fc.call(null,e),Gc.a?Gc.a(e):Gc.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
f.Oa=function(){var a;if(this.w)this.w=null,a=new Ce(null,this.count,this.root,this.ja,this.pa,null);else throw Error("persistent! called twice");return a};f.B=function(a,b){return null==b?this.ja?this.pa:null:null==this.root?null:this.root.Ja(0,Ib(b),b)};f.C=function(a,b,c){return null==b?this.ja?this.pa:c:null==this.root?c:this.root.Ja(0,Ib(b),b,c)};f.L=function(){if(this.w)return this.count;throw Error("count after persistent!");};
function Ee(a,b,c){if(a.w){if(null==b)a.pa!==c&&(a.pa=c),a.ja||(a.count+=1,a.ja=!0);else{var d=new ne;b=(null==a.root?te:a.root).ua(a.w,0,Ib(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function Fe(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=Yb.b(d,a),a=b;else return d}function Ge(a,b,c,d,e){this.j=a;this.stack=b;this.fb=c;this.i=d;this.n=e;this.q=0;this.l=32374862}f=Ge.prototype;
f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.L=function(){return 0>this.i?K(G(this))+1:this.i};f.S=function(){return null==this.stack?null:Qa(this.stack)};f.X=function(){var a=B(this.stack),a=Fe(this.fb?a.right:a.left,G(this.stack),this.fb);return null!=a?new Ge(null,a,this.fb,this.i-1,null):Lb};
f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Ge(b,this.stack,this.fb,this.i,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(Lb,this.j)};function He(a,b,c,d){return c instanceof Ie?c.left instanceof Ie?new Ie(c.key,c.val,c.left.ya(),new Je(a,b,c.right,d,null),null):c.right instanceof Ie?new Ie(c.right.key,c.right.val,new Je(c.key,c.val,c.left,c.right.left,null),new Je(a,b,c.right.right,d,null),null):v?new Je(a,b,c,d,null):null:new Je(a,b,c,d,null)}
function Ke(a,b,c,d){return d instanceof Ie?d.right instanceof Ie?new Ie(d.key,d.val,new Je(a,b,c,d.left,null),d.right.ya(),null):d.left instanceof Ie?new Ie(d.left.key,d.left.val,new Je(a,b,c,d.left.left,null),new Je(d.key,d.val,d.left.right,d.right,null),null):v?new Je(a,b,c,d,null):null:new Je(a,b,c,d,null)}
function Le(a,b,c,d){if(c instanceof Ie)return new Ie(a,b,c.ya(),d,null);if(d instanceof Je)return Ke(a,b,c,d.eb());if(d instanceof Ie&&d.left instanceof Je)return new Ie(d.left.key,d.left.val,new Je(a,b,c,d.left.left,null),Ke(d.key,d.val,d.left.right,d.right.eb()),null);if(v)throw Error("red-black tree invariant violation");return null}function Je(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.n=e;this.q=0;this.l=32402207}f=Je.prototype;
f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.B=function(a,b){return y.c(this,b,null)};f.C=function(a,b,c){return y.c(this,b,c)};f.za=function(a,b,c){return bc.c(new O(null,2,5,P,[this.key,this.val],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};
f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};f.F=function(a,b){return new O(null,3,5,P,[this.key,this.val,b],null)};f.Ya=function(){return this.key};f.kb=function(){return this.val};f.Ab=function(a){return a.Cb(this)};f.eb=function(){return new Ie(this.key,this.val,this.left,this.right,null)};f.replace=function(a,b,c,d){return new Je(a,b,c,d,null)};f.zb=function(a){return a.Bb(this)};f.Bb=function(a){return new Je(a.key,a.val,this,a.right,null)};
f.Cb=function(a){return new Je(a.key,a.val,a.left,this,null)};f.ya=function(){return this};f.Q=function(a,b){return Ob.b(this,b)};f.R=function(a,b,c){return Ob.c(this,b,c)};f.G=function(){return za(za(Lb,this.val),this.key)};f.L=function(){return 2};f.Aa=function(){return this.val};f.Ba=function(){return new O(null,1,5,P,[this.key],null)};f.Pa=function(a,b,c){return(new O(null,2,5,P,[this.key,this.val],null)).Pa(null,b,c)};f.u=function(a,b){return Ub(this,b)};
f.H=function(a,b){return Xb(new O(null,2,5,P,[this.key,this.val],null),b)};f.D=function(){return null};f.A=function(a,b){return 0===b?this.key:1===b?this.val:null};f.na=function(a,b,c){return 0===b?this.key:1===b?this.val:v?c:null};f.J=function(){return Sd};function Ie(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.n=e;this.q=0;this.l=32402207}f=Ie.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.B=function(a,b){return y.c(this,b,null)};
f.C=function(a,b,c){return y.c(this,b,c)};f.za=function(a,b,c){return bc.c(new O(null,2,5,P,[this.key,this.val],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};
f.F=function(a,b){return new O(null,3,5,P,[this.key,this.val,b],null)};f.Ya=function(){return this.key};f.kb=function(){return this.val};f.Ab=function(a){return new Ie(this.key,this.val,this.left,a,null)};f.eb=function(){throw Error("red-black tree invariant violation");};f.replace=function(a,b,c,d){return new Ie(a,b,c,d,null)};f.zb=function(a){return new Ie(this.key,this.val,a,this.right,null)};
f.Bb=function(a){return this.left instanceof Ie?new Ie(this.key,this.val,this.left.ya(),new Je(a.key,a.val,this.right,a.right,null),null):this.right instanceof Ie?new Ie(this.right.key,this.right.val,new Je(this.key,this.val,this.left,this.right.left,null),new Je(a.key,a.val,this.right.right,a.right,null),null):v?new Je(a.key,a.val,this,a.right,null):null};
f.Cb=function(a){return this.right instanceof Ie?new Ie(this.key,this.val,new Je(a.key,a.val,a.left,this.left,null),this.right.ya(),null):this.left instanceof Ie?new Ie(this.left.key,this.left.val,new Je(a.key,a.val,a.left,this.left.left,null),new Je(this.key,this.val,this.left.right,this.right,null),null):v?new Je(a.key,a.val,a.left,this,null):null};f.ya=function(){return new Je(this.key,this.val,this.left,this.right,null)};f.Q=function(a,b){return Ob.b(this,b)};
f.R=function(a,b,c){return Ob.c(this,b,c)};f.G=function(){return za(za(Lb,this.val),this.key)};f.L=function(){return 2};f.Aa=function(){return this.val};f.Ba=function(){return new O(null,1,5,P,[this.key],null)};f.Pa=function(a,b,c){return(new O(null,2,5,P,[this.key,this.val],null)).Pa(null,b,c)};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return Xb(new O(null,2,5,P,[this.key,this.val],null),b)};f.D=function(){return null};f.A=function(a,b){return 0===b?this.key:1===b?this.val:null};
f.na=function(a,b,c){return 0===b?this.key:1===b?this.val:v?c:null};f.J=function(){return Sd};
var Ne=function Me(b,c,d,e,g){if(null==c)return new Ie(d,e,null,null,null);var h=b.b?b.b(d,c.key):b.call(null,d,c.key);return 0===h?(g[0]=c,null):0>h?(b=Me(b,c.left,d,e,g),null!=b?c.zb(b):null):v?(b=Me(b,c.right,d,e,g),null!=b?c.Ab(b):null):null},Pe=function Oe(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof Ie){if(c instanceof Ie){var d=Oe(b.right,c.left);return d instanceof Ie?new Ie(d.key,d.val,new Ie(b.key,b.val,b.left,d.left,null),new Ie(c.key,c.val,d.right,c.right,null),null):new Ie(b.key,
b.val,b.left,new Ie(c.key,c.val,d,c.right,null),null)}return new Ie(b.key,b.val,b.left,Oe(b.right,c),null)}return c instanceof Ie?new Ie(c.key,c.val,Oe(b,c.left),c.right,null):v?(d=Oe(b.right,c.left),d instanceof Ie?new Ie(d.key,d.val,new Je(b.key,b.val,b.left,d.left,null),new Je(c.key,c.val,d.right,c.right,null),null):Le(b.key,b.val,b.left,new Je(c.key,c.val,d,c.right,null))):null},Re=function Qe(b,c,d,e){if(null!=c){var g=b.b?b.b(d,c.key):b.call(null,d,c.key);if(0===g)return e[0]=c,Pe(c.left,c.right);
if(0>g)return b=Qe(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof Je?Le(c.key,c.val,b,c.right):new Ie(c.key,c.val,b,c.right,null):null;if(v){b=Qe(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof Je)if(e=c.key,d=c.val,c=c.left,b instanceof Ie)c=new Ie(e,d,c,b.ya(),null);else if(c instanceof Je)c=He(e,d,c.eb(),b);else if(c instanceof Ie&&c.right instanceof Je)c=new Ie(c.right.key,c.right.val,He(c.key,c.val,c.left.eb(),c.right.left),new Je(e,d,c.right.right,b,null),null);else{if(v)throw Error("red-black tree invariant violation");
c=null}else c=new Ie(c.key,c.val,c.left,b,null);else c=null;return c}}return null},Te=function Se(b,c,d,e){var g=c.key,h=b.b?b.b(d,g):b.call(null,d,g);return 0===h?c.replace(g,e,c.left,c.right):0>h?c.replace(g,c.val,Se(b,c.left,d,e),c.right):v?c.replace(g,c.val,c.left,Se(b,c.right,d,e)):null};function Ue(a,b,c,d,e){this.ma=a;this.Ga=b;this.i=c;this.j=d;this.n=e;this.l=418776847;this.q=8192}f=Ue.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Ec(this)};
f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){a=Ve(this,b);return null!=a?a.val:c};f.za=function(a,b,c){a=[null];var d=Ne(this.ma,this.Ga,b,c,a);return null==d?(a=M.b(a,0),Cb.b(c,a.val)?this:new Ue(this.ma,Te(this.ma,this.Ga,b,c),this.i,this.j,null)):new Ue(this.ma,d.ya(),this.i+1,this.j,null)};f.Va=function(a,b){return null!=Ve(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};
f.F=function(a,b){if(mc(b))return Ia(this,y.b(b,0),y.b(b,1));for(var c=this,d=A(b);;){if(null==d)return c;var e=B(d);if(mc(e))c=Ia(c,y.b(e,0),y.b(e,1)),d=G(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};f.Sa=function(){return 0<this.i?new Ge(null,Fe(this.Ga,null,!1),!1,this.i,null):null};f.toString=function(){return Ab(this)};
function Ve(a,b){for(var c=a.Ga;;)if(null!=c){var d=a.ma.b?a.ma.b(b,c.key):a.ma.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(v)c=c.right;else return null}else return null}f.ub=function(a,b){return 0<this.i?new Ge(null,Fe(this.Ga,null,b),b,this.i,null):null};
f.vb=function(a,b,c){if(0<this.i){a=null;for(var d=this.Ga;;)if(null!=d){var e=this.ma.b?this.ma.b(b,d.key):this.ma.call(null,b,d.key);if(0===e)return new Ge(null,Yb.b(a,d),c,-1,null);if(q(c))0>e?(a=Yb.b(a,d),d=d.left):d=d.right;else if(v)0<e?(a=Yb.b(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new Ge(null,a,c,-1,null)}else return null};f.tb=function(a,b){return Fc.a?Fc.a(b):Fc.call(null,b)};f.sb=function(){return this.ma};
f.G=function(){return 0<this.i?new Ge(null,Fe(this.Ga,null,!0),!0,this.i,null):null};f.L=function(){return this.i};f.u=function(a,b){return ee(this,b)};f.H=function(a,b){return new Ue(this.ma,this.Ga,this.i,b,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(We,this.j)};f.Xa=function(a,b){var c=[null],d=Re(this.ma,this.Ga,b,c);return null==d?null==M.b(c,0)?this:new Ue(this.ma,null,0,this.j,null):new Ue(this.ma,d.ya(),this.i-1,this.j,null)};
var We=new Ue(Db,null,0,null,0),Xe=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=A(a);for(var b=qb(je);;)if(a){var e=G(G(a)),b=ed.c(b,B(a),B(G(a)));a=e}else return sb(b)}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),Ye=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=A(a);for(var b=We;;)if(a){var e=
G(G(a)),b=bc.c(b,B(a),B(G(a)));a=e}else return b}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}();function Ze(a,b){this.Ka=a;this.sa=b;this.q=0;this.l=32374988}f=Ze.prototype;f.v=function(){return Sb(this)};f.la=function(){var a=this.Ka,a=(a?a.l&128||a.Gb||(a.l?0:s(Ea,a)):s(Ea,a))?this.Ka.la(null):G(this.Ka);return null==a?null:new Ze(a,this.sa)};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};f.Q=function(a,b){return Wb.b(b,this)};
f.R=function(a,b,c){return Wb.c(b,c,this)};f.G=function(){return this};f.S=function(){return this.Ka.S(null).Ya(null)};f.X=function(){var a=this.Ka,a=(a?a.l&128||a.Gb||(a.l?0:s(Ea,a)):s(Ea,a))?this.Ka.la(null):G(this.Ka);return null!=a?new Ze(a,this.sa):Lb};f.u=function(a,b){return Ub(this,b)};f.H=function(a,b){return new Ze(this.Ka,b)};f.D=function(){return this.sa};f.J=function(){return Xb(Lb,this.sa)};function Fc(a){return Ma(a)}function Gc(a){return Na(a)}
var $e=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return q(id(a))?vc.b(function(a,b){return Yb.b(q(a)?a:ke,b)},a):null}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),af=function(){function a(a,d){var e=null;1<arguments.length&&(e=I(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){return q(id(b))?vc.b(function(a){return function(b,c){return vc.c(a,q(b)?b:
ke,A(c))}}(function(b,d){var h=B(d),l=B(G(d));return tc(b,h)?bc.c(b,h,a.b?a.b($b.b(b,h),l):a.call(null,$b.b(b,h),l)):bc.c(b,h,l)}),b):null}a.m=1;a.h=function(a){var d=B(a);a=E(a);return b(d,a)};a.d=b;return a}();function bf(a,b,c){this.j=a;this.Qa=b;this.n=c;this.q=8196;this.l=15077647}f=bf.prototype;f.Wa=function(){return new cf(qb(this.Qa))};
f.v=function(){var a=this.n;if(null!=a)return a;a:{for(var a=0,b=A(this);;)if(b)var c=B(b),a=(a+Ib(c))%4503599627370496,b=G(b);else break a;a=void 0}return this.n=a};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){return Ha(this.Qa,b)?b:c};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};
f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};f.F=function(a,b){return new bf(this.j,bc.c(this.Qa,b,null),null)};f.toString=function(){return Ab(this)};f.G=function(){var a=A(this.Qa);return a?new Ze(a,null):null};f.Ib=function(a,b){return new bf(this.j,Ka(this.Qa,b),null)};f.L=function(){return wa(this.Qa)};f.u=function(a,b){return(null==b?!1:b?b.l&4096||b.nc?!0:b.l?!1:s(Oa,b):s(Oa,b))&&K(this)===K(b)&&hd(function(a){return function(b){return tc(a,b)}}(this),b)};
f.H=function(a,b){return new bf(b,this.Qa,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(ef,this.j)};var ef=new bf(null,ke,0);function ff(a){var b=a.length;if(b<=ie)for(var c=0,d=qb(ke);;)if(c<b)var e=c+1,d=tb(d,a[c],null),c=e;else return new bf(null,sb(d),null);else for(c=0,d=qb(ef);;)if(c<b)e=c+1,d=rb(d,a[c]),c=e;else return sb(d)}function cf(a){this.Fa=a;this.l=259;this.q=136}f=cf.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ga.c(this.Fa,c,qc)===qc?null:c;case 3:return Ga.c(this.Fa,c,qc)===qc?d:c}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return Ga.c(this.Fa,a,qc)===qc?null:a};f.b=function(a,b){return Ga.c(this.Fa,a,qc)===qc?b:a};f.B=function(a,b){return Ga.c(this,b,null)};f.C=function(a,b,c){return Ga.c(this.Fa,b,qc)===qc?c:b};
f.L=function(){return K(this.Fa)};f.Na=function(a,b){this.Fa=ed.c(this.Fa,b,null);return this};f.Oa=function(){return new bf(null,sb(this.Fa),null)};function gf(a){a=A(a);if(null==a)return ef;if(a instanceof Kb&&0===a.p){a=a.e;a:{for(var b=0,c=qb(ef);;)if(b<a.length)var d=b+1,c=c.Na(null,a[b]),b=d;else{a=c;break a}a=void 0}return a.Oa(null)}if(v)for(d=qb(ef);;)if(null!=a)b=a.la(null),d=d.Na(null,a.S(null)),a=b;else return d.Oa(null);else return null}
function Pc(a){if(a&&(a.q&4096||a.Yb))return a.name;if("string"===typeof a)return a;throw Error("Doesn't support name: "+x.a(a));}var jf=function hf(b,c){return new Rc(null,function(){var d=A(c);return d?q(b.a?b.a(B(d)):b.call(null,B(d)))?J(B(d),hf(b,E(d))):null:null},null,null)};function kf(a,b,c){return function(d){var e=kb(a);return b.b?b.b(e.b?e.b(jb(a,d),c):e.call(null,jb(a,d),c),0):b.call(null,e.b?e.b(jb(a,d),c):e.call(null,jb(a,d),c),0)}}
var lf=function(){function a(a,b,c,h,l){var m=ib(a,c,!0);if(q(m)){var n=M.c(m,0,null);return jf(kf(a,h,l),q(kf(a,b,c).call(null,n))?m:G(m))}return null}function b(a,b,c){var h=kf(a,b,c);return q(ff([yc,zc]).call(null,b))?(a=ib(a,c,!0),q(a)?(b=M.c(a,0,null),q(h.a?h.a(b):h.call(null,b))?a:G(a)):null):jf(h,hb(a,!0))}var c=null,c=function(c,e,g,h,l){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,l)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.o=
a;return c}(),mf=function(){function a(a,b,c,h,l){var m=ib(a,l,!1);if(q(m)){var n=M.c(m,0,null);return jf(kf(a,b,c),q(kf(a,h,l).call(null,n))?m:G(m))}return null}function b(a,b,c){var h=kf(a,b,c);return q(ff([wc,xc]).call(null,b))?(a=ib(a,c,!1),q(a)?(b=M.c(a,0,null),q(h.a?h.a(b):h.call(null,b))?a:G(a)):null):jf(h,hb(a,!1))}var c=null,c=function(c,e,g,h,l){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,l)}throw Error("Invalid arity: "+arguments.length);
};c.c=b;c.o=a;return c}();function nf(a,b,c,d,e){this.j=a;this.start=b;this.end=c;this.step=d;this.n=e;this.l=32375006;this.q=8192}f=nf.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Sb(this)};f.la=function(){return 0<this.step?this.start+this.step<this.end?new nf(this.j,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new nf(this.j,this.start+this.step,this.end,this.step,null):null};f.F=function(a,b){return J(b,this)};f.toString=function(){return Ab(this)};
f.Q=function(a,b){return Ob.b(this,b)};f.R=function(a,b,c){return Ob.c(this,b,c)};f.G=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};f.L=function(){return oa(db(this))?0:Math.ceil((this.end-this.start)/this.step)};f.S=function(){return null==db(this)?null:this.start};f.X=function(){return null!=db(this)?new nf(this.j,this.start+this.step,this.end,this.step,null):Lb};f.u=function(a,b){return Ub(this,b)};
f.H=function(a,b){return new nf(b,this.start,this.end,this.step,this.n)};f.D=function(){return this.j};f.A=function(a,b){if(b<wa(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};f.na=function(a,b,c){return b<wa(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};f.J=function(){return Xb(Lb,this.j)};
var of=function(){function a(a,b,c){return new nf(null,a,b,c,null)}function b(a,b){return e.c(a,b,1)}function c(a){return e.c(0,a,1)}function d(){return e.c(0,Number.MAX_VALUE,1)}var e=null,e=function(e,h,l){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,h);case 3:return a.call(this,e,h,l)}throw Error("Invalid arity: "+arguments.length);};e.r=d;e.a=c;e.b=b;e.c=a;return e}();
function pf(a){var b=qf.exec(a);return Cb.b(B(b),a)?1===K(b)?B(b):Td(b):null}function rf(a,b){var c=a.exec(b);return null==c?null:1===K(c)?B(c):Td(c)}function sf(a){var b=rf(/^(?:\(\?([idmsux]*)\))?(.*)/,a);M.c(b,0,null);a=M.c(b,1,null);b=M.c(b,2,null);return RegExp(b,a)}
function tf(a,b,c,d,e,g,h){var l=fa;try{fa=null==fa?null:fa-1;if(null!=fa&&0>fa)return lb(a,"#");lb(a,c);A(h)&&(b.c?b.c(B(h),a,g):b.call(null,B(h),a,g));for(var m=G(h),n=na.a(g)-1;;)if(!m||null!=n&&0===n){A(m)&&0===n&&(lb(a,d),lb(a,"..."));break}else{lb(a,d);b.c?b.c(B(m),a,g):b.call(null,B(m),a,g);var p=G(m);c=n-1;m=p;n=c}return lb(a,e)}finally{fa=l}}
var uf=function(){function a(a,d){var e=null;1<arguments.length&&(e=I(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=A(b),g=null,h=0,l=0;;)if(l<h){var m=g.A(null,l);lb(a,m);l+=1}else if(e=A(e))g=e,nc(g)?(e=wb(g),h=xb(g),g=e,m=K(e),e=h,h=m):(m=B(g),lb(a,m),e=G(g),g=null,h=0),l=0;else return null}a.m=1;a.h=function(a){var d=B(a);a=E(a);return b(d,a)};a.d=b;return a}(),vf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function wf(a){return'"'+x.a(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return vf[a]}))+'"'}
var zf=function xf(b,c,d){if(null==b)return lb(c,"nil");if(void 0===b)return lb(c,"#\x3cundefined\x3e");if(v){q(function(){var c=$b.b(d,la);return q(c)?(c=b?b.l&131072||b.Xb?!0:b.l?!1:s(Va,b):s(Va,b))?gc(b):c:c}())&&(lb(c,"^"),xf(gc(b),c,d),lb(c," "));if(null==b)return lb(c,"nil");if(b.ac)return b.qc(b,c,d);if(b&&(b.l&2147483648||b.K))return b.t(null,c,d);if(pa(b)===Boolean||"number"===typeof b)return lb(c,""+x.a(b));if(null!=b&&b.constructor===Object)return lb(c,"#js "),yf.k?yf.k(od.b(function(c){return new O(null,
2,5,P,[Qc.a(c),b[c]],null)},oc(b)),xf,c,d):yf.call(null,od.b(function(c){return new O(null,2,5,P,[Qc.a(c),b[c]],null)},oc(b)),xf,c,d);if(b instanceof Array)return tf(c,xf,"#js ["," ","]",d,b);if("string"==typeof b)return q(ka.a(d))?lb(c,wf(b)):lb(c,b);if(dc(b))return uf.d(c,I(["#\x3c",""+x.a(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+x.a(b);;)if(K(d)<c)d="0"+x.a(d);else return d};return uf.d(c,I(['#inst "',""+x.a(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",e(b.getUTCDate(),
2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?uf.d(c,I(['#"',b.source,'"'],0)):(b?b.l&2147483648||b.K||(b.l?0:s(mb,b)):s(mb,b))?nb(b,c,d):v?uf.d(c,I(["#\x3c",""+x.a(b),"\x3e"],0)):null}return null};
function Af(a){var b=ga(),c=new ea;a:{var d=new zb(c);zf(B(a),d,b);a=A(G(a));for(var e=null,g=0,h=0;;)if(h<g){var l=e.A(null,h);lb(d," ");zf(l,d,b);h+=1}else if(a=A(a))e=a,nc(e)?(a=wb(e),g=xb(e),e=a,l=K(a),a=g,g=l):(l=B(e),lb(d," "),zf(l,d,b),a=G(e),e=null,g=0),h=0;else break a}return c}
var Bf=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return null==a||oa(A(a))?"":""+x.a(Af(a))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}();function yf(a,b,c,d){return tf(c,function(a,c,d){b.c?b.c(Ma(a),c,d):b.call(null,Ma(a),c,d);lb(c," ");return b.c?b.c(Na(a),c,d):b.call(null,Na(a),c,d)},"{",", ","}",d,A(a))}Ze.prototype.K=!0;Ze.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};
Kb.prototype.K=!0;Kb.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Wd.prototype.K=!0;Wd.prototype.t=function(a,b,c){return tf(b,zf,"["," ","]",c,this)};Xc.prototype.K=!0;Xc.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Ue.prototype.K=!0;Ue.prototype.t=function(a,b,c){return yf(this,zf,b,c)};ha.prototype.K=!0;ha.prototype.t=function(a,b,c){return yf(this,zf,b,c)};ae.prototype.K=!0;ae.prototype.t=function(a,b,c){return tf(b,zf,"#queue ["," ","]",c,A(this))};
Rc.prototype.K=!0;Rc.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Tb.prototype.K=!0;Tb.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Ae.prototype.K=!0;Ae.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Ie.prototype.K=!0;Ie.prototype.t=function(a,b,c){return tf(b,zf,"["," ","]",c,this)};Ud.prototype.K=!0;Ud.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Ce.prototype.K=!0;Ce.prototype.t=function(a,b,c){return yf(this,zf,b,c)};
bf.prototype.K=!0;bf.prototype.t=function(a,b,c){return tf(b,zf,"#{"," ","}",c,this)};O.prototype.K=!0;O.prototype.t=function(a,b,c){return tf(b,zf,"["," ","]",c,this)};Hc.prototype.K=!0;Hc.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};$d.prototype.K=!0;$d.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};ge.prototype.K=!0;ge.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Ic.prototype.K=!0;Ic.prototype.t=function(a,b){return lb(b,"()")};
Je.prototype.K=!0;Je.prototype.t=function(a,b,c){return tf(b,zf,"["," ","]",c,this)};Mc.prototype.K=!0;Mc.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};nf.prototype.K=!0;nf.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Be.prototype.K=!0;Be.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};Ge.prototype.K=!0;Ge.prototype.t=function(a,b,c){return tf(b,zf,"("," ",")",c,this)};O.prototype.ib=!0;O.prototype.jb=function(a,b){return uc.b(this,b)};
Wd.prototype.ib=!0;Wd.prototype.jb=function(a,b){return uc.b(this,b)};N.prototype.ib=!0;N.prototype.jb=function(a,b){return Bb(this,b)};Fb.prototype.ib=!0;Fb.prototype.jb=function(a,b){return Bb(this,b)};function Cf(a,b){if(a?a.Hb:a)return a.Hb(0,b);var c;c=Cf[k(null==a?null:a)];if(!c&&(c=Cf._,!c))throw qa("IReset.-reset!",a);return c.call(null,a,b)}
var Df=function(){function a(a,b,c,d,e){if(a?a.Mb:a)return a.Mb(0,b,c,d,e);var p;p=Df[k(null==a?null:a)];if(!p&&(p=Df._,!p))throw qa("ISwap.-swap!",a);return p.call(null,a,b,c,d,e)}function b(a,b,c,d){if(a?a.Lb:a)return a.Lb(0,b,c,d);var e;e=Df[k(null==a?null:a)];if(!e&&(e=Df._,!e))throw qa("ISwap.-swap!",a);return e.call(null,a,b,c,d)}function c(a,b,c){if(a?a.Kb:a)return a.Kb(0,b,c);var d;d=Df[k(null==a?null:a)];if(!d&&(d=Df._,!d))throw qa("ISwap.-swap!",a);return d.call(null,a,b,c)}function d(a,
b){if(a?a.Jb:a)return a.Jb(0,b);var c;c=Df[k(null==a?null:a)];if(!c&&(c=Df._,!c))throw qa("ISwap.-swap!",a);return c.call(null,a,b)}var e=null,e=function(e,h,l,m,n){switch(arguments.length){case 2:return d.call(this,e,h);case 3:return c.call(this,e,h,l);case 4:return b.call(this,e,h,l,m);case 5:return a.call(this,e,h,l,m,n)}throw Error("Invalid arity: "+arguments.length);};e.b=d;e.c=c;e.k=b;e.o=a;return e}();
function Ef(a,b,c,d){this.state=a;this.j=b;this.ec=c;this.Ha=d;this.l=2153938944;this.q=16386}f=Ef.prototype;f.v=function(){return this[aa]||(this[aa]=++ba)};f.xb=function(a,b,c){a=A(this.Ha);for(var d=null,e=0,g=0;;)if(g<e){var h=d.A(null,g),l=M.c(h,0,null),h=M.c(h,1,null);h.k?h.k(l,this,b,c):h.call(null,l,this,b,c);g+=1}else if(a=A(a))nc(a)?(d=wb(a),a=xb(a),l=d,e=K(d),d=l):(d=B(a),l=M.c(d,0,null),h=M.c(d,1,null),h.k?h.k(l,this,b,c):h.call(null,l,this,b,c),a=G(a),d=null,e=0),g=0;else return null};
f.wb=function(a,b,c){this.Ha=bc.c(this.Ha,b,c);return this};f.t=function(a,b,c){lb(b,"#\x3cAtom: ");zf(this.state,b,c);return lb(b,"\x3e")};f.D=function(){return this.j};f.Eb=function(){return this.state};f.u=function(a,b){return this===b};
var Gf=function(){function a(a){return new Ef(a,null,null,null)}var b=null,c=function(){function a(c,d){var l=null;1<arguments.length&&(l=I(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,l)}function b(a,c){var d=rc(c)?fc.b(Xe,c):c,e=$b.b(d,Ff),d=$b.b(d,la);return new Ef(a,d,e,null)}a.m=1;a.h=function(a){var c=B(a);a=E(a);return b(c,a)};a.d=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.d(b,I(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.m=1;b.h=c.h;b.a=a;b.d=c.d;return b}();function Hf(a,b){if(a instanceof Ef){var c=a.ec;if(null!=c&&!q(c.a?c.a(b):c.call(null,b)))throw Error("Assert failed: Validator rejected reference state\n"+x.a(Bf.d(I([Lc(new Fb(null,"validate","validate",1233162959,null),new Fb(null,"new-value","new-value",972165309,null))],0))));c=a.state;a.state=b;null!=a.Ha&&ob(a,c,b);return b}return Cf(a,b)}function If(){var a=Jf();return Ua(a)}
var Kf=function(){function a(a,b,c,d){return a instanceof Ef?Hf(a,b.c?b.c(a.state,c,d):b.call(null,a.state,c,d)):Df.k(a,b,c,d)}function b(a,b,c){return a instanceof Ef?Hf(a,b.b?b.b(a.state,c):b.call(null,a.state,c)):Df.c(a,b,c)}function c(a,b){return a instanceof Ef?Hf(a,b.a?b.a(a.state):b.call(null,a.state)):Df.b(a,b)}var d=null,e=function(){function a(c,d,e,g,r){var t=null;4<arguments.length&&(t=I(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,g,t)}function b(a,c,d,e,g){return a instanceof
Ef?Hf(a,fc.o(c,a.state,d,e,g)):Df.o(a,c,d,e,g)}a.m=4;a.h=function(a){var c=B(a);a=G(a);var d=B(a);a=G(a);var e=B(a);a=G(a);var g=B(a);a=E(a);return b(c,d,e,g,a)};a.d=b;return a}(),d=function(d,h,l,m,n){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,l);case 4:return a.call(this,d,h,l,m);default:return e.d(d,h,l,m,I(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.m=4;d.h=e.h;d.b=c;d.c=b;d.k=a;d.d=e.d;return d}();
function Lf(a,b,c){return pb(a,b,c)}var Mf=null,Nf=function(){function a(a){null==Mf&&(Mf=Gf.a(0));return Jb.a(""+x.a(a)+x.a(Kf.b(Mf,Mb)))}function b(){return c.a("G__")}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.r=b;c.a=a;return c}(),Of={};
function Pf(a){if(a?a.Tb:a)return a.Tb(a);var b;b=Pf[k(null==a?null:a)];if(!b&&(b=Pf._,!b))throw qa("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function Qf(a){return(a?q(q(null)?null:a.Sb)||(a.Pb?0:s(Of,a)):s(Of,a))?Pf(a):"string"===typeof a||"number"===typeof a||a instanceof N||a instanceof Fb?Rf.a?Rf.a(a):Rf.call(null,a):Bf.d(I([a],0))}
var Rf=function Sf(b){if(null==b)return null;if(b?q(q(null)?null:b.Sb)||(b.Pb?0:s(Of,b)):s(Of,b))return Pf(b);if(b instanceof N)return Pc(b);if(b instanceof Fb)return""+x.a(b);if(lc(b)){var c={};b=A(b);for(var d=null,e=0,g=0;;)if(g<e){var h=d.A(null,g),l=M.c(h,0,null),h=M.c(h,1,null);c[Qf(l)]=Sf(h);g+=1}else if(b=A(b))nc(b)?(e=wb(b),b=xb(b),d=e,e=K(e)):(e=B(b),d=M.c(e,0,null),e=M.c(e,1,null),c[Qf(d)]=Sf(e),b=G(b),d=null,e=0),g=0;else break;return c}if(null==b?0:b?b.l&8||b.gc||(b.l?0:s(ya,b)):s(ya,
b)){c=[];b=A(od.b(Sf,b));d=null;for(g=e=0;;)if(g<e)l=d.A(null,g),c.push(l),g+=1;else if(b=A(b))d=b,nc(d)?(b=wb(d),g=xb(d),d=b,e=K(b),b=g):(b=B(d),c.push(b),b=G(d),d=null,e=0),g=0;else break;return c}return v?b:null},Tf=null;function Jf(){null==Tf&&(Tf=Gf.a(new ha(null,3,[Uf,ke,Vf,ke,Wf,ke],null)));return Tf}
var Xf=function(){function a(a,b,g){var h=Cb.b(b,g);if(!h&&!(h=tc(Wf.a(a).call(null,b),g))&&(h=mc(g))&&(h=mc(b)))if(h=K(g)===K(b))for(var h=!0,l=0;;)if(h&&l!==K(g))h=c.c(a,b.a?b.a(l):b.call(null,l),g.a?g.a(l):g.call(null,l)),l+=1;else return h;else return h;else return h}function b(a,b){return c.c(If(),a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}(),
Yf=function(){function a(a,b){var c=$b.b(Uf.a(a),b);return A(c)?c:null}function b(a){return c.b(If(),a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}();function Zf(a,b,c,d){Kf.b(a,function(){return Ua(b)});Kf.b(c,function(){return Ua(d)})}
var ag=function $f(b,c,d){var e=Ua(d).call(null,b),e=q(q(e)?e.a?e.a(c):e.call(null,c):e)?!0:null;if(q(e))return e;e=function(){for(var e=Yf.a(c);;)if(0<K(e))$f(b,B(e),d),e=E(e);else return null}();if(q(e))return e;e=function(){for(var e=Yf.a(b);;)if(0<K(e))$f(B(e),c,d),e=E(e);else return null}();return q(e)?e:!1};function bg(a,b,c){c=ag(a,b,c);return q(c)?c:Xf.b(a,b)}
var dg=function cg(b,c,d,e,g,h,l){var m=vc.c(function(e,h){var l=M.c(h,0,null);M.c(h,1,null);if(Xf.c(Ua(d),c,l)){var m;m=(m=null==e)?m:bg(l,B(e),g);m=q(m)?h:e;if(!q(bg(B(m),l,g)))throw Error("Multiple methods in multimethod '"+x.a(b)+"' match dispatch value: "+x.a(c)+" -\x3e "+x.a(l)+" and "+x.a(B(m))+", and neither is preferred");return m}return e},null,Ua(e));if(q(m)){if(Cb.b(Ua(l),Ua(d)))return Kf.k(h,bc,c,B(G(m))),B(G(m));Zf(h,e,l,d);return cg(b,c,d,e,g,h,l)}return null};
function eg(a,b){throw Error("No method in multimethod '"+x.a(a)+"' for dispatch value: "+x.a(b));}function fg(a,b,c,d,e,g,h,l){this.name=a;this.g=b;this.bc=c;this.lb=d;this.cb=e;this.cc=g;this.mb=h;this.gb=l;this.l=4194305;this.q=256}f=fg.prototype;f.v=function(){return this[aa]||(this[aa]=++ba)};function gg(a,b,c){Kf.k(a.cb,bc,b,c);Zf(a.mb,a.cb,a.gb,a.lb)}
function hg(a,b){Cb.b(Ua(a.gb),Ua(a.lb))||Zf(a.mb,a.cb,a.gb,a.lb);var c=Ua(a.mb).call(null,b);if(q(c))return c;c=dg(a.name,b,a.lb,a.cb,a.cc,a.mb,a.gb);return q(c)?c:Ua(a.cb).call(null,a.bc)}
f.call=function(){var a=null;return a=function(a,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra,Gb){switch(arguments.length){case 2:var u=a,u=this,R=u.g.a?u.g.a(c):u.g.call(null,c),F=hg(this,R);q(F)||eg(u.name,R);return F.a?F.a(c):F.call(null,c);case 3:return u=a,u=this,R=u.g.b?u.g.b(c,d):u.g.call(null,c,d),F=hg(this,R),q(F)||eg(u.name,R),F.b?F.b(c,d):F.call(null,c,d);case 4:return u=a,u=this,R=u.g.c?u.g.c(c,d,e):u.g.call(null,c,d,e),F=hg(this,R),q(F)||eg(u.name,R),F.c?F.c(c,d,e):F.call(null,c,d,e);case 5:return u=
a,u=this,R=u.g.k?u.g.k(c,d,e,g):u.g.call(null,c,d,e,g),F=hg(this,R),q(F)||eg(u.name,R),F.k?F.k(c,d,e,g):F.call(null,c,d,e,g);case 6:return u=a,u=this,R=u.g.o?u.g.o(c,d,e,g,h):u.g.call(null,c,d,e,g,h),F=hg(this,R),q(F)||eg(u.name,R),F.o?F.o(c,d,e,g,h):F.call(null,c,d,e,g,h);case 7:return u=a,u=this,R=u.g.s?u.g.s(c,d,e,g,h,l):u.g.call(null,c,d,e,g,h,l),F=hg(this,R),q(F)||eg(u.name,R),F.s?F.s(c,d,e,g,h,l):F.call(null,c,d,e,g,h,l);case 8:return u=a,u=this,R=u.g.T?u.g.T(c,d,e,g,h,l,m):u.g.call(null,c,
d,e,g,h,l,m),F=hg(this,R),q(F)||eg(u.name,R),F.T?F.T(c,d,e,g,h,l,m):F.call(null,c,d,e,g,h,l,m);case 9:return u=a,u=this,R=u.g.V?u.g.V(c,d,e,g,h,l,m,n):u.g.call(null,c,d,e,g,h,l,m,n),F=hg(this,R),q(F)||eg(u.name,R),F.V?F.V(c,d,e,g,h,l,m,n):F.call(null,c,d,e,g,h,l,m,n);case 10:return u=a,u=this,R=u.g.ia?u.g.ia(c,d,e,g,h,l,m,n,p):u.g.call(null,c,d,e,g,h,l,m,n,p),F=hg(this,R),q(F)||eg(u.name,R),F.ia?F.ia(c,d,e,g,h,l,m,n,p):F.call(null,c,d,e,g,h,l,m,n,p);case 11:return u=a,u=this,R=u.g.Z?u.g.Z(c,d,e,g,
h,l,m,n,p,r):u.g.call(null,c,d,e,g,h,l,m,n,p,r),F=hg(this,R),q(F)||eg(u.name,R),F.Z?F.Z(c,d,e,g,h,l,m,n,p,r):F.call(null,c,d,e,g,h,l,m,n,p,r);case 12:return u=a,u=this,R=u.g.$?u.g.$(c,d,e,g,h,l,m,n,p,r,t):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t),F=hg(this,R),q(F)||eg(u.name,R),F.$?F.$(c,d,e,g,h,l,m,n,p,r,t):F.call(null,c,d,e,g,h,l,m,n,p,r,t);case 13:return u=a,u=this,R=u.g.U?u.g.U(c,d,e,g,h,l,m,n,p,r,t,w):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w),F=hg(this,R),q(F)||eg(u.name,R),F.U?F.U(c,d,e,g,h,l,m,n,p,
r,t,w):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w);case 14:return u=a,u=this,R=u.g.aa?u.g.aa(c,d,e,g,h,l,m,n,p,r,t,w,z):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z),F=hg(this,R),q(F)||eg(u.name,R),F.aa?F.aa(c,d,e,g,h,l,m,n,p,r,t,w,z):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z);case 15:return u=a,u=this,R=u.g.ba?u.g.ba(c,d,e,g,h,l,m,n,p,r,t,w,z,C):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C),F=hg(this,R),q(F)||eg(u.name,R),F.ba?F.ba(c,d,e,g,h,l,m,n,p,r,t,w,z,C):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C);case 16:return u=
a,u=this,R=u.g.ca?u.g.ca(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D),F=hg(this,R),q(F)||eg(u.name,R),F.ca?F.ca(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D);case 17:return u=a,u=this,R=u.g.da?u.g.da(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H),F=hg(this,R),q(F)||eg(u.name,R),F.da?F.da(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H);case 18:return u=a,u=this,R=u.g.ea?u.g.ea(c,
d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L),F=hg(this,R),q(F)||eg(u.name,R),F.ea?F.ea(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L);case 19:return u=a,u=this,R=u.g.fa?u.g.fa(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T),F=hg(this,R),q(F)||eg(u.name,R),F.fa?F.fa(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T);case 20:return u=a,u=this,R=u.g.ga?u.g.ga(c,
d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia),F=hg(this,R),q(F)||eg(u.name,R),F.ga?F.ga(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia);case 21:return u=a,u=this,R=u.g.ha?u.g.ha(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra):u.g.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra),F=hg(this,R),q(F)||eg(u.name,R),F.ha?F.ha(c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra):F.call(null,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T,
ia,ra);case 22:return u=a,u=this,R=fc.d(u.g,c,d,e,g,I([h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra,Gb],0)),F=hg(this,R),q(F)||eg(u.name,R),fc.d(F,c,d,e,g,I([h,l,m,n,p,r,t,w,z,C,D,H,L,T,ia,ra,Gb],0))}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){var b=this.g.a?this.g.a(a):this.g.call(null,a),c=hg(this,b);q(c)||eg(this.name,b);return c.a?c.a(a):c.call(null,a)};
f.b=function(a,b){var c=this.g.b?this.g.b(a,b):this.g.call(null,a,b),d=hg(this,c);q(d)||eg(this.name,c);return d.b?d.b(a,b):d.call(null,a,b)};f.c=function(a,b,c){var d=this.g.c?this.g.c(a,b,c):this.g.call(null,a,b,c),e=hg(this,d);q(e)||eg(this.name,d);return e.c?e.c(a,b,c):e.call(null,a,b,c)};f.k=function(a,b,c,d){var e=this.g.k?this.g.k(a,b,c,d):this.g.call(null,a,b,c,d),g=hg(this,e);q(g)||eg(this.name,e);return g.k?g.k(a,b,c,d):g.call(null,a,b,c,d)};
f.o=function(a,b,c,d,e){var g=this.g.o?this.g.o(a,b,c,d,e):this.g.call(null,a,b,c,d,e),h=hg(this,g);q(h)||eg(this.name,g);return h.o?h.o(a,b,c,d,e):h.call(null,a,b,c,d,e)};f.s=function(a,b,c,d,e,g){var h=this.g.s?this.g.s(a,b,c,d,e,g):this.g.call(null,a,b,c,d,e,g),l=hg(this,h);q(l)||eg(this.name,h);return l.s?l.s(a,b,c,d,e,g):l.call(null,a,b,c,d,e,g)};
f.T=function(a,b,c,d,e,g,h){var l=this.g.T?this.g.T(a,b,c,d,e,g,h):this.g.call(null,a,b,c,d,e,g,h),m=hg(this,l);q(m)||eg(this.name,l);return m.T?m.T(a,b,c,d,e,g,h):m.call(null,a,b,c,d,e,g,h)};f.V=function(a,b,c,d,e,g,h,l){var m=this.g.V?this.g.V(a,b,c,d,e,g,h,l):this.g.call(null,a,b,c,d,e,g,h,l),n=hg(this,m);q(n)||eg(this.name,m);return n.V?n.V(a,b,c,d,e,g,h,l):n.call(null,a,b,c,d,e,g,h,l)};
f.ia=function(a,b,c,d,e,g,h,l,m){var n=this.g.ia?this.g.ia(a,b,c,d,e,g,h,l,m):this.g.call(null,a,b,c,d,e,g,h,l,m),p=hg(this,n);q(p)||eg(this.name,n);return p.ia?p.ia(a,b,c,d,e,g,h,l,m):p.call(null,a,b,c,d,e,g,h,l,m)};f.Z=function(a,b,c,d,e,g,h,l,m,n){var p=this.g.Z?this.g.Z(a,b,c,d,e,g,h,l,m,n):this.g.call(null,a,b,c,d,e,g,h,l,m,n),r=hg(this,p);q(r)||eg(this.name,p);return r.Z?r.Z(a,b,c,d,e,g,h,l,m,n):r.call(null,a,b,c,d,e,g,h,l,m,n)};
f.$=function(a,b,c,d,e,g,h,l,m,n,p){var r=this.g.$?this.g.$(a,b,c,d,e,g,h,l,m,n,p):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p),t=hg(this,r);q(t)||eg(this.name,r);return t.$?t.$(a,b,c,d,e,g,h,l,m,n,p):t.call(null,a,b,c,d,e,g,h,l,m,n,p)};f.U=function(a,b,c,d,e,g,h,l,m,n,p,r){var t=this.g.U?this.g.U(a,b,c,d,e,g,h,l,m,n,p,r):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r),w=hg(this,t);q(w)||eg(this.name,t);return w.U?w.U(a,b,c,d,e,g,h,l,m,n,p,r):w.call(null,a,b,c,d,e,g,h,l,m,n,p,r)};
f.aa=function(a,b,c,d,e,g,h,l,m,n,p,r,t){var w=this.g.aa?this.g.aa(a,b,c,d,e,g,h,l,m,n,p,r,t):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t),z=hg(this,w);q(z)||eg(this.name,w);return z.aa?z.aa(a,b,c,d,e,g,h,l,m,n,p,r,t):z.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t)};
f.ba=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w){var z=this.g.ba?this.g.ba(a,b,c,d,e,g,h,l,m,n,p,r,t,w):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w),C=hg(this,z);q(C)||eg(this.name,z);return C.ba?C.ba(a,b,c,d,e,g,h,l,m,n,p,r,t,w):C.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w)};
f.ca=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z){var C=this.g.ca?this.g.ca(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z),D=hg(this,C);q(D)||eg(this.name,C);return D.ca?D.ca(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z):D.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z)};
f.da=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C){var D=this.g.da?this.g.da(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C),H=hg(this,D);q(H)||eg(this.name,D);return H.da?H.da(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C):H.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C)};
f.ea=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D){var H=this.g.ea?this.g.ea(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D),L=hg(this,H);q(L)||eg(this.name,H);return L.ea?L.ea(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D):L.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D)};
f.fa=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H){var L=this.g.fa?this.g.fa(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H),T=hg(this,L);q(T)||eg(this.name,L);return T.fa?T.fa(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H):T.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H)};
f.ga=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L){var T=this.g.ga?this.g.ga(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L),ia=hg(this,T);q(ia)||eg(this.name,T);return ia.ga?ia.ga(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L):ia.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L)};
f.ha=function(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T){var ia=this.g.ha?this.g.ha(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):this.g.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T),ra=hg(this,ia);q(ra)||eg(this.name,ia);return ra.ha?ra.ha(a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T):ra.call(null,a,b,c,d,e,g,h,l,m,n,p,r,t,w,z,C,D,H,L,T)};function ig(a){this.nb=a;this.q=0;this.l=2153775104}ig.prototype.v=function(){return ca(Bf.d(I([this],0)))};
ig.prototype.t=function(a,b){return lb(b,'#uuid "'+x.a(this.nb)+'"')};ig.prototype.u=function(a,b){return b instanceof ig&&this.nb===b.nb};ig.prototype.toString=function(){return this.nb};var ma=new N(null,"dup","dup"),Q=new N(null,"href","href"),Vf=new N(null,"descendants","descendants"),jg=new N(null,"html","html"),Eb=new N(null,"default","default"),kg=new N(null,"text","text"),lg=new N(null,"dependencies","dependencies"),mg=new N(null,"history","history"),ng=new N(null,"background","background"),og=new N(null,"focus-select","focus-select"),pg=new N(null,"scroll-to","scroll-to"),qg=new N(null,"callback","callback"),rg=new N(null,"class","class"),sg=new N(null,"fade-toggle","fade-toggle"),
Uf=new N(null,"parents","parents"),ja=new N(null,"flush-on-newline","flush-on-newline"),tg=new N(null,"hierarchy","hierarchy"),ug=new N(null,"data-background","data-background"),vg=new N(null,"src","src"),wg=new N(null,"focus","focus"),xg=new N(null,"data-markdown","data-markdown"),yg=new N(null,"data-transition","data-transition"),S=new N(null,"title","title"),Wf=new N(null,"ancestors","ancestors"),zg=new N(null,"success","success"),Ag=new N(null,"toggle","toggle"),Bg=new N(null,"css","css"),Cg=
new N(null,"transition","transition"),Dg=new N(null,"url","url"),Eg=new N(null,"markdown","markdown"),na=new N(null,"print-length","print-length"),Fg=new N(null,"type","type"),v=new N(null,"else","else"),ka=new N(null,"readably","readably"),Gg=new N(null,"dataType","dataType"),Ff=new N(null,"validator","validator"),la=new N(null,"meta","meta"),Hg=new N("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found"),Ig=new N(null,"theme","theme"),Jg=new N(null,"scrollTop","scrollTop"),
Kg=new N(null,"id","id"),Lg=new N(null,"async","async"),Mg=new N(null,"value","value"),Ng=new N(null,"select","select"),Og=new N(null,"attr","attr"),Pg=new N(null,"slide-toggle","slide-toggle"),Qg=new N(null,"rel","rel"),Rg=new N("tailrecursion.hoplon","default","tailrecursion.hoplon/default");var Sg=function(){function a(a,b){return fc.b(x,rd(1,ud.b(td.a(a),b)))}function b(a){return fc.b(x,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}();
function Tg(a,b){if(0>=b||b>=2+K(a))return Yb.b(Td(J("",od.b(x,A(a)))),"");if(q(Cb.b?Cb.b(1,b):Cb.call(null,1,b)))return new O(null,1,5,P,[a],null);if(q(Cb.b?Cb.b(2,b):Cb.call(null,2,b)))return new O(null,2,5,P,["",a],null);var c=b-2;return Yb.b(Td(J("",Vd.c(Td(od.b(x,A(a))),0,c))),Dc.b(a,c))}
var Ug=function(){function a(a,b,c){if(Cb.b(""+x.a(b),"/(?:)/"))b=Tg(a,c);else if(1>c)b=Td((""+x.a(a)).split(b));else a:{for(var h=c,l=Sd;;){if(Cb.b(h,1)){b=Yb.b(l,a);break a}var m=rf(b,a);if(q(m)){var n=m,m=a.indexOf(n),n=a.substring(m+K(n)),h=h-1,l=Yb.b(l,a.substring(0,m));a=n}else{b=Yb.b(l,a);break a}}b=void 0}if(Cb.b(0,c))a:{for(c=b;;)if(Cb.b("",null==c?null:Qa(c)))c=null==c?null:Ra(c);else break a;c=void 0}else c=b;return c}function b(a,b){return c.c(a,b,0)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}();var Vg=function(){function a(a,d){var e=null;1<arguments.length&&(e=I(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){throw Error(fc.b(x,b));}a.m=1;a.h=function(a){B(a);a=E(a);return b(0,a)};a.d=b;return a}();sf("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");sf("^([-+]?[0-9]+)/([0-9]+)$");sf("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");sf("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");sf("^[0-9A-Fa-f]{2}$");sf("^[0-9A-Fa-f]{4}$");
function Wg(a){if(Cb.b(3,K(a)))return a;if(3<K(a))return Dc.c(a,0,3);if(v)for(a=new ea(a);;)if(3>a.Ra.length)a=a.append("0");else return a.toString();else return null}var Xg=function(a,b){return function(c,d){return $b.b(q(d)?b:a,c)}}(new O(null,13,5,P,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),new O(null,13,5,P,[null,31,29,31,30,31,30,31,31,30,31,30,31],null)),qf=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Yg(a){a=parseInt(a,10);return oa(isNaN(a))?a:null}function Zg(a,b,c,d){a<=b&&b<=c||Vg.d(null,I([""+x.a(d)+" Failed:  "+x.a(a)+"\x3c\x3d"+x.a(b)+"\x3c\x3d"+x.a(c)],0));return b}
function $g(a){var b=pf(a);M.c(b,0,null);var c=M.c(b,1,null),d=M.c(b,2,null),e=M.c(b,3,null),g=M.c(b,4,null),h=M.c(b,5,null),l=M.c(b,6,null),m=M.c(b,7,null),n=M.c(b,8,null),p=M.c(b,9,null),r=M.c(b,10,null);if(oa(b))return Vg.d(null,I(["Unrecognized date/time syntax: "+x.a(a)],0));a=Yg(c);var b=function(){var a=Yg(d);return q(a)?a:1}(),c=function(){var a=Yg(e);return q(a)?a:1}(),t=function(){var a=Yg(g);return q(a)?a:0}(),w=function(){var a=Yg(h);return q(a)?a:0}(),z=function(){var a=Yg(l);return q(a)?
a:0}(),C=function(){var a=Yg(Wg(m));return q(a)?a:0}(),n=(Cb.b(n,"-")?-1:1)*(60*function(){var a=Yg(p);return q(a)?a:0}()+function(){var a=Yg(r);return q(a)?a:0}());return new O(null,8,5,P,[a,Zg(1,b,12,"timestamp month field must be in range 1..12"),Zg(1,c,Xg.b?Xg.b(b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)):Xg.call(null,b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)),"timestamp day field must be in range 1..last day in month"),Zg(0,t,23,"timestamp hour field must be in range 0..23"),
Zg(0,w,59,"timestamp minute field must be in range 0..59"),Zg(0,z,Cb.b(w,59)?60:59,"timestamp second field must be in range 0..60"),Zg(0,C,999,"timestamp millisecond field must be in range 0..999"),n],null)}
var ah=Gf.a(new ha(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=$g(a),q(b)){a=M.c(b,0,null);var c=M.c(b,1,null),d=M.c(b,2,null),e=M.c(b,3,null),g=M.c(b,4,null),h=M.c(b,5,null),l=M.c(b,6,null);b=M.c(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,g,h,l)-6E4*b)}else b=Vg.d(null,I(["Unrecognized date/time syntax: "+x.a(a)],0));else b=Vg.d(null,I(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new ig(a):Vg.d(null,I(["UUID literal expects a string as its representation."],
0))},"queue",function(a){return mc(a)?xd(be,a):Vg.d(null,I(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(mc(a)){var b=[];a=A(a);for(var c=null,d=0,e=0;;)if(e<d){var g=c.A(null,e);b.push(g);e+=1}else if(a=A(a))c=a,nc(c)?(a=wb(c),e=xb(c),c=a,d=K(a),a=e):(a=B(c),b.push(a),a=G(c),c=null,d=0),e=0;else break;return b}if(lc(a)){b={};a=A(a);c=null;for(e=d=0;;)if(e<d){var h=c.A(null,e),g=M.c(h,0,null),h=M.c(h,1,null);b[Pc(g)]=h;e+=1}else if(a=A(a))nc(a)?(d=wb(a),a=xb(a),c=d,
d=K(d)):(d=B(a),c=M.c(d,0,null),d=M.c(d,1,null),b[Pc(c)]=d,a=G(a),c=null,d=0),e=0;else break;return b}return v?Vg.d(null,I(["JS literal expects a vector or map containing only string or unqualified keyword keys"],0)):null}],null));Gf.a(null);function bh(a,b,c,d){this.P=a;this.W=b;this.j=c;this.n=d;this.q=0;this.l=2565220111}f=bh.prototype;f.v=function(){var a=this.n;return null!=a?a:this.n=a=Ec(this)};f.B=function(a,b){return $b.b(this.W,b)};f.C=function(a,b,c){return $b.c(this.W,b,c)};
f.za=function(a,b,c){a=$b.c(this.W,b,null);if(q(a)){if(Cb.b(a,c))return this;var d=$b.b(this.P,a);return Cb.b(K(d),1)?new bh(bc.c(cc.b(this.P,a),c,Yb.b($b.c(this.P,c,ef),b)),bc.c(this.W,b,c),this.j,null):new bh(bc.d(this.P,a,hc.b($b.b(this.P,a),b),I([c,Yb.b($b.c(this.P,c,ef),b)],0)),bc.c(this.W,b,c),this.j,null)}return new bh(bc.c(this.P,c,Yb.b($b.c(this.P,c,ef),b)),bc.c(this.W,b,c),this.j,null)};f.Va=function(a,b){return tc(this.W,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.B(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};f.a=function(a){return this.B(null,a)};f.b=function(a,b){return this.C(null,a,b)};f.t=function(a,b,c){return tf(b,function(){return function(a){return tf(b,zf,""," ","",c,a)}}(this),"#tailrecursion.priority-map {",", ","}",c,this)};
f.F=function(a,b){return mc(b)?Ia(this,y.b(b,0),y.b(b,1)):vc.c(za,this,b)};
f.Sa=function(){var a=this,b=this;return A(function(){return function(a){return function e(b){return new Rc(null,function(a){return function(){for(var c=b;;){var m=A(c);if(m){var n=m,p=B(n),r=M.c(p,0,null),t=M.c(p,1,null);if(m=A(function(a,b,c,e,g,h,l){return function ra(m){return new Rc(null,function(a,b,c){return function(){for(;;){var a=A(m);if(a){if(nc(a)){var b=wb(a),e=K(b),g=Vc(e);a:{for(var h=0;;)if(h<e){var l=y.b(b,h);g.add(new O(null,2,5,P,[l,c],null));h+=1}else{b=!0;break a}b=void 0}return b?
Yc(g.O(),ra(xb(a))):Yc(g.O(),null)}g=B(a);return J(new O(null,2,5,P,[g,c],null),ra(E(a)))}return null}}}(a,b,c,e,g,h,l),null,null)}}(c,p,r,t,n,m,a)(t)))return cd.b(m,e(E(c)));c=E(c)}else return null}}}(a),null,null)}}(b)(gb(a.P))}())};f.ub=function(a,b){return(q(b)?A:Jc).call(null,this)};
f.vb=function(a,b,c){var d=this,e=q(c)?lf.c(this.P,zc,b):mf.c(this.P,xc,b);return A(function(){return function(a,b){return function m(c){return new Rc(null,function(a,b){return function(){for(var d=c;;){var e=A(d);if(e){var g=e,h=B(g),D=M.c(h,0,null),H=M.c(h,1,null);if(e=A(function(a,b,c,d,e,g,h,m){return function Nb(n){return new Rc(null,function(a,b,c){return function(){for(;;){var a=A(n);if(a){if(nc(a)){var b=wb(a),d=K(b),e=Vc(d);a:{for(var g=0;;)if(g<d){var h=y.b(b,g);e.add(new O(null,2,5,P,[h,
c],null));g+=1}else{b=!0;break a}b=void 0}return b?Yc(e.O(),Nb(xb(a))):Yc(e.O(),null)}e=B(a);return J(new O(null,2,5,P,[e,c],null),Nb(E(a)))}return null}}}(a,b,c,d,e,g,h,m),null,null)}}(d,h,D,H,g,e,a,b)(H)))return cd.b(e,m(E(d)));d=E(d)}else return null}}}(a,b),null,null)}}(e,d)(e)}())};f.tb=function(a,b){return Na(b)};f.sb=function(){return Db};
f.G=function(){var a=this,b=this;return A(function(){return function(a){return function e(b){return new Rc(null,function(a){return function(){for(var c=b;;){var m=A(c);if(m){var n=m,p=B(n),r=M.c(p,0,null),t=M.c(p,1,null);if(m=A(function(a,b,c,e,g,h,l){return function ra(m){return new Rc(null,function(a,b,c){return function(){for(;;){var a=A(m);if(a){if(nc(a)){var b=wb(a),e=K(b),g=Vc(e);a:{for(var h=0;;)if(h<e){var l=y.b(b,h);g.add(new O(null,2,5,P,[l,c],null));h+=1}else{b=!0;break a}b=void 0}return b?
Yc(g.O(),ra(xb(a))):Yc(g.O(),null)}g=B(a);return J(new O(null,2,5,P,[g,c],null),ra(E(a)))}return null}}}(a,b,c,e,g,h,l),null,null)}}(c,p,r,t,n,m,a)(t)))return cd.b(m,e(E(c)));c=E(c)}else return null}}}(a),null,null)}}(b)(a.P)}())};f.L=function(){return K(this.W)};f.Aa=function(){if(0===K(this.W))return null;var a=B(this.P);return new O(null,2,5,P,[B(Na(a)),Ma(a)],null)};
f.Ba=function(){if(0===K(this.W))throw Error("Can't pop empty priority map");var a=B(this.P),b=Na(a),c=B(b),a=Ma(a);return Cb.b(K(b),1)?new bh(cc.b(this.P,a),cc.b(this.W,c),this.j,null):new bh(bc.c(this.P,a,hc.b(b,c)),cc.b(this.W,c),this.j,null)};f.u=function(a,b){return ab(this.W,b)};f.H=function(a,b){return new bh(this.P,this.W,b,this.n)};f.D=function(){return this.j};f.J=function(){return Xb(ch,this.j)};
f.Xa=function(a,b){var c=this.W.b?this.W.b(b,Hg):this.W.call(null,b,Hg);if(Cb.b(c,Hg))return this;var d=this.P.a?this.P.a(c):this.P.call(null,c);return Cb.b(K(d),1)?new bh(cc.b(this.P,c),cc.b(this.W,b),this.j,null):new bh(bc.c(this.P,c,hc.b(d,b)),cc.b(this.W,b),this.j,null)};var ch=new bh(Ye(),ke,ke,null),dh=""+x.a("tailrecursion.priority-map");$b.b(Ua(ah),dh);Kf.k(ah,bc,dh,function(a){return lc(a)?xd(ch,a):Vg.d(null,I(["Priority map literal expects a map for its elements."],0))});Gf.a(0);function eh(a,b,c,d,e,g,h,l){this.j=a;this.state=b;this.prev=d;this.Ha=l;this.q=98306;this.l=2147647488}f=eh.prototype;f.xb=function(a,b,c){a=A(this.Ha);for(var d=null,e=0,g=0;;)if(g<e){var h=d.A(null,g),l=M.c(h,0,null),h=M.c(h,1,null);h.k?h.k(l,this,b,c):h.call(null,l,this,b,c);g+=1}else if(a=A(a))nc(a)?(d=wb(a),a=xb(a),l=d,e=K(d),d=l):(d=B(a),l=M.c(d,0,null),h=M.c(d,1,null),h.k?h.k(l,this,b,c):h.call(null,l,this,b,c),a=G(a),d=null,e=0),g=0;else return null};
f.wb=function(a,b,c){return this.Ha=bc.c(this.Ha,b,c)};f.Jb=function(a,b){return Hf(this,b.a?b.a(this.state):b.call(null,this.state))};f.Kb=function(a,b,c){return Hf(this,b.b?b.b(this.state,c):b.call(null,this.state,c))};f.Lb=function(a,b,c,d){return Hf(this,b.c?b.c(this.state,c,d):b.call(null,this.state,c,d))};f.Mb=function(a,b,c,d,e){return Hf(this,fc.o(b,this.state,c,d,e))};f.Hb=function(a,b){var c=this.state;this.state=b;null!=this.Ha&&ob(this,c,b);return b};f.Eb=function(){return this.state};
f.D=function(){return this.j};f.t=function(a,b){return uf.d(b,I(["#\x3cCell: ",Bf.d(I([this.state],0)),"\x3e"],0))};var fh=oa(window.Node),gh=oa(fh)?function(a){return a instanceof Node}:function(a){try{return a.nodeType}catch(b){if(b instanceof Error)return null;if(v)throw b;return null}},hh=oa(fh)?mc:function(a){try{return mc(a)}catch(b){if(b instanceof Error)return null;if(v)throw b;return null}},ih=oa(fh)?rc:function(a){try{return rc(a)}catch(b){if(b instanceof Error)return null;if(v)throw b;return null}},jh=function(){function a(a,b){return window.setTimeout(a,b)}function b(a){return c.b(a,0)}var c=null,c=
function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}(),lh=function kh(b){return wd.b(function(b){var d;d=ih.a?ih.a(b):ih.call(null,b);d=q(d)?d:hh.a?hh.a(b):hh.call(null,b);return q(d)?kh(b):new O(null,1,5,P,[b],null)},b)};
function mh(a,b){return a instanceof Element?jh.a(function d(){return q(document.documentElement.contains(a))?b.r?b.r():b.call(null):jh.b(d,20)}):b.r?b.r():b.call(null)}
function nh(a){var b=M.c(a,0,null),c=Cc(a),d=kd.b(Nc,B),e=function(a){return function(b){return od.b(Td,jf(a,yd.b(2,b)))}}(d,a,b,c,a),d=function(a){return function(b){return wd.b(jd,sd(a,yd.k(2,2,Sd,b)))}}(d,e,a,b,c,a);return lc(b)?new O(null,2,5,P,[b,lh(c)],null):b instanceof N?new O(null,2,5,P,[xd(ke,e(a)),lh(d(a))],null):v?new O(null,2,5,P,[ke,lh(a)],null):null}
function oh(a,b){function c(a,b){var c;c=Pc(b);var d;a:{for(d=c;;){var e=G(d);if(null!=e)d=e;else{d=B(d);break a}}d=void 0}c=Cb.b("\x3d",d)?c.slice(0,-1):c;d=c.substr(0,3);return Qc.b(Oc(b),Cb.b(a,d)?c.substr(3):c)}for(var d=ld.b(c,"do-"),e=ld.b(c,"on-"),g=Gf.a(ke),h=Gf.a(ke),l=function(){return function(a,b){return Sg.b(" ",xd(gf(Ug.b(a,/ /)),Ug.b(b,/ /)))}}(c,d,e,g,h),m=A(b),n=null,p=0,r=0;;)if(r<p){var t=n.A(null,r),w=M.c(t,0,null),t=M.c(t,1,null);q(Cb.b(pa(t),eh)?t:null)?Kf.k(g,bc,d.a?d.a(w):
d.call(null,w),t):dc(t)?Kf.k(h,bc,e.a?e.a(w):e.call(null,w),t):v&&(ph.c?ph.c(a,d.a?d.a(w):d.call(null,w),t):ph.call(null,a,d.a?d.a(w):d.call(null,w),t));r+=1}else if(m=A(m))nc(m)?(p=wb(m),m=xb(m),n=p,p=K(p)):(p=B(m),n=M.c(p,0,null),p=M.c(p,1,null),q(Cb.b(pa(p),eh)?p:null)?Kf.k(g,bc,d.a?d.a(n):d.call(null,n),p):dc(p)?Kf.k(h,bc,e.a?e.a(n):e.call(null,n),p):v&&(ph.c?ph.c(a,d.a?d.a(n):d.call(null,n),p):ph.call(null,a,d.a?d.a(n):d.call(null,n),p)),m=G(m),n=null,p=0),r=0;else break;A(Ua(g))&&setTimeout(function(b,
c,d,e,g,h){return function(){for(var l=A(Ua(e)),m=null,n=0,p=0;;)if(p<n){var r=m.A(null,p),t=M.c(r,0,null),w=M.c(r,1,null);ph.c?ph.c(a,t,Ua(w)):ph.call(null,a,t,Ua(w));Lf(w,Nf.r(),function(b,c,d,e,g,h){return function(b,c,d,e){return ph.c?ph.c(a,h,e):ph.call(null,a,h,e)}}(l,m,n,p,r,t,w,b,c,d,e,g,h));p+=1}else{var Nb=A(l);if(Nb){r=Nb;if(nc(r))l=wb(r),p=xb(r),m=l,n=K(l),l=p;else{var df=B(r),t=M.c(df,0,null),w=M.c(df,1,null);ph.c?ph.c(a,t,Ua(w)):ph.call(null,a,t,Ua(w));Lf(w,Nf.r(),function(b,c,d,e,g,
h){return function(b,c,d,e){return ph.c?ph.c(a,h,e):ph.call(null,a,h,e)}}(l,m,n,p,df,t,w,r,Nb,b,c,d,e,g,h));l=G(r);m=null;n=0}p=0}else return null}}}(c,d,e,g,h,l),0);A(Ua(h))&&setTimeout(function(b,c,d,e,g){return function(){for(var b=A(Ua(g)),c=null,d=0,e=0;;)if(e<d){var h=c.A(null,e),l=M.c(h,0,null),h=M.c(h,1,null);qh.c?qh.c(a,l,h):qh.call(null,a,l,h);e+=1}else if(b=A(b))nc(b)?(c=wb(b),b=xb(b),l=c,d=K(c),c=l):(c=B(b),l=M.c(c,0,null),h=M.c(c,1,null),qh.c?qh.c(a,l,h):qh.call(null,a,l,h),b=G(b),c=
null,d=0),e=0;else return null}}(c,d,e,g,h,l),0);return a}var rh=oa(fh)?function(a,b){return a.appendChild(b)}:function(a,b){try{return a.appendChild(b)}catch(c){if(c instanceof Error)return null;if(v)throw c;return null}};function sh(a,b){jQuery(a).empty();return th.b?th.b(a,kc(b)?b:new O(null,1,5,P,[b],null)):th.call(null,a,kc(b)?b:new O(null,1,5,P,[b],null))}
function th(a,b){var c=M.c(b,0,null),d=Cc(b);if(q(Cb.b(pa(c),eh)?c:null))sh(a,Ua(c)),Lf(c,Nf.r(),function(){return function(b,c,d,e){return sh(a,e)}}(b,c,d,b));else for(var c=A(nd(function(){return function(a){return"string"===typeof a?uh.a?uh.a(a):uh.call(null,a):q(gh.a?gh.a(a):gh.call(null,a))?a:null}}(b,c,d,b),lh(b))),d=null,e=0,g=0;;)if(g<e){var h=d.A(null,g);rh.b?rh.b(a,h):rh.call(null,a,h);g+=1}else if(c=A(c))d=c,nc(d)?(c=wb(d),g=xb(d),d=c,e=K(c),c=g):(c=B(d),rh.b?rh.b(a,c):rh.call(null,a,c),
c=G(d),d=null,e=0),g=0;else break;return a}f=Element.prototype;f.call=function(){function a(a,d){var e=null;1<arguments.length&&(e=I(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){var e=nh(b),g=M.c(e,0,null),e=M.c(e,1,null);q(this.yb)?this.yb(g,e):(oh(this,g),th(this,e));return this}a.m=1;a.h=function(a){B(a);a=E(a);return b(0,a)};a.d=b;return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(ta(b)))};
f.b=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nh(a);a=M.c(b,0,null);b=M.c(b,1,null);q(this.yb)?this.yb(a,b):(oh(this,a),th(this,b));return this}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}();f.K=!0;f.t=function(a,b){return uf.d(b,I(["#\x3cElement: ",this.tagName,"\x3e"],0))};
function vh(a){return function(){function b(a){var b=null;0<arguments.length&&(b=I(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){var c=document.getElementsByTagName(a)[0],g=document.createElement(a);q(c)&&c.parentNode.replaceChild(g,c);return fc.b(g,b)}b.m=0;b.h=function(a){a=A(a);return c(a)};b.d=c;return b}()}
function wh(a){return function(){function b(a){var b=null;0<arguments.length&&(b=I(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return fc.b(document.createElement(a),b)}b.m=0;b.h=function(a){a=A(a);return c(a)};b.d=c;return b}()}
var xh=vh("body"),yh=vh("head"),zh=vh("html"),Ah=wh("a"),Bh=wh("aside"),U=wh("b"),Ch=wh("center"),V=wh("code"),Dh=wh("div"),Eh=wh("h1"),Fh=wh("h2"),Gh=wh("h3"),Hh=wh("i"),W=wh("li"),Ih=wh("link"),X=wh("p"),Jh=wh("pre"),Kh=wh("script"),Lh=wh("section"),Mh=wh("table"),Nh=wh("td"),Oh=wh("th"),Ph=wh("tr"),Y=wh("ul");function uh(a){return document.createTextNode(a)}var Qh=Gf.a(!1),Rh=Gf.a(Sd);function Sh(a){q(Ua(Qh))?a.r?a.r():a.call(null):Kf.c(Rh,Yb,a)}
function Th(){return setTimeout(function(){jQuery("body").on("submit",function(a){return a.preventDefault()});Hf(Qh,!0);for(var a=A(Ua(Rh)),b=null,c=0,d=0;;)if(d<c){var e=b.A(null,d);e.r?e.r():e.call(null);d+=1}else if(a=A(a))b=a,nc(b)?(a=wb(b),c=xb(b),b=a,e=K(a),a=c,c=e):(e=B(b),e.r?e.r():e.call(null),a=G(b),b=null,c=0),d=0;else return null},0)}
var Uh=function(){function a(a,b){return a.val(""+x.a(b))}function b(a){return a.val()}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}(),Vh=function(){function a(a,b){return a.prop("checked",sc(b))}function b(a){return a.is(":checked")}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.b=a;return c}(),ph=function(){var a=Gf.a(ke),b=Gf.a(ke),c=Gf.a(ke),d=Gf.a(ke),e=$b.c(new ha(null,1,[Eb,Rg],null),tg,Jf());return new fg("do!",function(){return function(a,b){return b}}(a,b,c,d,e),Rg,e,a,b,c,d)}();gg(ph,Rg,function(a,b,c){return ph.c?ph.c(a,Og,new le([b,c])):ph.call(null,a,Og,new le([b,c]))});
gg(ph,Mg,function(){function a(a,d,e){var g=null;2<arguments.length&&(g=I(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,0,g)}function b(a,b,e){a=jQuery(a);return fc.c(Cb.b("checkbox",a.attr("type"))?Vh:Uh,a,e)}a.m=2;a.h=function(a){var d=B(a);a=G(a);B(a);a=E(a);return b(d,0,a)};a.d=b;return a}());
gg(ph,Og,function(a,b,c){a=jQuery(a);c=A(c);b=null;for(var d=0,e=0;;)if(e<d){var g=b.A(null,e),h=M.c(g,0,null),g=M.c(g,1,null),h=Pc(h);Cb.b(!1,g)?a.removeAttr(h):a.attr(h,Cb.b(!0,g)?h:g);e+=1}else if(c=A(c))nc(c)?(h=wb(c),c=xb(c),b=h,d=h=K(h)):(b=B(c),h=M.c(b,0,null),g=M.c(b,1,null),b=Pc(h),Cb.b(!1,g)?a.removeAttr(b):a.attr(b,Cb.b(!0,g)?b:g),c=G(c),b=null,d=0),e=0;else return null});
gg(ph,rg,function(a,b,c){a=jQuery(a);b=function(){return function(a){var b;a:{var c=td.a(!0);b=qb(ke);a=A(a);for(c=A(c);;)if(a&&c)b=ed.c(b,B(a),B(c)),a=G(a),c=G(c);else{b=sb(b);break a}b=void 0}return b}}(a);c=lc(c)?c:b("string"===typeof c?c.split(/\s+/):A(c));c=A(c);for(var d=null,e=0,g=0;;)if(g<e){var h=d.A(null,g);b=M.c(h,0,null);h=M.c(h,1,null);a.toggleClass(Pc(b),sc(h));g+=1}else if(c=A(c))nc(c)?(d=wb(c),c=xb(c),b=d,e=K(d),d=b):(d=B(c),b=M.c(d,0,null),h=M.c(d,1,null),a.toggleClass(Pc(b),sc(h)),
c=G(c),d=null,e=0),g=0;else return null});gg(ph,Bg,function(a,b,c){a=jQuery(a);c=A(c);for(var d=null,e=0,g=0;;)if(g<e){var h=d.A(null,g);b=M.c(h,0,null);h=M.c(h,1,null);a.css(Pc(b),""+x.a(h));g+=1}else if(c=A(c))nc(c)?(d=wb(c),c=xb(c),b=d,e=K(d),d=b):(d=B(c),b=M.c(d,0,null),h=M.c(d,1,null),a.css(Pc(b),""+x.a(h)),c=G(c),d=null,e=0),g=0;else return null});gg(ph,Ag,function(a,b,c){return jQuery(a).toggle(sc(c))});gg(ph,Pg,function(a,b,c){return q(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});
gg(ph,sg,function(a,b,c){return q(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});gg(ph,wg,function(a,b,c){return setTimeout(function(){return q(c)?jQuery(a).focus():jQuery(a).focusout()},0)});gg(ph,Ng,function(a){return jQuery(a).select()});gg(ph,og,function(a,b,c){return q(c)?(ph.c?ph.c(a,wg,c):ph.call(null,a,wg,c),ph.c?ph.c(a,Ng,c):ph.call(null,a,Ng,c)):null});gg(ph,kg,function(a,b,c){return jQuery(a).text(""+x.a(c))});gg(ph,jg,function(a,b,c){return jQuery(a).html(c)});
gg(ph,pg,function(a,b,c){return q(c)?(b=jQuery("body,html"),a=jQuery(a),b.animate(Rf(new ha(null,1,[Jg,a.offset().top],null)))):null});var qh=function(){var a=Gf.a(ke),b=Gf.a(ke),c=Gf.a(ke),d=Gf.a(ke),e=$b.c(new ha(null,1,[Eb,Rg],null),tg,Jf());return new fg("on!",function(){return function(a,b){return b}}(a,b,c,d,e),Rg,e,a,b,c,d)}();gg(qh,Rg,function(a,b,c){return mh(a,function(){return jQuery(a).on(Pc(b),c)})});function Wh(a){var b=a.href;if(q(b)){var c=""+x.a("___tailrecursion_hoplon_reload___\x3d")+x.a((new Date).getTime());a=a.ownerNode;if(0>b.indexOf("?"))b=""+x.a(b)+"?"+x.a(c);else if(0>b.indexOf("___tailrecursion_hoplon_reload___\x3d"))b=""+x.a(b)+"\x26"+x.a(c);else if(v){var d=sf(""+x.a("___tailrecursion_hoplon_reload___\x3d")+"\\d+");if("string"===typeof d)b=b.replace(RegExp(String(d).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);else if(q(d.hasOwnProperty("source")))b=
b.replace(RegExp(d.source,"g"),c);else{if(v)throw"Invalid match arg: "+x.a(d);b=null}}else b=null;return a.href=b}return null}
function Xh(a,b){var c=Gf.a(null),d=new ha(null,3,[Dg,a,Fg,"HEAD",Gg,"text"],null),e=function(){return function(a){return Cb.b("true",a.getResponseHeader("X-Dev-Mode"))}}(c,d),g=function(){return function(a,b){return jQuery.ajax(Rf(bc.c(a,zg,b)))}}(c,d,e);(function(a,c,d,e,g){return function(){function r(a){var b=null;0<arguments.length&&(b=I(Array.prototype.slice.call(arguments,0),0));return t.call(this,b)}function t(t){var z=M.c(t,0,null),C=M.c(t,1,null),D=M.c(t,2,null);q(D)&&Hf(a,g(D));return oa(D)||
d(D)?setTimeout(function(a,b,c,d,e,g,h,l){return function(){return l(g,r)}}(t,z,C,D,a,c,d,e,g),b):null}r.m=0;r.h=function(a){a=A(a);return t(a)};r.d=t;return r}()})(c,d,e,g,function(){return function(a){return Date.parse(a.getResponseHeader("Last-Modified"))}}(c,d,e,g)).call(null);return c}function Yh(a,b,c){return Lf(Xh(a,q(b)?b:100),null,function(a,b,g,h){return q(q(g)?gd.b(g,h):g)?c.r?c.r():c.call(null):null})}
var Zh=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=M.c(a,0,null);return Yh(""+x.a("c6f4dce0-0384-11e4-9191-0800200c9a66")+".js",b,function(){return function(){return window.location.reload()}}(a,b))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),$h=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=
M.c(a,0,null);return function(a,b){return function l(){var c=document.styleSheets,d=of.b(0,c.length),p=nd(function(){return function(a){return a.href}}(c,d,a,b),function(){return function(a,b,c,d){return function Nb(e){return new Rc(null,function(a){return function(){for(;;){var b=A(e);if(b){if(nc(b)){var c=wb(b),d=K(c),g=Vc(d);a:{for(var l=0;;)if(l<d){var m=y.b(c,l);g.add(a[m]);l+=1}else{c=!0;break a}c=void 0}return c?Yc(g.O(),Nb(xb(b))):Yc(g.O(),null)}g=B(b);return J(a[g],Nb(E(b)))}return null}}}(a,
b,c,d),null,null)}}(c,d,a,b)(d)}());if(oa(A(p)))return setTimeout(l,q(b)?b:100);for(var r=A(of.b(0,c.length)),t=null,w=0,z=0;;)if(z<w){var C=t.A(null,z),D=c[C];if(q(D)){var H=D,L=H.href;if(q(L)){var T=L;Yh(T,b,function(a,b,c,d,e,g,l,m,n,p){return function(){return Wh(p[n])}}(r,t,w,z,T,L,H,D,C,c,d,p,a,b))}}z+=1}else if(H=A(r)){D=H;if(nc(D))r=wb(D),z=xb(D),t=r,w=K(r),r=z;else{C=B(D);L=c[C];if(q(L)){var T=L,ia=T.href;if(q(ia)){var ra=ia;Yh(ra,b,function(a,b,c,d,e,g,l,m,n,p,r,t){return function(){return Wh(t[n])}}(r,
t,w,z,ra,ia,T,L,C,D,H,c,d,p,a,b))}}r=G(D);t=null;w=0}z=0}else return null}}(a,b).call(null)}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),ai=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=M.c(a,0,null);Zh.d(I([a],0));return $h.d(I([a],0))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}();function bi(a){return Cb.b(K(a),1)&&!Cb.b(B(a).nodeType,1)};var ci=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nh(a);a=M.c(b,0,null);b=M.c(b,1,null);return Lh.b?Lh.b($e.d(I([a,new ha(null,1,[xg,""],null)],0)),Kh.c?Kh.c(Fg,"text/template",b):Kh.call(null,Fg,"text/template",b)):Lh.call(null,$e.d(I([a,new ha(null,1,[xg,""],null)],0)),Kh.c?Kh.c(Fg,"text/template",b):Kh.call(null,Fg,"text/template",b))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),
di=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nh(a);M.c(a,0,null);a=M.c(a,1,null);return bi(a)?oh(Eh.a?Eh.a(B(a)):Eh.call(null,B(a)),new ha(null,1,[rg,"slide-title intro"],null)):a}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),ei=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nh(a);M.c(a,0,
null);a=M.c(a,1,null);return bi(a)?oh(Fh.a?Fh.a(B(a)):Fh.call(null,B(a)),new ha(null,1,[rg,"slide-title chapter"],null)):a}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),fi=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nh(a);M.c(a,0,null);a=M.c(a,1,null);return bi(a)?oh(Gh.a?Gh.a(B(a)):Gh.call(null,B(a)),new ha(null,1,[rg,"slide-title slide"],null)):a}a.m=0;a.h=function(a){a=A(a);return b(a)};
a.d=b;return a}(),Z=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nh(a);a=M.c(b,0,null);var e=rc(a)?fc.b(Xe,a):a,g=$b.b(e,Cg),h=$b.b(e,ng),l=$b.b(e,S);a=$b.b(e,Eg);b=M.c(b,1,null);e=cc.d(e,Eg,I([S,ng,Cg],0));h=q(h)?bc.c(e,ug,h):e;g=q(g)?bc.c(h,yg,g):h;l=q(l)?cd.b(new O(null,1,5,P,[fi.d(I([l],0))],null),b):b;return q(a)?ci.d(I([g,l],0)):Lh.b?Lh.b(g,l):Lh.call(null,g,l)}a.m=0;a.h=function(a){a=A(a);
return b(a)};a.d=b;return a}(),gi=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nh(a);var b=M.c(a,0,null),b=rc(b)?fc.b(Xe,b):b,b=$b.b(b,S);a=M.c(a,1,null);return null==b||oa(A(b))?Z.d(I([ke,a],0)):Z.d(I([ke,cd.b(new O(null,1,5,P,[Z.d(I([ei.d(I([b],0))],0))],null),a)],0))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),hi=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,
0),0));return b.call(this,d)}function b(a){a=nh(a);var b=M.c(a,0,null),b=rc(b)?fc.b(Xe,b):b,b=$b.b(b,S);a=M.c(a,1,null);return null==b||oa(A(b))?Z.d(I([ke,a],0)):Z.d(I([ke,cd.b(new O(null,1,5,P,[di.d(I([b],0))],null),a)],0))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),ii=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nh(a);var b=M.c(a,0,null),e=rc(b)?fc.b(Xe,b):b,g=$b.c(e,Ig,"default"),
h=M.c(a,1,null);Sh(function(a,b,c,d,e,g){return function(){return Reveal.sc(Rf(new ha(null,2,[mg,!0,lg,new O(null,4,5,P,[new ha(null,1,[vg,"reveal.js/plugin/markdown/marked.js"],null),new ha(null,1,[vg,"reveal.js/plugin/markdown/markdown.js"],null),new ha(null,3,[vg,"reveal.js/plugin/highlight/highlight.js",Lg,!0,qg,function(){return function(){return hljs.rc()}}(a,b,c,d,e,g)],null),new ha(null,2,[vg,"reveal.js/plugin/notes/notes.js",Lg,!0],null)],null)],null)))}}(a,b,e,e,g,h));return Dh.o?Dh.o($e.d(I([cc.b(e,
Ig),new ha(null,1,[rg,"reveal"],null)],0)),Ih.k?Ih.k(Qg,"stylesheet",Q,"reveal.js/css/reveal.css"):Ih.call(null,Qg,"stylesheet",Q,"reveal.js/css/reveal.css"),Ih.s?Ih.s(Qg,"stylesheet",Q,"reveal.js/css/theme/"+x.a(g)+".css",Kg,"theme"):Ih.call(null,Qg,"stylesheet",Q,"reveal.js/css/theme/"+x.a(g)+".css",Kg,"theme"),Ih.k?Ih.k(Qg,"stylesheet",Q,"reveal.js/plugin/highlight/github.min.css"):Ih.call(null,Qg,"stylesheet",Q,"reveal.js/plugin/highlight/github.min.css"),Dh.c?Dh.c(rg,"slides",h):Dh.call(null,
rg,"slides",h)):Dh.call(null,$e.d(I([cc.b(e,Ig),new ha(null,1,[rg,"reveal"],null)],0)),Ih.k?Ih.k(Qg,"stylesheet",Q,"reveal.js/css/reveal.css"):Ih.call(null,Qg,"stylesheet",Q,"reveal.js/css/reveal.css"),Ih.s?Ih.s(Qg,"stylesheet",Q,"reveal.js/css/theme/"+x.a(g)+".css",Kg,"theme"):Ih.call(null,Qg,"stylesheet",Q,"reveal.js/css/theme/"+x.a(g)+".css",Kg,"theme"),Ih.k?Ih.k(Qg,"stylesheet",Q,"reveal.js/plugin/highlight/github.min.css"):Ih.call(null,Qg,"stylesheet",Q,"reveal.js/plugin/highlight/github.min.css"),
Dh.c?Dh.c(rg,"slides",h):Dh.call(null,rg,"slides",h))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),ji=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nh(a);a=M.c(b,0,null);b=M.c(b,1,null);return Bh.b?Bh.b($e.d(I([a,new ha(null,1,[rg,"notes"],null)],0)),b):Bh.call(null,$e.d(I([a,new ha(null,1,[rg,"notes"],null)],0)),b)}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),ki=function(){function a(a){var d=
null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nh(a);a=M.c(b,0,null);b=M.c(b,1,null);return Jh.a?Jh.a(V.b?V.b(a,b):V.call(null,a,b)):Jh.call(null,V.b?V.b(a,b):V.call(null,a,b))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}(),li=function(){function a(a){var d=null;0<arguments.length&&(d=I(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nh(a),e=M.c(b,0,null);a=M.c(b,1,null);b=af.d(function(){return function(a,
b){return""+x.a(a)+" "+x.a(b)}}(b,e,a),I([e,new ha(null,1,[rg,"clojure"],null)],0));return ki.d(I([b,a],0))}a.m=0;a.h=function(a){a=A(a);return b(a)};a.d=b;return a}();function mi(){return li.d(I(['(println "Hello, friends!")\n(+ 1 2)\n(first (1 2 3))'],0))};function ni(){return gi.d(I([S,"Collections",Z.d(I([S,"Simple Collections",Y.b?Y.b(W.a?W.a("Immutability"):W.call(null,"Immutability"),W.a?W.a("Heterogeneous"):W.call(null,"Heterogeneous")):Y.call(null,W.a?W.a("Immutability"):W.call(null,"Immutability"),W.a?W.a("Heterogeneous"):W.call(null,"Heterogeneous"))],0)),Z.d(I([S,"Collection types in Clojure",Y.k?Y.k(W.a?W.a("Vectors"):W.call(null,"Vectors"),W.a?W.a("Lists"):W.call(null,"Lists"),W.a?W.a("Maps"):W.call(null,"Maps"),W.a?W.a("Sets"):W.call(null,
"Sets")):Y.call(null,W.a?W.a("Vectors"):W.call(null,"Vectors"),W.a?W.a("Lists"):W.call(null,"Lists"),W.a?W.a("Maps"):W.call(null,"Maps"),W.a?W.a("Sets"):W.call(null,"Sets")),ji.d(I(["Just 4 main collection types cover all of your needs."],0))],0)),Z.d(I([S,"Vectors",Y.c?Y.c(W.a?W.a("Expandable, indexed list"):W.call(null,"Expandable, indexed list"),W.a?W.a("Fast insert and indexed lookup operations"):W.call(null,"Fast insert and indexed lookup operations"),W.a?W.a("Syntax:"):W.call(null,"Syntax:")):
Y.call(null,W.a?W.a("Expandable, indexed list"):W.call(null,"Expandable, indexed list"),W.a?W.a("Fast insert and indexed lookup operations"):W.call(null,"Fast insert and indexed lookup operations"),W.a?W.a("Syntax:"):W.call(null,"Syntax:")),li.d(I(["[1 2 3 4 5 6 7 8 9 10] \n[]"],0)),ji.d(I(["AKA arrays."],0))],0)),Z.d(I([S,"Vectors",li.d(I([rg,"two-cols","(vector? [3 6 9])\n;\x3d\x3e true\n\n(associative? [3 6 9])\n;\x3d\x3e true\n\n(sequential? [3 6 9])\n;\x3d\x3e true\n\n(vector 3 6 9)\n;\x3d\x3e [3 6 9]\n\n(conj [3 6] 9)\n;\x3d\x3e [3 6 9]\n\n(count [3 6 9])\n;\x3d\x3e 3\n\n(nth [3 6 9] 1)\n;\x3d\x3e 6 \n\n(first [3 6 9])\n;\x3d\x3e 3"],
0)),ji.d(I(["Conj does not change the vector - it is immutable.","Predicate functions (asscociative? etc) will start to look familiar"],0))],0)),Z.d(I([S,"Lists",Y.c?Y.c(W.a?W.a("Linked list"):W.call(null,"Linked list"),W.a?W.a("Fast insert and remove (at end) operations"):W.call(null,"Fast insert and remove (at end) operations"),W.a?W.a("Syntax:"):W.call(null,"Syntax:")):Y.call(null,W.a?W.a("Linked list"):W.call(null,"Linked list"),W.a?W.a("Fast insert and remove (at end) operations"):W.call(null,
"Fast insert and remove (at end) operations"),W.a?W.a("Syntax:"):W.call(null,"Syntax:")),li.d(I(["(1 2 3 4 5 6 7 8 9 10) \n()"],0)),ji.d(I(["Linked list literals are not typical, so you probably don't have one in your language","Lisp does, though.","Vectors much more commonly used in Clojure, unlike in Lisps where list is one of the basic building blocks."],0))],0)),Z.d(I([S,"Lists",li.d(I(["(list? (list 1 2 3))\n;\x3d\x3e true\n\n(sequential? (list 1 2 3))\n;\x3d\x3e true\n\n(associative? (list 1 2 3))\n;\x3d\x3e false\n\n(list 1 2 3)\n;\x3d\x3e (1 2 3)\n\n(cons 3 (list 1 2))\n;\x3d\x3e (3 1 2)\n\n(conj (list 1 2) 3)\n;\x3d\x3e (3 1 2)\n\n(count (list 1 2 3))\n;\x3d\x3e 3\n\n(first (list 1 2 3))\n;\x3d\x3e 1\n\n(rest (list 1 2 3))\n;\x3d\x3e (2 3)"],
0)),ji.d(I(["Compare conj to conj with vectors.","Note repeating predictate functions."],0))],0)),Z.d(I([S,"Maps",Y.c?Y.c(W.a?W.a("Associative key-value map"):W.call(null,"Associative key-value map"),W.a?W.a("Fast insert and find operations"):W.call(null,"Fast insert and find operations"),W.a?W.a("Syntax:"):W.call(null,"Syntax:")):Y.call(null,W.a?W.a("Associative key-value map"):W.call(null,"Associative key-value map"),W.a?W.a("Fast insert and find operations"):W.call(null,"Fast insert and find operations"),
W.a?W.a("Syntax:"):W.call(null,"Syntax:")),li.d(I(['{:first-name "Eleanor"\n :last-name "Peacock"}\n{}'],0)),ji.d(I(["AKA hashes, dictionaries, associative arrays.","Useful to have keywords as keys, although not necessary."],0))],0)),Z.d(I([S,"Maps",li.d(I(['(map? {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e true\n\n(get {:first "Eleanor" :last "Peacock"} :first)\n;\x3d\x3e "Eleanor"\n\n(get {:first "Eleanor"} :last :MISS)\n;\x3d\x3e :MISS\n\n(assoc {:first "Eleanor"} :last "Peacock")\n;\x3d\x3e {:first "Eleanor", :last "Peacock"}\n\n(dissoc {:first "Eleanor" :last "Peacock"} :last)\n;\x3d\x3e {:first "Eleanor"}\n\n(merge {:first "Eleanor"} {:last "Peacock"})\n;\x3d\x3e {:first "Eleanor", :last "Peacock"}\n\n(count {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e 2\n\n(keys {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e (:first :last)\n\n(vals {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e ("Eleanor" "Peacock")'],
0)),ji.d(I(["Note the predicate functions."],0))],0)),Z.d(I([S,"Maps",li.d(I(["(:a {:a 1})\n;\x3d\x3e 1\n(:b {:a 1})\n;\x3d\x3e nil\n(:b {:a 1} :MISS)\n;\x3d\x3e :MISS"],0)),ji.d(I(["Keywords are good as map keys because you can use them as a function with a map argument to access the value."],0))],0)),Z.d(I([S,"Sets",Y.c?Y.c(W.a?W.a("No duplicates"):W.call(null,"No duplicates"),W.a?W.a("Fast insert and contains operations"):W.call(null,"Fast insert and contains operations"),W.a?W.a("Syntax:"):W.call(null,
"Syntax:")):Y.call(null,W.a?W.a("No duplicates"):W.call(null,"No duplicates"),W.a?W.a("Fast insert and contains operations"):W.call(null,"Fast insert and contains operations"),W.a?W.a("Syntax:"):W.call(null,"Syntax:")),li.d(I(['#{"Library" "Billiard Room" "Conservatory"}\n#{}'],0))],0)),Z.d(I([S,"Sets",li.d(I(["(set? #{1 2})\n;\x3d\x3e true\n\n(sequential? #{1 2}) \n;\x3d\x3e false \n\n(associative?#{1 2}) \n;\x3d\x3e false\n\n(set [1 2 3])\n;\x3d\x3e #{1 2 3}\n\n(conj #{1 2} 3)\n;\x3d\x3e #{1 2 3}\n\n(count #{1 2 3})\n;\x3d\x3e 3\n\n(disj #{1 2 3} 3) \n;\x3d\x3e #{1 2} \n\n(contains?#{1 2} 1) \n;\x3d\x3e true\n\n(:a #{:a :b})\n;\x3d\x3e :a"],
0)),ji.d(I(["Again, note the familiar predicate functions."],0))],0)),Z.d(I([S,"Who killed Mr. Boddy?",X.a?X.a("Choose and create the proper collection of suspects from the Clue board game. Then use nth to determine who goes third."):X.call(null,"Choose and create the proper collection of suspects from the Clue board game. Then use nth to determine who goes third."),X.a?X.a("Bonus: Invite the third player to play by their first name."):X.call(null,"Bonus: Invite the third player to play by their first name.")],
0)),Z.d(I([S,"Sequences",Y.s?Y.s(W.a?W.a("A logical list abstraction"):W.call(null,"A logical list abstraction"),W.a?W.a("Applies to all collections"):W.call(null,"Applies to all collections"),W.a?W.a("Immutable"):W.call(null,"Immutable"),W.a?W.a("Often lazy"):W.call(null,"Often lazy"),W.a?W.a(V.a?V.a("first, rest"):V.call(null,"first, rest")):W.call(null,V.a?V.a("first, rest"):V.call(null,"first, rest")),W.a?W.a(V.a?V.a("seq"):V.call(null,"seq")):W.call(null,V.a?V.a("seq"):V.call(null,"seq"))):Y.call(null,
W.a?W.a("A logical list abstraction"):W.call(null,"A logical list abstraction"),W.a?W.a("Applies to all collections"):W.call(null,"Applies to all collections"),W.a?W.a("Immutable"):W.call(null,"Immutable"),W.a?W.a("Often lazy"):W.call(null,"Often lazy"),W.a?W.a(V.a?V.a("first, rest"):V.call(null,"first, rest")):W.call(null,V.a?V.a("first, rest"):V.call(null,"first, rest")),W.a?W.a(V.a?V.a("seq"):V.call(null,"seq")):W.call(null,V.a?V.a("seq"):V.call(null,"seq"))),ji.d(I(["Remember those functions that were called on each collection?",
"Those are from an abstraction called sequence, or seq in Clojure.","The sequence abstraction provides a common interface to all of the collection types."],0))],0))],0))};function oi(){return gi.d(I([S,"Flow Control",Z.d(I([S,"Truthiness",li.d(I(["(true? true)\n;\x3d\x3e true\n\n(false? false)\n;\x3d\x3e true\n\n(nil? nil)\n;\x3d\x3e true\n\n(true? 3)\n;\x3d\x3e false\n\n(false? nil)\n;\x3d\x3e false\n\n(true? (\x3d 1 1))\n;\x3d\x3e true"],0))],0)),Z.d(I([S,"cond",li.d(I(['(let [min-age 12]\n  (cond\n    (\x3e\x3d min-age 18) "Adult game"\n    (\x3e\x3d min-age 8) "Family game"\n    (\x3e\x3d min-age 3) "Children\'s game"\n    :else "Toy, not a game"))\n;\x3d\x3e "Family game"'],
0))],0)),Z.d(I([S,"if",li.d(I(['(if (\x3e 3 1)\n    "3 is greater than 1"\n    "3 is not greater than 1")\n;\x3d\x3e "3 is greater than 1"'],0))],0)),Z.d(I([S,"loop",li.d(I(["(loop [x 21]\n  (when (\x3e x 1)\n    (println x)\n    (recur (- x 3))))"],0))],0)),Z.d(I([S,"doseq",li.d(I(["(doseq [x [1 2 3]\n        y [1 2 3]]\n  (println (* x y)))"],0)),ji.d(I(["For side effects"],0))],0))],0))};function pi(){hi.d(I([S,"The Simplicity of Clojure",Dh.a?Dh.a("Clinton N. Dreisbach"):Dh.call(null,"Clinton N. Dreisbach"),Dh.a?Dh.a("Bridget Hillyer"):Dh.call(null,"Bridget Hillyer"),Dh.a?Dh.a("OSCON 2014"):Dh.call(null,"OSCON 2014")],0));return gi.d(I([S,"Overview",Z.d(I([S,"Agenda"],0)),Z.d(I([S,"Why Clojure?",Y.c?Y.c(W.a?W.a("Simple"):W.call(null,"Simple"),W.a?W.a("Immutable"):W.call(null,"Immutable"),W.a?W.a("Robust"):W.call(null,"Robust")):Y.call(null,W.a?W.a("Simple"):W.call(null,"Simple"),
W.a?W.a("Immutable"):W.call(null,"Immutable"),W.a?W.a("Robust"):W.call(null,"Robust"))],0)),Z.d(I([S,"Light Table Walkthrough"],0)),Z.d(I([S,"Syntax - Literals",Y.V?Y.V(W.a?W.a(V.a?V.a("1 2.7 22/7"):V.call(null,"1 2.7 22/7")):W.call(null,V.a?V.a("1 2.7 22/7"):V.call(null,"1 2.7 22/7")),W.a?W.a(V.a?V.a("false true"):V.call(null,"false true")):W.call(null,V.a?V.a("false true"):V.call(null,"false true")),W.a?W.a(V.a?V.a("\\z"):V.call(null,"\\z")):W.call(null,V.a?V.a("\\z"):V.call(null,"\\z")),W.a?W.a(V.a?
V.a('"Monopoly"'):V.call(null,'"Monopoly"')):W.call(null,V.a?V.a('"Monopoly"'):V.call(null,'"Monopoly"')),W.a?W.a(V.a?V.a("nil"):V.call(null,"nil")):W.call(null,V.a?V.a("nil"):V.call(null,"nil")),W.a?W.a(V.a?V.a("board"):V.call(null,"board")):W.call(null,V.a?V.a("board"):V.call(null,"board")),W.a?W.a(V.a?V.a(":player1"):V.call(null,":player1")):W.call(null,V.a?V.a(":player1"):V.call(null,":player1")),W.a?W.a(V.a?V.a('#"[0-9+]"'):V.call(null,'#"[0-9+]"')):W.call(null,V.a?V.a('#"[0-9+]"'):V.call(null,
'#"[0-9+]"'))):Y.call(null,W.a?W.a(V.a?V.a("1 2.7 22/7"):V.call(null,"1 2.7 22/7")):W.call(null,V.a?V.a("1 2.7 22/7"):V.call(null,"1 2.7 22/7")),W.a?W.a(V.a?V.a("false true"):V.call(null,"false true")):W.call(null,V.a?V.a("false true"):V.call(null,"false true")),W.a?W.a(V.a?V.a("\\z"):V.call(null,"\\z")):W.call(null,V.a?V.a("\\z"):V.call(null,"\\z")),W.a?W.a(V.a?V.a('"Monopoly"'):V.call(null,'"Monopoly"')):W.call(null,V.a?V.a('"Monopoly"'):V.call(null,'"Monopoly"')),W.a?W.a(V.a?V.a("nil"):V.call(null,
"nil")):W.call(null,V.a?V.a("nil"):V.call(null,"nil")),W.a?W.a(V.a?V.a("board"):V.call(null,"board")):W.call(null,V.a?V.a("board"):V.call(null,"board")),W.a?W.a(V.a?V.a(":player1"):V.call(null,":player1")):W.call(null,V.a?V.a(":player1"):V.call(null,":player1")),W.a?W.a(V.a?V.a('#"[0-9+]"'):V.call(null,'#"[0-9+]"')):W.call(null,V.a?V.a('#"[0-9+]"'):V.call(null,'#"[0-9+]"')))],0)),Z.d(I([S,"Functions",mi()],0))],0))};function qi(){return gi.d(I([S,"Polymorphism",Z.d(I([S,"Using Control Flow"],0)),Z.d(I([S,"Monopoly locations",li.d(I(['(def park-place {:name "Park Place" :base-rent 35 :type :property :color-count 2})\n(def electric-company {:name "Electric Company" :type :utility})\n(def short-line {:name "Short Line" :type :railroad})'],0))],0)),Z.d(I([S,"Calculating Monopoly rent",li.d(I(["(defn roll-dice []\n  (+ 2 (rand-int 6) (rand-int 6)))\n\n(defn calculate-rent\n  ([location num-like-locations]\n     (calculate-rent location num-like-locations (roll-dice)))\n  ([location num-like-locations die-roll]\n     (let [type (:type location)]\n       (cond\n        (\x3d type :property)\n        (if (\x3d (inc num-like-locations) (:color-count location))\n          (* (:base-rent location) 2)\n          (:base-rent location))\n\n        (\x3d type :utility)\n        (if (zero? num-like-locations)\n          (* 4 die-roll)\n          (* 10 die-roll))\n\n        (\x3d type :railroad)\n        (* 25 (Math/pow 2 num-like-locations))))))"],
0))],0)),Z.d(I([S,"Using multimethods",li.d(I(["(defmulti calculate-rent\n  (fn [location \x26 _]) (:type location))\n\n(defmethod calculate-rent :property\n  [location num-like-locations _]\n  (if (\x3d (inc num-like-locations) (:color-count location))\n    (* base-rent 2)\n    base-rent))\n\n(defmethod calculate-rent :utility\n  [_ num-like-locations die-roll]\n  (if (zero? num-like-locations)\n    (* 4 die-roll)\n    (* 10 die-roll)))\n\n(defmethod calculate-rent :railroad\n  [_ num-like-locations _]\n  (* 25 (Math/pow 2 num-like-locations)))\n\n(defmethod calculate-rent :default\n  [\x26 _]\n  0)"],
0))],0)),Z.d(I([S,"Protocols and records",Y.o?Y.o(W.a?W.a("Records are associative, like maps"):W.call(null,"Records are associative, like maps"),W.a?W.a("They actually create Java classes"):W.call(null,"They actually create Java classes"),W.a?W.a("Protocols are similar to interfaces"):W.call(null,"Protocols are similar to interfaces"),W.a?W.a("And create Java interfaces"):W.call(null,"And create Java interfaces"),W.a?W.a("But can be applied to any current or future type"):W.call(null,"But can be applied to any current or future type")):
Y.call(null,W.a?W.a("Records are associative, like maps"):W.call(null,"Records are associative, like maps"),W.a?W.a("They actually create Java classes"):W.call(null,"They actually create Java classes"),W.a?W.a("Protocols are similar to interfaces"):W.call(null,"Protocols are similar to interfaces"),W.a?W.a("And create Java interfaces"):W.call(null,"And create Java interfaces"),W.a?W.a("But can be applied to any current or future type"):W.call(null,"But can be applied to any current or future type"))],
0)),Z.d(I([S,"Rentable protocol",li.d(I(['(defprotocol Rentable\n  (calculate-rent [this num-like-locations] [this num-like-locations die-roll]\n    "Calculates the rent on this location.")\n  (readable-rent [this]))'],0))],0)),Z.d(I([S,"Property",li.d(I(['(defrecord Property [name base-rent num-in-group]\n  Rentable\n  (calculate-rent [_ num-like-locations]\n    (if (\x3d (inc num-like-locations) num-in-group)\n      (* base-rent 2)\n      base-rent))\n  (calculate-rent [property num-like-locations _]\n    (calculate-rent property num-like-locations))\n  (readable-rent [_]\n    (str "$" base-rent ", $" (* 2 base-rent) " if monopoly")))'],
0))],0)),Z.d(I([S,"Utility",li.d(I(['(defrecord Utility [name]\n  Rentable\n  (calculate-rent [utility num-like-locations]\n    (calculate-rent utility num-like-locations (+ (rand-int 6) (rand-int 6) 2)))\n  (calculate-rent [_ num-like-locations die-roll]\n    (if (zero? num-like-locations)\n      (* 4 die-roll)\n      (* 10 die-roll)))\n  (readable-rent [_]\n    (str "$4 * dice roll, $10 * dice roll if you own both")))'],0))],0)),Z.d(I([S,"Railroad",li.d(I(['(defrecord Railroad [name]\n  Rentable\n  (calculate-rent [_ num-like-locations]\n    (* 25\n       (Math/pow 2 num-like-locations)))\n  (calculate-rent [railroad num-like-locations _]\n    (calculate-rent railroad num-like-locations))\n  (readable-rent [_]\n    (str "$25 if you own 1, $50 if 2, $100 if 3, $200 if 4")))'],
0))],0)),Z.d(I([S,"Some locations",li.d(I(['(def park-place (-\x3eProperty "Park Place" 35 2))\n(def electric-company (-\x3eUtility "Electric Company"))\n(def short-line (-\x3eRailroad "Short Line"))\n\n(calculate-rent electric-company 0 7)\n;\x3d\x3e 28\n\n(readable-rent park-place)\n;\x3d\x3e "$35, $70 if monopoly"'],0))],0)),Z.d(I([S,"Chess pieces",X.o?X.o("Make a protocol Piece that has two methods: ",V.a?V.a("possible-moves"):V.call(null,"possible-moves")," and ",V.a?V.a("can-move"):V.call(null,
"can-move"),"?"):X.call(null,"Make a protocol Piece that has two methods: ",V.a?V.a("possible-moves"):V.call(null,"possible-moves")," and ",V.a?V.a("can-move"):V.call(null,"can-move"),"?"),X.a?X.a("Then make records for Kings and Knights and implement the Piece protocol."):X.call(null,"Then make records for Kings and Knights and implement the Piece protocol."),X.a?X.a("Kings and Knights should know their current location."):X.call(null,"Kings and Knights should know their current location."),X.a?
X.a("Chess locations are on a board with one axis being a-h and the other being 1-8."):X.call(null,"Chess locations are on a board with one axis being a-h and the other being 1-8.")],0))],0))};function ri(){return gi.d(I([S,"Simple Examples",Z.d(I([S,"core.matrix",Y.o?Y.o(W.a?W.a("Want logic programming? core.logic"):W.call(null,"Want logic programming? core.logic"),W.a?W.a("Want CSP? core.async"):W.call(null,"Want CSP? core.async"),W.a?W.a("Want numerical computing? core.matrix"):W.call(null,"Want numerical computing? core.matrix"),W.a?W.a(Ah.c?Ah.c(Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","Source Code"):Ah.call(null,Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj",
"Source Code")):W.call(null,Ah.c?Ah.c(Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","Source Code"):Ah.call(null,Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","Source Code")),W.a?W.a(Ah.c?Ah.c(Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk"):Ah.call(null,Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk")):W.call(null,Ah.c?Ah.c(Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo",
"Clojure/conj 2013 talk"):Ah.call(null,Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk"))):Y.call(null,W.a?W.a("Want logic programming? core.logic"):W.call(null,"Want logic programming? core.logic"),W.a?W.a("Want CSP? core.async"):W.call(null,"Want CSP? core.async"),W.a?W.a("Want numerical computing? core.matrix"):W.call(null,"Want numerical computing? core.matrix"),W.a?W.a(Ah.c?Ah.c(Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj",
"Source Code"):Ah.call(null,Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","Source Code")):W.call(null,Ah.c?Ah.c(Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","Source Code"):Ah.call(null,Q,"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","Source Code")),W.a?W.a(Ah.c?Ah.c(Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk"):Ah.call(null,
Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk")):W.call(null,Ah.c?Ah.c(Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk"):Ah.call(null,Q,"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo","Clojure/conj 2013 talk")))],0)),Z.d(I([S,"http-kit",Y.a?Y.a(W.a?W.a(Ah.c?Ah.c(Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code"):Ah.call(null,Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118",
"Source Code")):W.call(null,Ah.c?Ah.c(Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code"):Ah.call(null,Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code"))):Y.call(null,W.a?W.a(Ah.c?Ah.c(Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code"):Ah.call(null,Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code")):W.call(null,
Ah.c?Ah.c(Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code"):Ah.call(null,Q,"https://github.com/http-kit/http-kit/blob/master/src/org/httpkit/client.clj#L118","Source Code")))],0))],0))};function si(){return gi.d(I([S,"Functions",Z.d(I([S,"Simple Functions",mi()],0)),Z.d(I([S,"Assignment with let",li.d(I(['(let [x 4]\n  (* x 3))\n;;\x3d\x3e 12\n\n(let [x 1\n      y 2]\n  (println x " + " y " \x3d " (+ x y)))'],0))],0)),Z.d(I([S,"Define with defn",li.d(I(["(def triple \n  (fn \n    [x]\n    (* x 3)))\n\n(defn triple\n  [x]\n  (* x 3))"],0))],0)),Z.d(I([S,"Family Game Night",X.c?X.c("Write a function that takes a board game (using the maps ","we previously used) and the age of your youngest player ",
"and lets you know if that game can be played by your family."):X.call(null,"Write a function that takes a board game (using the maps ","we previously used) and the age of your youngest player ","and lets you know if that game can be played by your family.")],0)),Z.d(I([S,"Higher order functions - map",li.d(I(["(map inc (range 1 10))    \n;;\x3d\x3e (2 3 4 5 6 7 8 9 10)"],0))],0)),Z.d(I([S,"Higher order functions - reduce",li.d(I(["(reduce + (range 1 10))\n;;\x3d\x3e 45"],0))],0)),Z.d(I([S,"Higher order functions - implementing max with reduce",
li.d(I(["(defn my-max\n  [coll]\n  (reduce (fn [current proposed]\n            (if (\x3e proposed current)\n              proposed\n              current)) coll))"],0))],0)),Z.d(I([S,"Higher order functions - filter and function literals",li.d(I(['(def game-pieces\n  [{:color "red" :type "die" :sides 6}\n   {:color "blue" :type "meeple"}\n   {:color "white" :type "die" :sides 8}])\n\n(def dice (filter #(\x3d (:type %) "die") game-pieces))\n;\x3d\x3e ({:color "red", :type "die", :sides 6}\n;    {:color "white", :type "die", :sides 8})'],
0))],0)),Z.d(I([S,"Family Game Night Redux",X.k?X.k("Write a function that takes two collections: your set of board ","games and the ages of all people playing. Find all games that ","your group can play, considering both ages and the total number ","of people."):X.call(null,"Write a function that takes two collections: your set of board ","games and the ages of all people playing. Find all games that ","your group can play, considering both ages and the total number ","of people.")],0)),Z.d(I([S,
"Functional programming",Y.k?Y.k(W.a?W.a("Functions as primary units of computation"):W.call(null,"Functions as primary units of computation"),W.a?W.a("Avoiding state"):W.call(null,"Avoiding state"),W.a?W.a("Preferring immutability"):W.call(null,"Preferring immutability"),W.b?W.b("Repeatable functions lacking side effects - ",Hh.a?Hh.a("idempotent under sequential composition"):Hh.call(null,"idempotent under sequential composition")):W.call(null,"Repeatable functions lacking side effects - ",Hh.a?
Hh.a("idempotent under sequential composition"):Hh.call(null,"idempotent under sequential composition"))):Y.call(null,W.a?W.a("Functions as primary units of computation"):W.call(null,"Functions as primary units of computation"),W.a?W.a("Avoiding state"):W.call(null,"Avoiding state"),W.a?W.a("Preferring immutability"):W.call(null,"Preferring immutability"),W.b?W.b("Repeatable functions lacking side effects - ",Hh.a?Hh.a("idempotent under sequential composition"):Hh.call(null,"idempotent under sequential composition")):
W.call(null,"Repeatable functions lacking side effects - ",Hh.a?Hh.a("idempotent under sequential composition"):Hh.call(null,"idempotent under sequential composition")))],0)),Z.d(I([S,"Side effects",X.b?X.b("A side effect is any change in state or interaction that happens ","with the outside world during the evaluation of a function."):X.call(null,"A side effect is any change in state or interaction that happens ","with the outside world during the evaluation of a function."),Y.b?Y.b(W.a?W.a("updating a global variable"):
W.call(null,"updating a global variable"),W.a?W.a("input and output"):W.call(null,"input and output")):Y.call(null,W.a?W.a("updating a global variable"):W.call(null,"updating a global variable"),W.a?W.a("input and output"):W.call(null,"input and output"))],0)),Z.d(I([S,"How to deal with side effects",Y.k?Y.k(W.a?W.a("Put them at the edges of your code"):W.call(null,"Put them at the edges of your code"),W.a?W.a("Eliminate them from the majority of your functions"):W.call(null,"Eliminate them from the majority of your functions"),
W.a?W.a("Use features like atoms and refs, which allow state to be updated through applying pure functions"):W.call(null,"Use features like atoms and refs, which allow state to be updated through applying pure functions"),W.a?W.a("Remember that most sequences are lazy!"):W.call(null,"Remember that most sequences are lazy!")):Y.call(null,W.a?W.a("Put them at the edges of your code"):W.call(null,"Put them at the edges of your code"),W.a?W.a("Eliminate them from the majority of your functions"):W.call(null,
"Eliminate them from the majority of your functions"),W.a?W.a("Use features like atoms and refs, which allow state to be updated through applying pure functions"):W.call(null,"Use features like atoms and refs, which allow state to be updated through applying pure functions"),W.a?W.a("Remember that most sequences are lazy!"):W.call(null,"Remember that most sequences are lazy!"))],0)),Z.d(I([S,"Side effect in a map fn",li.d(I(["(def squares (map (fn [x] (println x) (* x x)) (range 1 100)))\n(first squares)\n;; ...prints out 1 through 32...\n;\x3d\x3e 1"],
0))],0))],0))};function ti(a){return Mh.b?Mh.b(fc.b(Ph,od.b(Oh,B(a))),function(){return function c(a){return new Rc(null,function(){for(;;){var e=A(a);if(e){if(nc(e)){var g=wb(e),h=K(g),l=Vc(h);a:{for(var m=0;;)if(m<h){var n=y.b(g,m),n=fc.b(Ph,od.b(kd.b(Nh,V),n));l.add(n);m+=1}else{g=!0;break a}g=void 0}return g?Yc(l.O(),c(xb(e))):Yc(l.O(),null)}l=B(e);return J(fc.b(Ph,od.b(kd.b(Nh,V),l)),c(E(e)))}return null}},null,null)}(E(a))}()):Mh.call(null,fc.b(Ph,od.b(Oh,B(a))),function(){return function c(a){return new Rc(null,
function(){for(;;){var e=A(a);if(e){if(nc(e)){var g=wb(e),h=K(g),l=Vc(h);a:{for(var m=0;;)if(m<h){var n=y.b(g,m),n=fc.b(Ph,od.b(kd.b(Nh,V),n));l.add(n);m+=1}else{g=!0;break a}g=void 0}return g?Yc(l.O(),c(xb(e))):Yc(l.O(),null)}l=B(e);return J(fc.b(Ph,od.b(kd.b(Nh,V),l)),c(E(e)))}return null}},null,null)}(E(a))}())}
function ui(){return gi.d(I([S,"Sequences",Z.d(I([S,"Simple Sequences",Y.o?Y.o(W.a?W.a("Logical list abstraction"):W.call(null,"Logical list abstraction"),W.a?W.a("Applies to all collections"):W.call(null,"Applies to all collections"),W.b?W.b(V.a?V.a("first, rest"):V.call(null,"first, rest")," - first and rest of the logical list"):W.call(null,V.a?V.a("first, rest"):V.call(null,"first, rest")," - first and rest of the logical list"),W.b?W.b(V.a?V.a("seq"):V.call(null,"seq")," - either a sequence with values, or nil"):
W.call(null,V.a?V.a("seq"):V.call(null,"seq")," - either a sequence with values, or nil"),W.a?W.a("Can be lazy"):W.call(null,"Can be lazy")):Y.call(null,W.a?W.a("Logical list abstraction"):W.call(null,"Logical list abstraction"),W.a?W.a("Applies to all collections"):W.call(null,"Applies to all collections"),W.b?W.b(V.a?V.a("first, rest"):V.call(null,"first, rest")," - first and rest of the logical list"):W.call(null,V.a?V.a("first, rest"):V.call(null,"first, rest")," - first and rest of the logical list"),
W.b?W.b(V.a?V.a("seq"):V.call(null,"seq")," - either a sequence with values, or nil"):W.call(null,V.a?V.a("seq"):V.call(null,"seq")," - either a sequence with values, or nil"),W.a?W.a("Can be lazy"):W.call(null,"Can be lazy")),ji.d(I(["Remember in the collections how we saw a number of the same ","functions on each collection? That is because we have a ","sequence (or seq) abstraction that gives an interface to "," all of the collection types and other types of sequences ","(e.g. strings)."],0))],
0)),Z.d(I([S,"first and rest",Ch.a?Ch.a(ti(new O(null,5,5,P,[new O(null,3,5,P,["list","first","rest"],null),new O(null,3,5,P,["(1 2 3)","1","(2 3)"],null),new O(null,3,5,P,["(2 3)","2","(3)"],null),new O(null,3,5,P,["(3)","3","()"],null),new O(null,3,5,P,["()","nil","()"],null)],null))):Ch.call(null,ti(new O(null,5,5,P,[new O(null,3,5,P,["list","first","rest"],null),new O(null,3,5,P,["(1 2 3)","1","(2 3)"],null),new O(null,3,5,P,["(2 3)","2","(3)"],null),new O(null,3,5,P,["(3)","3","()"],null),new O(null,
3,5,P,["()","nil","()"],null)],null))),ji.d(I(["Two operations in lists: first and rest. If you know of Lisp, ","this will look familiar to you. You can also apply ","these to vectors, maps, and sets."],0))],0)),Z.d(I([S,"first and rest for all seqs",Ch.a?Ch.a(ti(new O(null,5,5,P,[new O(null,3,5,P,["seq","first","rest (seq, not list)"],null),new O(null,3,5,P,["(1 2 3)","1","(2 3)"],null),new O(null,3,5,P,["[1 2 3]","1","(2 3)"],null),new O(null,3,5,P,["{:a 1 :b 2 :c 3}","[:a 1]","([:c 3] [:b 2])"],
null),new O(null,3,5,P,["#{3 1 2}","1","(2 3)"],null)],null))):Ch.call(null,ti(new O(null,5,5,P,[new O(null,3,5,P,["seq","first","rest (seq, not list)"],null),new O(null,3,5,P,["(1 2 3)","1","(2 3)"],null),new O(null,3,5,P,["[1 2 3]","1","(2 3)"],null),new O(null,3,5,P,["{:a 1 :b 2 :c 3}","[:a 1]","([:c 3] [:b 2])"],null),new O(null,3,5,P,["#{3 1 2}","1","(2 3)"],null)],null)))],0)),Z.d(I([S,"What else can be a sequence?",Y.U?Y.U(W.a?W.a("Collections"):W.call(null,"Collections"),W.a?W.a("Strings"):
W.call(null,"Strings"),W.a?W.a("Arrays"):W.call(null,"Arrays"),W.a?W.a("file-seq"):W.call(null,"file-seq"),W.a?W.a("line-seq"):W.call(null,"line-seq"),W.a?W.a("resultset-seq"):W.call(null,"resultset-seq"),W.a?W.a("xml-seq"):W.call(null,"xml-seq"),W.a?W.a("tree-seq"):W.call(null,"tree-seq"),W.a?W.a("re-seq"):W.call(null,"re-seq"),W.a?W.a("iterator-seq"):W.call(null,"iterator-seq"),W.a?W.a("enumeration-seq"):W.call(null,"enumeration-seq"),W.a?W.a("... or whatever you want to make a seq"):W.call(null,
"... or whatever you want to make a seq")):Y.call(null,W.a?W.a("Collections"):W.call(null,"Collections"),W.a?W.a("Strings"):W.call(null,"Strings"),W.a?W.a("Arrays"):W.call(null,"Arrays"),W.a?W.a("file-seq"):W.call(null,"file-seq"),W.a?W.a("line-seq"):W.call(null,"line-seq"),W.a?W.a("resultset-seq"):W.call(null,"resultset-seq"),W.a?W.a("xml-seq"):W.call(null,"xml-seq"),W.a?W.a("tree-seq"):W.call(null,"tree-seq"),W.a?W.a("re-seq"):W.call(null,"re-seq"),W.a?W.a("iterator-seq"):W.call(null,"iterator-seq"),
W.a?W.a("enumeration-seq"):W.call(null,"enumeration-seq"),W.a?W.a("... or whatever you want to make a seq"):W.call(null,"... or whatever you want to make a seq")),ji.d(I(["Then you can use the SAME function over them."],0))],0)),Z.d(I([S,"Sequence Functions",Y.s?Y.s(W.b?W.b(U.a?U.a("Create seq:"):U.call(null,"Create seq:")," seq, vals, keys, rseq, subseq, rsubseq, lazy-seq, repeatedly, iterate, repeat, range, keep, keep-indexed"):W.call(null,U.a?U.a("Create seq:"):U.call(null,"Create seq:")," seq, vals, keys, rseq, subseq, rsubseq, lazy-seq, repeatedly, iterate, repeat, range, keep, keep-indexed"),
W.b?W.b(U.a?U.a("Content tests:"):U.call(null,"Content tests:")," seq?, distinct?, every?, not-every?, not-any?, empty?, not-empty, some"):W.call(null,U.a?U.a("Content tests:"):U.call(null,"Content tests:")," seq?, distinct?, every?, not-every?, not-any?, empty?, not-empty, some"),W.b?W.b(U.a?U.a("Get shorter:"):U.call(null,"Get shorter:")," distinct, filter, remove, take-nth, for"):W.call(null,U.a?U.a("Get shorter:"):U.call(null,"Get shorter:")," distinct, filter, remove, take-nth, for"),W.b?W.b(U.a?
U.a("Get longer:"):U.call(null,"Get longer:")," cons, conj, concat, lazy-cat, mapcat, cycle, interleave, interpose"):W.call(null,U.a?U.a("Get longer:"):U.call(null,"Get longer:")," cons, conj, concat, lazy-cat, mapcat, cycle, interleave, interpose"),W.b?W.b(U.a?U.a("Pull out members:"):U.call(null,"Pull out members:")," first, ffirst, nfirst, second, nth, when-first, last, rand-nth"):W.call(null,U.a?U.a("Pull out members:"):U.call(null,"Pull out members:")," first, ffirst, nfirst, second, nth, when-first, last, rand-nth"),
W.b?W.b(U.a?U.a("Get changed:"):U.call(null,"Get changed:")," conj, concat, distinct, flatten, group- by, partition, partition-all, partition-by, split- at, split-with, filter, remove, replace, shuffle"):W.call(null,U.a?U.a("Get changed:"):U.call(null,"Get changed:")," conj, concat, distinct, flatten, group- by, partition, partition-all, partition-by, split- at, split-with, filter, remove, replace, shuffle")):Y.call(null,W.b?W.b(U.a?U.a("Create seq:"):U.call(null,"Create seq:")," seq, vals, keys, rseq, subseq, rsubseq, lazy-seq, repeatedly, iterate, repeat, range, keep, keep-indexed"):
W.call(null,U.a?U.a("Create seq:"):U.call(null,"Create seq:")," seq, vals, keys, rseq, subseq, rsubseq, lazy-seq, repeatedly, iterate, repeat, range, keep, keep-indexed"),W.b?W.b(U.a?U.a("Content tests:"):U.call(null,"Content tests:")," seq?, distinct?, every?, not-every?, not-any?, empty?, not-empty, some"):W.call(null,U.a?U.a("Content tests:"):U.call(null,"Content tests:")," seq?, distinct?, every?, not-every?, not-any?, empty?, not-empty, some"),W.b?W.b(U.a?U.a("Get shorter:"):U.call(null,"Get shorter:"),
" distinct, filter, remove, take-nth, for"):W.call(null,U.a?U.a("Get shorter:"):U.call(null,"Get shorter:")," distinct, filter, remove, take-nth, for"),W.b?W.b(U.a?U.a("Get longer:"):U.call(null,"Get longer:")," cons, conj, concat, lazy-cat, mapcat, cycle, interleave, interpose"):W.call(null,U.a?U.a("Get longer:"):U.call(null,"Get longer:")," cons, conj, concat, lazy-cat, mapcat, cycle, interleave, interpose"),W.b?W.b(U.a?U.a("Pull out members:"):U.call(null,"Pull out members:")," first, ffirst, nfirst, second, nth, when-first, last, rand-nth"):
W.call(null,U.a?U.a("Pull out members:"):U.call(null,"Pull out members:")," first, ffirst, nfirst, second, nth, when-first, last, rand-nth"),W.b?W.b(U.a?U.a("Get changed:"):U.call(null,"Get changed:")," conj, concat, distinct, flatten, group- by, partition, partition-all, partition-by, split- at, split-with, filter, remove, replace, shuffle"):W.call(null,U.a?U.a("Get changed:"):U.call(null,"Get changed:")," conj, concat, distinct, flatten, group- by, partition, partition-all, partition-by, split- at, split-with, filter, remove, replace, shuffle"))],
0)),Z.d(I([S,"More Sequence Functions",Y.s?Y.s(W.b?W.b(U.a?U.a("Head-items:"):U.call(null,"Head-items:")," take, take-while, butlast, drop-last"):W.call(null,U.a?U.a("Head-items:"):U.call(null,"Head-items:")," take, take-while, butlast, drop-last"),W.b?W.b(U.a?U.a("Tail-items:"):U.call(null,"Tail-items:")," rest, nthrest, next, fnext, nnext, drop, drop-while, take-last, nthnext"):W.call(null,U.a?U.a("Tail-items:"):U.call(null,"Tail-items:")," rest, nthrest, next, fnext, nnext, drop, drop-while, take-last, nthnext"),
W.b?W.b(U.a?U.a("Rearrange:"):U.call(null,"Rearrange:")," reverse, sort, sort-by, compare"):W.call(null,U.a?U.a("Rearrange:"):U.call(null,"Rearrange:")," reverse, sort, sort-by, compare"),W.b?W.b(U.a?U.a("Process items:"):U.call(null,"Process items:")," map, pmap, map-indexed, mapcat, for, replace, seque"):W.call(null,U.a?U.a("Process items:"):U.call(null,"Process items:")," map, pmap, map-indexed, mapcat, for, replace, seque"),W.b?W.b(U.a?U.a("Construct collection:"):U.call(null,"Construct collection:"),
" zipmap, into, reduce, reductions, set, vec, into-array, to-array-2d, frequencies"):W.call(null,U.a?U.a("Construct collection:"):U.call(null,"Construct collection:")," zipmap, into, reduce, reductions, set, vec, into-array, to-array-2d, frequencies"),W.b?W.b(U.a?U.a("Force evaluation:"):U.call(null,"Force evaluation:")," doseq, dorun, doall, realized?"):W.call(null,U.a?U.a("Force evaluation:"):U.call(null,"Force evaluation:")," doseq, dorun, doall, realized?")):Y.call(null,W.b?W.b(U.a?U.a("Head-items:"):
U.call(null,"Head-items:")," take, take-while, butlast, drop-last"):W.call(null,U.a?U.a("Head-items:"):U.call(null,"Head-items:")," take, take-while, butlast, drop-last"),W.b?W.b(U.a?U.a("Tail-items:"):U.call(null,"Tail-items:")," rest, nthrest, next, fnext, nnext, drop, drop-while, take-last, nthnext"):W.call(null,U.a?U.a("Tail-items:"):U.call(null,"Tail-items:")," rest, nthrest, next, fnext, nnext, drop, drop-while, take-last, nthnext"),W.b?W.b(U.a?U.a("Rearrange:"):U.call(null,"Rearrange:")," reverse, sort, sort-by, compare"):
W.call(null,U.a?U.a("Rearrange:"):U.call(null,"Rearrange:")," reverse, sort, sort-by, compare"),W.b?W.b(U.a?U.a("Process items:"):U.call(null,"Process items:")," map, pmap, map-indexed, mapcat, for, replace, seque"):W.call(null,U.a?U.a("Process items:"):U.call(null,"Process items:")," map, pmap, map-indexed, mapcat, for, replace, seque"),W.b?W.b(U.a?U.a("Construct collection:"):U.call(null,"Construct collection:")," zipmap, into, reduce, reductions, set, vec, into-array, to-array-2d, frequencies"):
W.call(null,U.a?U.a("Construct collection:"):U.call(null,"Construct collection:")," zipmap, into, reduce, reductions, set, vec, into-array, to-array-2d, frequencies"),W.b?W.b(U.a?U.a("Force evaluation:"):U.call(null,"Force evaluation:")," doseq, dorun, doall, realized?"):W.call(null,U.a?U.a("Force evaluation:"):U.call(null,"Force evaluation:")," doseq, dorun, doall, realized?"))],0)),Z.d(I([S,"Sequences: Code + Data",Fh.a?Fh.a("All of those sequences can be used with all of those functions!!"):Fh.call(null,
"All of those sequences can be used with all of those functions!!")],0)),Z.d(I([S,"Lazy sequences",X.a?X.a("Sequences in Clojure are lazy, which delays evaluation until necessary."):X.call(null,"Sequences in Clojure are lazy, which delays evaluation until necessary."),li.d(I(["(def integers (range))\n(take 10 integers)\n; \x3d\x3e (0 1 2 3 4 5 6 7 8 9)\n\n(def gregory-leibniz\n  (map first\n       (iterate\n        (fn [[pi div]]\n          [(if (\x3d 1 (mod div 4))\n             (+ pi (/ 4 div))\n             (- pi (/ 4 div)))\n           (+ div 2)]) [0.0 1])))\n(first (drop 100 gregory-leibniz))\n; \x3d\x3e ???"],
0))],0)),Z.d(I([S,"What do we have for game night?",X.a?X.a("Your friends have brought over a bunch of games for game night. They are in three collections. Find out what the distinct games they have brought are, with no overlap."):X.call(null,"Your friends have brought over a bunch of games for game night. They are in three collections. Find out what the distinct games they have brought are, with no overlap."),Y.c?Y.c(W.a?W.a(V.a?V.a('("Clue" "Monopoly" "Catan")'):V.call(null,'("Clue" "Monopoly" "Catan")')):
W.call(null,V.a?V.a('("Clue" "Monopoly" "Catan")'):V.call(null,'("Clue" "Monopoly" "Catan")')),W.a?W.a(V.a?V.a('["Catan" "7 Wonders" "Pandemic" "Risk"]'):V.call(null,'["Catan" "7 Wonders" "Pandemic" "Risk"]')):W.call(null,V.a?V.a('["Catan" "7 Wonders" "Pandemic" "Risk"]'):V.call(null,'["Catan" "7 Wonders" "Pandemic" "Risk"]')),W.a?W.a(V.a?V.a('#{"7 Wonders" "Robot Turtles" "Clue"}'):V.call(null,'#{"7 Wonders" "Robot Turtles" "Clue"}')):W.call(null,V.a?V.a('#{"7 Wonders" "Robot Turtles" "Clue"}'):
V.call(null,'#{"7 Wonders" "Robot Turtles" "Clue"}'))):Y.call(null,W.a?W.a(V.a?V.a('("Clue" "Monopoly" "Catan")'):V.call(null,'("Clue" "Monopoly" "Catan")')):W.call(null,V.a?V.a('("Clue" "Monopoly" "Catan")'):V.call(null,'("Clue" "Monopoly" "Catan")')),W.a?W.a(V.a?V.a('["Catan" "7 Wonders" "Pandemic" "Risk"]'):V.call(null,'["Catan" "7 Wonders" "Pandemic" "Risk"]')):W.call(null,V.a?V.a('["Catan" "7 Wonders" "Pandemic" "Risk"]'):V.call(null,'["Catan" "7 Wonders" "Pandemic" "Risk"]')),W.a?W.a(V.a?V.a('#{"7 Wonders" "Robot Turtles" "Clue"}'):
V.call(null,'#{"7 Wonders" "Robot Turtles" "Clue"}')):W.call(null,V.a?V.a('#{"7 Wonders" "Robot Turtles" "Clue"}'):V.call(null,'#{"7 Wonders" "Robot Turtles" "Clue"}'))),X.a?X.a("Bonus: Make a function that can take a collection of collections of games and return the distinct games in the collection."):X.call(null,"Bonus: Make a function that can take a collection of collections of games and return the distinct games in the collection.")],0))],0))};function vi(){return gi.d(I([S,"Extras",Z.d(I([S,"Concurrency",Y.b?Y.b(W.a?W.a("Futures"):W.call(null,"Futures"),W.a?W.a("Promises"):W.call(null,"Promises")):Y.call(null,W.a?W.a("Futures"):W.call(null,"Futures"),W.a?W.a("Promises"):W.call(null,"Promises"))],0)),Z.d(I([S,"Program Organization - Leiningen",Y.a?Y.a(W.b?W.b("Automates Clojure projects. Like Make for Clojure.",W.b?W.b("Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,
"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar"))):W.call(null,"Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,
"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")))):W.call(null,"Automates Clojure projects. Like Make for Clojure.",
W.b?W.b("Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),
W.a?W.a("lein uberjar"):W.call(null,"lein uberjar"))):W.call(null,"Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,
"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar"))))):Y.call(null,W.b?W.b("Automates Clojure projects. Like Make for Clojure.",W.b?W.b("Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):
W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar"))):W.call(null,"Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,
"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")))):W.call(null,"Automates Clojure projects. Like Make for Clojure.",W.b?W.b("Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?
W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar"))):W.call(null,"Common commands",Y.o?Y.o(W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),
W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")):Y.call(null,W.a?W.a("lein new app my-app"):W.call(null,"lein new app my-app"),W.a?W.a("lein repl"):W.call(null,"lein repl"),W.a?W.a("lein test"):W.call(null,"lein test"),W.a?W.a("lein run"):W.call(null,"lein run"),W.a?W.a("lein uberjar"):W.call(null,"lein uberjar")))))],0)),Z.d(I([S,"Program Organization - Namespaces",
Y.k?Y.k(W.b?W.b(V.a?V.a("ns"):V.call(null,"ns")," creates namespace and loads, aliases what you need"):W.call(null,V.a?V.a("ns"):V.call(null,"ns")," creates namespace and loads, aliases what you need"),W.a?W.a("At top of file"):W.call(null,"At top of file"),W.b?W.b("Refers all of ",V.a?V.a("clojure.core"):V.call(null,"clojure.core")):W.call(null,"Refers all of ",V.a?V.a("clojure.core"):V.call(null,"clojure.core")),W.b?W.b("Imports all of ",V.a?V.a("java.lang"):V.call(null,"java.lang")):W.call(null,
"Imports all of ",V.a?V.a("java.lang"):V.call(null,"java.lang"))):Y.call(null,W.b?W.b(V.a?V.a("ns"):V.call(null,"ns")," creates namespace and loads, aliases what you need"):W.call(null,V.a?V.a("ns"):V.call(null,"ns")," creates namespace and loads, aliases what you need"),W.a?W.a("At top of file"):W.call(null,"At top of file"),W.b?W.b("Refers all of ",V.a?V.a("clojure.core"):V.call(null,"clojure.core")):W.call(null,"Refers all of ",V.a?V.a("clojure.core"):V.call(null,"clojure.core")),W.b?W.b("Imports all of ",
V.a?V.a("java.lang"):V.call(null,"java.lang")):W.call(null,"Imports all of ",V.a?V.a("java.lang"):V.call(null,"java.lang"))),li.d(I(["(ns foo.bar.baz-quuz)"],0))],0)),Z.d(I([S,"Program Organization - Namespaces",li.d(I(["(ns my-ns\n  (:require clojure.set))\n\n(clojure.set/union #{1 2} #{2 3 4}) \n;;\x3d\x3e #{1 2 3 4}\n\n(ns my-ns\n  (:require clojure.set :as set))\n\n(set/union #{1 2} #{2 3 4}) \n;;\x3d\x3e #{1 2 3 4}"],0))],0))],0))};function wi(){return gi.d(I([S,"Modeling Data",Z.d(I([S,"Modeling Board Games",ji.d(I(["Let's model some well-known board games. ","We won't use classes and objects. Instead we'll use collections."],0))],0)),Z.d(I([S,"Clue",li.d(I(['{:name "Clue"\n :min-num-players   3\n :max-num-players   6\n :min-age           8\n :subdomain         "Family Games"\n :categories        ["Bluffing" "Deduction" "Murder/Mystery"]\n}'],0)),ji.d(I(["Map with keywords and values.\n","http://boardgamegeek.com/"],0))],0)),
Z.d(I([S,"Monopoly",li.d(I(['{:name "Monopoly"\n :min-num-players   2\n :max-num-players   8 \n :min-age           8\n :subdomain         "Family Games"\n :categories        ["Economic" "Negotiation"]\n}'],0))],0)),Z.d(I([S,"Candy Land",li.d(I(['{:name "Candy Land"\n :min-num-players   2 \n :max-num-players   4 \n :min-age           3 \n :subdomain         "Children\'s Games"\n :categories        ["Children\'s Game" "Racing"]\n}'],0))],0)),Z.d(I([S,"Settlers of Catan",li.d(I(['{:name "The Settlers of Catan"\n :min-num-players   3 \n :max-num-players   4 \n :min-age           10 \n :subdomain         "Strategy Games"\n :categories        ["Civilization" "Negotiation"]\n}'],
0))],0)),Z.d(I([S,"Diplomacy",li.d(I(['{:name "Diplomacy"\n :min-num-players   2 \n :max-num-players   7 \n :min-age           12 \n :subdomain         "Strategy Games"\n :categories        ["Bluffing" "Negotiation" "Political" "Post-Napoleonic"]\n}'],0))],0)),Z.d(I([S,"Board Games",li.d(I(['(def clue {:name "Clue" ...})\n(def monopoly {:name "Monopoly" ...})\n;; etc\n\n(def board-games #{clue monopoly candy-land apples-to-apples\n                   settlers-of-catan dominion netrunner risk})\n \n;; and, oh, so many more'],
0)),ji.d(I(["Use a set to hold the board games. Why? What about ordering?\n",";; comment"],0))],0)),Z.d(I([S,"Board Game Modeling",X.a?X.a("Create a model for your favorite board game."):X.call(null,"Create a model for your favorite board game."),X.a?X.a("Define vars for each game and add to the board-games set."):X.call(null,"Define vars for each game and add to the board-games set."),X.a?X.a("Bonus: Model a game player."):X.call(null,"Bonus: Model a game player.")],0)),Z.d(I([S,"Where is my object?",
li.d(I(['(def dorian \n  {:first           "Dorian"\n   :last            "Hayes"\n   :age             12\n   :fav-categories  ["Fantasy" "Humor"]\n   :type            "Player"})'],0))],0))],0))};function xi(){return gi.d(I([S,"State",Z.d(I([S,"Simplifying State",Y.b?Y.b(W.a?W.a("There is state in Clojure."):W.call(null,"There is state in Clojure."),W.a?W.a("It is just managed in a sane way"):W.call(null,"It is just managed in a sane way")):Y.call(null,W.a?W.a("There is state in Clojure."):W.call(null,"There is state in Clojure."),W.a?W.a("It is just managed in a sane way"):W.call(null,"It is just managed in a sane way"))],0)),Z.d(I([S,"Clojure Reference Types",Y.k?Y.k(W.a?W.a("Refs - coordinated, synchronous"):
W.call(null,"Refs - coordinated, synchronous"),W.a?W.a("Atoms - uncoordinated, synchronous"):W.call(null,"Atoms - uncoordinated, synchronous"),W.a?W.a("Agents - asynchronous"):W.call(null,"Agents - asynchronous"),W.a?W.a("Vars - named and interned in a namespace"):W.call(null,"Vars - named and interned in a namespace")):Y.call(null,W.a?W.a("Refs - coordinated, synchronous"):W.call(null,"Refs - coordinated, synchronous"),W.a?W.a("Atoms - uncoordinated, synchronous"):W.call(null,"Atoms - uncoordinated, synchronous"),
W.a?W.a("Agents - asynchronous"):W.call(null,"Agents - asynchronous"),W.a?W.a("Vars - named and interned in a namespace"):W.call(null,"Vars - named and interned in a namespace"))],0)),Z.d(I([S,"Monopoly Refs",li.d(I(['(def bank (ref 0))\n(def bank-props (ref #{"Baltic" "Park Place" "Boardwalk"}))\n(def player (ref [{:money 1500\n                   :props #{}}]))\n\n@bank\n;\x3d\x3e 0\n@bank-props\n;\x3d\x3e #{"Baltic" "Boardwalk" "Park Place"}\n@player\n;\x3d\x3e [{:money 1500, :props #{}}]\n \n(defn buy-property\n  [prop-name cost player-num]\n  (dosync \n    (alter bank + cost)\n    (alter player update-in [player-num :money] - cost)\n    (alter bank-props disj prop-name)\n    (alter player update-in [player-num :props] conj prop-name)))\n\n(buy-property "Baltic" 200 0)\n\n@bank\n;\x3d\x3e 200\n@bank-props\n;\x3d\x3e #{"Boardwalk" "Park Place"}\n@player\n;\x3d\x3e [{:money 1300, :props #{"Baltic"}}]'],
0))],0)),Z.d(I([S,"Atoms of Catan",li.d(I(["(def player1 (atom {:brick 0 :lumber 1 :wool 1 :grain 0 :ore 0}))\n(def player2 (atom {:brick 1 :lumber 0 :wool 1 :grain 0 :ore 0}))\n(def player3 (atom {:brick 1 :lumber 0 :wool 0 :grain 2 :ore 0}))\n\n(swap! player1 update-in [:lumber] inc)\n(swap! player2 update-in [:grain] + 2)\n(swap! player3 update-in [:grain] inc)\n\n@player1\n;\x3d\x3e {:brick 0, :lumber 2, :wool 1, :grain 0, :ore 0}\n@player2\n;\x3d\x3e {:brick 1, :lumber 0, :wool 1, :grain 2, :ore 0}\n@player3\n;\x3d\x3e {:brick 1, :lumber 0, :wool 0, :grain 3, :ore 0}"],
0))],0)),Z.d(I([S,"Diplomacy Agents",li.d(I(['(def p1 (agent []))\n(def p2 (agent []))\n\n@p1\n;\x3d\x3e []\n@p2\n;\x3d\x3e []\n\n(send p1 conj [:A "Hol-Bel"] [:A "Kie-Hol"] [:A "Smy-Arm"] [:A "Bud-Ser"] [:A "Tun-Wes"] [:F "Nap-Tys"] [:F "Por-Spa"])\n(send p2 conj [:F "Nwy-StP"] [:F "Nth-Nwy"] [:A "Edi-Nth"] [:A "Ruh-Bur"] [:A "Bul-Rum"] [:A "Con-Bul"] [:F "Tri-Bud"] [:A "Wes-Mid"] [:F "TyS-Lyo"])\n\n@p1\n;\x3d\x3e [[:A "Hol-Bel"] [:A "Kie-Hol"] [:A "Smy-Arm"] [:A "Bud-Ser"] [:A "Tun-Wes"] [:F "Nap-Tys"] [:F "Por-Spa"]]\n@p2\n;\x3d\x3e [[:F "Nwy-StP"] [:F "Nth-Nwy"] [:A "Edi-Nth"] [:A "Ruh-Bur"] [:A "Bul-Rum"] [:A "Con-Bul"] [:F "Tri-Bud"] [:A "Wes-Mid"] [:F "TyS-Lyo"]]'],
0))],0)),Z.d(I([S,"Board Game Vars",li.d(I(["(ns games)\n\n(def clue { ... })\n;\x3d\x3e #'games/clue\n\n(def monopoly { ... })\n;\x3d\x3e #'games/monopoly\n\n(def board-games #{ ... })\n;\x3d\x3e #'games/board-games\n\n(defn suggest-game [games min-age] ... )\n;\x3d\x3e #'games/suggest-game"],0))],0)),Z.d(I([S,"Shall we play a game?",X.b?X.b("Demonstrate the gameplay of Go Fish using the Clojure ref ","reference type."):X.call(null,"Demonstrate the gameplay of Go Fish using the Clojure ref ","reference type."),
X.b?X.b("BONUS: Implement the gameplay of your favorite game ","using the appropriate Clojure reference type."):X.call(null,"BONUS: Implement the gameplay of your favorite game ","using the appropriate Clojure reference type.")],0))],0))};function yi(){ai();zh.b?zh.b(yh.b?yh.b(ke,new O(null,2,5,P,[Ih.s?Ih.s(Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css):Ih.call(null,Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css),Ih.k?Ih.k(Qg,"stylesheet",Q,"style.css"):Ih.call(null,Qg,"stylesheet",Q,"style.css")],null)):yh.call(null,ke,new O(null,2,5,P,[Ih.s?Ih.s(Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css):Ih.call(null,Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css),Ih.k?Ih.k(Qg,"stylesheet",Q,"style.css"):
Ih.call(null,Qg,"stylesheet",Q,"style.css")],null)),xh.b?xh.b(ke,function(){var a=pi(),b=ni(),c=ui(),d=wi(),e=si(),g=oi(),h=qi(),l=xi(),m=ri(),n=vi();return ii.d(I([Ig,"simple",a,b,c,d,e,g,h,l,m,n],0))}()):xh.call(null,ke,function(){var a=pi(),b=ni(),c=ui(),d=wi(),e=si(),g=oi(),h=qi(),l=xi(),m=ri(),n=vi();return ii.d(I([Ig,"simple",a,b,c,d,e,g,h,l,m,n],0))}())):zh.call(null,yh.b?yh.b(ke,new O(null,2,5,P,[Ih.s?Ih.s(Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css):Ih.call(null,Qg,"stylesheet",
Fg,"text/css",Q,window._hoplon_main_css),Ih.k?Ih.k(Qg,"stylesheet",Q,"style.css"):Ih.call(null,Qg,"stylesheet",Q,"style.css")],null)):yh.call(null,ke,new O(null,2,5,P,[Ih.s?Ih.s(Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css):Ih.call(null,Qg,"stylesheet",Fg,"text/css",Q,window._hoplon_main_css),Ih.k?Ih.k(Qg,"stylesheet",Q,"style.css"):Ih.call(null,Qg,"stylesheet",Q,"style.css")],null)),xh.b?xh.b(ke,function(){var a=pi(),b=ni(),c=ui(),d=wi(),e=si(),g=oi(),h=qi(),l=xi(),m=ri(),n=vi();return ii.d(I([Ig,
"simple",a,b,c,d,e,g,h,l,m,n],0))}()):xh.call(null,ke,function(){var a=pi(),b=ni(),c=ui(),d=wi(),e=si(),g=oi(),h=qi(),l=xi(),m=ri(),n=vi();return ii.d(I([Ig,"simple",a,b,c,d,e,g,h,l,m,n],0))}()));return Th()}var zi=["tailrecursion","hoplon","app_pages","_simplicity_deck_DOT_html","hoploninit"],Ai=this;zi[0]in Ai||!Ai.execScript||Ai.execScript("var "+zi[0]);for(var Bi;zi.length&&(Bi=zi.shift());)zi.length||void 0===yi?Ai=Ai[Bi]?Ai[Bi]:Ai[Bi]={}:Ai[Bi]=yi;